import React, { useEffect, useState } from "react";
import {
  API,
  CSS,
  FORM,
  GITHUB,
  HTML,
  JS,
  JSON,
  MERIZAMEEN,
  REACT,
  RESPONSIVE,
  RLOGO,
  SKILLS,
  TAILWIND,
  TODO,
  VIDEO,
  WALLZ,
} from "../../export";
import { motion, useTransform } from "framer-motion";
const arr = ["Player", "Gamer", "Traveller", "Quick Learner"];

function Home() {
  const dev = "<Developer/>";
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 50 } },
  };
  const Slidefromleft = {
    hidden: { opacity: 0, x: -100 },
    shown: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "linear",
        delay: 0,
        staggerChildren: 1,
      },
    },
  };
  const Slidefromright = {
    hidden: { opacity: 0, x: 100 },
    shown: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "linear",
        delay: 0,
        staggerChildren: 1,
      },
    },
  };

  return (
    <>
      <div>
        <motion.div
          initial={{ y: -90 }}
          animate={{
            y: 0,
            transition: {
              duration: 2,
              delay: 2,
              ease: "linear",
              type: "spring",
              stiffness: 400,
            },
          }}
          className="absolute top-10 right-3"
        >
          <a
            href="https://drive.google.com/file/d/1HdOhk1UAHviCBsEY2NxkZFAVcSViMv9n/view?usp=sharing"
            target="_blank"
            title="Download resume"
          >
            <span
              role="img"
              aria-label="page facing up"
              className="text-4xl xl:text-5xl"
            >
              📄
            </span>
          </a>
        </motion.div>
        <motion.div
          initial={{ x: -100 }}
          animate={{
            x: 0,
            transition: {
              duration: 3,
              delay: 0.25,
              ease: "linear",
              type: "spring",
              stiffness: 200,
            },
          }}
          className="absolute top-10 left-3"
        >
          <img src={RLOGO} className="w-8 md:w-14" alt="logo" />
        </motion.div>
        {/* -------------------------First viewport---------------------------------------------------------------------------------------------------------- */}
        <motion.div
          id="one"
          className="w-full h-[100vh] flex flex-col justify-evenly items-center text-center overflow-hidden cursor-default select-none "
        >
          <motion.div
            initial="hidden"
            animate="show"
            variants={containerVariants}
            className="z-10 w-[100%] p-0 flex flex-col justify-center items-center gap-5 md:gap-10  "
          >
            <motion.div
              className="text-xl md:text-2xl flex justify-center items-center gap-1"
              variants={itemVariants}
            >
              <motion.div variants={itemVariants}>
                <span
                  role="img"
                  aria-label="man technologist"
                  className="xl:text-9xl text-6xl"
                >
                  👨‍💻
                </span>
              </motion.div>

              <motion.span
                initial="hidden"
                animate="show"
                variants={containerVariants}
                className="text-5xl font-thin xl:text-[290px] overflow-hidden text-textpurple text-wrap "
              >
                <motion.span
                  variants={itemVariants}
                  className="text-btn font-serif"
                >
                  R
                </motion.span>
                <motion.span variants={itemVariants} className="font-sans">
                  a
                </motion.span>
                <motion.span
                  variants={itemVariants}
                  className="text-black text-4xl xl:text-[160px] line-through"
                >
                  ||
                </motion.span>
                <motion.span variants={itemVariants}>uL</motion.span>
              </motion.span>
            </motion.div>

            <motion.span
              variants={itemVariants}
              className="text-4xl md:text-6xl font-bold origin-top-left text-black flex flex-col xl:flex-row gap-3 "
            >
              <span className="text-textpurple">
                <span className="md:text-5xl border-2 border-mediumPurple border-r-8 border-l-4 rounded-full p-1 px-2 shadow-softPurple shadow-inner">
                  Front-end
                </span>
              </span>{" "}
              {dev}
            </motion.span>

            <motion.span
              variants={itemVariants}
              className="text-sm tracking-tighter md:text-base md:tracking-wide w-[85%] md:w-1/2"
            >
              A self-taught Developer/Coder, functioning on various projects.
              Trying to make meaningful and delightful digital products that
              create an equilibrium between user needs and business goals.
            </motion.span>
          </motion.div>
        </motion.div>

        {/* --------------------------------------------------------------------------------------------------------2222222222222222222222-------------------------------------------- */}
        {/* Second viewport */}

        <div
          id="two"
          className="overflow-hidden w-full h-[150vh] shadow-2xl flex flex-col xl:flex-row justify-evenly p-1 items-center bg-gradient-to-r from-btn via-purple-700 to-mediumPurple cursor-default select-none "
        >
          <motion.div
            initial="hidden"
            whileInView="shown"
            variants={Slidefromleft}
            className="group w-[95%] xl:w-[55%] rounded-2xl z-20  shadow-2xl shadow-purpleblack border-t-[18px] border-black border-l-[18px] overflow-hidden "
          >
            <img
              src={WALLZ}
              alt=""
              className="group-hover:scale-110 transition-all duration-300 origin-center delay-100 w-full"
            />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="shown"
            variants={Slidefromright}
            className="w-[90%] xl:w-[40%] text-white flex flex-col justify-around items-center gap-10 "
          >
            <span className="md:text-4xl text-xl px-2 font-bold border-2 border-white border-r-8 border-l-4 rounded-full rotate-6">
              1.Wallz App
            </span>
            <span className=" shadow-sm shadow-mediumPurple p-4 rounded-xl">
              A Wallpaper App built using React and Tailwind to display fetched
              wallpapers in grid layout. User can search and add wallpaper to
              favourites, can select the orientation of wallpapers. Pexels Api
              is used to fetch wallpapers.
            </span>
            <span className="flex justify-center items-center gap-3 bg-opacity-50">
              Tools:
              <img src={REACT} className="w-6" alt="" />
              <img src={CSS} className="w-6" alt="" />
              <img src={TAILWIND} className="w-6" alt="" />
              <img src={JS} className="w-6" alt="" />
              <img src={HTML} className="w-6" alt="" />
            </span>
            <motion.a
            href="https://wallz.vercel.app"
            target="_blank"
              whileHover={{
                scale: 1.2,
                transition: { duration: 0.25, type: "spring", stiffness: 500 },
              }}
              name="wallz"
              whileTap={{ scale: 0.9 }}
              className="text-xl font-bold md:text-2xl bg-gradient-to-r from-btn to-mediumPurple p-3 px-4 hover:shadow-xl rounded-xl"
              onClick={(e) => console.log(e.target.name)}
            >
              View Live
            </motion.a>
          </motion.div>
        </div>

        {/* --------------------------------------------------------------------------------------------------------3333333333333-------------------------------------------- */}
        {/* third viewport */}

        <div
          id="three"
          className="overflow-hidden w-full h-[150vh]  shadow-2xl flex flex-col xl:flex-row justify-evenly p-1 items-center cursor-default select-none  "
        >
          <motion.div
            initial="hidden"
            whileInView="shown"
            variants={Slidefromleft}
            className="w-[90%] xl:w-[40%] text-black flex flex-col justify-center items-center gap-10"
          >
            <span className="md:text-4xl text-xl font-bold border-2 border-mediumPurple px-2 border-r-8 border-l-4 rounded-full -rotate-6">
              2.MeriZameen
            </span>
            <span className="shadow-sm shadow-mediumPurple p-4 rounded-xl">
              A App built using React and Mui. Where user can list/de-list a
              property. Can check other properties. Can add them to favourites.
              <span className="text-red-600 underline">NOTE</span>-I have worked
              on frontend logic in this app which includes login page designing
              + validation, Modals, Toasters etc.
            </span>
            <span className="flex justify-center items-center gap-3 bg-opacity-50">
              Tools:
              <img src={REACT} className="w-6" alt="" />
              <img src={CSS} className="w-6" alt="" />
              <img src={TAILWIND} className="w-6" alt="" />
              <img src={JS} className="w-6" alt="" />
              <img src={HTML} className="w-6" alt="" />
            </span>
            <motion.a
             href="https://merizameen.vercel.app"
            target="_blank"
              whileHover={{
                scale: 1.2,
                transition: { duration: 0.25, type: "spring", stiffness: 500 },
              }}
              whileTap={{ scale: 0.9 }}
              className="text-2xl font-bold md:text-2xl bg-gradient-to-r text-white from-btn to-mediumPurple p-3 px-4 hover:shadow-xl rounded-xl"
              name="merizameen"
              onClick={(e) => console.log(e.target.name)}
            >
              View Live
            </motion.a>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="shown"
            variants={Slidefromright}
            className="group w-[95%] xl:w-[55%] rounded-2xl z-20  shadow-2xl shadow-purpleblack border-t-[18px] border-black border-r-[18px]  object-cover overflow-hidden"
          >
            <img
              src={MERIZAMEEN}
              alt="img"
              className="group-hover:scale-110 transition-all duration-300 origin-center delay-100 w-full"
            />
          </motion.div>
        </div>
        {/* ---------------------------------------------------------------------------------------------4444444444444444444444444444444444444444444-------------------------------------------- */}

        {/* fourth viewport  */}
        <div
          id="four"
          className=" overflow-hidden w-full h-[150vh] shadow-2xl flex flex-col xl:flex-row justify-evenly p-1 items-center bg-gradient-to-r from-btn via-purple-700 to-mediumPurple cursor-default select-none "
        >
          <motion.div
            initial="hidden"
            whileInView="shown"
            variants={Slidefromleft}
            className="group w-[95%] xl:w-[55%] rounded-2xl z-20  shadow-2xl shadow-purpleblack border-t-[18px] border-black border-l-[18px] object-cover overflow-hidden"
          >
            <img
              src={TODO}
              alt=""
              className="group-hover:scale-110 transition-all duration-300 origin-center delay-100 w-full"
            />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="shown"
            variants={Slidefromright}
            className="w-[90%] xl:w-[40%]  text-white flex flex-col justify-center items-center gap-10  "
          >
            <span className="text-xl md:text-4xl font-bold border-2 border-white px-2 border-r-8 border-l-4 rounded-full rotate-6">
              3.Todo App
            </span>
            <span className="shadow-sm shadow-mediumPurple p-4 rounded-xl">
              A Todo managing app built using react and tailwind. User can add
              delete update and mark done a specfic to do from list of todos
              added by user. Context api is used to manage states and getting
              access to state throughout the app.
            </span>
            <span className="flex justify-center items-center gap-3 bg-opacity-50">
              Tools:
              <img src={REACT} className="w-6" alt="" />
              <img src={CSS} className="w-6" alt="" />
              <img src={TAILWIND} className="w-6" alt="" />
              <img src={JS} className="w-6" alt="" />
              <img src={HTML} className="w-6" alt="" />
            </span>
            {/* <motion.button
              whileHover={{
                scale: 1.2,
                transition: { duration: 0.25, type: "spring", stiffness: 500 },
              }}
              whileTap={{ scale: 0.9 }}
              className="text-2xl font-bold md:text-2xl bg-gradient-to-r text-white from-btn to-mediumPurple p-3 px-4 hover:shadow-xl rounded-xl"
              name="todo"
              
            >
              View Live
            </motion.button> */}
          </motion.div>
        </div>

        {/* ------------------------------------------------------------------5555555555555555555555555555555555555555555555----------------------------------------------------------------- */}
        {/* Fifth viewport */}
        <div
          id="five"
          className="w-full md:h-[100vh]  flex flex-col justify-around items-center gap-10 overflow-hidden cursor-default select-none "
        >
          {/* <div className="flex bg-gray-200 w-full justify-around items-center">
            <img
              src={REACT}
              alt=""
              className="hover:rotate-[360deg] duration-700 transition-all w-10 "
            />
            <img
              src={CSS}
              alt=""
              className="hover:rotate-[360deg] duration-700 transition-all w-10 "
            />
            <img
              src={JS}
              alt=""
              className="hover:rotate-[360deg] duration-700 transition-all w-10 "
            />
            <img
              src={TAILWIND}
              alt=""
              className="hover:rotate-[360deg] duration-700  transition-all w-10 "
            />
            <img
              src={BOOTSTRAP}
              alt=""
              className="hover:rotate-[360deg] duration-700  transition-all w-10 "
            />
            <img
              src={GITHUB}
              alt=""
              className="hover:rotate-[360deg] duration-700  transition-all w-10 "
            />
          </div> */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.5,
              ease: "linear",
              delay: 0,
            }}
            className="w-[90%] xl:w-1/2 text-center text-xl font-semibold"
          >
            I'm currently looking to join a{" "}
            <span className="text-softPurple text-xl underline underline-offset-2 ">
              Talented Team,
            </span>
            <br />
            <span className="text-xs md:text-base text-wrap">
              A team that values and encourage the implementation of modern
              design techniques to accomodate the user needs and Solve bussiness
              Issues. Building Some Extra ordinary and Eye-catchy Design for
              modern day digital Products!
            </span>
          </motion.div>

          <div className="w-full  xl:w-[65%] gap-5 grid grid-cols-1 md:grid-cols-2 p-2 justify-items-center items-center">
            <motion.p
              initial={{ x: -100, opacity: 0 }}
              whileInView={{
                x: 0,
                opacity: 1,
                transition: { duration: 1, delay: 0, ease: "easeIn" },
              }}
              whileDrag={{ translate: 10 }}
              className="w-full text-start md:col-span-2 tracking-tighter xl:text-4xl font-semibold "
            >
              Succeeded
              <span className="text-btn px-2 underline">In</span>
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.5,
                ease: "linear",
                delay: 0,
              }}
              className="w-[95%] h-full p-2  rounded-2xl border-btn border-2 border-b-8 text-black grid grid-cols-2 grid-rows-2 justify-items-center items-center "
            >
              <div className="row-span-2 text-white">
                <img src={JSON} className="w-16" alt="img" />
              </div>
              <div className="flex justify-start w-full text-xl font-bold ">
                JSON Data
              </div>
              <div className="flex w-full justify-start text-xs items-center">
                In depth knowledge about handling json(Javascript object
                notation) data.
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.5,
                ease: "linear",
                delay: 0,
              }}
              className="w-[95%] h-full p-2 border-black border-2 border-b-8 text-black rounded-2xl grid grid-cols-2 grid-rows-2 justify-items-center items-center "
            >
              <div className="row-span-2 text-white">
                <img src={API} className="w-16" alt="img" />
              </div>
              <div className="flex justify-start w-full text-xl font-bold ">
                Restfull Api
              </div>
              <div className="flex w-full justify-start text-xs items-center">
                Worked With different restful Apis, includes authentication,
                payload, data etc.
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.5,
                ease: "linear",
                delay: 0,
              }}
              className="w-[95%] h-full p-2 border-black border-2 border-b-8 text-black rounded-2xl grid grid-cols-2 grid-rows-2 justify-items-center items-center "
            >
              <div className="row-span-2 text-white">
                <img src={FORM} className="w-16" alt="img" />
              </div>
              <div className="flex justify-start w-full text-xl font-bold ">
                Forms & Tables
              </div>
              <div className="flex w-full justify-start text-xs items-center">
                Hands-on experience handling form data and doing operations over
                it.
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.5,
                ease: "linear",
                delay: 0,
              }}
              className="w-[95%] h-full p-2 border-btn border-2 border-b-8 text-black rounded-2xl grid grid-cols-2 grid-rows-2 justify-items-center items-center "
            >
              <div className="row-span-2 text-white">
                <img src={RESPONSIVE} className="w-16" alt="img" />
              </div>
              <div className="flex justify-start w-full text-xl font-bold ">
                Responsive Design
              </div>
              <div className="flex w-full justify-start text-xs items-center">
                All the projects done are fully Responsive/Compatible accross
                devices.
              </div>
            </motion.div>
          </div>
        </div>

        {/* 666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666663 */}
      </div>
    </>
  );
}

export default Home;
