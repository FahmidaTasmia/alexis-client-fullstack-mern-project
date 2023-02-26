import React from 'react'
import bedroom1 from '../../asset/bedroom.jpg'
import bedroom2 from '../../asset/project6.jpg'
import bedroom3 from '../../asset/project7.jpg'

function Interior() {
  return (
    <div className='bg-[#181818]'>
    <div className='max-w-screen-xl mx-auto'>
       <div className='grid md:grid-cols-2 gap-5 md:gap-8' >
      <div className='m-auto'>
      <div className='py-5 text-start'>
      <h2 className='text-[#c5a47e] tracking-[10px] font-semibold text-2xl '>PROJECTS</h2>
      <h2 className=' text-3xl tracking-[5px] font-bold text-white uppercase'>INTERIOR Work.</h2>
      </div>
      <div>
      <img className='relative inset-0  bg-black opacity-40' src={bedroom2} alt="" />
      </div>
     
      </div>
 
 
      <div className='grid gap-5 md:gap-8'>
       <div className='my-8'></div>
     <div className='relative inset-0  bg-black opacity-50 '> <img className='w-full'  src={bedroom1} alt="" /></div>
     <div> <img className='relative inset-0  bg-black  opacity-50' src={bedroom3} alt="" /></div>
      </div>
     </div>
   </div>
  </div>
  )
}

export default Interior
