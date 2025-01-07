
import { useState } from 'react'
import './App.css'
import { useEffect } from 'react';

function App() {
  const [name,setName] = useState("");
  const [time,setTime] = useState(new Date());
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    },1000);
    // used to clean up the memory
    return () => clearInterval(timer);
  },[]);

  // AM to PM format
  const hours = time.getHours();
  const minutes = time.getMinutes().toString().padStart(2,"0");
  const seconds = time.getSeconds().toString().padStart(2,"0");

  return (
    <>
      <div className='min-h-[100vh] flex flex-col px-10 pt-5 bg-gray-200'>
        <h1 className='text-center text-3xl my-9'>Greeting App</h1>
        <h2>Current Time: <span>{`${hours}:${minutes}:${seconds} ${hours >= 12 ? "PM" : "AM"}`}</span></h2>
        <div>
          <p>Choose Greeting Style &#40;optional&#41;</p>
        </div>
        <input type="text" placeholder='enter your name' className='border w-96 px-4 py-2 rounded-lg my-4'/>
        <div className='min-h-14 my-2'>
          <h2>Hello {name}, good morning or good afternoon or goodevening or good night</h2>
        </div>
        <div className='flex justify-between items-center'>
          <button className='px-4 py-2 bg-white font-bold text-lg rounded-lg shadow-xl active:-translate-y-1 '>Click to generate</button>
          <button className='px-4 py-2 bg-red-400 font-bold text-lg rounded-lg shadow-xl active:-translate-y-1'>Reset</button>
        </div>
      </div>
    </>
  )
}

export default App
