import React from "react";
const UserInput = (props) => {
  const inputStyle = {
    border: "2px solid #000",
    padding: "5px",
  };
  return (
    <input
      style={inputStyle}
      type="text"
      onChange={props.change}
      value={props.currentName}
    />
  );
};

export default UserInput;
