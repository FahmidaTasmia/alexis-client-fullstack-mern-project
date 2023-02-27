import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import '../Home/Home.css'
import 'aos/dist/aos.css';
import Aos from 'aos';
function ServiceCard({service}) {
const{art,name,shortdes}=service;
useEffect(()=>{
    Aos.init({duration:2000})
  },[])
  return (
    <div className='text-white pb-20 pt-10 px-10 bg-[#262626] z-30 ' data-aos="fade-up" >
    
     <div className='pb-2'>
     <img src={art}  alt="" className='w-20 h-20 self-center' />
     </div>
      <h4 className='text-start  py-3 numb tracking-[2px] '>{name}</h4>
      <p className='text-start pb-5'>{shortdes}</p>
     <div className='relative '>
     <Link className='btn bg-[#c5a47e] rounded-none curve-btn hover:bg-transparent hover:text-[#c5a47e] uppercase'>View Details </Link>
     </div>
    
    </div>
  )
}

export default ServiceCard
