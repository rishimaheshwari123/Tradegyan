const bcrypt = require("bcryptjs");
const authModel = require("../models/authModel");
const jwt = require("jsonwebtoken");
const Chat = require("../models/chtasSchema");
const Conversation = require("../models/conversationSchema");


// const registerCtrl = async (req, res) => {
//   try {
//     const { name, email, password, location } = req.body;

//     if (!name || !email || !password || !location) {
//       return res.status(403).send({
//         success: false,
//         message: "All Fields are required",
//       });
//     }

//     const existingUser = await authModel.findOne({ email });
//     if (existingUser) {
//       return res.status(400).json({
//         success: false,
//         message: "User already exists. Please sign in to continue.",
//       });
//     }

//     const hashedPassword = await bcrypt.hash(password, 10);
//     const user = await authModel.create({
//       name,
//       email,
//       location,
//       password: hashedPassword,
//     });

//     const token = jwt.sign(
//       { email: user.email, id: user._id, role: user.role },
//       process.env.JWT_SECRET
//     );

//     // Set cookie for token
//     const options = {
//       expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
//       httpOnly: true,
//     };
//     res.cookie("token", token, options);




//     return res.status(200).json({
//       success: true,
//       token,
//       user,
//       message: "User registered successfully",
//     });
//   } catch (error) {
//     console.error(error);
//     return res.status(500).json({
//       success: false,
//       message: "User cannot be registered. Please try again.",
//     });
//   }
// };



// const registerCtrl = async (req, res) => {
//   try {
//     const { name, email, contactNumber, whatsappNumber, password } = req.body;

//     // Ensure all fields are provided
//     if (!name || !email || !contactNumber || !whatsappNumber || !password) {
//       return res.status(403).send({
//         success: false,
//         message: "All fields are required",
//       });
//     }

//     // Check if the user already exists
//     const existingUser = await authModel.findOne({ email });
//     if (existingUser) {
//       return res.status(400).json({
//         success: false,
//         message: "User already exists. Please sign in to continue.",
//       });
//     }

//     // Hash the password
//     const hashedPassword = await bcrypt.hash(password, 10);

//     // Create new user with all the provided fields
//     const user = await authModel.create({
//       name,
//       email,
//       contactNumber,
//       whatsappNumber,
//       image:`https://api.dicebear.com/5.x/initials/svg?seed=${name}`,

//       password: hashedPassword,
//     });

//     // Generate JWT token
//     const token = jwt.sign(
//       { email: user.email, id: user._id, role: user.role },
//       process.env.JWT_SECRET
//     );

//     // Set cookie for token
//     const options = {
//       expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000), // Cookie expires in 3 days
//       httpOnly: true,
//     };
//     res.cookie("token", token, options);

//     // Respond with success
//     return res.status(200).json({
//       success: true,
//       token,
//       user,
//       message: "User registered successfully",
//     });
//   } catch (error) {
//     console.error(error);
//     return res.status(500).json({
//       success: false,
//       message: "User cannot be registered. Please try again.",
//     });
//   }
// };


const registerCtrl = async (req, res) => {
  try {
    const { name, email, contactNumber, whatsappNumber, password } = req.body;

    // Ensure all fields are provided
    if (!name || !email || !contactNumber || !whatsappNumber || !password) {
      return res.status(403).send({
        success: false,
        message: "All fields are required",
      });
    }

    // Check if the user already exists
    const existingUser = await authModel.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "User already exists. Please sign in to continue.",
      });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user
    const user = await authModel.create({
      name,
      email,
      contactNumber,
      whatsappNumber,
      image: `https://api.dicebear.com/5.x/initials/svg?seed=${name}`,
      password: hashedPassword,
    });

    // Generate JWT token
    const token = jwt.sign(
      { email: user.email, id: user._id, role: user.role },
      process.env.JWT_SECRET
    );

    // Set cookie for token
    const options = {
      expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000), // 3 days
      httpOnly: true,
    };
    res.cookie("token", token, options);

    // Company ID (TradeGyan)
    const companyId = "66fa5fd1cf3671d1e9cec9ec";

    // Check if a conversation exists between the user and the company
    let conversation = await Conversation.findOne({
      participants: { $all: [user._id, companyId] },
    });

    // If no conversation exists, create one
    if (!conversation) {
      conversation = new Conversation({
        participants: [user._id, companyId],
      });
      await conversation.save();
    }

    // Create a default welcome message from the company
    const welcomeMessage = new Chat({
      conversationId: conversation._id,
      sender: companyId, // Company is the sender
      message: `Welcome to TradeGyan, ${user.name}! We're glad to have you.`,
      read: false,
      createdAt: new Date(),
    });

    await welcomeMessage.save(); // Save the welcome message

    // Respond with success
    return res.status(200).json({
      success: true,
      token,
      user,
      conversation, // Include conversation details
      message: "User registered successfully and conversation created",
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "User cannot be registered. Please try again.",
    });
  }
};

const loginCtrl = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: `Please Fill up All the Required Fields`,
      });
    }

    const user = await authModel.findOne({ email });

    if (!user) {
      return res.status(401).json({
        success: false,
        message: `User is not Registered with Us Please SignUp to Continue`,
      });
    }

    if (await bcrypt.compare(password, user.password)) {
      const token = jwt.sign(
        { email: user.email, id: user._id, role: user.role },
        process.env.JWT_SECRET
      );

      user.token = token;
      user.password = undefined;
      const options = {
        httpOnly: true,
      };
      res.cookie("token", token, options).status(200).json({
        success: true,
        token,
        user,
        message: `User Login Success`,
      });
    } else {
      return res.status(401).json({
        success: false,
        message: `Password is incorrect`,
      });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: `Login Failure Please Try Again`,
    });
  }
};





module.exports = { registerCtrl, loginCtrl };
