import React from "react";
import Slider from "./Slider";
import Cards from "./Cards";

import malaria_landscape from "./images/malaria_landscape.jpg";
import people_detector from "./images/people_detector.jpg";
import vehicle_color_detection from "./images/vehicle_color_detection.jpg";

const images = [vehicle_color_detection, people_detector, malaria_landscape];
function Home() {
  return (
    <div>
      <Slider images={images} />
      <Cards />
    </div>
  );
}

export default Home;
