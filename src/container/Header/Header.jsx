import React from "react";

import { SubHeading } from "../../components";
import { images } from "../../constants";
import "./Header.css";

const Header = () => (
  <div class="app__header app__wrapper section__padding" id="home">
    <div class="app__wrapper_info">
      <SubHeading title={"Chase the New Flavor"} />
      <h1 class="app__header-h1">The Key to Fine Dining</h1>
      <p class="p__opensans" style={{ margin: "2rem 0" }}>
        Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat
        morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet
        tellus
      </p>
      <button type="button" class="custom__button">
        Explore Menu
      </button>
    </div>
    <div class="app__wrapper_img">
      <img src={images.welcome} alt="header img" />
    </div>
  </div>
);

export default Header;
