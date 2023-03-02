import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import 'aos/dist/aos.css';
import Aos from 'aos';
function AllServiceCard({service}) {
    const{art,name,shortdes,_id}=service;
    useEffect(()=>{
        Aos.init({duration:2000})
      },[])
  return (
    <div className='text-white pb-20 pt-10 px-10 bg-[#262626] z-30 '  >
    
     <div className='pb-2'>
     <img src={art}  alt="" className='w-20 h-20 self-center' />
     </div>
      <h4 className='text-start md:text-[40px] text-[32px]  py-3 numb tracking-[2px] '>{name}</h4>
      <p className='text-start pb-5'>{shortdes}</p>
     <div className='relative '>
     <Link to={`/services/${_id}`} className='btn  bg-[#c5a47e] rounded-none curve-btn hover:bg-transparent hover:text-[#c5a47e] uppercase text-black'>View Details </Link>
     </div>
    
    </div>
  )
}

export default AllServiceCard
