import React from "react";
import "./userOutput.css";
const UserOutput = (props) => {
  return (
    <div className="userOutput">
      <p>Hi, I am {props.userName}</p>
      <p>I am learning React</p>
    </div>
  );
};

export default UserOutput;
