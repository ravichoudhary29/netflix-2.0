import React from "react";
import "./Nav.css";
import { useState, useEffect } from "react";
function Nav() {
  const [show, handleshow] = useState(false);
  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      handleshow(true);
    } else {
      handleshow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener("scroll", transitionNavBar);
  }, []);

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <div className="nav__contents">
        <img
          className="nav__logo"
          src="https://toppng.com/uploads/preview/netflix-logo-png-download-11660600814vkfgjh8swu.png"
          alt="netflix-logo"
        />
        <img
          className="nav__avatar"
          src="https://www.w3schools.com/howto/img_avatar.png"
          alt="avatar-image"
        />
      </div>
    </div>
  );
}

export default Nav;
