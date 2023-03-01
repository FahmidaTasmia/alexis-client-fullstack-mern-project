import React, { useEffect } from 'react'
import brand1 from '../../asset/download1.png'
import brand2 from '../../asset/download2.png'
import brand3 from '../../asset/download3.png'
import brand4 from '../../asset/download4.png'
import brand5 from '../../asset/download5.png'
import brand6 from '../../asset/download6.png'
import brand7 from '../../asset/download7.png'
import brand8 from '../../asset/download8.png'
import home from '../../asset/homesc.png'
import 'aos/dist/aos.css';
import Aos from 'aos';

function Brand() {
    useEffect(()=>{
        Aos.init({duration:3000})
      },[])
  return (
    <div className='bg-black p-24' style={{backgroundImage:(`url(${home})`)}} data-aos="zoom-in-up">
      <div className='max-w-screen-xl mx-auto'>
      <div className='text-start  px-3'data-aos="fade-right" >
      
      <h2 className='text-[#c5a47e] tracking-[10px] font-semibold text-2xl pt-8 uppercase'>CORPORATION</h2>

      <h2 className=' text-3xl md:tracking-[5px] font-bold  uppercase pb-16'>OUR CLIENTS & PARTNERS.</h2>
 
      
      </div>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5' data-aos="fade-up">
            <div><img src={brand1} alt="" /></div>
            <div><img src={brand2} alt="" /></div>
            <div><img src={brand3} alt="" /></div>
            <div><img src={brand4} alt="" /></div>
            <div><img src={brand5} alt="" /></div>
            <div><img src={brand6} alt="" /></div>
            <div><img src={brand7} alt="" /></div>
            <div><img src={brand8} alt="" /></div>
        </div>
      </div>
    </div>
  )
}

export default Brand
