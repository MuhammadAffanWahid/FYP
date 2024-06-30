import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Navbar from "./Navbar";
import CarColorDetector from "./CarColorDetector";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/car-color-detection" element={<CarColorDetector />} />
            <Route path="/human-counting" element={<Home />} />
            <Route path="/malaria-detection" element={<Home />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}
export default App;