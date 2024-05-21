import React, { useEffect, useRef, useState } from 'react'
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import { DialogContent } from '@mui/material';
import Header from './Header';
import WordTries from './WordTries';
import { WORDS } from './words';




function Game() {
    const [open, setOpen] = useState(true)
    const [word, setWord] = useState(WORDS[Math.floor(Math.random() * WORDS.length)].toUpperCase())
   const[currentActive,setCurrentActive] = useState(0);
   const[ gameOver, setGameOver] = useState(false)
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  useEffect(()=>
{
 handleOpen();    
 return () => handleClose();
      
},[])

function handleRowComplete(isOver=false, isLast = false)
{
  if(isOver)
    setCurrentActive(10)
  else
  setCurrentActive(currentActive+1)

  if(isLast && !isOver)
    {
setGameOver(true)
    }
}

return (
    <div>
        <Header></Header>
     
        <Dialog onClose={handleClose} open={open} 
        sx={{
      "& .MuiDialog-container": {
        "& .MuiPaper-root": {
          width: "100%",
          maxWidth: "500px",  // Set your width here
        },
      },
    }}>
        <div className='text-3xl flex items-end justify-end cursor-pointer p-5'
        onClick={handleClose}>X</div>
            <DialogTitle>How To Play</DialogTitle>
            <DialogContent>
                <h2 className='text-xl font-semibold py-3'>Guess the Wordle in 6 tries.</h2>
                <ul style={{ listStyle: 'square' }}>
                    <li>Each guess must be a valid 5-letter word.</li>
                    <li>The color of the tiles will change to show how close your guess was to the word.</li>
                </ul>
            </DialogContent>

            
        </Dialog>
        <div className='flex flex-col items-center justify-center py-1 gap-3'>
          {
          new Array(6).fill(null)
          .map(
            (_,index)=><WordTries row ={index} key={index} result = {word} isActive = {currentActive==index} handleRowComplete = {handleRowComplete}></WordTries>
           )}
</div>
<div className='flex items-center justify-center text-2xl font-bold bg-yellow-100'>{gameOver && <h1>{word}</h1>}</div>
    </div>

  )
}

export default Game