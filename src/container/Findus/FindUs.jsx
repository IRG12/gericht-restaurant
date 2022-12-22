import React from "react";

import { SubHeading } from "../../components";
import { images } from "../../constants";

const FindUs = () => (
  <div class="app__bg app__wrapper section__padding" id="contact">
    <div class="app__wrapper_info">
      <SubHeading title="Contact" />
      <h1 class="headtext__cormorant" style={{ marginBottom: "3rem" }}>
        Find Us
      </h1>
      <div class="app__wrapper-content">
        <p class="p__opensans">
          Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 7SG
        </p>
        <p class="p__opensans" style={{ color: "#DCCA87", margin: "2rem" }}>
          Opening Hours
        </p>

        <p class="p__opensans">Mon - Fri: 10:00 am - 02:00 am</p>
        <p class="p__opensans">Sat - Sun: 10:00 am - 03:00 am</p>
      </div>
      <button class="custom__button" style={{ marginTop: "2rem" }}>
        Visit Us
      </button>
    </div>
    <div class="app__wrapper_img">
      <img src={images.findus} alt="find us" />
    </div>
  </div>
);

export default FindUs;
