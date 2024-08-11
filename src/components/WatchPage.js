import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../utils/appSlice';
import { useSearchParams } from 'react-router-dom';


const WatchPage = () => {
    const [searchParams]= useSearchParams();
    const dispatch = useDispatch();
    useEffect(()=> {
        dispatch( closeMenu())
    },[])
  return (
    <div>
      <div className='flex'>
    <div className='ml-10 mt-20'>
      <iframe width="1000" height="550" className='rounded-xl'
       src={"https://www.youtube.com/embed/" + searchParams.get("v")}
       title="YouTube video player" frameBorder="0" 
       allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
      referrerpolicy="strict-origin-when-cross-origin" 
      allowfullscreen></iframe>
      <h1 className='py-2 mt-2 font-bold text-l'>THE TITLE OF THE VIDEO NEED TO BE FETCHED BUT DUE TO UNAVAILAVILTY OF API I CANNOT MAKE IT.</h1>
        <h2>Sorry For the Inconvinience</h2>
        <div className='flex py-2'>
        <h1 className='py-2 font-extrabold text-xl'>CHANNEL NAME</h1>
        <button className='bg-gray-200 py-2 px-3 font-bold rounded-2xl mx-6'>Subscribe</button>
        <button className='ml-[17rem] mx-3 py-2 px-3 font-bold bg-gray-300 rounded-2xl'>Like | Unlike</button>
        <button className='mx-3 bg-gray-300 py-2 px-3 font-bold rounded-2xl'>Share</button>
        <button className='mx-3 bg-gray-300 py-2 px-3 font-bold rounded-2xl'>Downloads</button>
        <button className='mx-3 bg-gray-300 py-2 px-3 font-bold rounded-3xl'>...</button>
        </div>
        </div>
        
    </div>
    <div className='bg-gray-400 rounded-lg w-[62rem] my-4 mx-9 opacity-70'>
          <p className='p-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            In illo provident assumenda earum similique temporibus corporis odit
             aspernatur debitis vero, consequuntur harum fugiat autem blanditiis
              eligendi mollitia dolore obcaecati quam veniam cumque. Magnam, sapiente
               harum maiores possimus nostrum laborum voluptatum provident! Cupiditate
                ipsum rem ipsa architecto dicta. Impedit, molestias! Temporibus.</p>
        </div>
    
    </div>

    
  )
}

export default WatchPage;
