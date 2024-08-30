import React from "react";
import Navbar from "../components/Navbar";

function Home() {
  return (
    <>
      <Navbar />
      
      <div 
    className="w-full h-svh xl:h-96 bg-[url('/src/assets/main/hero-coffee.jpg')] bg-cover bg-no-repeat xl:bg-center bg-[center_left_85%] xl:translate-y-20"
  >
    {/* Puedes poner contenido adicional aquí si es necesario */}
  </div>

      <div>Home</div>

    </>
  );
}

export default Home;
