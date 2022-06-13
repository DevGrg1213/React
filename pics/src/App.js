import React, { Component } from "react";
import Unsplash from "./api/Unsplash";
import ImageList from "./components/ImageList/ImageList";

import SearchBar from "./components/SearchBar/SearchBar";

class App extends Component {
  state = { images: [] };

  onSearchSubmit = async (term) => {
    const response = await Unsplash.get("/search/photos", {
      params: { query: term },
    });
    this.setState({ images: response.data.results });
  };
  render() {
    return (
      <div>
        <SearchBar onSubmit={this.onSearchSubmit} />
        Found:{this.state.images.length} results
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;
