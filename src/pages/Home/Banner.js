import React, { useEffect } from 'react'

import banner from '../../asset/interior.jpg'
import { Link } from 'react-router-dom'
import './Home.css'
import 'aos/dist/aos.css';
import Aos from 'aos';
function Banner() {
  useEffect(()=>{
    Aos.init({duration:2000})
  },[])
  return (
    <div>
      

        {/* md&sm device */}
       <div className='lg:hidden block  ' >
        <div className='md:flex  bg-black '>
        <div className='md:w-[50%]' >
            <img className='w-full h-full' src={banner} alt="" />
        </div>
        <div className=' m-auto py-10 px-3 text-white' >
          <div data-aos="fade-up">
          <h1 className='text-[#c5a47e] tracking-[10px]'>INNOVATIVE</h1>
            <h2 className='font-bold text-3xl tracking-widest'>INTERIOR DESIGN</h2>
            <p className='text-white mb-5 mt-3'>Right design and Right ideas matter a lot in interior design. 
           A style that makes a statement</p>
           <Link className='btn rounded-none  bg-transparent hover:bg-[#c5a47e] border-[#c5a47e] '>Explore More</Link>
          </div>
        </div>
       
        </div>
       </div>
    </div>
  )
}

export default Banner
