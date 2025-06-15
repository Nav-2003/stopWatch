import React, { useState } from 'react'

function App() {
  const [text,settext]=useState('');
  const [todo,addtodo]=useState([]);

  function deleteTodo(idx){
    addtodo(todo.filter((_,i)=>i!==idx))
  }

  return (
    <>
    <div className='flex justify-center mt-10 gap-10'>
        <input placeholder='Add Todos'  type='text'
        value={text} onChange={(e)=>settext(e.target.value)}
        className='border-slate-400 border-2 rounded w-70 hover:scale-104 p-2 transition transform duration-300'/>
        <button onClick={()=>{addtodo([...todo,text]);settext('');}}
        className='bg-blue-600 p-2 rounded-xl text-amber-50 w-20 cursor-pointer hover:bg-blue-800 transition transform duration-300 hover:scale-103'>Add </button>
    </div>
     <ul className='flex flex-col items-center mt-8 mr-50'>{
      todo.map((t,i)=>(
        <div key={i} className='flex gap-5 hover:scale-103 transition transform duration-300 '>
        <li  className='text-2xl   m-1  rounded p-1 h'>{t}</li>
        <button onClick={()=>deleteTodo(i)}
        className='
        bg-blue-500 rounded p-2 text-amber-50 h-10 cursor-pointer hover:bg-blue-800 transition transform duration-300 '>Delete</button>
        </div>
      ))
     }
     </ul>
    </>

  )
}

export default App
