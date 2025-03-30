import React from "react";
import { motion } from "framer-motion";

function History({ history, fetchCity }) {
  return (
    <motion.ul
      variants={{
        hidden: { scaleY: 0 },
        visible: { scaleY: 1, transition: { staggerChildren: 0.1 } },
      }}
      style={{
        transformOrigin: "top",
      }}
      initial="hidden"
      animate="visible"
      className="bg-white px-4 absolute flex flex-col w-full"
    >
      {history.map((city, index) => {
        if (index < 5)
          return (
            <motion.button
              variants={{
                hidden: { opacity: 0, x: -10 },
                visible: { opacity: 1, x: 0 },
              }}
              onClick={() => fetchCity(city)}
              key={index}
              className="p-4 border-b border-slate-400 text-left dark:text-sky-950"
            >
              {city}
            </motion.button>
          );
      })}
    </motion.ul>
  );
}

export default History;
