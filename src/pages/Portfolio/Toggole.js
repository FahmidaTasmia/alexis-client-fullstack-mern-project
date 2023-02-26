import React, { useState } from 'react'
import Features from './Features';
import Interior from './Interior';


function Toggole() {
    const [toggle, setToggle] = useState(true);
    const toggleClass = " transform translate-x-5";
  return (
    <div >
      <ul className='bg-gray-200 w-96  m-auto my-8 ' >
      <li className='inline-block    font-bold '>  <button  onClick={() => {
            setToggle(!toggle);
          }} className="px-4 py-1  font-semibold  transition-all duration-500 ease-in-out text-2xl   " >
           All Jobs
          </button></li>
        <li className='inline-block '>
        <button  onClick={() => {
            setToggle(!toggle)}}  className={"px-4 py-1 text-sm md:text-2xl font-semibold  transition-all duration-500 ease-in-out " +
              (toggle ? null : toggleClass)}>
            Explore Category 
          </button>
         
        </li>
       
      </ul>

      <div>
      {
         toggle?<Features></Features>:<Interior></Interior>
     }
      </div>
    </div>
  )
}

export default Toggole
