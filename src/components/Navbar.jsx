import React from "react";

const Navbar = () => {
  return (
    <>
      <div className=" md:hidden sticky z-50  top-0 flex justify-between items-center  bg-primary  backdrop-blur-md px-4 py-4 text-white ">
        <div className=" font-display text-displayColor ">
          St. Mary's Assumption Church
        </div>
        <div>
          <a href="#how-to-reach">
            <button className=" relative cursor-pointer ">
              <div className="px-2 py-1  uppercase text-[10px] bg-accent   relative group transition duration-200 text-text-primary active:scale-95 active:translate-y-1 ">
                How to Reach
              </div>
            </button>
          </a>
        </div>
      </div>
      <div className="hidden md:display sticky z-50 top-0 md:flex justify-between items-center  text-text-primary bg-primary border  backdrop-blur-md px-8 p-4">
        <div className="font-display text-displayColor text-2xl">
          St. Mary's Assumption Church
        </div>
        <div>
          <a href="#how-to-reach">
            <button className="p-[3px] relative cursor-pointer ">
              <div className="px-8 py-2  uppercase bg-accent  relative group transition duration-200 text-text-primary hover:bg-accent shadow-md  hover:scale-105 hover:-translate-y-1  ">
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
