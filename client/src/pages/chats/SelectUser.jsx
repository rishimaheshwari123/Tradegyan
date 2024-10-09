import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { io } from 'socket.io-client';

const ConversationList = ({  onUserSelect }) => {
  const [conversations, setConversations] = useState([]);
  const { token } = useSelector(state => state.auth);
  const { user } = useSelector(state => state.auth);
  const [socket, setSocket] = useState(null);
const BASE_URL = 'https://tradegyan.mahitechnocrafts.in'
const [conversationId, setConversationId] = useState(null);


  const fetchConversations = async () => {
    try {
      const { data } = await axios.get(`${BASE_URL}/api/v1/chat/conversations`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      console.log(data)
      setConversations(data);
    } catch (error) {
      console.error('Error fetching conversations:', error);
    }
  };



  useEffect(() => {
    // Connect to Socket.IO server
    const newSocket = io("https://tradegyan.mahitechnocrafts.in", {
      query: { token }, // Pass the auth token if required
    });
    console.log(token)
    setSocket(newSocket);

    // Clean up on component unmount
    return () => newSocket.close();
  }, []);

  useEffect(() => {
    fetchConversations();
  }, [token]);

  useEffect(() => {
    if (socket) {

      // Listen for message read events
      socket.on('message_read', () => {
        fetchConversations(); // Update conversations when messages are read
      });

      // Listen for new message events
      socket.on('new_message', () => {
        fetchConversations(); // Update conversations when new messages are received
      });
      socket.on('markMessagesAsRead', () => {
        fetchConversations(); // Update conversations when new messages are received
      });
    }
  }, [socket]);


  const fetchConversationId = async (participantId) => {
    try {
     // Assuming you're storing the token in localStorage
      const response = await axios.get(`https://tradegyan.mahitechnocrafts.in/api/v1/chat/conversationId/${participantId}`, {
        headers: { Authorization: `Bearer ${token}` }
      });
     if(response?.data?.conversationId){

       setConversationId(response.data.conversationId);
     }
      console.log(conversationId) // Set conversation ID from response
    } catch (err) {
      console.error('Error fetching conversation ID:', err);
    }
  }

  const onClickUser = async (id) => {
    onUserSelect(id);
 
   await fetchConversationId(id)
 
    socket.emit("markMessagesAsRead", { conversationId, userId:user?._id });

    console.log(conversationId)
    fetchConversations(); // Refresh the conversations after a user is selected
  };

  return (
    <div className="p-4 bg-gray-50 rounded-lg shadow-md w-full">
      <h2 className="text-xl font-semibold mb-4">Conversations</h2>
      {conversations.map(conversation => (
        <div
          key={conversation._id}
          className="flex items-center p-3 border-b border-gray-200 cursor-pointer hover:bg-gray-100 rounded-lg"
        >
          {conversation.participants
            .filter(p => p._id !== user._id) // Exclude current user
            .map(participant => (
              <div
                key={participant._id}
                className={`flex items-center space-x-3 ${conversation.unreadCount > 0 ? 'font-bold' : ''}`}
                onClick={() => onClickUser(participant._id)}
              >
                <img
                  src={participant.image} // Replace with a default avatar if image is not available
                  alt={participant.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div className="flex-1">
                  <div className="text-lg font-medium">{participant.name}</div>
                  <div className="text-sm text-gray-600">
                    {conversation.unreadCount > 1 ? (
                      <span className="text-red-500">2+ Unread Messages</span>
                    ) : conversation.unreadCount === 1 ? (
                      <span className="text-red-500">1 Unread Message</span>
                    ) : (
                      <span>No Unread Messages</span>
                    )}
                  </div>
                </div>
              </div>
            ))}
        </div>
      ))}
    </div>
  );
};

export default ConversationList;
