import { useState } from 'react'
import './App.css'
import { useEffect } from 'react';

function App() {
  const [name,setName] = useState("");
  const [submittedName,setSubmittedName] = useState("");
  const [greetingWithTime,setGreetingWithTime] = useState("");
  const [bgColor,setBgColor] = useState("bg-gray-200")
  const [time,setTime] = useState(new Date());
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    },1000);
    // used to clean up the memory
    return () => clearInterval(timer);
  },[]);

  // Good morning, Good afternoon, Good evening, Good night and also added background color change with time
  useEffect(() => {
    const currentHour = time.getHours(); // only to avoid scope bugs
    if(currentHour < 5) {
      setGreetingWithTime("Good night");
      setBgColor("bg-gray-900 text-white");
    }else if(currentHour < 12) {
      setGreetingWithTime("Good morning");
      setBgColor("bg-yellow-100");
    }else if(currentHour < 17) {
      setGreetingWithTime("Good Afternoon");
      setBgColor("bg-blue-200");
    }else if(currentHour < 20) {
      setGreetingWithTime("Good evening");
      setBgColor("bg-orange-300");
    }else {
      setGreetingWithTime("Good night");
      setBgColor("bg-gray-900 text-white");
    }
  }, [time]);

  // AM to PM format
  const hours = time.getHours();
  const minutes = time.getMinutes().toString().padStart(2,"0");
  const seconds = time.getSeconds().toString().padStart(2,"0");

  // handel cahnges with input
  const handelChange = (event) => {
    setName(event.target.value)
  }

  // handel the name recived in the input box so that the name is displayed in the output only after the button is clciked
  const handelSubmitt = () => {
    setSubmittedName(name);
    setName("");
  }

  // reset button functionality
  const resetButton = () => {
    setSubmittedName("");
  }
  return (
    <>
      <div className={`min-h-[100vh] flex flex-col px-10 pt-5 ${bgColor}`}>
        <h1 className='text-center text-3xl my-9'>Greeting App</h1>
        <h2>Current Time: <span>{`${hours}:${minutes}:${seconds} ${hours >= 12 ? "PM" : "AM"}`}</span></h2>
        
        <input type="text" placeholder='enter your name' value={name} onChange={handelChange} className='border w-96 px-4 py-2 rounded-lg my-4 dark:text-gray-700'/>
        <div className='min-h-14 my-2'>
          {
            submittedName && (
              <h2>Hello {submittedName}, {greetingWithTime}</h2>
            )
          }
        </div>
        <div className='flex justify-between items-center'>
          <button className='px-4 py-2 bg-white font-bold text-lg rounded-lg shadow-xl active:-translate-y-1 dark:text-black' onClick={handelSubmitt}>Click to generate</button>
          <button className='px-4 py-2 bg-red-400 font-bold text-lg rounded-lg shadow-xl active:-translate-y-1' onClick={resetButton}>Reset</button>
        </div>
      </div>
    </>
  )
}

export default App
