import React, { Component } from "react";
import axios from "axios";

class Generator extends Component {
  constructor() {
    super();
    this.state = {
      allMemes: [],
      randomMeme: "",
      topText: "",
      bottomText: ""
    };
    this.getAllMemes = this.getAllMemes.bind(this);
    this.getRandomMeme = this.getRandomMeme.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.saveMeme = this.saveMeme.bind(this);
  }

  componentDidMount() {
    this.getAllMemes();
  }

  getAllMemes() {
    axios
      .get("https://api.imgflip.com/get_memes")
      .then(({ data }) => {
        const allMemes = data.data.memes.map(meme => meme.url);
        this.setState({ allMemes });
      })
      .catch(err => console.log(err));
  }

  getRandomMeme() {
    const randomIndex = Math.floor(Math.random() * this.state.allMemes.length);
    this.setState({ randomMeme: this.state.allMemes[randomIndex] });
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  saveMeme() {
    this.props.setMyMeme(
      this.state.randomMeme,
      this.state.topText,
      this.state.bottomText
    );
    this.setState({
      randomMeme: "",
      topText: "",
      bottomText: ""
    });
  }

  render() {
    return (
      <div className="container">
        <button
          className="btn btn-primary d-block mb-2 mx-auto"
          onClick={this.getRandomMeme}
        >
          Get Random Meme
        </button>
        <form>
          <input
            type="text"
            name="topText"
            placeholder="Top Text"
            value={this.state.topText}
            onChange={this.handleChange}
          />
          <br></br>
          <input
            type="text"
            name="bottomText"
            placeholder="Bottom Text"
            value={this.state.bottomText}
            onChange={this.handleChange}
          />
        </form>
        <div className="thumbnail text-center">
          <img
            id="meme-img"
            src={this.state.randomMeme}
            alt=""
            className="mx-auto d-block"
          />

          <h1 className="text-white caption1">{this.state.topText}</h1>
          <h1 className="text-white caption2">{this.state.bottomText}</h1>
        </div>
        <button
          className="btn btn-primary d-block m-auto"
          onClick={this.saveMeme}
        >
          Save Meme
        </button>
      </div>
    );
  }
}

export default Generator;
