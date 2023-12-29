import { useState } from "react";
import "./App.css";
import Button from "./components/Button";
import FriendForm from "./components/FriendForm";
import FriendList from "./components/FriendsList";
import SplitBillForm from "./components/SplitBillForm";
const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];
function App() {
  const [friendForm, setFriendForm] = useState(false);
  const [friends, setFriends] = useState(initialFriends);
  const [selectedFriend, setSelectedFriend] = useState(null);

  const handleFriendForm = () => {
    setFriendForm((prev) => !prev);
  };
  const handleSelection = (friend) => {
    setSelectedFriend((prev) =>
      prev && prev.id === friend.id ? null : friend
    );
    setFriendForm(false);
  };
  const handleAddFriend = (friendObj) => {
    setFriendForm(false);
    setFriends([...friends, friendObj]);
  };
  const handleBillSplit = (amount) => {
    const updatedFriends = friends.map((friend) => {
      if (friend.id === selectedFriend.id) {
        return { ...friend, balance: friend.balance + amount };
      } else {
        return friend;
      }
    });
    setFriends(updatedFriends);
    setSelectedFriend(null);
  };
  return (
    <>
      <h1 className="app-heading">Dine Together, Split Happily</h1>
      <div className="app">
        <div className="sidebar">
          <FriendList
            friends={friends}
            onSelect={handleSelection}
            selectedFriend={selectedFriend}
          />
          {friendForm && <FriendForm onAddFriend={handleAddFriend} />}
          <Button onBtnClick={handleFriendForm}>
            {!friendForm ? "Add Friend" : "Close"}
          </Button>
        </div>
        {selectedFriend && (
          <SplitBillForm
            selectedFriend={selectedFriend}
            onBillSplit={handleBillSplit}
            key={selectedFriend.id}
          />
        )}
      </div>
    </>
  );
}

export default App;
