import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";
import Header from "./Header";

function Navbar() {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <>
      <Header />
      <div className={`fixed top-14 left-1/2 -translate-x-1/2 z-[99] xl:hidden p-1 bg-orange-300 border-4 rounded-full border-[#432A19] transform ease-in-out duration-700 ${nav ? "translate-y-[140vh]" : "scale-100"}`}>
        <AiOutlineMenu
          onClick={handleNav}
          size={30}
          className={`cursor-pointer text-neutral-950 transform transition-transform duration-300 hover:scale-110`}
        />
        
      </div>
      <div className={`fixed top-14 left-1/2 -translate-x-1/2 z-[99] xl:hidden p-1 bg-transparent transform duration-300 ${nav ? "scale-100 translate-y-6 delay-300" : "scale-0"}`}>
      <AiOutlineClose
          onClick={handleNav}
          size={30}
          className={`cursor-pointer text-orange-300 transform transition-transform duration-300 hover:scale-110`}
        />
      </div>

      {/* Circulo de menu, baja solo cuando nav=true*/}
      <div
        className={`xl:hidden fixed w-[200vh] h-[200vh] bg-[#432A19] rounded-full left-1/2 transform -translate-x-1/2 transition-all duration-700 ease-in-out flex flex-col gap-3 justify-center items-center z-20 ${
          nav ? "top-[-50vh]" : "top-[-188vh]"
        }`}
      >
        
        <Link
          to="/history"
          className="font-playfairI text-2xl text-orange-100 py-1 px-4 bg-[#2E241D] rounded-3xl transform transition-transform duration-300 hover:scale-105"
        >
          History
        </Link>
        <Link
          to="/cafeto"
          className="font-playfairI text-2xl text-orange-100 py-1 px-4 bg-[#2E241D] rounded-3xl transform transition-transform duration-300 hover:scale-105"
        >
          Cafeto
        </Link>
        <Link
          to="/process"
          className="font-playfairI text-2xl text-orange-100 py-1 px-4 bg-[#2E241D] rounded-3xl transform transition-transform duration-300 hover:scale-105"
        >
          Process
        </Link>
        <Link
          to="/methods"
          className="font-playfairI text-2xl text-orange-100 py-1 px-4 bg-[#2E241D] rounded-3xl transform transition-transform duration-300 hover:scale-105"
        >
          Methods
        </Link>
        <Link
          to="/coffeetypes"
          className="font-playfairI text-2xl text-orange-100 py-1 px-4 bg-[#2E241D] rounded-3xl transform transition-transform duration-300 hover:scale-105"
        >
          Coffee Types
        </Link>
        <Link
          to="/coffeecocktails"
          className="font-playfairI text-2xl text-orange-100 py-1 px-4 bg-[#2E241D] rounded-3xl transform transition-transform duration-300 hover:scale-105"
        >
          Coffee Cocktails
        </Link>
      </div>

      <div className="hidden xl:flex fixed top-0 left-0 w-full h-20 bg-[#2E241D] z-50">
        <Link to="/">
          <h1 className="absolute left-14 top-6 font-radicalis text-3xl text-amber-50">
            Coffee World
          </h1>
        </Link>
        <nav className="">
          <ul className="absolute right-10 top-6 flex gap-10">
            <li>
              
            </li>
            <li>
              <Link
                to="/history"
                className="font-playfairI text-lg text-amber-50"
              >
                History
              </Link>
            </li>
            <li>
              <Link
                to="/cafeto"
                className="font-playfairI text-lg text-amber-50"
              >
                Cafeto
              </Link>
            </li>
            <li>
              <Link
                to="/process"
                className="font-playfairI text-lg text-amber-50"
              >
                Process
              </Link>
            </li>
            <li>
              <Link
                to="/methods"
                className="font-playfairI text-lg text-amber-50"
              >
                Methods
              </Link>
            </li>
            <li>
              <Link
                to="/latteart"
                className="font-playfairI text-lg text-amber-50"
              >
                Latte Art
              </Link>
            </li>
            <li>
              <Link
                to="/coffeetypes"
                className="font-playfairI text-lg text-amber-50"
              >
                Coffee Types
              </Link>
            </li>
            <li>
              <Link
                to="/coffeecocktails"
                className="font-playfairI text-lg text-amber-50"
              >
                Coffee Cocktails
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
