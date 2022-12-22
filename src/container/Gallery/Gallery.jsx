import React, { useRef } from "react";
import {
  BsInstagram,
  BsArrowLeftShort,
  BsArrowRightShort,
} from "react-icons/bs";

import { SubHeading } from "../../components";
import { images } from "../../constants";
import "./Gallery.css";

const galleryImgs = [
  images.gallery01,
  images.gallery02,
  images.gallery03,
  images.gallery04,
];

const Gallery = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;

    if (direction === "left") {
      current.scrollLeft -= 300;
    } else {
      current.scrollLeft += 300;
    }
  };

  return (
    <div class="app__gallery flex__center">
      <div class="app__gallery-content">
        <SubHeading title="Instagram" />
        <h1 class="headtext__cormorant">Photo Gallery</h1>
        <p class="p__opensans" style={{ color: "#AAA", marginTop: "2rem" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat
          mattis ipsum turpis elit elit scelerisque egestas mu.
        </p>
        <button type="button" class="custom__button">
          View More
        </button>
      </div>
      <div class="app__gallery-images">
        <div class="app__gallery-images_container" ref={scrollRef}>
          {galleryImgs.map((image, index) => (
            <div
              class="app__gallery-images_card flex__center"
              key={`gallery_image-${index + 1}`}
            >
              <img src={image} alt="gallery" />
              <BsInstagram class="gallery__image-icon" />
            </div>
          ))}
        </div>
        <div class="app__gallery-images_arrows">
          <BsArrowLeftShort
            class="gallery__arrow-icon"
            onClick={() => scroll("left")}
          />
          <BsArrowRightShort
            class="gallery__arrow-icon"
            onClick={() => scroll("right")}
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
