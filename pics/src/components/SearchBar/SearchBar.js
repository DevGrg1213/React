import React, { Component } from "react";
import "./SearchBar.css";

class SearchBar extends Component {
  state = { term: "" };

  onInputChange(event) {
    console.log(event.target.value);
  }

  onSearchSubmit = (event) => {
    event.preventDefault();

    this.props.onSubmit(this.state.term);
  };
  render() {
    return (
      <form onSubmit={this.onSearchSubmit}>
        <h1>Search Image</h1>
        <input
          type="text"
          value={this.state.term}
          placeholder="e.g cars"
          onChange={(e) => this.setState({ term: e.target.value })}
        />
      </form>
    );
  }
}

export default SearchBar;
