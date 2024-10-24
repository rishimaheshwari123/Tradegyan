const express = require('express');
const router = express.Router();
const User = require('../models/authModel')
const Conversation = require('../models/conversationSchema');
const Chat = require('../models/chtasSchema');
const {auth} = require('../middleware/auth');
const { searchUsers } = require('../controllers/chats');
const mongoose = require('mongoose');
const { getIO } = require('../socketIO/socket');
const ObjectId = mongoose.Types.ObjectId;

// Create or get a conversation
router.post('/conversation', auth, async (req, res) => {
  
    const { participantId } = req.body;
    const userId = req.user.id;
  

    // console.log("participantId",participantId)
    // console.log("userId",userId)

    if (!participantId) {
      return res.status(400).json({ message: 'participantId is required.' });
    }
  
    try {
      let conversation = await Conversation.findOne({
        participants: { $all: [userId, participantId] }
      });
  
      if (!conversation) {
        conversation = new Conversation({
          participants: [userId, participantId]
        });
        await conversation.save();
      }

      res.status(200).json(conversation);
    } catch (error) {
      console.log(error)
      res.status(500).json({ message: 'Error creating or fetching conversation', error });
    }
});

const getUserConversations = async (req, res) => {
  const userId = req.user.id; // User ID as a string

  try {
    // Fetch conversations where the user is a participant
    const conversations = await Conversation.find({
      participants: userId
    }).populate({
        path: 'participants',
  select: 'name image'
    }); // Assuming participants have 'name' field

    // Extract conversation IDs
    const conversationIds = conversations.map(conv => conv._id);

    // Fetch chats related to these conversations
    const chats = await Chat.find({
      conversationId: { $in: conversationIds }
    });

    // Compute unread counts manually
    const conversationsWithUnreadCounts = conversations.map(conv => {
      const conversationChats = chats.filter(chat => chat.conversationId.toString() === conv._id.toString());
      const unreadCount = conversationChats.filter(chat => !chat.read && chat.sender.toString() !== userId).length;
      return {
        ...conv._doc, // Include conversation fields
        unreadCount
      };
    });

    res.status(200).json(conversationsWithUnreadCounts);
  } catch (error) {
    console.error('Error fetching conversations:', error); // Log the full error for debugging
    res.status(500).json({ message: 'Error fetching conversations hahah', error });
  }
};




router.get('/conversations', auth, getUserConversations);

// Get messages in a conversation
router.get('/messages/:conversationId/:receiverID', auth, async (req, res) => {
  const { conversationId, receiverID } = req.params;
  const { id: userId } = req.user; // Current user's ID


  try {
    // Fetch and sort the messages by creation time
    const messages = await Chat.find({ conversationId })
      .populate({ path: 'sender', select: "name image" })
      .sort({ createdAt: 1 });

    // Fetch the receiver's data
    const receiverData = await User.findOne({ _id: receiverID }).select("name image");
    
    // Update all unread messages to read, except for the ones sent by the current user
    await Chat.updateMany(
      { conversationId, read: false, sender: { $ne: userId } }, // Exclude user's own messages
      { $set: { read: true } }
    );

    // Respond with messages and receiver data
    res.json({ messages, receiverData });
  } catch (error) {
    console.log(error)
console.log(error)
    res.status(500).json({ message: error.message });
  }
});


// Get conversation ID between two users (logged-in user and a participant)
router.get('/conversationId/:participantId', auth, async (req, res) => {
  const userId = req.user.id; // Current logged-in user ID
  const { participantId } = req.params; // The participant's ID from the request parameters

  console.log("aagya")
  try {
    // Find a conversation that involves both the user and the participant
    const conversation = await Conversation.findOne({
      participants: { $all: [userId, participantId] }
    });

    if (!conversation) {
      return res.status(404).json({ message: 'No conversation found between the users.' });
    }

    // Respond with the conversation ID
    res.status(200).json({ conversationId: conversation._id });
  } catch (error) {
    console.error('Error fetching conversation:', error);
    res.status(500).json({ message: 'Error fetching conversation', error });
  }
});


router.get('/serach',searchUsers)

module.exports = router;
