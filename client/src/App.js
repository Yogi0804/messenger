import React, { useState } from "react";
import ChatWindow from "./ components/ChatWindow";
import FriendList from "./ components/FriendList";
import ManageChatsIcon from "./ components/Icons/ManageChatsIcon";

const App = () => {
  const [selectedFriend, setSelectedFriend] = useState(null);
  const [messages, setMessages] = useState({});

  const handleSendMessage = (friendId, message) => {
    setMessages((prevMessages) => ({
      ...prevMessages,
      [friendId]: [...(prevMessages[friendId] || []), message],
    }));
  };

  return (
    <div className="flex h-screen">
      <FriendList
        selectedFriend={selectedFriend}
        setSelectedFriend={setSelectedFriend}
      />
      {selectedFriend ? (
        <ChatWindow
          friendId={selectedFriend}
          messages={messages[selectedFriend] || []}
          onSendMessage={handleSendMessage}
        />
      ) : (
        <div className="flex-1 flex flex-col items-center justify-center">
          <ManageChatsIcon className="w-1/2 h-1/2 mb-4 opacity-45" />
          <p className="text-gray-500 font-semibold">
            Select a friend to start chatting
          </p>
        </div>
      )}
    </div>
  );
};

export default App;
