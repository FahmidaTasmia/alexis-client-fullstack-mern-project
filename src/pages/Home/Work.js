import React, { useEffect } from 'react'
import work1 from '../../asset/0a.jpg'
import work2 from '../../asset/0b.jpg'
import work3 from '../../asset/0a.jpg'
import work4 from '../../asset/0d.jpg'
import line from '../../asset/dots.png'
import 'aos/dist/aos.css';
import Aos from 'aos';
function Work() {
    useEffect(()=>{
        Aos.init({duration:3000})
      },[])
  return (
    <div className='bg-black relative py-20' style={{backgroundImage:(`url(${line})`)}}>
       <div className="absolute inset-0  bg-black opacity-40"></div>
      <div className='max-w-screen-xl mx-auto p-10'>
      <div className='text-start px-3 relative' data-aos="fade-right">
      
      <h2 className='text-[#c5a47e] md:tracking-[10px] tracking-[5px] font-semibold text-2xl  uppercase'>Work Process</h2>

      <h2 className='z-20 md:text-5xl text-2xl tracking-[5px] font-bold text-white uppercase pb-16'>HOW WE DO IT.</h2>
 
      
      </div>
        <div className='max-w-screen-xl mx-auto'>
        <div className='grid lg:grid-cols-4 md:grid-cols-2 px-5  'data-aos="fade-up">
         <div className='relative'>
         <div className='coulmn mb-5 '>
          <div className='relative text-white  '>
           <div className='bg-img rounded-full ' style={{backgroundImage:(`url(${work1})`)}}>
                <h3>01</h3>
            </div>
            <h2 className='font-bold text-xl py-3'>CONCEPT</h2>
            <p className='text-gray-400'> Approach that serves as the  basis <br /> for the design</p>
           </div>
          </div>
         </div>
           {/* 2// */}
           <div className='relative'>
         <div className='coulmn mb-5 '>
          <div className='relative text-white  '>
           <div className='bg-img rounded-full ' style={{backgroundImage:(`url(${work2})`)}}>
                <h3>02</h3>
            </div>
            <h2 className='font-bold text-xl py-3 uppercase'>Design Process</h2>
            <p className='text-gray-400'>Figuring out what you need to do, <br /> then doing it.</p>
           </div>
          </div>
         </div>
           {/* 3// */}
           <div className='relative'>
         <div className='coulmn mb-5  '>
          <div className='relative text-white  '>
           <div className='bg-img rounded-full ' style={{backgroundImage:(`url(${work3})`)}}>
                <h3>03</h3>
            </div>
            <h2 className='font-bold text-xl py-3 uppercase'>Supervision</h2>
            <p className='text-gray-400'>'Comparing progress with a predetermined plan.</p>
           </div>
          </div>
         </div>
           {/* 4// */}
           <div className='relative text-white '>
           <div className='bg-img rounded-full ' style={{backgroundImage:(`url(${work4})`)}}>
                <h3>04</h3>
            </div>
            <h2 className='font-bold text-xl py-3'>Budget Planning</h2>
            <p className='text-gray-400'> This is an overview of planning your design as well as building budget.</p>
           </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Work
