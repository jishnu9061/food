import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer"; 
import Home from "../pages/Home/Home";
import Dishes from "../pages/Dishes/Dishes";
import Booking from "../pages/Booking/Booking";
import About from "../pages/About/About";

function LayouRoutes() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dishes" element={<Dishes />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default LayouRoutes;
