import React from "react";

function Error({ message }) {
  return (
    <div className="text-4xl px-20 py-24">
      {message === "Not Found" ? "Could not fetch data." : message}
    </div>
  );
}

export default Error;
