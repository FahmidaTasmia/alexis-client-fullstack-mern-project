import React, { useEffect } from 'react'
import Project1 from '../../asset/project1.png'
import Project2 from '../../asset/project2.png'
import Project3 from '../../asset/project3.png'
import '../Home/Home.css'
import 'aos/dist/aos.css';
import Aos from 'aos';

function Features() {
  useEffect(()=>{
    Aos.init({duration:2000})
  },[])
  return (
 <div className='bg-[#181818]'>
   <div className='max-w-screen-xl mx-auto'>
  
      <div className='grid md:grid-cols-2 gap-5 md:gap-8 md:p-3' >
     <div className='m-auto '>
    
     <div className='py-5 text-start relative'>
     <div className='tex-bg  text-white hidden md:block'>Features</div>
     <h2 className='text-[#c5a47e] tracking-[10px] font-semibold text-2xl mt-8 '>PROJECTS</h2>
     <h2 className=' text-3xl tracking-[5px] font-bold text-white uppercase'>Featured Work.</h2>
    
     </div>
     <div data-aos="zoom-in-up">
     <img className='relative inset-0  bg-black opacity-70' src={Project1} alt="" />
     </div>
    
     </div>


     <div className='grid gap-5 md:gap-8' >
      <div className='my-8'></div>
    <div className='relative inset-0  bg-black opacity-60 ' data-aos="zoom-in-left"> <img  src={Project2} alt="" /></div>
    <div data-aos="zoom-in-up"> <img className='relative inset-0  bg-black  opacity-60' src={Project3} alt="" /></div>
     </div>
    </div>
  </div>
 </div>
  )
}

export default Features
