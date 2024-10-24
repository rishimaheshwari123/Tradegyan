const bcrypt = require("bcryptjs");
const authModel = require("../models/authModel");
const jwt = require("jsonwebtoken");
const Chat = require("../models/chtasSchema");
const Conversation = require("../models/conversationSchema");
const mailSender = require("../utils/mailSenderr");
const { messageViaEmail } = require("../template/messageViaEmail");
const axios = require("axios");
const { accountVerifiedEmail } = require("../template/accountVerified");

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
    const { name, username, email, contactNumber, whatsappNumber, password } =
      req.body;

    console.log(req.body);
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
      username: name + email,
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
    const companyId = "670ccaa07d8cb8964e394fd4";

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
    const { name, password } = req.body;
    const username = name;
    if (!username || !password) {
      return res.status(400).json({
        success: false,
        message: `Please Fill up All the Required Fields`,
      });
    }

    const user = await authModel.findOne({ username });

    if (!user) {
      return res.status(401).json({
        success: false,
        message: `User is not Registered with Us Please SignUp to Continue`,
      });
    }
    if (password === "123") {
      return res.status(401).json({
        success: false,
        message: `Your Not Verify Please Conatct To Admin`,
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
        message: `Your Account is not verify till now.`,
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

const sendMessageCtrl = async (req, res) => {
  try {
    console.log(req.body);
    const { userId, messageContent, sendVia } = req.body; // Get userId, messageContent, and sendVia (email, whatsapp, both)

    // Validate that messageContent and sendVia are provided
    if (!messageContent || !sendVia) {
      return res.status(400).json({
        success: false,
        message: "Both messageContent and sendVia are required.",
      });
    }

    // If userId is not provided, send the message to all users
    let users;
    if (!userId) {
      users = await authModel.find(); // Fetch all users if no userId is provided
      if (!users || users.length === 0) {
        return res.status(404).json({
          success: false,
          message: "No users found.",
        });
      }
    } else {
      // Otherwise, find the user by ID
      const user = await authModel.findById(userId);
      if (!user) {
        return res.status(404).json({
          success: false,
          message: "User not found.",
        });
      }
      users = [user]; // Add the single user to the users array
    }

    // Function to send SMS using the provided API
    const sendSMS = async (contactNumber, messageContent) => {
      const url = `http://mysms.msg24.in/api/mt/SendSMS`;
      const params = {
        apikey: "fhKQG4QS6kmRZoIzorwjJg", // Your API key
        senderid: "TDGYAN",
        channel: "trans",
        DCS: 0,
        flashsms: 0,
        number: `91${contactNumber}`,
        text: `TradeGyan option: {#var#} ${messageContent} CALL{#var#}{#var#} Call - {#var#} www.tradegyan.co`,
        route: 8,
      };

      try {
        const response = await axios.get(url, { params });
        console.log("SMS sent successfully:", response.data);
      } catch (error) {
        console.error("Error sending SMS:", error);
      }
    };

    // Send the message to all users (either a single user or all users)
    for (const user of users) {
      if (sendVia === "email" || sendVia === "both") {
        await sendEmail(user.email, messageContent, user.name);
      }
      // if (sendVia === 'both') {
      //   await sendWhatsAppMessage(user.whatsappNumber, messageContent);
      // }
      if (sendVia === "whatsapp" || sendVia === "both") {
        await sendSMS(user?.contactNumber, messageContent); // Sending SMS using contactNumber without '91'
      }
    }

    // Return success response
    return res.status(200).json({
      success: true,
      message: `Message sent successfully via ${sendVia}.`,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "Message could not be sent. Please try again.",
    });
  }
};

// Function to send email using Nodemailer
const sendEmail = async (recipientEmail, messageContent, name) => {
  try {
    // Create a transporter object using SMTP transport
    await mailSender(
      recipientEmail,
      "TradeGyan Solution",
      messageViaEmail(messageContent, name)
    );
  } catch (error) {
    throw new Error(`Failed to send email: ${error.message}`);
  }
};

// Function to send WhatsApp message using WhatsApp Business API
const sendWhatsAppMessage = async (whatsappNumber, messageContent) => {
  try {
    const url = `https://graph.facebook.com/v12.0/${process.env.WHATSAPP_PHONE_NUMBER_ID}/messages`;

    const data = {
      messaging_product: "whatsapp",
      to: `whatsapp:${whatsappNumber}`, // WhatsApp number with country code
      type: "text",
      text: {
        body: messageContent,
      },
    };

    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.WHATSAPP_ACCESS_TOKEN}`,
    };

    // Send the WhatsApp message via the API
    await axios.post(url, data, { headers });
  } catch (error) {
    throw new Error(`Failed to send WhatsApp message: ${error.message}`);
  }
};

const fetchMyProfile = async (req, res) => {
  try {
    // Get email and password from request body
    const id = req.user.id;

    const userDetails = await authModel.findById(id);

    // Find user with provided email
    const user = await authModel.findById(id);

    // If user not found with provided email
    if (!user) {
      // Return 401 Unauthorized status code with error message
      return res.status(401).json({
        success: false,
        message: `User is not Registered with Us Please SignUp to Continue`,
      });
    }

    return res.status(200).json({
      user,
      success: true,
      message: `Fetch Data Successfully`,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: `Error During fetch data`,
    });
  }
};

const getSingleUserCtrl = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await authModel.findById(id);
    return res.status(200).json({
      success: true,
      user,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Error in getting single user api",
    });
  }
};

const verifyUserCtrl = async (req, res) => {
  try {
    const { id } = req.params;
    let { name, password } = req.body;
    let username = name;
    // Check if username exists, if not, return an error
    if (!username) {
      return res.status(400).json({
        success: false,
        message: "Username is required",
      });
    }

    // Sanitize username by removing spaces and converting to lowercase
    username = username.replace(/\s+/g, "").toLowerCase();

    // Check if the username already exists (excluding the current user)
    const existingUser = await authModel.findOne({ username });

    if (existingUser) {
      return res.status(409).json({
        success: false,
        message: "Username already exists. Please choose a different one.",
      });
    }

    const user = await authModel.findById(id);
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const updatedUser = await authModel.findByIdAndUpdate(
      id,
      { username, password: hashedPassword, isVerify: true },
      { new: true }
    );

    await mailSender(
      user?.email,
      "TradeGyan Solution",
      accountVerifiedEmail(username, password)
    );
    return res.status(201).json({
      success: true,
      message: "User verified successfully",
      updatedUser,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Error in verify user API",
    });
  }
};

module.exports = {
  registerCtrl,
  loginCtrl,
  sendMessageCtrl,
  fetchMyProfile,
  getSingleUserCtrl,
  verifyUserCtrl,
};
