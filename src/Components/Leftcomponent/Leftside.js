import "./Leftside.css";
import React from "react";
import img from "../../Img/20294366_959186364224254_897572492560946227_n.jpg";
import { RxGithubLogo } from "react-icons/rx";

const Leftside = () => {
  return (
    <div className="left">
      <img src={img} alt="" />
      <h3>Emmanuel Ekete</h3>
      <div className="Socials">
        <a href="https://github.com/ceasar28">
          <i className="Icon">
            <RxGithubLogo />
          </i>
        </a>
      </div>
    </div>
  );
};

export default Leftside;
