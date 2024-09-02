import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

function Home() {
  return (
    <>
      <Navbar />

      <div className="relative w-full h-svh xl:h-screen bg-[url('/src/assets/main/hero-coffee-4.jpg')] bg-cover bg-no-repeat xl:bg-center bg-[center_left_80%] ">
        {/* Puedes poner contenido adicional aquí si es necesario */}
        <div className="absolute sm:ml-0 top-[40%] flex flex-col w-screen justify-center items-center lg:items-start translate-x-0 lg:top-[35%] left-0 ">
          <h2 className="mx-4 lg:ml-10 font-playfairI text-4xl text-amber-50 max-w-80 lg:max-w-[26rem] xl:max-w-none ">
            Descubre el Alma del Café en Cada Grano
          </h2>
          <div className="absolute top-40 lg:top-32 w-full mt-0 mx-4 lg:ml-10 flex flex-col justify-center items-center lg:items-start gap-6 lg:max-w-[22rem] max-w-none">
            <Link to='/methods' className="font-playfairI text-lg cursor-pointer duration-300 transition hover:scale-105 border-2 rounded-full px-4 py-1 border-amber-50 bg-[#432A19] text-amber-50">
              Aprende a preparar un buen café
            </Link>
            <Link to='/history' className="font-playfairI text-lg cursor-pointer duration-300 transition hover:scale-105 border-2 rounded-full px-4 py-1 border-[#432A19] bg-orange-300  text-[#432A19]">
            Sumérgete en la Historia del Café
            </Link>
            <Link to='/coffeecocktails' className="font-playfairI text-lg cursor-pointer duration-300 transition hover:scale-105 border-2 rounded-full px-4 py-1 border-amber-50 bg-[#432A19] text-amber-50">
            Explora los Cócteles de Café
            </Link>
          </div>
        </div>
      </div>

    </>
  );
}

export default Home;
