import React, { useEffect, useState } from 'react'
import Player from '../components/Player'
import { IoSearch } from 'react-icons/io5'
import { songsData } from '../songs'
import Card from '../components/Card'

const Search = () => {
  const [input,setInput] = useState('');
  const [newlist,setNewlist] = useState([])

  useEffect(()=>{
    let a=songsData.filter((song)=>(song.name.toLowerCase().includes(input.toLowerCase())
    || (song.singer.toLowerCase().includes(input.toLowerCase()))
  ));
    setNewlist(a);
  },[input])

  return (
    <div className='bg-black w-full h-full min-h-screen flex justify-start items-center flex-col pt-[20px] md:pt-[100px] gap-[30px]'>
      <Player/>
      <form onSubmit={(e)=>e.preventDefault()} className='w-[90%] md:w-[60%] h-[60px] p-[15px] m:p-0 bg-gray-800 flex justify-center items-center gap-5 rounded-lg overflow-hidden'>
        <IoSearch className='text-gray-200 text-[18px]'/>
      <input onChange={(e)=>setInput(e.target.value)} type="text" name="" id="" placeholder='Search Form...' className='p-[10px] w-[90%] h-[100%] bg-gray-800 outline-none border-0 text-white'/>
      </form>
      {input?<div className='w-[100%] h-[65%] md:h-[100%] flex flex-col justify-normal items-center gap-5 p-[10px] mb-[180px] md:mb-[100px]'>
          {
            newlist.map((song)=>(
              <Card name={song.name} image={song.image} singer={song.singer} songIndex={song.id-1}/>
            ))
          }
      </div>:
      <div className='text-gray-700 text-[20px] font-semibold'>
        Search Songs  
      </div>}
      
    </div>
  )
}

export default Search
