import React, { useContext } from "react";

import { MdPlaylistAdd } from "react-icons/md";
import { GoHeart } from "react-icons/go";
import { GoHeartFill } from "react-icons/go";
import { MdOutlinePlaylistRemove } from "react-icons/md";
import { datacontext } from "../context/Usercontext";
import { useDispatch, useSelector } from "react-redux";
import { AddSong, RemoveSong } from "../redux/PlaylistSlice";
import { AddLiked, Removeliked } from "../redux/LikedSlice";

const Card = ({ name, image, singer, songIndex }) => {
  let { playSong, index, setIndex } = useContext(datacontext);
  let dispatch = useDispatch();
  let gana = useSelector((state) => state.playlist);
  let songExist = gana.some((song) => song.songIndex === songIndex);
  let likedSong = useSelector((state) => state.liked);
  const likedsongexist = likedSong.some((song) => song.songIndex === songIndex);
  return (
    <div className="w-[90%] h-[70px] p-[5px] md:p-[10px] md:h-[120px] bg-gray-800 flex justify-center items-center hover:bg-gray-600">
      <div
        className="cursor-pointer flex justify-start items-center gap-[20px] w-[80%] h-[100%]"
        onClick={() => {
          setIndex(songIndex);
          playSong();
        }}
      >
        <div>
          <img
            className="rounded-lg w-[60px] max-h-[60px] md:w-[100px] md:max-h-[100px]"
            src={image}
            alt=""
          />
        </div>
        <div className="text-[15px] md:text-[20px]">
          <div className="text-[1.1em] font-semibold text-white ">{name}</div>
          <div className="text-[0.7em] font-semibold text-gray-400 ">
            {singer}
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center gap-[20px] w-[20%] h-[100%] text-[15px] md:text-[20px]">
        {!songExist && (
          <div>
            <MdPlaylistAdd
              onClick={() => {
                dispatch(
                  AddSong({
                    name: name,
                    image: image,
                    singer: singer,
                    songIndex: songIndex,
                  })
                );
              }}
              className="text-white text-[1.5em] cursor-pointer"
            />
          </div>
        )}
        {songExist && (
          <div>
            <MdOutlinePlaylistRemove
              onClick={() => {
                dispatch(RemoveSong(songIndex));
              }}
              className="text-white text-[1.5em] cursor-pointer"
            />
          </div>
        )}
        {!likedsongexist && (
          <div
            onClick={() => {
              dispatch(
                AddLiked({
                  name: name,
                  image: image,
                  singer: singer,
                  songIndex: songIndex,
                })
              );
            }}
          >
            <GoHeart className="text-white text-[1.3em] cursor-pointer" />
          </div>
        )}
         {likedsongexist && (
          <div
            onClick={() => {
              dispatch(
                Removeliked(songIndex)
              );
            }}
          >
            <GoHeartFill className="text-white text-[1.3em] cursor-pointer" />
          </div>
        )}
        
      </div>
    </div>
  );
};

export default Card;
