import React, { useState } from "react";
import moment from "moment";
import NoDataIcon from "./Icons/ NoDataIcon";
import SendIcon from "./Icons/SendIcon";
import ChatMessage from "./ChatMessage";

const ChatWindow = ({ friendId, messages, onSendMessage }) => {
  const [message, setMessage] = useState("");

  const handleSend = () => {
    if (message.trim()) {
      onSendMessage(friendId, {
        text: message,
        id: Date.now(),
        sentByCurrentUser: true,
      });
      setMessage("");
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="flex flex-col flex-1">
      <div className="flex-1 p-4 overflow-y-auto pt-6">
        {messages.length > 0 ? (
          messages.map((msg) => (
            <ChatMessage
              key={msg.id}
              message={msg}
              isSentByCurrentUser={msg.sentByCurrentUser}
            />
          ))
        ) : (
          <div className="flex flex-col items-center justify-center h-full text-center">
            <NoDataIcon className="w-1/2 h-1/2 mb-4 opacity-40" />
            <p className="text-gray-500 font-semibold">
              No messages yet. Start the conversation!
            </p>
          </div>
        )}
      </div>

      <div className="flex p-2 border-t bg-gray-50 items-center">
        <input
          type="text"
          autoFocus
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyUp={handleKeyPress}
          placeholder="Write your message!"
          className="w-full focus:outline-none focus:placeholder-gray-400 text-gray-600 placeholder-gray-600 bg-gray-200 rounded-md py-3"
        />
        <button
          onClick={handleSend}
          className="flex p-3 ml-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          Send
          <SendIcon />
        </button>
      </div>
    </div>
  );
};

export default ChatWindow;
