import React from "react";
import "./about.scss";

export default function About() {


  return (
    <div className="about" id="about">
      <div className="left">
        <div className="back"></div>
        <div className="front">
          <img src="assets/IMGss.jpg" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="contant">
          <h1>Hi, I'm Shubham. Nice To meet You.</h1>
          <p>
            I like code things from scratch, and enjoy bringing ideas to life in
            the browser. I'm quietly confident, naturally curious, and
            perpetually working on improving my chops one problem at a time.
          </p>
        </div>
        
      </div>
    </div>
  );
}
