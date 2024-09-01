import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <div className="xl:hidden fixed flex w-full justify-center z-50">
        <Link to='/'
        className="absolute top-4"
        >
        <h1 className=" font-radicalis text-3xl text-amber-50 border rounded-full border-amber-50 bg-[#2E241D] px-6">
          Coffee World
        </h1></Link>
      </div>
    </>
  );
}

export default Header;
