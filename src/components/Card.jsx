import React from "react";
import { motion } from "framer-motion";

import DetailCard from "./DetailCard";

function Card({ city }) {
  return (
    <div className="flex flex-col gap-24 lg:gap-16">
      {/* NAME */}
      <p className="text-5xl px-8 text-center font-bold lg:text-left">
        {city.name}, {city.sys.country}
      </p>

      {/* ICON, WEATHER, TEMPERATURE */}
      <div className="flex flex-col gap-28 lg:gap-0 lg:flex-row justify-between items-center">
        <div className="flex gap-16 justify-center items-center py-4 px-16 rounded-4xl">
          <motion.img
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ type: "spring", stiffness: 500 }}
            className="scale-160"
            src={`https://openweathermap.org/img/wn/${city.weather[0].icon}@4x.png`}
          />
          <motion.p
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ type: "spring", stiffness: 500 }}
            className="hidden sm:block text-6xl font-bold"
          >
            {city.weather[0].main}
          </motion.p>
        </div>
        <div>
          <motion.p
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 500 }}
            className="text-7xl sm:text-9xl font-bold mb-8"
          >
            {city.main.temp}°C
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 500 }}
            className="text-3xl sm:text-4xl text-center lg:text-left font-bold"
          >
            feels like {city.main.feels_like}°C
          </motion.p>
        </div>
      </div>

      {/* MORE DETAILS */}
      <motion.div
        variants={{
          hidden: { opacity: 0, y: -10 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { staggerChildren: 0.1, duration: 0.5 },
          },
        }}
        initial="hidden"
        whileInView="visible"
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8"
      >
        <DetailCard
          variants={{
            hidden: { opacity: 0, scale: 0 },
            visible: { opacity: 1, scale: 1, transition: { duration: 0.1 } },
          }}
          label="Humidity"
        >
          {city.main.humidity}%
        </DetailCard>
        <DetailCard
          variants={{
            hidden: { opacity: 0, scale: 0 },
            visible: { opacity: 1, scale: 1, transition: { duration: 0.1 } },
          }}
          label="Wind Speed"
        >
          {city.wind.speed} m/s
        </DetailCard>
        <DetailCard
          variants={{
            hidden: { opacity: 0, scale: 0 },
            visible: { opacity: 1, scale: 1, transition: { duration: 0.1 } },
          }}
          label="Visibility"
        >
          {city.visibility / 1000} km
        </DetailCard>
        <DetailCard
          variants={{
            hidden: { opacity: 0, scale: 0 },
            visible: { opacity: 1, scale: 1, transition: { duration: 0.1 } },
          }}
          label="Pressure"
        >
          {city.main.pressure} mb
        </DetailCard>
      </motion.div>
    </div>
  );
}

export default Card;
