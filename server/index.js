const express = require("express")
const app = express();
const cookieParser = require("cookie-parser")
const cors = require("cors")
const { cloudinaryConnect } = require("./config/cloudinary")
const fileUpload = require("express-fileupload");
const dotenv = require("dotenv");
const connectDB = require("./config/db")
const bodyParser = require("body-parser")
const socketIO = require('socket.io');
const { setIO } = require('./socketIO/socket');
const http = require('http');
const Chat = require("./models/chtasSchema")


dotenv.config();

const PORT = process.env.PORT || 8080
connectDB();

const server = http.createServer(app);
const io = socketIO(server, {
  cors: {
    origin: ["http://localhost:3000", 'https://tradegyan.vercel.app', 'https://tradegyan-nine.vercel.app','https://tradegyan-nine.vercel.app'],
    methods: ["GET", "POST"],
  },
});
setIO(io);

app.use(express.json())
app.use(cookieParser());
app.use(bodyParser.json())
app.use(cors({
  origin: ['http://localhost:3000', 'https://tradegyan.vercel.app', 'https://tradegyan-nine.vercel.app','https://tradegyan-nine.vercel.app'],
  credentials: true,
}))

app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "/tmp"
  })
)

cloudinaryConnect();

app.use("/api/v1/auth", require("./routes/authRoute"))
app.use("/api/v1/image", require("./routes/imageRoute"));
app.use("/api/v1/contact", require("./routes/contactRoute"));
app.use("/api/v1/service", require("./routes/serviceRoute"));
app.use("/api/v1/admin", require("./routes/admin"));
app.use("/api/v1/chat", require('./routes/chat.js'));
app.use("/api/v1/query", require('./routes/qureryRoute.js'));
app.use("/api/v1/blog", require("./routes/blogRoute.js"))
app.use("/api/v1/order", require("./routes/orderRoutes.js"));




app.get("/", (req, res) => {
  return res.json({
    success: true,
    message: "Your server is up and running ..."
  })
})


io.on('connection', (socket) => {
  console.log('A user connected');

  socket.on('joinConversation', (conversationId) => {
    socket.join(conversationId);
  });

  socket.on('typing', (conversationId, userId) => {
    console.log("typing")
    socket.to(conversationId).emit('displayTyping', { userId });
  });



  socket.on('stopTyping', (conversationId, userId) => {
    socket.to(conversationId).emit('removeTyping', { userId });
  });

  socket.on('sendMessage', async (messageData) => {
    const { conversationId, sender, message } = messageData;

    if (message === "") {
      return
    }
    const newMessage = new Chat({ conversationId, sender, message });
    await newMessage.save();
    io.to(conversationId).emit('receiveMessage', {
      conversationId,
      sender,
      message,
    });

    io.emit('new_message', { conversationId, message });
  });

  socket.on('markMessagesAsRead', async ({ conversationId, userId }) => {
    try {
      // Mark unread messages as read for the current conversation
      await Chat.updateMany(
        { conversationId, sender: { $ne: userId }, read: false },
        { $set: { read: true } }
      );

      // Emit the message_read event to the conversation room
      io.to(conversationId).emit('message_read', { conversationId });
    } catch (error) {
      console.error('Error marking messages as read:', error);
    }
  });

  socket.on('disconnect', () => {
    console.log('User disconnected');
  });
})
server.listen(PORT, () => {
  console.log(`Server is running at port no ${PORT}`)
})
