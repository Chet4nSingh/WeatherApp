import React from "react";

import lightningImg from '/lightning-bolt.svg'

function Error({ message }) {
  return (
    <div className="text-4xl md:text-5xl font-bold md:px-16 grid grid-cols-1 gap-8 md:gap-16 sm:grid-cols-2 justify-center items-center">
      <img src={lightningImg} alt="thunderbolt" className="w-[800px]" />
      {message === "Not Found" ? "Could not fetch data." : message}
    </div>
  );
}

export default Error;
