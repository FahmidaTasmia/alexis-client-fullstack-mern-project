import React, { useEffect } from 'react'
import background from '../../asset/patern.png'
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
        {/* lg device */}
        <div className='hidden lg:block'>
        <div className='flex min-h-screen' style={{backgroundImage:(`url(${background})`)}}>
        <div className="absolute inset-0  bg-black opacity-70"></div>
      <div className='w-[60%] relative  left-72 z-30 m-auto text-start' data-aos="fade-right">
        <h2 className='text-[#c5a47e] tracking-[22px] text-2xl '>INNOVATIVE</h2>
        <h2 className='text-[80px] tracking-[5px] font-bold text-white'>MODERN DESIGN</h2>
        <p className='text-white mb-8'>Right design and Right ideas matter a lot in interior design. 
        <br /> A style that makes a statement</p>
        <Link className='btn bg-[#c5a47e] rounded-none curve-btn hover:bg-transparent hover:text-[#c5a47e] '>Explore More </Link>
      </div>
      <div className='z-10 w-[60%] '>
      <div className="absolute inset-0  bg-black opacity-50"></div>
        <img className='img-fluid h-full'  src={banner} alt="" />
      </div>
    </div>
        </div>

        {/* md&sm device */}
       <div className='lg:hidden block min-h-screen '>
        <div className='md:flex  bg-black '>
        <div className='md:w-[50%]' >
            <img className='w-full h-full' src={banner} alt="" />
        </div>
        <div className=' m-auto py-10  text-white'>
            <h1 className='text-[#c5a47e] tracking-[10px]'>INNOVATIVE</h1>
            <h2 className='font-bold text-3xl tracking-widest'>INTERIOR DESIGN</h2>
            <p className='text-white mb-5 mt-3'>Right design and Right ideas matter a lot in interior design. 
           A style that makes a statement</p>
           <Link className='btn rounded-none  bg-transparent hover:bg-[#c5a47e] border-[#c5a47e] '>Explore More</Link>
        </div>
       
        </div>
       </div>
    </div>
  )
}

export default Banner
