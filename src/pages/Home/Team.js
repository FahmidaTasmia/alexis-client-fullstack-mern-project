import React from 'react'
import { Link } from 'react-router-dom'
import team1 from '../../asset/p1.jpg'
import team2 from '../../asset/p2.jpg'
import team3 from '../../asset/p3.jpg'
import team4 from '../../asset/p4.jpg'
import vector from '../../asset/dots.png'
import { FaFacebookF,FaInstagram,FaLinkedinIn } from "react-icons/fa";
function Team() {
  return (
    <div className='bg-black md:p-24 p-5 relative' style={{backgroundImage:(`url(${vector})`)}}>
         <div className="absolute inset-0  bg-black opacity-60"></div>
         <div className='text-start px-3 relative' data-aos="fade-right">
      
      <h2 className='text-[#c5a47e] md:tracking-[10px] tracking-[5px] font-semibold text-2xl  uppercase'>TEAM MEMBER</h2>

      <h2 className='z-20 md:text-5xl text-2xl tracking-[5px] font-bold text-white uppercase pb-16'>MEET OUR CREATIVE TEAM.</h2>
 
      
      </div>
     <div className='max-w-screen-xl mx-auto' >
     <div className='grid lg:grid-cols-4 md:grid-cols-2 gap-8' data-aos="fade-up">

     <div className='relative border p-5   border-[#c5a47e]   transition-all duration-500  ease-in-out' >
    <div className=''>
        <img className=' w-52' src={team1} alt="" />
    </div>
    <div className='text-start'>
        <h2 className='uppercase font-semibold text-[#c5a47e] tracking-[2px] mt-5'>Rechard Marlin</h2>
        <h2 className=' font-semibold text-white mt-3 tracking-widest'>Managing Director</h2>
    </div>
    <div className='flex gap-3 mt-3 '>
    <Link className=''><FaFacebookF className='text-xl text-[#c5a47e]  shadow-xl '></FaFacebookF></Link>
    <Link className=''><FaInstagram className='text-xl text-[#c5a47e]  shadow-xl '></FaInstagram></Link>
    <Link className=''><FaLinkedinIn className='text-xl text-[#c5a47e]  shadow-xl '></FaLinkedinIn></Link>
    </div>
</div>

{/* //2 */}
<div className='relative border p-5   border-[#c5a47e]   transition-all duration-500  ease-in-out'>
    <div className=''>
        <img className=' w-52' src={team2} alt="" />
    </div>
    <div className='text-start'>
        <h2 className='uppercase font-semibold text-[#c5a47e] tracking-[2px] mt-5'>MICHEL JHON</h2>
        <h2 className=' font-semibold text-white mt-3 tracking-widest'>Interior Designer</h2>
    </div>
    <div className='flex gap-3 mt-3 '>
    <Link className=''><FaFacebookF className='text-xl text-[#c5a47e]  shadow-xl '></FaFacebookF></Link>
    <Link className=''><FaInstagram className='text-xl text-[#c5a47e]  shadow-xl '></FaInstagram></Link>
    <Link className=''><FaLinkedinIn className='text-xl text-[#c5a47e]  shadow-xl '></FaLinkedinIn></Link>
    </div>
</div>



{/* //3 */}

<div className='relative border p-5   border-[#c5a47e]   transition-all duration-500  ease-in-out'>
    <div className=''>
        <img className=' w-52' src={team3} alt="" />
    </div>
    <div className='text-start'>
        <h2 className='uppercase font-semibold text-[#c5a47e] tracking-[2px] mt-5'>August storm</h2>
        <h2 className=' font-semibold text-white mt-3 tracking-widest'>Marketing Manager</h2>
    </div>
    <div className='flex gap-3 mt-3 '>
    <Link className=''><FaFacebookF className='text-xl text-[#c5a47e]  shadow-xl '></FaFacebookF></Link>
    <Link className=''><FaInstagram className='text-xl text-[#c5a47e]  shadow-xl '></FaInstagram></Link>
    <Link className=''><FaLinkedinIn className='text-xl text-[#c5a47e]  shadow-xl '></FaLinkedinIn></Link>
    </div>
</div>

{/* //4 */}
<div className='relative border p-5   border-[#c5a47e]   transition-all duration-500  ease-in-out'>
    <div className=''>
        <img className=' w-52' src={team4} alt="" />
    </div>
    <div className='text-start'>
        <h2 className='uppercase font-semibold text-[#c5a47e] tracking-[2px] mt-5'>Robert front</h2>
        <h2 className=' font-semibold text-white mt-3 tracking-widest'>General Manager</h2>
    </div>
    <div className='flex gap-3 mt-3 '>
    <Link className=''><FaFacebookF className='text-xl text-[#c5a47e]  shadow-xl '></FaFacebookF></Link>
    <Link className=''><FaInstagram className='text-xl text-[#c5a47e]  shadow-xl '></FaInstagram></Link>
    <Link className=''><FaLinkedinIn className='text-xl text-[#c5a47e]  shadow-xl '></FaLinkedinIn></Link>
    </div>
</div>

</div>
     </div>
    </div>
  )
}

export default Team
