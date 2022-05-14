import React, { Component } from "react";
// import Radium, { StyleRoot } from "radium";
import styles from "./App.module.css";
import Person from "./person/person";
class App extends Component {
  constructor(props) {
    console.log("App.js:Constructor");
    super(props);
  }
  state = {
    persons: [
      { id: "0001", name: "Gulsan", age: 22 },
      { id: "0002", name: "Dev", age: 20 },
    ],
    showBox: false,
  };
  static getDerivedStateFromProps(props, state) {
    console.log("App.js: getDerivedStateFromProps()");
    return state;
  }
  componentDidMount() {
    console.log("App.js:componentDidMount");
  }
  deletePersonHadnler = (personIndex) => {
    const updatedPersons = [...this.state.persons];
    updatedPersons.splice(personIndex, 1);
    this.setState({ persons: updatedPersons });
  };
  contentHandler = () => {
    const status = this.state.showBox;
    this.setState({ showBox: !status });
  };
  render() {
    console.log("App.js:Render");
    let box = null;
    let btnStyle = "";
    if (this.state.showBox) {
      console.log("App.js:child component rendered");
      box = (
        <div>
          {this.state.persons.map((person, i) => {
            return (
              <Person
                userName={person.name}
                userAge={person.age}
                delete={() => this.deletePersonHadnler(i)}
                key={person.id}
              />
            );
          })}
        </div>
      );
      btnStyle = styles.red;
    }
    let headingStyles = [];
    if (this.state.persons.length > 1) headingStyles.push(styles.red);
    if (this.state.persons.length <= 1) headingStyles.push(styles.bold);
    return (
      <div>
        {console.log("App.js:child component rendering...")}
        <h1 className={headingStyles.join(" ")}>
          please click below to show and hide the box!!!
        </h1>
        <button className={btnStyle} onClick={this.contentHandler}>
          try me
        </button>
        {box}
      </div>
    );
  }
}
export default App;
// export default Radium(App);
