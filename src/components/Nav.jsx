import React from 'react'
import { FaHome } from "react-icons/fa";
import {IoSearch} from 'react-icons/io5';
import {RiPlayListLine} from 'react-icons/ri';
import {IoMdHeart} from 'react-icons/io';
import { Link } from 'react-router-dom';


const Nav = () => {
  return (
    <div className='z-30 w-full h-[80px] bg-black fixed md:top-0 bottom-0 text-white p-[18px] flex justify-around md:justify-center items-center gap-[50px] rounded-t-[30px]'>
      <Link to='/'>
      <FaHome className='w-[30px] h-[30px]' />
      </Link>
      <Link to={'/search'}><IoSearch className='w-[30px] h-[30px]'/></Link>
      <Link to={'/playlist'}><RiPlayListLine className='w-[30px] h-[30px]'/></Link>
      <Link to={'/liked'}><IoMdHeart className='w-[30px] h-[30px]'/></Link>
    </div>
  )
}

export default Nav
