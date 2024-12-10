import React from "react";
import { motion } from "framer-motion";

function About() {
  const cardData = [
    {
      img: "https://c4.wallpaperflare.com/wallpaper/453/129/282/html5-hyper-text-markup-language-html-wallpaper-thumb.jpg",
      text: "Having expertise in Html 5, Semantic tags and know how to use them accurately to get required view on different viewports",
    },
    {
      img: "https://cdn-icons-png.freepik.com/512/5968/5968305.png",
      text: "Strong knowledge of Cascading style sheets, which includes responsibe layouts, Typography, Grid/Flex layouts and compatibility.",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaqgWAToc1DeXBIuEuZgblbMMDgD4tgsM-ag&s",
      text: "Having strong working command and knowledge about Strings, Objects, Arrays, Loops etc. DOM manipulations using JS.",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTokZliYkKkA5G-4WfbuaNpKj5f9PYnTUPLA&s",
      text: "Worked with react hooks having depth knowledge about JSX, Dynamic Data embedding, State management.",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSDKn3vA2YUbXzN0ZC3gALWJ08gJN-Drl15w&s",
      text: "Worked with tailwind css having in depth knowledge about layout techniques and Responssveness accross various devices.",
    },
    {
      img: "https://i.pinimg.com/736x/b5/1b/78/b51b78ecc9e5711274931774e433b5e6.jpg",
      text: " Hands-on experience of using github for managing projects in different branches, respositeries, pull/push, solving conflicts etc.",
    },
  ];
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
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { type: "spring", stiffness: 50 } },
  };
  return (
    <div className="z-0 overflow-hidden w-full h-full  text-white text-center flex flex-col justify-center items-center cursor-default select-none">
      {/* main grid-div  */}
      <motion.div
        initial="hidden"
        animate="show"
        variants={containerVariants}
        className="xl:mt-5 grid grid-cols-3 gap-10 justify-items-center items-center grow p-4"
      >
        <motion.div className="col-span-3">
          <motion.span
            initial="hidden"
            animate="show"
            variants={containerVariants}
            className="text-5xl font-thin xl:text-[260px] overflow-hidden text-textpurple text-wrap"
          >
            <motion.span
              variants={itemVariants}
              className="text-btn font-serif"
            >
              A
            </motion.span>
            <motion.span variants={itemVariants} className="font-sans ">
              b
            </motion.span>
            <motion.span
              variants={itemVariants}
              className=" text-4xl xl:text-[190px]"
            >
              o
            </motion.span>
            <motion.span variants={itemVariants} className="text-black">
              ut
            </motion.span>
          </motion.span>
          <span className="text-black text-2xl">Me</span>
        </motion.div>

        <div className="col-span-3 bg-mediumPurple h-1 w-1/2"></div>
        <div className="col-span-3 w-full ">
          <div className="w-1/2 xl:w-1/3 text-center text-2xl text-black xl:text-4xl font-semibold">
            S<span className="text-btn underline">k</span>
            ills
            <span role="img" aria-label="sports medal" className="text-2xl">
              🏅
            </span>
          </div>
        </div>
        {cardData.map((card, index) => {
          return (
            <motion.div
              key={index}
              
              variants={itemVariants}
              className="overflow-auto text-start col-span-3 xl:col-span-1 w-[90%] xl:w-full rounded-2xl p-4 border-btn border-2 border-b-8 text-black"
            >
              <img
                src={card.img}
                className="w-20 h-20 mx-1 object-cover float-start rounded-full"
                alt="img"
              />
              {card.text}
            </motion.div>
          );
        })}

        <span className=" my-10 col-span-3 bg-mediumPurple h-1 w-1/2"></span>
        <div className="col-span-3 flex flex-col justify-center items-center gap-10 w-full  rounded-2xl p-1 text-black">
          <div className="w-[75%] text-end text-2xl text-black xl:text-4xl font-semibold">
            Aca<span className="text-btn underline">de</span>
            mic
            <span role="img" aria-label="trophy" className="text-2xl">
              🏆
            </span>
          </div>
          <div className="w-full flex items-center justify-center rounded-2xl">
            <table className="w-full xl:w-[65%] bg-bluewhite rounded-2xl overflow-hidden">
              <tbody>
                <tr className="text-sm xl:text-3xl">
                  <th className=" p-3 bg-mediumPurple text-white rounded-r-xl">
                    Study
                  </th>
                  <th className="">School</th>
                  <th className=" px-5 xl:px-10">Score</th>
                </tr>
                <tr className="text-xs xl:text-base">
                  <td className="px-2 ">BCA</td>
                  <td className="">IEC University</td>
                  <td className="">6.7 CGPA</td>
                </tr>
                <tr className="text-xs xl:text-base">
                  <td className="px-2  ">Senior Secodary</td>
                  <td className="">Govt. Senior Secondary School</td>
                  <td>60%</td>
                </tr>
                <tr className="text-xs xl:text-base">
                  <td className="px-2 ">Higher Secodary</td>
                  <td className="">Govt. Senior Secondary School</td>
                  <td className="">65%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: -200 }}
        whileInView={{ opacity: 1, x: 0, transition: { duration: 1 } }}
        className="w-full my-10 p-4 flex justify-center items-center"
      >
        <div className="w-1/2 text-black tracking-tighter xl:tracking-normal z-20 flex flex-row justify-start items-center xl:gap-5 text-4xl rounded-2xl font-bold xl:font-bold xl:text-[110px]">
          <span>I</span>
          <span>n</span>
          <span>t</span>
          <span>e</span>
          <span>r</span>
          <span>e</span>
          <span>s</span>
          <span>t</span>
          <span>s</span>
        </div>
        <div className="w-full border-4 border-mediumPurple rounded-2xl text-black list-none flex flex-col gap-2 text-2xl  xl:text-6xl  justify-center items-center">
          <li className="flex justify-center items-center">
            Coding{" "}
            <span
              role="img"
              aria-label="laptop computer"
              className="xl:text-4xl text-2xl"
            >
              💻
            </span>
          </li>
          <li className="flex justify-center items-center">
            UI/UX{" "}
            <span
              role="img"
              aria-label="mobile phone with arrow"
              className="xl:text-4xl text-2xl"
            >
              📲
            </span>
          </li>
          <li className="flex justify-center items-center">
            Design{" "}
            <span
              role="img"
              aria-label="flower playing cards"
              className="xl:text-4xl text-2xl"
            >
              🎴
            </span>
          </li>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 200 }}
        whileInView={{ opacity: 1, x: 0, transition: { duration: 1 } }}
        className="w-full my-10 p-4 flex justify-center items-center"
      >
        <div className="w-full border-4 border-mediumPurple rounded-2xl text-black list-none flex flex-col gap-2  text-2xl  xl:text-6xl  justify-center items-center">
          <li className="flex justify-center items-center">
            Gaming{" "}
            <span
              role="img"
              aria-label="video game"
              className="xl:text-4xl text-2xl"
            >
              🎮
            </span>
          </li>
          <li className="flex justify-center items-center">
            Music{" "}
            <span
              role="img"
              aria-label="musical notes"
              className="xl:text-4xl text-2xl"
            >
              🎶
            </span>
          </li>
          <li className="flex justify-center items-center">
            Travelling{" "}
            <span
              role="img"
              aria-label="airplane departure"
              className="xl:text-4xl text-2xl"
            >
              🛫
            </span>
          </li>
        </div>
        <div className="w-1/2 text-black tracking-tighter xl:tracking-normal z-20 flex justify-end items-center xl:gap-5 text-4xl rounded-2xl font-bold xl:font-bold xl:text-[110px]">
          <span>H</span>
          <span>o</span>
          <span>b</span>
          <span>b</span>
          <span>i</span>
          <span>e</span>
          <span>s</span>
        </div>
      </motion.div>
    </div>
  );
}

export default About;
