import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";

function Navbar() {

const [nav, setNav] = useState (false)
const handleNav = () => {
  setNav(!nav)
} 

  return (
    <>
    <AiOutlineMenu
    onClick = {handleNav}
    size= {30}
    className="fixed top-4 right-4 z-[99] xl:hidden cursor-pointer text-neutral-100" 
    />

    {nav && (
      <div className="fixed w-full h-screen bg-orange-300 flex flex-col gap-3 justify-center items-center z-20">
        <a href="/" className="font-playfairI text-2xl text-[#2E241D]">Home</a>
        <a href="/history" className="font-playfairI text-2xl text-[#2E241D]">History</a>
        <a href="/cafeto" className="font-playfairI text-2xl text-[#2E241D]">Cafeto</a>
        <a href="/process" className="font-playfairI text-2xl text-[#2E241D]">Process</a>
        <a href="/methods" className="font-playfairI text-2xl text-[#2E241D]">Methods</a>
        <a href="/coffeetypes" className="font-playfairI text-2xl text-[#2E241D]">Coffee Types</a>
        <a href="/coffeecocktails" className="font-playfairI text-2xl text-[#2E241D]">Coffee Cocktails</a>
      </div>
    )
    }

    <div className="hidden xl:flex fixed top-0 left-0 w-full h-20 bg-[#2E241D] z-50">
        <Link to="/"><h1 className="absolute left-14 top-6 font-radicalis text-3xl text-amber-50">Coffee World</h1></Link>
      <nav className="">
        <ul className="absolute right-10 top-6 flex gap-10">
          <li>
            <Link to="/" className="font-playfairI text-lg text-amber-50">Home </Link>
          </li>
          <li>
            <Link to="/history" className="font-playfairI text-lg text-amber-50">History</Link>
          </li>
          <li>
            <Link to="/cafeto" className="font-playfairI text-lg text-amber-50">Cafeto</Link>
          </li>
          <li>
            <Link to="/process" className="font-playfairI text-lg text-amber-50">Process</Link>
          </li>
          <li>
            <Link to="/methods" className="font-playfairI text-lg text-amber-50">Methods</Link>
          </li>
          <li>
            <Link to="/latteart" className="font-playfairI text-lg text-amber-50">Latte Art</Link>
          </li>
          <li>
            <Link to="/coffeetypes" className="font-playfairI text-lg text-amber-50">Coffee Types</Link>
          </li>
          <li>
            <Link to="/coffeecocktails" className="font-playfairI text-lg text-amber-50">Coffee Cocktails</Link>
          </li>
        </ul>
      </nav>
    </div>
  </>
  );
}

export default Navbar;
