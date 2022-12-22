import React from "react";

import { SubHeading } from "../../components";
import { images, data } from "../../constants";
import "./Laurels.css";

const AwardCard = ({ award: { imgUrl, title, subtitle } }) => (
  <div class="app__laurels_awards-card">
    <img src={imgUrl} alt="award" />
    <div class="app__laurels_awards-card_content">
      <p class="p__cormorant" style={{ color: "#CCCA87" }}>
        {title}
      </p>
      <p class="p__cormorant">{subtitle}</p>
    </div>
  </div>
);

const Laurels = () => (
  <div class="app__bg app__wrapper section__padding" id="awards">
    <div class="app__wrapper_info">
      <SubHeading title="Awards & recognition" />
      <h1 class="headtext__cormorant">Our Laurels</h1>

      <div class="app__laurels_awards">
        {data.awards.map((award) => (
          <AwardCard award={award} key={award.title} />
        ))}
      </div>
    </div>
    <div class="app__wrapper_img">
      <img src={images.laurels} alt="laurels" />
    </div>
  </div>
);

export default Laurels;
