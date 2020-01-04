import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => (
  <div className="navBar navbar text-white ">
    <img
      className="navBar-img"
      src="http://www.pngall.com/wp-content/uploads/2016/05/Trollface.png"
      alt="Problem?"
    />
    <span>Your Random Meme Generator</span>
    <span>
      <Link to="/">Meme Generator</Link>
    </span>
    <span c>
      <Link to="mymemes">My Memes</Link>
    </span>
  </div>
);

export default NavBar;
