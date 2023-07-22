import React from "react";
import { useState } from "react";
import images from "../images";
import { Button } from "@mui/material";
import styled from "@emotion/styled";

const Imgslider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="slider">
      <img src={images[currentIndex]} alt={`Image ${currentIndex + 1}`} />
      <p>
      <Button variant="contained" onClick={handlePrev}>Previous</Button>
      <Button variant="contained" onClick={handleNext}>Next</Button>
      </p>
    </div>
  );
};

export default Imgslider;
