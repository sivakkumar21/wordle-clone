import React, { useEffect, useRef, useState } from 'react'

function WordTries({row,result,isActive,handleRowComplete}) {

  const [value1,setValue1]=useState(new Array(5).fill(""));
  const [green,setGreen] = useState([]);
  const [yellow,setYellow] = useState([]);
  const [grey,setGrey] = useState([]);
  const[disable,setDisable]=useState(false)
  let tempGreen =[];
  let isOver =false;
  let isLast = false;


  const inputRefs = useRef([])

  useEffect(()=>
    {        
                  return () =>{}
          
    },[])
    function handleChange(event)
    {
  
   
    let  {value,name} = event.target;

    value = value.replace(/[^A-Za-z]/ig, '')
    if(name==="text0")
      {
        const newValue = [...value1];
        newValue[0]=value.slice(0,1).toUpperCase();
        setValue1(newValue)
        value!=="" && inputRefs.current[1].focus();
      }
    else if(name==="text1" )
      {
        const newValue = [...value1];
        newValue[1]=value.slice(0,1).toUpperCase();
        setValue1(newValue)
        value!=="" && inputRefs.current[2].focus();
      }
      else if(name==="text2")
        {
          const newValue = [...value1];
          newValue[2]=value.slice(0,1).toUpperCase();
          setValue1(newValue)
          value!=="" &&  inputRefs.current[3].focus();
        
        }
        else if(name==="text3"  )
          {
           
            const newValue = [...value1];
            newValue[3]=value.slice(0,1).toUpperCase();
            setValue1(newValue)
            value!=="" &&  inputRefs.current[4].focus();
          }
          else if(name==="text4" )
            {
              const newValue = [...value1];
        newValue[4]=value.slice(0,1).toUpperCase();
        setValue1(newValue)
             
            }
            
     
      
    
    }

   
    function handleKeyDown(event,index)
    {
      const {key} = event;
      
      if(key==="Backspace" && index>0 && !value1[index])
      {
     
        inputRefs.current[index-1].focus();
      }
      if(key==="Enter" && index===4 )
      {
        if(value1.join("").trim().split("").length<5)
          return;
       handleValidation();
        setDisable(true)
      }
      
    }

  function handleValidation()
  {

  value1.map((item,index)=>
  {
if(result.includes(item))
{
  if(result[index]===item)
  {
    tempGreen.push(index)
    setGreen((prev)=>[...prev,index])
  }
  else
  {
    setYellow((prev)=>[...prev,index])
  }
}
else
{
  setGrey((prev)=>[...prev,index])
}
  })  
if(tempGreen.join("").trim().length===5)
  {
    isOver=true;
  }
  if(row==5 && !isOver)
  {
    
    isLast  = true;
  }
  handleRowComplete(isOver,isLast);
  }
  function getBgClass(index)
  {
    if(green.includes(index))
      return "bg-green-400"
    else if(yellow.includes(index))
      return "bg-yellow-400"
    else if(grey.includes(index))
      return "bg-slate-400"
  }
  return (
<div className='flex items-center justify-center'>
  <form>
  <div className='first-try flex gap-1.5'>
    <input disabled={disable || !isActive} className={"border-2  text-center w-[40px] h-[40px] " + getBgClass(0)} ref={(ref)=>{inputRefs.current[0]=ref}}  type="text"  name='text0' onChange={(e)=>handleChange(e)} onKeyDown={(e,)=>handleKeyDown(e,0)} value={value1[0]}/>
    <input disabled={disable  || !isActive} type="text"  className={"border-2 text-center w-[40px] h-[40px] " + getBgClass(1)} ref={(ref)=>{inputRefs.current[1]=ref}} name='text1' onChange={(e)=>handleChange(e)} onKeyDown={(e)=>handleKeyDown(e,1)}   value={value1[1]} />
    <input disabled={disable  || !isActive} type="text" className={"border-2 text-center w-[40px] h-[40px] " + getBgClass(2)} ref={(ref)=>{inputRefs.current[2]=ref}} name='text2' onChange={(e)=>handleChange(e)}  onKeyDown={(e)=>handleKeyDown(e,2)} value={value1[2]}/>
    <input disabled={disable  || !isActive} type="text" className={"border-2 text-center w-[40px] h-[40px] " + getBgClass(3)} ref={(ref)=>{inputRefs.current[3]=ref}} name='text3'onChange={(e)=>handleChange(e)} onKeyDown={(e)=>handleKeyDown(e,3)} value={value1[3]}/>
   
    <input disabled={disable  || !isActive} type="text" className={"border-2 text-center w-[40px] h-[40px] " + getBgClass(4)}ref={(ref)=>{inputRefs.current[4]=ref}} name='text4'onChange={(e)=>handleChange(e)} onKeyDown={(e)=>handleKeyDown(e,4)} value={value1[4]}/>

  </div>
  </form>

</div>

  )
}

export default WordTries