import React from "react";

function Toaster({ text, type,onclick }) {

  return (
    <>
      {text && (
        <div className="w-full flex justify-center items-center fixed top-3 z-20">
          <div
            className={`xl:w-[40%] px-3 ${
              type ? "border-2 border-b-4 border-red-600  bg-bluewhite text-white" : "border-2 border-b-4 border-green-600 bg-mildpurple"
            } text-center xl:text-3xl text-xl z-20 rounded-xl flex justify-center items-center`}
          >
            {text ? text : "No text Supplied"}
            <button className="float-end px-1" onClick={onclick}>
            <span role="img" aria-label="cross mark button" className="text-2xl">❎</span>
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Toaster;
