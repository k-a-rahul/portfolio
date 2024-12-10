import React from "react";


function Footer() {
  return (
    <div className="w-full text-black p-2 grid grid-cols-2 justify-items-start items-start ">
      <span className="col-span-2 w-full h-1 bg-slate-300"></span>
      <div className="flex flex-col justify-center items-start p-2" id="one">
        <span className="text-2xl xl:text-4xl font-semibold">
          Contact Details
        </span>
        <p>Pathankot, Punjab</p>
        <p>145001</p>
        <p>+917347506388</p>
      </div>
      <div id="two" className="flex flex-col justify-center items-start p-2">
        <span className="text-2xl xl:text-4xl font-semibold">Am Available</span>
        <div className="flex justify-center items-center gap-4">
          <a className="hover:opacity-90"
            href="https://api.whatsapp.com/send/?phone=7347506388&text&type=phone_number&app_absent=0"
            target="_blank"
          >
            WhatsApp
          </a>
          <a
          className="hover:opacity-90"
            href="https://www.facebook.com/profile.php?id=61560864673430&mibextid=ZbWKwL"
            target="_blank"
          >
            Facebook
          </a>
          <a
          className="hover:opacity-90"
            href="https://github.com/k-a-rahul"
            target="_blank"
          >
            Github
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;

{
  /* <div className="w-1/2 flex flex-col justify-evenly p-1 items-center">
          <div className="flex flex-col justify-center items-center text-center gap-2 rounded-full p-2 ">
            <button className="group text-xl ">
              Click
              <span className="w-[84px] h-[4px] flex  shadow-black shadow-2xl group-hover:border-l-[84px] transition-all duration-300 delay-0 border-l-[0px]  border-white"></span>
            </button>
            <button className="group text-xl ">
              Learn
              <span className="w-[84px] h-[4px] flex  shadow-black shadow-2xl group-hover:border-l-[84px] transition-all duration-300 delay-0 border-l-[0px]  border-white"></span>
            </button>
            <button className="group text-xl ">
              SkillUP
              <span className="w-[84px] h-[4px] flex  shadow-black shadow-2xl group-hover:border-l-[84px] transition-all duration-300 delay-0 border-l-[0px]  border-white"></span>
            </button>
            <button className="group text-xl ">
              Click
              <span className="w-[84px] h-[4px] flex  shadow-black shadow-2xl group-hover:border-l-[84px] transition-all duration-300 delay-0 border-l-[0px]  border-white"></span>
            </button>
          </div>
        </div> */
}
