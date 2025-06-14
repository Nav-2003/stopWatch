import React, { useEffect, useState } from 'react'


function App() {
  const [second,setsecond]=useState(0);
  const [hour,sethour]=useState(0);
  const [min,setmin]=useState(0);
  const [start,setstart]=useState(false);
  const [reset,setreset]=useState(false);

  useEffect(()=>{
     if(start){
       var time=setInterval(()=>{
          setsecond(second+1);
       },1000)
     }
     if(reset){
        sethour(0);
        setsecond(0);
        setmin(0);
        setreset(false);
        setstart(false);
     }
     return ()=>clearInterval(time);
  },[second,start,reset])

 if(second>=59){
    setsecond(0);
    setmin(min+1);
 }

 if(min>=59){
    setmin(0);
    sethour(hour+1);
 }

  return (
    <>
    <div className='flex justify-center mt-80 text-3xl'>
      Time-{hour}H:{min}M:{second}S
    </div>
    <div className='flex gap-10 justify-center mt-10 '>
   {!start && (
  <button
    className="bg-red-400 text-2xl rounded text-amber-50 p-1 shadow-2xl cursor-pointer"
    onClick={() => setstart(true)}
  >
    Start
  </button>
)}
     <button className='bg-yellow-400 text-2xl rounded text-amber-50 p-1 shadow-2xl cursor-pointer' onClick={()=>setstart(false)}>Stop</button>
      <button className='bg-blue-400 text-2xl rounded text-amber-50 p-1 shadow-2xl cursor-pointer' onClick={()=>setreset(true)}>Reset</button>
    </div>
    </>
  )
}

export default App
