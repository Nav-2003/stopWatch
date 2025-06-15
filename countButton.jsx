import React, { useEffect, useState } from 'react'

function App() {
  const [count,setcount]=useState(10);
  const [c,setc]=useState(0);

  useEffect(()=>{
  if(count>=1){
    setTimeout(()=>{
      setcount(count-1);
    },1000)
  }
  },[count])
  return (
    <>
    <div className='flex justify-center text-3xl items-center mt-70'>
      Time Left:<span className='ml-2 mr-1 text-gray-600'>{count} </span>Seconds
    </div>
      <h1 className='ml-[45%] text-] text-3xl mt-5'>Total no. {c}</h1>
       {count&&(<button onClick={()=>setc(c+1)}
       className='ml-[45%] text-] text-3xl mt-5 bg-red-600  rounded-xl px-8 py-1 text-amber-50 cursor-pointer'>+</button>)}
  
    </>
  )
}

export default App
