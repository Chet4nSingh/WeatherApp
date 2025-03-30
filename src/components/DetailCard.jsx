import React from "react";
import { MdVisibility } from "react-icons/md";
import { WiHumidity } from "react-icons/wi";
import { FaWind } from "react-icons/fa";
import { HiArrowsUpDown } from "react-icons/hi2";

function DetailCard({ label, children }) {
  let icon = undefined;

  if (label === "Wind Speed") icon = <FaWind />;
  else if (label === "Humidity") icon = <WiHumidity />;
  else if (label === "Pressure") icon = <HiArrowsUpDown />;
  else icon = <MdVisibility />;

  return (
      <div className="bg-sky-950/40 shadow-md text-white rounded-4xl p-12 pb-20 dark:bg-slate-100/10 dark:text-slate-100">
        <h3 className="mb-12 text-2xl flex items-center gap-2 md:gap-4">
          <span className="text-nowrap text-3xl">{label}</span>{" "}
          <span className="text-4xl">{icon}</span>
        </h3>
        <p className="text-center font-bold text-3xl md:text-4xl xl:text-5xl text-nowrap">
          {children}
        </p>
      </div>
  );
}

export default DetailCard;
