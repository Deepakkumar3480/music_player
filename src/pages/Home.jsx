import React, { useContext, useEffect, useState } from "react";
import { songsData } from "../songs";
import musicImg from "../assets/musicanim.webp";
import { CgPlayTrackNext, CgPlayTrackPrev } from "react-icons/cg";
import { IoPlay } from "react-icons/io5";
import { MdOutlinePause } from "react-icons/md";
import {MdKeyboardArrowDown} from 'react-icons/md'
import { datacontext } from "../context/Usercontext";
import Card from "../components/Card";
import Player from "../components/Player";

const Home = () => {
  let[arrow,setArrow] = useState(false)
  let {
    audioRef,
    playingSong,
    index,
    playSong,
    pauseSong,
    nextSong,
    prevSong,
  } = useContext(datacontext);
  let [range, setRange] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      let duration = audioRef.current.duration || 0;
      let currentTime = audioRef.current.currentTime || 0;
      let progressPercentage = (currentTime / duration) * 100 || 0;
      setRange(progressPercentage);
    };

    audioRef.current.addEventListener("timeupdate", updateProgress);
  });
  function handlerange(e) {
    let newrange = e.target.value;
    setRange(newrange);
    let duration = audioRef.current.duration;

    audioRef.current.currentTime = (duration * newrange) / 100;
    console.log(audioRef.current.currentTime);
  }

  return (
    <div className="w-full h-screen bg-black flex relative">
      <MdKeyboardArrowDown onClick={()=>setArrow(prev=>!prev)} className={`absolute text-white top-[30px] left-[10%] text-[30px] md:hidden ${arrow?"rotate-[-90deg]":null} cursor-pointer`}/>
      {
      !arrow?
      <>
      <div className=" w-full md:w-[50%] h-full bg-slate-900 pt-[20px] md:pt-[120px] flex flex-col items-center justify-start gap-[30px] ">
        <h1 className="text-white font-semibold text-[20px]">Now Playing</h1>
        <div className="w-[80%] max-w-[250px] h-[250px] object-fill rounded-md overflow-hidden relative">
          <img
            className="w-[100%] h-[100%]"
            src={songsData[index].image}
            alt=""
          />
          {playingSong ? (
            <div className="w-full h-full bg-black absolute top-0 opacity-[0.5] flex justify-center items-center">
              <img src={musicImg} alt="" className="w-[50%]" />
            </div>
          ) : null}
        </div>
        <div>
          <div className="text-white text-[30px] font-bold">
            {songsData[index].name}
          </div>
          <div className="text-gray-400 text-[18px] text-center">
            {songsData[index].singer}
          </div>
        </div>
        <div className="w-full flex justify-center items-center">
          <input
            type="range"
            className="range-slider  w-[50%] h-[7px] rounded-md "
            name=""
            value={range}
            onChange={handlerange}
            id="bar"
          />
          {/* <div className={``}>
              for custom range change wala
          </div> */}
        </div>
        <div className="text-white flex justify-center items-center gap-5">
          <CgPlayTrackPrev
            onClick={() => {
              prevSong();
            }}
            className="w-[28px] h-[28px] hover:text-gray-600 transition-all cursor-pointer"
          />
          {!playingSong ? (
            <div
              onClick={() => {
                playSong();
                console.log("song start play");
              }}
              className="w-[50px] h-[50px] rounded-full bg-white text-black flex justify-center items-center hover:bg-gray-600 transition-all cursor-pointer"
            >
              <IoPlay className="w-[20px] h-[20px]" />
            </div>
          ) : (
            <div
              onClick={() => {
                pauseSong();
                console.log("song pause now");
              }}
              className="w-[50px] h-[50px] rounded-full bg-white text-black flex justify-center items-center hover:bg-gray-600 transition-all cursor-pointer"
            >
              <MdOutlinePause className="w-[20px] h-[20px]" />
            </div>
          )}

          <CgPlayTrackNext
            onClick={() => nextSong()}
            className="w-[28px] h-[28px] hover:text-gray-600 transition-all cursor-pointer"
          />
        </div>
      </div>
      <div className="w-[100%] md:w-[50%] h-full hidden pt-[120px] bg-slate-900 flex-col gap-5 pb-[20px] md:flex overflow-auto">
          {songsData.map((song)=>{
            return <Card name={song.name} singer={song.singer} image={song.image} songIndex={song.id-1}/>
          })}
      </div>
      </>:
      <div className="relative w-[100%] md:w-[50%] h-full mt-[70px] pt-[20px] bg-slate-900  items-center flex-col gap-5 pb-[200px] flex overflow-auto">
        <Player/>
      {songsData.map((song)=>{
        return <Card name={song.name} singer={song.singer} image={song.image} songIndex={song.id-1}/>
      })}
  </div>
      }
      
      
    </div>
  );
};

export default Home;
