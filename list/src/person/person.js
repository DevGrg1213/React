import React, { Component } from "react";
import styles from "./person.module.css";
class Person extends Component {
  render() {
    return (
      <div className={styles.person} onClick={this.props.delete}>
        <h1>Hi, React</h1>
        <p>
          I am {this.props.userName} and my age is {this.props.userAge}
        </p>
      </div>
    );
  }
}

export default Person;
