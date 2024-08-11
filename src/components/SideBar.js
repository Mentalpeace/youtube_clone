import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

const SideBar = () => {
  const isMenuOpen = useSelector(store => store.app.isMenuOpen);
  if (!isMenuOpen) return null;
  return (
    <div className='shadow-xl md:w-[17vw] mx-3 mt-[68px] p-3 cursor-pointer mt-28 md:mt-0 '>
      <ul>
        <li className='font-bold p-1 hover:bg-gray-200 rounded-xl' >
        <Link to="/"> Home </Link>
          </li>
        <li className='font-bold p-1 hover:bg-gray-200 rounded-xl'>Shorts</li>
        <li className='font-bold p-1 hover:bg-gray-200 rounded-xl'>Subscriptions</li>
      </ul>
      <h2 className='font-bold mt-5'>You</h2>
      <ul>
        <li className='p-1 mt-1 hover:bg-gray-200 rounded-xl'>Your Channel</li>
        <li className='p-1 hover:bg-gray-200 rounded-xl'>History</li>
        <li className='p-1 hover:bg-gray-200 rounded-xl'>Playlists</li>
        <li className='p-1 hover:bg-gray-200 rounded-xl'>Your Videos</li>
        <li className='p-1 hover:bg-gray-200 rounded-xl'>Watch later</li>
        <li className='p-1 hover:bg-gray-200 rounded-xl'>Liked Videos</li>
      </ul>
      <h2 className='font-bold mt-5'>Subscriptions</h2>
      <ul>
        <li className='p-1 mt-1 hover:bg-gray-200 rounded-xl'>Akshay Saini</li>
        <li className='p-1 hover:bg-gray-200 rounded-xl'>W3 School</li>
        <li className='p-1 hover:bg-gray-200 rounded-xl'>Code Academy</li>
        <li className='p-1 hover:bg-gray-200 rounded-xl'>Sony Music India</li>
      </ul>
      <h2 className='font-bold mt-5'>Explore</h2>
      <ul>
        <li className='p-1 mt-1 hover:bg-gray-200 rounded-xl'>Trending</li>
        <li className='p-1 hover:bg-gray-200 rounded-xl'>Shopping</li>
        <li className='p-1 hover:bg-gray-200 rounded-xl'>Music</li>
        <li className='p-1 hover:bg-gray-200 rounded-xl'>Movies</li>
        <li className='p-1 hover:bg-gray-200 rounded-xl'>Live</li>
        <li className='p-1 hover:bg-gray-200 rounded-xl'>Gaming</li>
        <li className='p-1 hover:bg-gray-200 rounded-xl'>News</li>
        <li className='p-1 hover:bg-gray-200 rounded-xl'>Sports</li>
        <li className='p-1 hover:bg-gray-200 rounded-xl'>Fashion And Beauty</li>
      </ul>
    </div>
  )
}

export default SideBar
