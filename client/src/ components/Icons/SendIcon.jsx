import React from "react";

function SendIcon({ className = "h-6 w-6 ml-2 transform rotate-90" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      className={className}
      viewBox="0 0 20 20"
    >
      <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"></path>
    </svg>
  );
}

export default SendIcon;
