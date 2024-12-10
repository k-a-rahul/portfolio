import React from "react";
import { motion } from "framer-motion";

function Card({}) {
  return (
    <div>
      <div
        id="three"
        className="w-full h-[100vh] flex flex-col md:flex-row justify-evenly items-center overflow-hidden"
      >
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 2, delay: 0.25, ease: "linear" }}
          className="w-[90%] md:w-[40%] h-[30%] md:h-1/2 text-black flex flex-col justify-center items-center gap-10"
        >
          <span className="md:text-4xl text-xl font-bold border-2 border-mediumPurple px-2 border-r-8 border-l-4 rounded-full -rotate-6">
            Second Project{" "}
          </span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
          suscipit reprehenderit magni quam sapiente architecto repellendus, non
          beatae deserunt molestiae?
          <span className="flex justify-center items-center gap-3 bg-opacity-50">
            Tools:
            <img src={REACT } className="w-6" alt="" />
            <img src={CSS } className="w-6" alt="" />
            <img src={TAILWIND } className="w-6" alt="" />
            <img src={JS } className="w-6" alt="" />
            <img src={HTML } className="w-6" alt="" />
          </span>
          <motion.button
            whileHover={{
              scale: 1.1,
              transition: { duration: 0.12 },
            }}
            whileTap={{ scale: 0.9 }}
            className="text-2xl font-bold md:text-2xl bg-gradient-to-r text-white from-btn to-mediumPurple px-3 p-1 hover:shadow-xl rounded-xl"
          >
            Read More <span></span>
          </motion.button>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.25, ease: "linear" }}
          className="group w-[90%] md:w-[40%] rounded-xl shadow-xl object-cover overflow-hidden transition-all"
        >
          <img
            src={MERIZAMEEN}
            alt=""
            className="group-hover:scale-110 transition-transform origin-center delay-100 w-full"
          />
        </motion.div>
      </div>
    </div>
  );
}

export default Card;
