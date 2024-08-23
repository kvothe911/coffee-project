import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="fixed top-0 left-0 w-full h-20 bg-[#2E241D] z-50">
        <h1 className="absolute left-14 top-6 font-radicalis text-3xl text-amber-50">Coffee Universe</h1>
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
  );
}

export default Navbar;
