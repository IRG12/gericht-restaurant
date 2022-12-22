import React from "react";

import SubHeading from "../SubHeading/SubHeading";
import "./Newsletter.css";

const Newsletter = () => (
  <div class="app__newsletter">
    <div class="app__newsletter-heading">
      <SubHeading title="Newsletter" />
      <h1 class="headtext__cormorant">Subscribe to Our Newsletter</h1>
      <p class="p__opensans">And Never miss latest Updates!</p>
    </div>
    <div class="app__newsletter-input flex__center">
      <input type="email" placeholder="Enter your email here..." />
      <button class="custom__button">Subscribe</button>
    </div>
  </div>
);

export default Newsletter;
