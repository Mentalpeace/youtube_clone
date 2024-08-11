import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { toggleMenu } from '../utils/appSlice';
import {youTubeSearch_api} from "../utils/contants"

const Header = () => {
  const [searchQuery, setsearchQuery]= useState("");
  const [suggestions, setsuggestions]= useState([]);
  const [showsuggestion, setshowsuggestion]= useState(false);

  useEffect(()=> {

   const timer = setTimeout(()=> getSearchSuggestion(), 200);
   return ()=> {
    clearTimeout(timer);
   };

  },[searchQuery]);

  const getSearchSuggestion = async ()=> {
    const data = await fetch(youTubeSearch_api+ searchQuery)
    const json = await data.json()
    setsuggestions(json[1]);
    console.log(json)
  };


  const dispatch = useDispatch();
  const toggleMenuHandler = ()=> {
    dispatch(toggleMenu())
  }
  return (
    <div className='grid grid-flow-col fixed w-full bg-white p-3 shadow-lg'>
    <div className='flex col-span-1 items-center'>
      <img 
      onClick= {() => toggleMenuHandler()}
      className='h-6 cursor-pointer mx-2' src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1024px-Hamburger_icon.svg.png" 
      alt="menu" />
      <a href="/">
      <img className='h-6 mx-2' src="https://upload.wikimedia.org/wikipedia/commons/3/34/YouTube_logo_%282017%29.png" 
      alt="youtube logo" />
      </a>
    </div>
    <div 
    className='col-span-10 m-auto shadow-sm border border-gray-300 rounded-full p-1 bg-gray-200'>
       <div> 
        <input className='w-[30rem] px-5 py-1 border rounded-l-full' 
        type="text" placeholder='Search'
        value={searchQuery} 
        onChange={(e)=> setsearchQuery(e.target.value)} 
        onFocus={()=> setshowsuggestion(true)}
        onBlur={()=> setshowsuggestion(false)}
        />
        <button className='bg-gray-200 p-1 w-20 rounded-r-full font-semibold text-white'>🔍</button>
        </div>
      {showsuggestion && (
        <div
         className='shadow-lg fixed bg-white py-2 px-2 w-[30rem] border border-gray-200 my-1 rounded-xl'>
          <ul>
          {suggestions.map(s =><li key={s} className='px-2 py-2 font-semibold hover:bg-gray-100 hover:rounded-lg'>
              🔍 {s}</li>)}
          </ul>
        </div> 
      )}

      </div>

    <div className='flex items-center col-span-1'>
       
        <img className='h-6 mx-2' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRq_nvaKCQO3kjOva15LSV8H93ROFhHlz6agA&s" 
        alt="notification icon" />
        <img className='h-8 mx-2' src="https://cdn-icons-png.flaticon.com/512/1144/1144760.png" 
        alt="user logo" />
    </div>
    </div>
  )
}

export default Header;
