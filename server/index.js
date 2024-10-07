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
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST"],
  },
});
setIO(io);

app.use(express.json())
app.use(cookieParser());
app.use(bodyParser.json())
app.use(cors({
    origin: 'http://localhost:3000',
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




app.get("/", (req, res) => {
    return res.json({
        success: true,
        message: "Your server is up and running ..."
    })
})



io.on('connection', (socket) => {
    console.log('A user connected');
  
    // Handle user joining a conversation
    socket.on('joinConversation', async (conversationId, userId) => {
      socket.join(conversationId);
    
      console.log(`User ${userId} joined conversation ${conversationId}`);
  
      // Mark messages as read when the user joins the conversation room
      try {
        await Chat.updateMany(
          { conversationId, sender: { $ne: userId }, read: false },
          { $set: { read: true } }
        );
  
        // Notify that messages have been marked as read
        io.to(conversationId).emit('message_read', { conversationId });
      } catch (error) {
        console.error('Error marking messages as read:', error);
      }
    });
  
    // Typing indicator events
    socket.on('typing', (conversationId, userId) => {
      socket.to(conversationId).emit('displayTyping', { userId });
    });
  
    socket.on('stopTyping', (conversationId, userId) => {
      socket.to(conversationId).emit('removeTyping', { userId });
    });
  
    // Handle sending a message
    socket.on('sendMessage', async (messageData) => {
      const { conversationId, sender, message } = messageData;
  
      if (message === "") return;
  
      // Save the new message to the database
      const newMessage = new Chat({ conversationId, sender, message });
      await newMessage.save();
  
      // Emit the new message to the room
      io.to(conversationId).emit('receiveMessage', {
        conversationId,
        sender,
        message,
      });
  
      // Fetch all clients in the conversation room
      const clients = await io.in(conversationId).fetchSockets();
  
      // Check if any user is in the room who is not the sender (i.e., viewing the chat)
      const isUserInRoom = clients.some(client => client.userId !== sender);
  
      // Mark the message as read if the user is still viewing the chat
      if (isUserInRoom) {
        await Chat.updateOne(
          { _id: newMessage._id },
          { $set: { read: true } }
        );
  
        io.to(conversationId).emit('message_read', { conversationId });
      }
    });
  
    // Handle marking messages as read
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
  
    // Handle user disconnecting
    socket.on('disconnect', () => {
      console.log('User disconnected');
    });
  })
server.listen(PORT, () => {
    console.log(`Server is running at port no ${PORT}`)
})
