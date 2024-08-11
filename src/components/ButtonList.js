import React from 'react'
import Button from './Button'

const ButtonList = () => {
  // const list = 
  // ['All','News','Latest','Sports','Movies','Cricket','Nature','Fashion','Cooking',
  //   'Travel','Comedy','Music','Hip-Hop','Dance'];
  return (
    <div className='flex m-2 p-2'>
     <Button name='All'/>
     <Button name='News'/>
     <Button name='Latest'/>
     <Button name='Sports'/>
     <Button name='Movies'/>
     <Button name='Cricket'/>
     <Button name='Nature'/>
     <Button name='Fashion'/>
     <Button name='Cooking'/>
     <Button name='Travel'/>
     <Button name='Comedy'/>
     <Button name='Music'/>
     <Button name='Song'/>
     <Button name='Dance'/> 
    </div>
  )
}

export default ButtonList;
