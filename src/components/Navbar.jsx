import React from "react";

const Navbar = () => {
  return (
    <>
      <div className=" md:hidden sticky z-50  top-0 flex justify-between items-center  bg-indigo-200/70 border border-indigo-700 backdrop-blur-md px-4 p-2 text-indigo-700 ">
        <div className=" font-display ">St. Mary's Assumption Church</div>
        <div>
          <a href="#how-to-reach">
            <button className="p-[3px] relative cursor-pointer ">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
              <div className="px-8 py-2  uppercase bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
                How to Reach
              </div>
            </button>
          </a>
        </div>
      </div>
      <div className="hidden md:display sticky z-50 top-0 md:flex justify-between items-center  text-text-primary bg-primary border  backdrop-blur-md px-8 p-4">
        <div className="font-display text-displayColor">
          St. Mary's Assumption Church
        </div>
        <div>
          <a href="#how-to-reach">
            <button className="p-[3px] relative cursor-pointer ">
              <div className="px-8 py-2  uppercase bg-accent  relative group transition duration-200 text-white hover:bg-accent shadow-md  hover:scale-105 ">
                How to Reach
              </div>
            </button>
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
