import compassImg from "/compass.svg";
import React from "react";

function Fallback() {
  return (
    <div className="grid grid-cols-1 gap-16 sm:grid-cols-2 justify-between items-center px-16">
      <img className="w-[800px]" src={compassImg} alt="compass" />
      <p className="text-4xl font-bold">
        Search for a city to get weather details.
      </p>
    </div>
  );
}

export default Fallback;
