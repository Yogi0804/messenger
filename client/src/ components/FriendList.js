import React from "react";

const friends = [
  { id: "1", name: "Shradha" },
  { id: "2", name: "Yash" },
];

const FriendList = ({ selectedFriend, setSelectedFriend }) => {
  return (
    <div className="w-1/2 md:w-1/4 text-xs md:text-lg md:text-slate-700 md:p-4 p-2 border-r bg-white overflow-y-auto">
      <h2 className="text-lg font-semibold mb-4">Friends</h2>
      {friends.map((friend) => (
        <div
          key={friend.id}
          className={`p-2 md:p-4 mb-2 cursor-pointer rounded transition-colors ${
            selectedFriend === friend.id
              ? "bg-blue-500 text-white"
              : "bg-gray-100 hover:bg-gray-200"
          }`}
          onClick={() => setSelectedFriend(friend.id)}
        >
          {friend.name}
        </div>
      ))}
    </div>
  );
};

export default FriendList;
