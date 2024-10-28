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
  const userId = req.user.id;

  try {
    // Fetch conversations where the user is a participant
    const conversations = await Conversation.find({
      participants: userId
    }).populate({
      path: 'participants',
      select: 'name image'
    });

    // Extract conversation IDs
    const conversationIds = conversations.map(conv => conv._id);

    // Fetch the latest message and unread count for each conversation
    const conversationDetails = await Promise.all(conversationIds.map(async (conversationId) => {
      // Fetch the latest message for each conversation
      const latestMessage = await Chat.findOne({ conversationId })
        .sort({ createdAt: -1 })
        .limit(1)
        .lean();

      // Count unread messages for the conversation
      const unreadCount = await Chat.countDocuments({
        conversationId,
        read: false,
        sender: { $ne: userId }
      });

      // Find the corresponding conversation
      const conversation = conversations.find(conv => conv._id.toString() === conversationId.toString());

      return {
        ...conversation._doc, // Include conversation fields
        latestMessage,
        unreadCount
      };
    }));

    // Sort conversations by the latest message timestamp in descending order
    const sortedConversations = conversationDetails.sort((a, b) => {
      const dateA = a.latestMessage ? new Date(a.latestMessage.createdAt) : new Date(0);
      const dateB = b.latestMessage ? new Date(b.latestMessage.createdAt) : new Date(0);
      return dateB - dateA;
    });

    res.status(200).json(sortedConversations);
  } catch (error) {
    console.error('Error fetching conversations:', error);
    res.status(500).json({ message: 'Error fetching conversations', error });
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

  console.log("aagya");
  try {
    // Find a conversation that involves both the user and the participant
    const conversation = await Conversation.findOne({
      participants: { $all: [userId, participantId] }
    })
      .sort({ createdAt: -1 }) // Sort by createdAt in descending order
      .limit(100); // Limit the result to 100

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
