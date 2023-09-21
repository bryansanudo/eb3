import React, { useRef, useState } from "react";
import { FaPauseCircle, FaPlayCircle } from "react-icons/fa";
import heroImage from "@/assets/logo.png";

const HeroSection = ({ isMenuShown }) => {
  return (
    <div
      name="inicio"
      className="flex items-end justify-center w-full h-screen text-center"
    >
      <img src={heroImage} className="h-full object-cover  w-full absolute " />
      {/* <div
        className={` w-full p-8 flex flex-row items-center z-10 justify-center duration-500  gap-10 ${
          isMenuShown ? "opacity-20" : "opacity-100"
        }`}
      >
        {isVideoPlaying ? (
          <FaPauseCircle
            size={25}
            onClick={handleVideoPause}
            className="cursor-pointer hover:scale-105 duration-300  text-white"
          />
        ) : (
          <FaPlayCircle
            size={25}
            onClick={handleVideoPlay}
            className="cursor-pointer hover:scale-110 duration-300  text-white"
          />
        )}
      </div> */}
    </div>
  );
};

export default HeroSection;
