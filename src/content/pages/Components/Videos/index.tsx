import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import saveAs from "file-saver";
import Player from "./reactPlayer";
import "src/styles.css";

class App extends React.Component {
  state = {
    open: false
  };

  onOpenModal = () => {
    this.setState(prevState => ({
      open: !prevState.open
    }));
  };

  // don't do this
  downloadVideo = () => {
    let link = "https://vimeo.com/291715535";
    axios({
      url: link, //your url
      method: "GET",
      responseType: "blob" // important
    }).then(response => {
      const url = window.URL.createObjectURL(new Blob([response.data]));
      var blob = new Blob([response.data], {
        type: "text/plain;charset=utf-8"
      });
      saveAs(blob, "hello world.txt");
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.onOpenModal}>Play Video </button>
        <Player open={this.state.open} toggleModal={this.onOpenModal} />
        <button onClick={this.downloadVideo}>Download </button>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
