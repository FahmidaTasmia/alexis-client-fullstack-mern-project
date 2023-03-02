import React from 'react'
import img1 from '../../asset/about1.png'
import img2 from '../../asset/about2.png'
import a1 from '../../asset/a1.png'
import a2 from '../../asset/a2.png'
import a3 from '../../asset/a3.png'
import vecto from '../../asset/Vector.png'

function About() {
  return (
   <div className='lg:p-24 p-5 relative' style={{backgroundImage:(`url(${vecto})`),backgroundRepeat:'no-repeat', backgroundSize:'cover',backgroundPosition:'center'}}>
 <div className="absolute inset-0  bg-white opacity-80"></div>
    <div className='max-w-screen-xl mx-auto  relative'>
    <div className='text-start px-3 pb-3 lg:pb-16' data-aos="fade-right">
      
      <h2 className='text-[#c5a47e] md:tracking-[10px] tracking-[3px] font-semibold md:text-2xl  uppercase'>MODERN TRENDS OF LIVING</h2>

      <h2 className=' text-xl block lg:hidden md:text-4xl font-serif md:tracking-[4px] my-4'>We focused on modern
architecture and  interior design.</h2>

<h2 className=' text-xl lg:block hidden md:text-4xl font-serif md:tracking-[4px] my-4'>We focused on modern
architecture <br /> and  interior design.</h2>
 
      
      </div>
    <div className='grid md:grid-cols-2  gap-8'>

<div>

  <div className='flex border-b gap-5 py-6'>

  <div><img className='w-24' src={a1} alt="" /></div>
  <div className='self-center text-start'>
    <h1 className='font-semibold text-black text-2xl uppercase '>Design Approach</h1>
    <p className='my-3'>We combine innovative design practises with traditional <br /> manufacturing techniques.</p>
    </div>

  </div>

  {/* div2 */}
  <div className='flex border-b gap-5 py-6 '>

<div><img className='w-24' src={a2} alt="" /></div>
<div className='self-center text-start'>
  <h1 className='font-semibold text-black text-2xl uppercase '>Innovative Solutions</h1>
  <p className='my-3'>Our core business is all about aligning our clients’ brands <br /> and businesses.</p>
  </div>

</div>

{/* div3 */}
<div className='flex border-b gap-5 py-6'>

<div><img className='w-24' src={a3} alt="" /></div>
<div className='self-center text-start'>
  <h1 className='font-semibold text-black text-2xl uppercase '>Project Management</h1>
  <p className='my-3'>As a full-service firm, Inteco is present on projects from start <br /> to finish, ensuring the ideas conceived.</p>
  </div>

</div>

</div>


{/* //imagediv */}


<div className='flex gap-2 m-auto'>
  <div><img src={img1} alt="" /></div>
  <div className='relative bottom-[44px]'><img src={img2} alt="" /></div>
  
</div>


</div>
    </div>

   
   </div>

   
  )
}

export default About
