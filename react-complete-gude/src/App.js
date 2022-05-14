import React, { useState } from "react";
import "./App.css";
import Person from "./person/person";
import UserInput from "./userInput/userInput";
import UserOutput from "./userOutput/userOutput";
// ------------------- state in class ----------------
// class App extends Component {
//   state = {
//     persons: [
//       { name: "Dev", age: 21 },
//       { name: "Shyam", age: 22 },
//       { name: "Hari", age: 32 },
//     ],
//   };
//   switchNameHandler = () => {
//     this.setState({
//       persons: [
//         { name: "Dev Gurung", age: 21 },
//         { name: "Shyam Bhatta", age: 22 },
//         { name: "Hari Rai", age: 32 },
//       ],
//     });
//   };
//   render() {
//     return (
//       <div className="App">
//         <h1>Hello, I am React App</h1>
//         <button onClick={this.switchNameHandler.bind(this,'Mr.dev')}>switch name</button>
//         <Person name={this.state.persons[0].name}>I love React</Person>
//         <Person name={this.state.persons[1].name} />
//         <Person name={this.state.persons[2].name} />
//       </div>
//     );
//     // return React.createElement(
//     //   "div",
//     //   null,
//     //   React.createElement("h1", { className: "App" }, "Hello, I am React App")
//     // );
//   }
// }

// export default App;

// useState hook
const app = (props) => {
  const [personState, setPersonState] = useState({
    persons: [
      { name: "Dev", age: 21 },
      { name: "Shyam", age: 22 },
      { name: "Hari", age: 32 },
    ],
  });

  const switchNameHandler = (userName) => {
    setPersonState({
      persons: [
        { name: userName, age: 21 },
        { name: "Shyam Bantawa", age: 22 },
        { name: "Hari Bahadur", age: 32 },
      ],
    });
  };

  const [UserOutputState, SetUserOutputState] = useState({
    userName: [{ name: "Dev" }, { name: "Gulsan" }],
  });

  const changeOutput = (event) => {
    SetUserOutputState({
      userName: [{ name: event.target.value }, { name: "Gulsan Gabbar" }],
    });
  };
  return (
    <div className="App">
      <h1>Hello, I am React App</h1>
      <button onClick={() => switchNameHandler("Mr.Dev")}>switch name</button>
      <Person name={personState.persons[0].name} click={switchNameHandler}>
        I love React
      </Person>
      <Person name={personState.persons[1].name} />
      <Person name={personState.persons[2].name} />
      <UserInput
        change={(e) => changeOutput(e)}
        currentName={UserOutputState.userName[0].name}
      />
      <UserOutput userName={UserOutputState.userName[0].name} />
      <UserOutput userName={UserOutputState.userName[1].name} />
    </div>
  );
};


export default app;
