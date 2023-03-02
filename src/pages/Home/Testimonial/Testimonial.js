import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import './Testimonial.css'
import person from '../../../asset/p2.jpg'
import person1 from '../../../asset/p3.jpg'
import person2 from '../../../asset/p1.jpg'
import person3 from '../../../asset/p4.jpg'

import colon from '../../../asset/quote.svg'
import tes from '../../../asset/Vecto.png'
import { Autoplay, Pagination, Navigation } from "swiper";


function Testimonial() {
 
  return (
    <div className='h-min-screen relative' style={{backgroundImage:(`url(${tes})`)}} >
      <div className="absolute inset-0  bg-white opacity-80"></div>
       <>
      <Swiper 
        spaceBetween={30}
        centeredSlides={false}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          color:'#c5a47e'
        
        }}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide> 
        <div className='relative md:p-32  py-32 px-5' style={{backgroundImage:(`url(${tes})`)}}>
            <div className="absolute inset-0  bg-white opacity-80"></div>
            <div className='max-w-screen-xl mx-auto'>
            <div className='grid lg:grid-cols-2 gap-12'>
            <div className='border-8 m-auto md:p-20 p-12 relative '>
                <img src={colon} alt="" className=' w-32 z-30 bg-white mx-8 absolute top-[-70px]'/>
               <p className='text-start font-serif leading-8 uppercase'>
               I just love their design for all stunning details. You must know what can you do for a project before taking it, but with Alexis, the sky is the limit.
               </p>
               <div className='flex gap-5 mt-5'>
                <img src={person} alt="" className='w-20 h-20 img-fluid rounded-full border-2 border-[#c5a47e]' />
                <div className='self-center text-start'>
                    <h2 className='text-[#c5a47e]'>MICHLE JOHN</h2>
                    <p className='font-semibold'>Envato Customer</p>
                </div>
               </div>
            </div>
            {/* 2// */}
            <div className='border-8 m-auto md:p-20 p-12 relative lg:mt-0 mt-16'>
                <img src={colon} alt="" className=' w-32 z-30 bg-white mx-8 absolute top-[-70px]'/>
               <p className='text-start font-serif leading-8 uppercase'>
               I just love their design for all stunning details. You must know what can you do for a project before taking it, but with Alexis, the sky is the limit.
               </p>
               <div className='flex gap-5 mt-5'>
                <img src={person1} alt="" className='w-20 h-20 img-fluid rounded-full border-2 border-[#c5a47e]' />
                <div className='self-center text-start'>
                    <h2 className='text-[#c5a47e]'>ALEX PHI</h2>
                    <p className='font-semibold'>Envato Customer</p>
                </div>
               </div>
            </div>
            </div>
            </div>
            </div>
            </SwiperSlide>
        <SwiperSlide>  
        <div className='relative md:p-32  py-32 px-5' style={{backgroundImage:(`url(${tes})`)}}>
            <div className="absolute inset-0  bg-white opacity-80"></div>
            <div className='max-w-screen-xl mx-auto'>
            <div className='grid lg:grid-cols-2 gap-12'>
            <div className='border-8 m-auto md:p-20 p-12 relative'>
                <img src={colon} alt="" className=' w-32 z-30 bg-white mx-8 absolute top-[-70px]'/>
               <p className='text-start font-serif leading-8 uppercase'>
               I just love their design for all stunning details. You must know what can you do for a project before taking it, but with Alexis, the sky is the limit.
               </p>
               <div className='flex gap-5 mt-5'>
                <img src={person2} alt="" className='w-20 h-20 img-fluid rounded-full border-2 border-[#c5a47e]' />
                <div className='self-center text-start'>
                    <h2 className='text-[#c5a47e]'>RICHARD MARLIN</h2>
                    <p className='font-semibold'>Envato Customer</p>
                </div>
               </div>
            </div>
            {/* 2// */}
            <div className='border-8 m-auto md:p-20 p-12 relative lg:mt-0 mt-16'>
                <img src={colon} alt="" className=' w-32 z-30 bg-white mx-8 absolute top-[-70px]'/>
               <p className='text-start font-serif leading-8 uppercase'>
               I just love their design for all stunning details. You must know what can you do for a project before taking it, but with Alexis, the sky is the limit.
               </p>
               <div className='flex gap-5 mt-5'>
                <img src={person3} alt="" className='w-20 h-20 img-fluid rounded-full border-2 border-[#c5a47e]' />
                <div className='self-center text-start'>
                    <h2 className='text-[#c5a47e]'>AUGUST STORM</h2>
                    <p className='font-semibold'>Envato Customer</p>
                </div>
               </div>
            </div>
            </div>
            </div>
            </div>
            </SwiperSlide>
        <SwiperSlide> 
        <div className='relative md:p-32  py-32 px-5' style={{backgroundImage:(`url(${tes})`)}}>
            <div className="absolute inset-0  bg-white opacity-80"></div>
            <div className='max-w-screen-xl mx-auto'>
            <div className='grid lg:grid-cols-2 gap-12'>
            <div className='border-8 m-auto md:p-20 p-12 relative'>
                <img src={colon} alt="" className=' w-32 z-30 bg-white mx-8 absolute top-[-70px]'/>
               <p className='text-start font-serif leading-8 uppercase'>
               I just love their design for all stunning details. You must know what can you do for a project before taking it, but with Alexis, the sky is the limit.
               </p>
               <div className='flex gap-5 mt-5'>
                <img src={person} alt="" className='w-20 h-20 img-fluid rounded-full border-2 border-[#c5a47e]' />
                <div className='self-center text-start'>
                    <h2 className='text-[#c5a47e]'>MICHLE JOHN</h2>
                    <p className='font-semibold'>Envato Customer</p>
                </div>
               </div>
            </div>
            {/* 2// */}
            <div className='border-8 m-auto md:p-20 p-12 relative lg:mt-0 mt-16'>
                <img src={colon} alt="" className=' w-32 z-30 bg-white mx-8 absolute top-[-70px]'/>
               <p className='text-start font-serif leading-8 uppercase'>
               I just love their design for all stunning details. You must know what can you do for a project before taking it, but with Alexis, the sky is the limit.
               </p>
               <div className='flex gap-5 mt-5'>
                <img src={person1} alt="" className='w-20 h-20 img-fluid rounded-full border-2 border-[#c5a47e]' />
                <div className='self-center text-start'>
                    <h2 className='text-[#c5a47e]'>ALEX PHI</h2>
                    <p className='font-semibold'>Envato Customer</p>
                </div>
               </div>
            </div>
            </div>
            </div>
            </div>
            </SwiperSlide>
        
      </Swiper>
    </>
    </div>
  )
}

export default Testimonial
