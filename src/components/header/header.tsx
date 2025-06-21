"use client";
import React from "react";

interface HeaderProps {
  onScroll: () => void;
}

const Header = ({ onScroll }: HeaderProps) => {
  return (
    <div
      className="pt-20 w-full lg:h-[400px] h-full bg-cover lg:bg-center bg-no-repeat flex items-center justify-center text-white"
      style={{ backgroundImage: "url('/images/bg.png')" }}
    >
      <div className="text-center pt-20 w-11/12 lg:pt-0 items-center lg:flex justify-between ">
        <h1 className="text-5xl font-bold mb-4 lg:w-1/2 text-center lg:text-left ml-4">
          Batam Dwi Coconut
        </h1>
        <div className=" mx-auto text-lg lg:w-1/3 w-11/12 pb-20 text-justify">
          <p className=" mx-auto text-justify">
            We aim to create a self sustaining community where all processes are
            environmentally friendly, utilizing all parts of coconut without
            waste. Dewacoco also generates its own green energy using coconut
          </p>
          <button
            onClick={onScroll}
            className="bg-white cursor-pointer   text-black px-3 py-2 rounded-full mt-5"
          >
            Get to Know More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
