import React from "react";
import Friend from "./Friend";

const FriendList = ({ friends, onSelect, selectedFriend }) => {
  const renderFriends = friends.map((friend) => {
    return (
      <Friend
        friend={friend}
        key={friend.id}
        onSelect={onSelect}
        selectedFriend={selectedFriend}
      />
    );
  });
  return <ul>{renderFriends}</ul>;
};

export default FriendList;
