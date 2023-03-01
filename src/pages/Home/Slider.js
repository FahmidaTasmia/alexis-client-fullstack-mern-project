import React from 'react'
import '../Home/Testimonial/Testimonial.css'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
import { Link } from 'react-router-dom';
import background from '../../asset/patern.png'
import banner1 from '../../asset/interior.jpg'
import banner2 from '../../asset/slide.jpg'
import banner3 from '../../asset/slide2.jpg'
function Slider() {
  return (
    <div>
       <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide> 
            <div className='hidden   lg:block'>
        <div className='flex min-h-screen relative z-40' style={{backgroundImage:(`url(${background})`)}}>
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
        <img className='img-fluid h-full'  src={banner1} alt="" />
      </div>
    </div>
        </div>
        </SwiperSlide>
       
        <SwiperSlide> 
            <div className='hidden   lg:block'>
        <div className='flex min-h-screen relative z-40' style={{backgroundImage:(`url(${background})`)}}>
        <div className="absolute inset-0  bg-black opacity-70"></div>
      <div className='w-[60%] relative  left-72 z-30 m-auto text-start' data-aos="fade-right">
        <h2 className='text-[#c5a47e] tracking-[22px] text-2xl '>INTERIOR</h2>
        <h2 className='text-[80px] tracking-[5px] font-bold text-white'>DESIGN AGENCY</h2>
        <p className='text-white mb-8'>Right design and Right ideas matter a lot in interior design. 
        <br /> A style that makes a statement</p>
        <Link className='btn bg-[#c5a47e] rounded-none curve-btn hover:bg-transparent hover:text-[#c5a47e] '>Explore More </Link>
      </div>
      <div className='z-10 w-[60%] '>
      <div className="absolute inset-0  bg-black opacity-50"></div>
        <img className='img-fluid h-full'  src={banner2} alt="" />
      </div>
    </div>
        </div>
        </SwiperSlide>
      
        <SwiperSlide> 
            <div className='hidden   lg:block'>
        <div className='flex min-h-screen relative z-40' style={{backgroundImage:(`url(${background})`)}}>
        <div className="absolute inset-0  bg-black opacity-70"></div>
      <div className='w-[60%] relative  left-72 z-30 m-auto text-start' data-aos="fade-right">
        <h2 className='text-[#c5a47e] tracking-[22px] text-2xl '>ELEGANT  &</h2>
        <h2 className='text-[80px] tracking-[5px] font-bold text-white'> UNIQUE DESIGN</h2>
        <p className='text-white mb-8'>Right design and Right ideas matter a lot in interior design. 
        <br /> A style that makes a statement</p>
        <Link className='btn bg-[#c5a47e] rounded-none curve-btn hover:bg-transparent hover:text-[#c5a47e] '>Explore More </Link>
      </div>
      <div className='z-10 w-[60%] '>
      <div className="absolute inset-0  bg-black opacity-50"></div>
        <img className='img-fluid h-full'  src={banner3} alt="" />
      </div>
    </div>
        </div>
        </SwiperSlide>
      </Swiper>
    </>
    </div>
  )
}

export default Slider
