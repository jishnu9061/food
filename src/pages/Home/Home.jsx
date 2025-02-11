import React from "react";
import Welcome from "../Welcome/Welcome";
import Partner from "../Partner/Partner";
import Booking from "../Booking/Booking";
import Ambience from "../Ambience/Ambience";
import Delivery from "../Delivery/Delivery";
import About from "../About/About";

function Home() {
  return (
    <>
      <Welcome />
      <Partner />
      <Booking />
      <Ambience />
      <Delivery />
      <About />
    </>
  );
}

export default Home;
