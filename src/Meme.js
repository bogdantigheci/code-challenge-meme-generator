import React, { Component } from "react";

class Meme extends Component {
  componentDidMount() {
    const canvas = this.refs.canvas;
    const ctx = canvas.getContext("2d");
    const img = this.refs.image;

    img.onload = () => {
      ctx.drawImage(img, 0, 0);
      ctx.font = "40px Courier";
      ctx.fillStyle = "rgb(255, 255, 255)";
      ctx.fillText(this.props.topText, 5, 100);
      ctx.fillText(this.props.bottomText, 5, 300);
    };
  }
  handleDownloadPng = () => {
    var canvas = document.getElementById("canvas");
    var link = document.createElement("a");
    link.download = "meme.png";
    link.href = canvas.toDataURL("image/png");
    link.click();
  };
  handleDownloadJpg = () => {
    var canvas = document.getElementById("canvas");
    var link = document.createElement("a");
    link.download = "meme.jpg";
    link.href = canvas.toDataURL("image/jpg");
    link.click();
  };
  handleDownloadGif = () => {
    var canvas = document.getElementById("canvas");
    var link = document.createElement("a");
    link.download = "meme.gif";
    link.href = canvas.toDataURL("image/gif");
    link.click();
  };

  render() {
    return (
      <div>
        <canvas
          ref="canvas"
          id="canvas"
          width={800}
          height={600}
          style={{ maxWidth: "460px" }}
        />
        <img
          crossOrigin="anonymous"
          ref="image"
          alt="cnv"
          src={this.props.url}
          className="hidden"
        />
        <div>
          <button
            className="btn btn-primary mx-1 downbtn"
            onClick={this.handleDownloadPng}
          >
            Png
          </button>
          <button
            className="btn btn-primary mx-1 downbtn"
            onClick={this.handleDownloadJpg}
          >
            Jpg
          </button>
          <button
            className="btn btn-primary mx-1 downbtn"
            onClick={this.handleDownloadGif}
          >
            Gif
          </button>
        </div>
      </div>
    );
  }
}

export default Meme;
