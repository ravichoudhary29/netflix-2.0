import React from "react";
import "./Nav.css";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
function Nav() {
  const [show, handleshow] = useState(false);
  const navigate = useNavigate();

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
          onClick={() => navigate("/")}
          className="nav__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
          alt="netflix-logo"
        />
        <img
          onClick={() => navigate("/profile")}
          className="nav__avatar"
          src="https://www.w3schools.com/howto/img_avatar.png"
          alt="avatar-image"
        />
      </div>
    </div>
  );
}

export default Nav;
