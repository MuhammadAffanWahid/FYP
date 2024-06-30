import React from "react";
import malaria_card from "./images/malaria_card.jpg";
import car_card from "./images/car_card.jpg";
import people_card from "./images/people_card.jpeg";
// import { Link } from "react-router-dom";

function Card({ text, image, redirect }) {
  return (
    <div class="max-w-sm text-white bg-[#1e3b78] border transition duration-300 ease-in-out border-[#1e3b78] hover:scale-110 rounded-lg w-72 h-86 my-4 mx-2 md:mx-4 lg:mx-8 shadow-gray-800 shadow-xl">
      {/* bg-[#12203f]*/}
      <a href={redirect}>
        <img class="rounded-t-lg" src={image} alt="" />
        <div class="p-7 text-center">
          <h5 class="text-lg md:text-xl lg:text-2xl font-bold tracking-tight">
            {text}
          </h5>
        </div>
      </a>
    </div>
  );
}

function Cards() {
  return (
    <div className="bg-[#00091D] ">
      <div className="bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:30px_30px] pt-36 pb-36">
        {/* bg-gradient-to-r from-gray-950 via-slate-900 to-sky-950 */}
        <div className="flex flex-col sm:flex-row justify-center items-center">
          {/* justify-around what items and justify do?*/}
          <Card text={"Detect Malaria"} image={malaria_card} redirect={"/"} />
          <Card
            text={"Detect Car Color"}
            image={car_card}
            redirect={"/car-color-detection"}
          />
          <Card text={"Count Humans"} image={people_card} redirect={"/"} />
        </div>
      </div>
    </div>
  );
}
export default Cards;
