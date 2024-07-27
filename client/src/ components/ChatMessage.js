import moment from "moment";
import React from "react";

function ChatMessage({ message, isSentByCurrentUser }) {
  return (
    <div
      className={`flex items-end ${isSentByCurrentUser ? "justify-end" : ""}`}
      style={{
        margin: isSentByCurrentUser ? "2rem 2rem 0 0" : "",
      }}
    >
      {!isSentByCurrentUser && (
        <img
          src="https://lh3.googleusercontent.com/ogw/AF2bZyj9XFtB_DLshaVAN-m8gp91OZUSQ1j23EuZ2OViwbUfOw=s64-c-mo"
          alt="Profile"
          className="w-6 h-6 md:w-8 md:h-8 rounded-full order-1"
        />
      )}
      <div
        className={`flex flex-col space-y-2 text-xs max-w-xs mx-2 ${
          isSentByCurrentUser ? "order-1 items-end" : "order-2 items-start"
        }`}
      >
        <div className="py-2">
          <span
            className={`text-xs md:text-base px-4 py-2 rounded-lg inline-block ${
              isSentByCurrentUser
                ? "rounded-br-none bg-blue-600 text-white"
                : "rounded-bl-none bg-gray-300 text-gray-600"
            }`}
          >
            {message.text}

            <div className="text-xs text-gray-400">
              {moment(message.id).format("h:mm:a")}
            </div>
          </span>
        </div>
      </div>
      {isSentByCurrentUser && (
        <img
          src="https://lh3.googleusercontent.com/a/ACg8ocK0-EvWAk6D9JS3pTst0kumfPK2oXInlNBW_Sl-0MMD4mLUTco=s120-c-rg-br100"
          alt="My profile"
          className="w-6 h-6 md:w-8 md:h-8 rounded-full order-2"
        />
      )}
    </div>
  );
}

export default ChatMessage;
