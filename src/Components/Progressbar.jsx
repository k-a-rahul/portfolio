import React from "react";
import {motion, useScroll} from "framer-motion";


function Progressbar() {
  const { scrollYProgress } = useScroll();
  return (
    <>
      <motion.div
        className={`fixed top-0 left-0 origin-left h-2 w-full bg-black z-50 `}
        style={{ scaleX: scrollYProgress }}
      />
    </>
  );
}

export default Progressbar;
