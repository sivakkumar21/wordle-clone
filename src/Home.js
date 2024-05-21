import React from 'react'
import wordle from './wordle-image.webp'
import dateFormat from 'dateformat';

import { useNavigate } from 'react-router-dom';

function Home() {

    const navigate = useNavigate();
    function handlePlay()
    {
        navigate("/game")
    }
  
  return (
<div className="base-container h-screen bg-stone-300 flex flex-col gap-5 items-center justify-center">
<div className='w-[100px] h-[100px]'><img src={wordle} className="wordle-logo" alt="logo" /></div>
    <h1 className='text-5xl font-extrabold '>Wordle</h1>
    <div className='text-2xl font-normal text-center flex justify-center w-[350px]'>
      <span>Get 6 chances to guess a
       <span className='whitespace-nowrap'> 5-letter </span>
        word.</span></div>
    <button className='bg-black text-white font-bold py-2 px-5 rounded'
    onClick={handlePlay}
    >Play</button>
    <div><strong>{dateFormat(new Date(), "mmmm dd, yyyy")}</strong></div>
    </div>
  )
}

export default Home