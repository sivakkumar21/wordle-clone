import {  faBars, faChartSimple, faGear, faQuestion } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function Header() {
  return (
    <div className='py-4 w-full 
    items-center px-4 flex border-b-2 justify-between'>
<div className='cursor-pointer'><FontAwesomeIcon icon={faBars} size='xl' /></div>
<h1 className='text-2xl font-bold pl-5'>Wordle</h1>
<div className='menu-container flex gap-3 items-center justify-between'>
    <span className='cursor-pointer'><FontAwesomeIcon icon={faQuestion} size='xl' /></span>
    <span className='cursor-pointer'><FontAwesomeIcon icon={faGear} size='xl' /></span>
    <span className='cursor-pointer'><FontAwesomeIcon icon={faChartSimple} size='xl' /></span>
    <div className='rounded-full px-3 py-2 border border-black cursor-pointer'>Subscribe to Games</div>

</div>


    
    </div>
  )
}

export default Header