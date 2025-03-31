import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiRefreshCcw } from "react-icons/fi";
import { FaSearch } from "react-icons/fa";

import History from "./History";

function SearchBar({ fetchCity, refetch, history, onError }) {
  const [city, setCity] = useState("");
  const [showHistory, setShowHistory] = useState(false);

  function handleFetchCity() {
    if (city.trim() !== "") fetchCity(city);
    else {
      onError("Please enter a valid city name.");
    }
    setCity("");
  }

  function handleRefresh() {
    refetch();
  }

  return (
    <div className="flex flex-nowrap">
      <button
        onClick={handleRefresh}
        className="text-3xl text-sky-950 dark:text-white mr-4 cursor-pointer px-3 py-2 rounded-full hover:bg-slate-800/10 dark:hover:bg-slate-100/10"
      >
        <FiRefreshCcw />
      </button>
      <div className="relative w-full">
        <motion.input
          onFocus={() => setShowHistory(true)}
          onBlur={() =>
            setTimeout(() => {
              setShowHistory(false);
            }, 200)
          }
          className="px-4 py-2 text-2xl border-b-2 text-sky-950 border-sky-950 outline-none focus:outline-none dark:text-white dark:border-white"
          type="text"
          placeholder="Search city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        {showHistory && <History history={history} fetchCity={fetchCity} />}
      </div>
      <button
        onClick={handleFetchCity}
        className="cursor-pointer px-4 py-2 border-b-2 border-sky-900 text-2xl bg-sky-900 hover:bg-sky-950 transition duration-100 active:bg-sky-800 text-white dark:bg-white dark:text-slate-800 dark:border-white dark:hover:bg-slate-200"
      >
        <FaSearch />
      </button>
    </div>
  );
}

export default SearchBar;
