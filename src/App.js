import React, { Component } from "react";
import axios from "axios";
import "./App.css";

class App extends Component {
  state = {
    title: "Random Advice Generator",
    advice: ""
  };

  componentDidMount() {
    this.fetchDevice();
  }

  fetchDevice = () => {
    axios
      .get("https://api.adviceslip.com/advice")
      .then(response => {
        const { advice } = response.data.slip;
        this.setState({ advice });
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    return (
      <div className="app">
        <div className="card">
          <h1 className="title">{this.state.title}</h1>
          <h2 className="heading">{this.state.advice}</h2>
          <button onClick={this.fetchDevice} className="button">
            <span>CLICK ME FOR NEW ADVICE!</span>
          </button>
        </div>
      </div>
    );
  }
}

export default App;
