import React, { useState } from "react";
import Button from "./Button";

const FriendForm = ({ onAddFriend }) => {
  const [friendName, setFriendName] = useState("");
  const [imageUrl, setImageUrl] = useState("https://i.pravatar.cc/48");
  const handleAdd = (event) => {
    event.preventDefault();
    if (!friendName || !imageUrl) {
      return;
    }
    const id = crypto.randomUUID();
    const friendObj = {
      id: id,
      name: friendName,
      image: `${imageUrl}?=${id}`,
      balance: 0,
    };
    onAddFriend(friendObj);
    setFriendName("");
    setImageUrl("https://i.pravatar.cc/48");
  };
  return (
    <form className="form-add-friend" onSubmit={handleAdd}>
      <label>Friend Name</label>
      <input
        type="text"
        value={friendName}
        onChange={(e) => setFriendName(e.target.value)}
      />
      <label>Image Url</label>
      <input
        type="text"
        value={imageUrl}
        onChange={(e) => setImageUrl(e.target.value)}
      />
      <Button>Add</Button>
    </form>
  );
};

export default FriendForm;
