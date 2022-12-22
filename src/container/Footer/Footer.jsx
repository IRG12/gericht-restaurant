import React from "react";
import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";

import { FooterOverlay, Newsletter } from "../../components";
import { images } from "../../constants";
import "./Footer.css";

const Footer = () => (
  <div class="app__footer section__padding" id="login">
    <FooterOverlay />
    <Newsletter />

    <div class="app__footer-links">
      <div class="app__footer-links_contact">
        <h1 class="app__footer-headtext">Contact Us</h1>
        <p class="p__opensans">9 W 53rd St, New York, NY 10019, USA</p>
        <p class="p__opensans">+1 212-344-1230</p>
        <p class="p__opensans">+1 212-555-1230</p>
      </div>
      <div class="app__footer-links_logo">
        <img src={images.gericht} alt="footer_logo" />
        <p class="p__opensans">
          "The best way to find yourself is to lose yourself in the service of
          others.”
        </p>
        <img
          src={images.spoon}
          alt="spoon"
          class="spoon_img"
          style={{ marginTop: 15 }}
        />
        <div class="app__footer-links_icons">
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
        </div>
      </div>
      <div class="app__footer-links_work">
        <h1 class="app__footer-headtext">Working Hours</h1>
        <p class="p__opensans">Monday-Friday:</p>
        <p class="p__opensans">08:00am - 12:00am</p>
        <p class="p__opensans">Saturday-Sunday:</p>
        <p class="p__opensans">07:00am - 11:00pm</p>
      </div>
    </div>
    <div class="footer__copyright">
      <p class="p__opensans">2021 Gerícht. All Rights reserved.</p>
    </div>
  </div>
);

export default Footer;
