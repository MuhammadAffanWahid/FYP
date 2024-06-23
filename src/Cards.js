import React from "react";
import malaria_card from "./images/malaria_card.jpg";
import car_card from "./images/car_card.jpg";
import people_card from "./images/people_card.jpeg";


function Card({ text, image }) {
  return (
    <div class="max-w-sm text-white bg-[#1e3b78] border transition duration-300 ease-in-out border-[#1e3b78] hover:scale-110 rounded-lg w-72 h-86 shadow-gray-800 shadow-xl">
      {/* bg-[#12203f]*/}
      <a href="#">
        <img class="rounded-t-lg" src={image} alt="" />
        <div class="p-7 text-center">
          <h5 class="text-2xl font-bold tracking-tight">
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
      <div className="px-28 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:30px_30px] pt-36 pb-36">
        {/* bg-gradient-to-r from-gray-950 via-slate-900 to-sky-950 */}
        <div className="flex justify-around">
          <Card text={"Detect Malaria"} image={malaria_card}/>
          <Card text={"Detect Car Color"} image={car_card}/>
          <Card text={"Count Humans"} image={people_card}/>

        </div>
      </div>
    </div>
  );
}
export default Cards;
