import React from 'react'

const Button = ({name}) => {
  return (
    <div className='mx-2 px-2 py-1 rounded-xl hover:bg-black hover:text-white bg-gray-200'>
        <button>{name}</button>
      
    </div>
  )
}

export default Button;

