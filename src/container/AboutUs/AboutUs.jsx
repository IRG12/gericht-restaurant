import React from "react";

import { images } from "../../constants";
import "./AboutUs.css";

const AboutUs = () => (
  <div class="app__aboutus app__bg flex__center section__padding" id="about">
    <div class="app__aboutus-overlay flex__center">
      <img src={images.G} alt="g letter" />
    </div>
    <div class="app__aboutus-content flex__center">
      <div class="app__aboutus-content_about">
        <h1 class="headtext__cormorant">About Us</h1>
        <img src={images.spoon} alt="about_spoon" class="spoon__img" />
        <p class="p__opensans">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra
          adipiscing ultrices vulputate posuere tristique. In sed odio nec
          aliquet eu proin mauris et.
        </p>
        <button type="button" class="custom__button">
          Know More
        </button>
      </div>
      <div class="app__aboutus-content_knife flex__center">
        <img src={images.knife} alt="about_knife" />
      </div>

      <div class="app__aboutus-content_history">
        <h1 class="headtext__cormorant">Our History</h1>
        <img src={images.spoon} alt="about_spoon" class="spoon__img" />
        <p class="p__opensans">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra
          adipiscing ultrices vulputate posuere tristique. In sed odio nec
          aliquet eu proin mauris et.
        </p>
        <button type="button" class="custom__button">
          Know More
        </button>
      </div>
    </div>
  </div>
);

export default AboutUs;
