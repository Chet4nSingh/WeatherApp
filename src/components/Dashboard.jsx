import React, { useState } from "react";
import { motion, useScroll } from "framer-motion";
import SearchBar from "./SearchBar";
import Card from "./Card";
import Error from "./Error";

import axios from "axios";
import Loader from "./Loader";
import Forecast from "./Forecast";
import Fallback from "./Fallback";

const API_KEY = import.meta.env.VITE_API_KEY;

function Dashboard() {
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(false);
  const [city, setCity] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [error, setError] = useState("");
  const [isDark, setIsDark] = useState(false);

  const { scrollYProgress } = useScroll();

  async function fetchWeatherDetails(city) {
    setCity(null);
    setLoading(true);
    setError("");
    try {
      const { data } = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
      );

      setCity(data);
      setHistory((prevState) => [
        city,
        ...prevState.filter((item) => item !== city),
      ]);

      const forecastData = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${API_KEY}`
      );
      setForecast(forecastData.data);
    } catch (err) {
        setError('Could not fetch data.')
      setCity(null);
      setForecast(null);
    } finally {
      setLoading(false);
    }
  }

  async function refetch() {
    if (!city)
      return setError(
        "No value found to refetch! Try searching for a city first."
      );

    setCity(null);
    setLoading(true);
    setError("");
    try {
      const { data } = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city.name}&appid=${API_KEY}`
      );
      setCity(data);
    } catch (err) {
      setError(err.response.statusText);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <div
        id="dashboard"
        className={`text-sky-900 px-16 pb-40 min-h-screen bg-gradient-to-tl from-slate-400 to-slate-100 dark:text-white dark:bg-gradient-to-tr dark:from-slate-500 dark:to-slate-900 ${
          isDark ? "dark" : ""
        }`}
      >
        <header className="py-8 flex flex-col gap-16 lg:flex-row lg:gap-0 justify-between items-center ">
          <h1 className="text-5xl sm:text-7xl text-nowrap flex flex-col sm:flex-row gap-4 justify-center items-center font-bold">
            <button
              className="cursor-pointer"
              onClick={() => setIsDark((prev) => !prev)}
            >
              {isDark ? (
                <img src="/01d.svg" className="w-32" alt="sun" />
              ) : (
                <img src="/01n.svg" className="w-32" alt="sun" />
              )}
            </button>
            <motion.span
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              Weather Sync
            </motion.span>
          </h1>
          <SearchBar
            fetchCity={fetchWeatherDetails}
            refetch={refetch}
            history={history}
          />
        </header>
        <main className="mt-16">
          {loading && <Loader />}
          {error && <Error message={error} />}
          {!city && !loading && !error && <Fallback />}
          {city && <Card city={city} />}
          {forecast && <Forecast forecast={forecast.list} />}
        </main>
      </div>
      {city && (
        <motion.div
          style={{
            scaleX: scrollYProgress,
            backgroundColor: "#333",
            transformOrigin: "left",
            height: "1rem",
            position: "sticky",
            width: "100%",
            bottom: 0,
          }}
        />
      )}
    </>
  );
}

export default Dashboard;
