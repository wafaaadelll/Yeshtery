import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Home/Home";
import Navbar from "../Navbar/Navbar";
import Screen from "../Screen/Screen";

export default function Pages() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Item/:productId" element={<Screen />} />
      </Routes>
    </div>
  );
}
