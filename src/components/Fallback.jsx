import React from "react";

import compassImg from "/compass.svg";

function Fallback() {
  return (
    <div className="grid grid-cols-1 gap-8 md:gap-16 sm:grid-cols-2 justify-between items-center md:px-16">
      <img className="w-[800px]" src={compassImg} alt="compass" />
      <p className="text-4xl md:text-5xl font-bold">
        Search for a city to get weather details.
      </p>
    </div>
  );
}

export default Fallback;
