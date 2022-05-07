import React from "react";
import "./person.css";
const Person = (props) => {
  return (
    <div className="person">
      <h1 onClick={props.click}>
        I am a {props.name} and I am {Math.ceil(Math.random() * 20)} years old.
      </h1>
      <p>{props.children}</p>
    </div>
  );
};

export default Person;
