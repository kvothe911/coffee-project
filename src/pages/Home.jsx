import React from "react";
import Navbar from "../components/Navbar";
import heroCoffee from "../assets/main/hero-coffee.jpg";

function Home() {
  return (
    <>
      <Navbar />
      
      <img src={heroCoffee} alt="Universal Coffee image" className="w-full h-96 object-cover translate-y-20 "/>

      <div>Home</div>

    </>
  );
}

export default Home;