import React, { Component } from "react";
import "./App.css";
import DisplaySeasons from "./Components/DisplaySeasons/DisplaySeasons";
import Spinner from "./Components/Spinner/Spinner";

class App extends Component {
  state = { lat: null, errorMessage: "", showError: false };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (location) => {
        // console.log(location);
        const { latitude: lat } = location.coords;
        this.setState({ lat });
      },
      (err) =>
        this.setState({
          errorMessage: "Please Provide your location",
          showError: true,
        })
    );
  }
  renderContent() {
    if (!this.state.lat && !this.state.showError)
      return <Spinner message="Please allow location request" />;
    return (
      <div>
        {this.state.showError ? (
          <p>Error: {this.state.errorMessage}</p>
        ) : (
          <DisplaySeasons lat={this.state.lat} />
        )}
      </div>
    );
  }
  render() {
    return <div>{this.renderContent()}</div>;
  }
}
export default App;
