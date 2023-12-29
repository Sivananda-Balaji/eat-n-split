import React, { useState } from "react";
import Button from "./Button";

const SplitBillForm = ({ selectedFriend, onBillSplit }) => {
  const [bill, setBill] = useState("");
  const [userBill, setUserBill] = useState("");
  const [paying, setPaying] = useState("user");
  const friendBill = bill - userBill;
  const handleUserBill = (event) => {
    setUserBill(event.target.value > bill ? userBill : event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const amount = paying === "user" ? friendBill : -userBill;
    onBillSplit(amount);
  };
  return (
    <form className="form-split-bill" onSubmit={handleSubmit}>
      <h2>Split a bill with {selectedFriend.name}</h2>
      <label>Bill value</label>
      <input
        type="text"
        value={bill}
        onChange={(e) => setBill(Number(e.target.value))}
      />
      <label>Your expense</label>
      <input type="text" value={userBill} onChange={handleUserBill} />
      <label>{selectedFriend.name}'s expense</label>
      <input type="text" disabled value={friendBill} />
      <label>Who is paying the bill?</label>
      <select value={paying} onChange={(e) => setPaying(e.target.value)}>
        <option value="user">You</option>
        <option value="friend">{selectedFriend.name}</option>
      </select>
      <Button>Split Bill</Button>
    </form>
  );
};

export default SplitBillForm;
