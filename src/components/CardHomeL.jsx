import React from "react";
import { Link } from "react-router-dom";

function CardHomeL({img, title, description, button}) {
  return (
    <div className="max-w-[1024px] my-10 mx-6 lg:mx-auto  px-2 py-1 flex flex-col sm:flex-row sm:justify-start justify-center items-center gap-10 ">
      <img src={img} alt={"/"} className="size-40" />
      <div>
        <div className="mb-4 font-playfairI text-2xl text-orange-300">{title}:</div>
        <div className="font-playfairI text-lg sm:text-xl text-amber-50 flex flex-col gap-5">
          {description}
          <div className="w-full flex sm:justify-end justify-center">
            <Link
              to="/history"
              className="font-playfairI text-base sm:text-lg cursor-pointer duration-300 transition hover:scale-105 border-2 rounded-full px-4 py-1 border-amber-50 bg-[#2E241D] text-amber-50"
            >
              {button}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardHomeL;
