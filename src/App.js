import React from "react";
// import { BrowserRouter, Route, Routes } from "react-router-dom";july 2023
import Home from "./Home";
import Navbar from "./Navbar";
import CarColorDetector from "./CarColorDetector";

function App() {
  return (
    // <BrowserRouter>
    <div>
      <Navbar />
      <div>
      <Home />
      <CarColorDetector/>
        {/* <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/car-color-detection" element={<Home />} />
            <Route path="/human-counting" element={<Home />} />
            <Route path="/malaria-detection" element={<Home />} />
          </Routes> */}
      </div>
    </div>
    // </BrowserRouter>
  );
}

export default App;