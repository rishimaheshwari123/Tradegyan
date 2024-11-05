import React, { useState } from 'react';
import ConversationList from './SelectUser';
import Chat from './Chats';
import { useSelector } from 'react-redux';

const ChatsApp = () => {
  const [selectedUser, setSelectedUser] = useState(null);
  const [selectedConversation, setSelectedConversation] = useState(null);
  const { user } = useSelector(state => state.auth);

  const handleUserSelect = (userId) => {
    console.log(userId)
    setSelectedUser(userId);
    setSelectedConversation(null); // Clear conversation selection when a user is selected
  };

  const handleConversationSelect = (conversation) => {
    setSelectedConversation(conversation);
    setSelectedUser(null); // Clear user selection when a conversation is selected
  };

  const closeChat = () => {
    setSelectedConversation(null);
    setSelectedUser(null); // Optionally clear user selection as well
  };

  const getReceiverId = () => {
    if (selectedConversation) {
      return selectedConversation.participants.find(id => id !== user._id);
    }
  
    return selectedUser;
  };

  return (
    <div className="flex h-screen  bg-gradient-to-r from-gray-200 to-gray-400">
      <div className="w-screen border-r p-4">
       
        <ConversationList onUserSelect={handleUserSelect} />
      </div>
      <div className=" p-4">
        {getReceiverId() && (
          <Chat receiverId={getReceiverId()} onClose={closeChat} idReciever={selectedUser}  />

        )}
      </div>
    </div>
  );
};

export default ChatsApp;
