import React from 'react'
import { useSelector } from 'react-redux'
import Player from '../components/Player'
import Card from '../components/Card'

const Liked = () => {
  let songs = useSelector(state=>state.liked)
  return (
    <div
    className="w-[100%] h-[100vh] bg-black flex
  justify-start items-center flex-col pt-[20px] md:pt-[100px] gap-[30px]"
  >
    <Player />
    {!songs.length < 1 ? (
      <>
        <h1 className="text-white text-[20px] font-semibold">Liked song</h1>
        <div className="w-full h-[65%] md:h-[100%] flex flex-col justify-start items-center gap-[20px] overflow-auto">
          {songs.map((song) => (
            <Card
              name={song.name}
              image={song.image}
              singer={song.singer}
              songIndex={song.songIndex}
            />
          ))}
        </div>
      </>
    ) : (
      <div className="text-gray-700 text-[30px] font-semibold">
        No Songs In Liked song
      </div>
    )}
  </div>
  )
}

export default Liked
