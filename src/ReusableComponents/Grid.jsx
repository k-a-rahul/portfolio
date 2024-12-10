import { div } from "framer-motion/client";
import React, { useState } from "react";

function Grid({ width, cols, xlcols, rows, verti, hori, color, children }) {
  

  return (
    <>
      <div
        className={`w-full grid grid-cols-4 w-[${width}] text-${color} gap-2 grow shrink p-2`}
      >
        {children}
      </div>
    </>
  );
}

export default Grid;
