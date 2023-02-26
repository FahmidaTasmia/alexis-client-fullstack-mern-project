import React from 'react'
import home from '../../asset/1.jpg'
import home2 from '../../asset/4.jpg'
const Theater = () => {
  return (
    <div className='grid grid-cols-2 gap-8 bg-black'>
        <div className='py-5 text-start m-auto'>
     <h2 className='text-[#c5a47e] tracking-[10px] font-semibold text-2xl '>PROJECTS</h2>
     <h2 className=' text-3xl tracking-[5px] font-bold text-white uppercase'>THEATER Work.</h2>
     </div>
      <div className='relative inset-0  bg-black opacity-60 '> <img  src={home} alt="" /></div>
    <div> <img className='relative inset-0  bg-black  opacity-60' src={home2} alt="" /></div>
    </div>
  )
}

export default Theater
