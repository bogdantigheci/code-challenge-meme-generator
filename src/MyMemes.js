import React from "react";
import Meme from "./Meme";

const MyMemes = props => (
  <div className="d-flex flex-row flex-wrap ">
    {props.myMemes.map((meme, i) => (
      <Meme
        key={i}
        id={i}
        url={meme.url}
        topText={meme.topText}
        bottomText={meme.bottomText}
      />
    ))}
  </div>
);

export default MyMemes;
