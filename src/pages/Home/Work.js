import React, { useEffect } from 'react'
import work1 from '../../asset/0a.jpg'
import work2 from '../../asset/0b.jpg'
import work3 from '../../asset/0d.jpg'
import work4 from '../../asset/0a.jpg'
import 'aos/dist/aos.css';
import Aos from 'aos';
function Work() {
    useEffect(()=>{
        Aos.init({duration:3000})
      },[])
  return (
    <div className='bg-black py-20'>
      <div className='max-w-screen-xl mx-auto p-10'>
      <div className='text-start px-3' data-aos="fade-right">
      
      <h2 className='text-[#c5a47e] tracking-[10px] font-semibold text-2xl  uppercase'>Work Process</h2>

      <h2 className=' text-5xl tracking-[5px] font-bold text-white uppercase pb-16'>HOW WE DO IT.</h2>
 
      
      </div>
        <div className='md:w-[65%] mx-auto'>
        <div className='grid lg:grid-cols-4 grid-cols-2 gap-16 'data-aos="fade-up">
           <div className='relative text-white'>
           <div className='bg-img rounded-full ' style={{backgroundImage:(`url(${work1})`)}}>
                <h3>01</h3>
            </div>
            <h2 className='font-bold text-xl py-3'>CONCEPT</h2>
            <p>Nulla metus metus ullamcorper  vel </p>
           </div>
           {/* 2// */}
           <div className='relative text-white'>
           <div className='bg-img rounded-full ' style={{backgroundImage:(`url(${work2})`)}}>
                <h3>02</h3>
            </div>
            <h2 className='font-bold text-xl py-3'>DESIGN</h2>
            <p>Nulla metus metus ullamcorper  vel </p>
           </div>
           {/* 3// */}
           <div className='relative text-white '>
           <div className='bg-img rounded-full ' style={{backgroundImage:(`url(${work3})`)}}>
                <h3>03</h3>
            </div>
            <h2 className='font-bold text-xl py-3'>SUPERVISION</h2>
            <p>Nulla metus metus ullamcorper  vel </p>
           </div>
           {/* 4// */}
           <div className='relative text-white '>
           <div className='bg-img rounded-full ' style={{backgroundImage:(`url(${work4})`)}}>
                <h3>04</h3>
            </div>
            <h2 className='font-bold text-xl py-3'>PLANNING</h2>
            <p>Nulla metus metus ullamcorper  vel </p>
           </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Work
