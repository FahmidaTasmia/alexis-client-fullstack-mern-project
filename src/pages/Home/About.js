import React from 'react'
import { Link } from 'react-router-dom'

import './Home.css'
function About() {
  return (
   <div className='bg-[#181818] '>
   
    <div className='max-w-screen-xl mx-auto py-20 '>
     <div className='grid md:grid-cols-2 '>
        <div className='text-start relative'>
            <h2 className='text-white text-[50px] font-bold uppercase'>Creative Solutions <br /> By Professional <br /> Designers</h2>
            <p className='text-gray-400 pb-6'>Beauty, in architecture, lies in the performance and behavior of architectural structures and façade elements as a component. The structural form should have an aesthetic appeal while being simultaneously driven by engineering considerations.</p>
            <Link className='btn bg-[#c5a47e] rounded-none curve-btn hover:bg-transparent hover:text-[#c5a47e] '>Explore More </Link>
        </div>

        {/* //exp div */}
        <div className='z-30'>
        <div className='exp text-white'>
      <h4 >
        25
      </h4>
      <h5>YEARS OF EXPERIENCE</h5>
      <span >Since 1996</span>
    </div>
        </div>

     </div>
   </div>
   </div>
  )
}

export default About
