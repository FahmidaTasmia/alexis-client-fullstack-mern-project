import React from 'react'
import skill from '../../asset/skill.jpg'

function Skill() {
  return (
    <div className='bg-black md:p-32 p-5  relative'  style={{backgroundImage:(`url(${skill})`),backgroundSize:'cover',backgroundPosition:'center'}}>
          <div className="absolute inset-0  bg-black opacity-70"></div>
         
        <div className='max-w-screen-xl mx-auto'>
        <div className='text-center  relative' data-aos="fade-right">
        <h2 className='text-[#c5a47e] md:tracking-[5px]'> SKILL WE Have</h2>
        <h2 className='text-white text-xl  md:text-4xl font-serif md:tracking-[4px] my-4'> Providing Customized Design Solutions</h2>

        </div>
        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-8 lg:mt-16 mt-8' data-aos="fade-up" >
        <div className='relative '>
        <div className="radial-progress " style={{ "--value": "95", "--size": "10rem", "--thickness": "2px", "color":"#c5a47e", "background":"rgba(255, 255, 255, 0.1)" }}>
        <span className='text-white text-[28px] font-thin' >95%</span>
        </div>
        <p className='text-white tracking-[5px] py-3'> ARCHITECTURE</p>
        </div>
        {/* //2 */}
        <div className='relative '>
        <div className="radial-progress " style={{ "--value": "80", "--size": "10rem", "--thickness": "2px", "color":"#c5a47e", "background":"rgba(255, 255, 255, 0.1)" }}>
        <span className='text-white text-[28px] font-thin' >80%</span>
        </div>
        <p className='text-white tracking-[5px] py-3'>INTERIOR DESIGN</p>
        </div>
        {/* //3 */}
        <div className='relative '>
        <div className="radial-progress " style={{ "--value": "90", "--size": "10rem", "--thickness": "2px", "color":"#c5a47e", "background":"rgba(255, 255, 255, 0.1)" }}>
        <span className='text-white text-[28px] font-thin' >90%</span>
        </div>
        <p className='text-white tracking-[5px] py-3'>INNOVATIVE</p>
        </div>
        {/* //4 */}
        <div className='relative '>
        <div className="radial-progress " style={{ "--value": "83", "--size": "10rem", "--thickness": "2px", "color":"#c5a47e", "background":"rgba(255, 255, 255, 0.1)" }}>
        <span className='text-white text-[28px] font-thin' >83%</span>
        </div>
        <p className='text-white tracking-[5px] py-3'>CONTEMPORARY IDEAS</p>
        </div>
        </div>
        </div>
      
    </div>
  )
}

export default Skill
