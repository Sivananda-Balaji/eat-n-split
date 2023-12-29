import React from "react";

const Button = ({ children, onBtnClick }) => {
  return (
    <button className="button" onClick={onBtnClick}>
      {children}
    </button>
  );
};

export default Button;
