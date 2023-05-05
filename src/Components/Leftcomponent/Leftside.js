import "./Leftside.css";
import React from "react";
// import img from "../../Img/20294366_959186364224254_897572492560946227_n.jpg";
import profilePics from "../../Img/profile image.jfif";
import { RxGithubLogo } from "react-icons/rx";
import { AiFillTwitterCircle } from "react-icons/ai";
import { SiLinkedin } from "react-icons/si";

const Leftside = () => {
  return (
    <div className="left">
      <img src={profilePics} alt="" />
      <h2>Emmanuel Ekete</h2>
      <div className="Socials">
        <a href="https://github.com/ceasar28">
          <i className="Icon">
            <RxGithubLogo />
          </i>
        </a>
        <a href="https://twitter.com/eketeUg">
          <i className="Icon">
            <AiFillTwitterCircle />
          </i>
        </a>
        <a href="https://www.linkedin.com/in/emmanuel-ekete-0656a214b">
          <i className="Icon">
            <SiLinkedin />
          </i>
        </a>
      </div>
    </div>
  );
};

export default Leftside;
