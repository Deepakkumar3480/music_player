import React, { useContext } from "react";
import { songsData } from "../songs";
import { datacontext } from "../context/Usercontext";
import { IoPlay } from "react-icons/io5";
import { MdOutlinePause } from "react-icons/md";
import { Link } from "react-router-dom";

const Player = () => {
  let { playingSong, playSong, pauseSong,index } = useContext(datacontext);
  return (
    
    <div className="w-[100%] md:w-[60%] h-[100px] bg-white fixed bottom-[55px] md:items-center md:p-[20px] md:bottom-0  rounded-t-[30px] shadow-lg flex  overflow-hidden">
      <Link to={'/'}>
      <div className="h-[100%] w-[100%]  absolute top-0 left-0 flex items-center pt-[10px]">
      <div className="cursor-pointer flex justify-start items-start gap-[20px] w-[80%] h-[100%]  pl-[30px]">
      
      <div>
        <img
          className="rounded-lg w-[60px] object-fill max-h-[60px] md:w-[80px] md:max-h-[80px]"
          src={songsData[index].image}
          alt=""
        />
      </div>
      <div className="text-[20px] md:text-[25px]">
        <div className="text-[1.1em] font-semibold text-gray-950 ">
          {songsData[index].name}
        </div>
        <div className="text-[0.7em] font-semibold text-gray-700 ">
          {songsData[index].singer}
        </div>
      </div>
     
    </div>
    
    <div className="w-[20%] h-[100%] md:flex justify-center items-center">
      {!playingSong ? (
        <div
          onClick={(e) => {
            e.preventDefault()
            playSong();
          }}
          className="w-[50px] h-[50px] rounded-full bg-black text-white flex justify-center items-center hover:bg-gray-600 transition-all cursor-pointer"
        >
          <IoPlay className="w-[20px] h-[20px]" />
        </div>
      ) : (
        <div
          onClick={(e) => {
            e.preventDefault()
            pauseSong();
          }}
          className="w-[50px] h-[50px] rounded-full bg-black text-white flex justify-center items-center hover:bg-gray-600 transition-all cursor-pointer"
        >
          <MdOutlinePause className="w-[20px] h-[20px]" />
        </div>
      )}
    </div>
      </div>
      </Link>
    </div>
    
  );
};

export default Player;
