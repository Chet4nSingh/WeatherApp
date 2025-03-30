import React from "react";
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
          <img
            className="scale-160"
            src={`https://openweathermap.org/img/wn/${city.weather[0].icon}@4x.png`}
          />
          <p className="hidden sm:block text-6xl font-bold">{city.weather[0].main}</p>
        </div>
        <div>
          <p className="text-7xl sm:text-9xl font-bold mb-8">{city.main.temp}°</p>
          <p className="text-3xl sm:text-4xl text-center lg:text-left font-bold">
            feels like {city.main.feels_like}°
          </p>
        </div>
      </div>

      {/* MORE DETAILS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8">
        <DetailCard label="Humidity">{city.main.humidity}%</DetailCard>
        <DetailCard label="Wind Speed">{city.wind.speed} m/s</DetailCard>
        <DetailCard label="Visibility">{city.visibility / 1000} km</DetailCard>
        <DetailCard label="Pressure">{city.main.pressure} mb</DetailCard>
      </div>
    </div>
  );
}

export default Card;
