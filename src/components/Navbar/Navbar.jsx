import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";

import images from "../../constants/images";

import "./Navbar.css";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav class="app__navbar">
      <div class="app__navbar-logo">
        <img src={images.gericht} alt="app logo" />
      </div>
      <ul class="app__navbar-links">
        <li class="p__opensans">
          <a href="#home">Home</a>
        </li>
        <li class="p__opensans">
          <a href="#about">About</a>
        </li>
        <li class="p__opensans">
          <a href="#menu">Menu</a>
        </li>
        <li class="p__opensans">
          <a href="#awards">Awards</a>
        </li>
        <li class="p__opensans">
          <a href="#contacts">Contacts</a>
        </li>
      </ul>
      <div class="app__navbar-login">
        <a href="#login" class="p__opensans">
          Log In / Register
        </a>
        <div />
        <a href="/" class="p__opensans">
          Book Table
        </a>
      </div>
      <div class="app__navbar-smallscreen">
        <GiHamburgerMenu
          color="#fff"
          fontSize={27}
          onClick={() => setToggleMenu(true)}
        />
        {toggleMenu && (
          <div class="app__navbar-smallscreen_overlay flex_center slide-bottom">
            <MdOutlineRestaurantMenu
              fontSize={27}
              class="overlay__close"
              onClick={() => setToggleMenu(false)}
            />
            <ul class="app__navbar-smallscreen_links">
              <li class="p__opensans">
                <a href="#home">Home</a>
              </li>
              <li class="p__opensans">
                <a href="#about">About</a>
              </li>
              <li class="p__opensans">
                <a href="#menu">Menu</a>
              </li>
              <li class="p__opensans">
                <a href="#awards">Awards</a>
              </li>
              <li class="p__opensans">
                <a href="#contacts">Contacts</a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};
export default Navbar;
