import React from "react";
import { motion } from "framer-motion";

function Forecast({ forecast }) {
  const dailyForecast = [];
  const seenDates = new Set();

  forecast.forEach((entry) => {
    const date = entry.dt_txt.split(" ")[0];

    if (!seenDates.has(date) && entry.dt_txt.includes("12:00:00")) {
      dailyForecast.unshift(entry);
      seenDates.add(date);
    }
  });
  return (
    <motion.div
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.1 } },
      }}
      initial="hidden"
      whileInView="visible"
      className="bg-sky-950/40 dark:bg-slate-100/10 px-8 mt-16"
    >
      {dailyForecast.map((day, index) => {
        return (
          <motion.div
            variants={{
              hidden: { opacity: 0, x: -30 },
              visible: { opacity: 1, x: 0 },
            }}
            key={day.dt}
            className={`w-full text-2xl ${
              index + 1 !== dailyForecast.length && "border-b border-white"
            } text-white grid grid-cols-3 sm:grid-cols-4 items-center`}
          >
            <p>
              {new Date(day.dt_txt).toLocaleDateString("en-US", {
                weekday: "short",
                day: "2-digit",
              })}
            </p>
            <img
              src={`https://openweathermap.org/img/wn/${day.weather[0].icon}@4x.png`}
              className="w-40"
            />
            <p>{day.main.temp.toFixed(1)}°C</p>
            <p className="hidden sm:block">{day.weather[0].description}</p>
          </motion.div>
        );
      })}
    </motion.div>
  );
}

export default Forecast;
