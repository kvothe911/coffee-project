import React from "react";

function Header() {
  return (
    <>
      <div className="xl:hidden fixed flex w-full justify-center z-50">
        <h1 className="absolute top-4 font-radicalis text-3xl text-amber-50 border rounded-full bg-[#2E241D] px-6">
          Coffee World
        </h1>
      </div>
    </>
  );
}

export default Header;
