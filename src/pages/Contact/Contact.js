import React from 'react'
import useTitle from '../../hooks/UseTitle'
import MyComponent from './MyComponent'

function Contact() {
    useTitle('Contact')
  return (
    <div className='lg:p-24 p-8  bg-black'>
     
      <div>
         <div className='grid md:grid-cols-2'>
        
     <div className='m-auto hidden lg:block'>
     <MyComponent></MyComponent>
     </div>

    
      
        <div className='lg:scale-75 '>
        <div className='text-start text-white'>
        <h2 className=' uppercase text-2xl tracking-wider mb-5 lg:mb-10'>We are Always Ready To Hear You.</h2>
      
      </div>
        <div className='bg-[#020b0d] border-double  border-[5px] border-[#c5a47e]  lg:py-12 py-8 p-2 ' data-aos="zoom-in-right">
           <div className=' lg:scale-90 text-white '>
            <div>
                <h2 className='uppercase tracking-wider lg:text-4xl text-2xl font-semibold'>Contact Form</h2>
                <h1 className='lg:pr-20 lg:text-xl font-sans  text-justify py-5 lg:mb-4'>
                For more information or any booking, our reservation team is available 24/7 by phone <span className='text-[#c5a47e]'>
                +33(0)7994688 </span>  or by email  
                <span className='text-[#c5a47e]'> xanthous@team.com </span>.</h1>
            </div>
           <form className='text-white' >
                  <div className='grid  gap-4 '>
                            <input name="firstName" type="text" placeholder="Your Full Name" 
                            className="input  bg-transparent border border-neutral rounded-sm " />
                                    
                            <input name="email" type="text" placeholder="Your Email"   
                            className="input  bg-transparent border border-neutral rounded-sm "  />

                            <input name="subject" type="text" placeholder="Subject"  
                            className="input  bg-transparent border border-neutral rounded-sm "  />
                            </div>
                            <textarea name="message" className="textarea bg-transparent border border-neutral rounded-sm  h-40 w-full my-5 "  
                            placeholder="Your Message" required></textarea>
        
                            <input className='btn bg-transparent border text-[#c5a47e] hover:bg-transparent rounded-md  btn-wide ' type="submit" value="Send Message" />
            </form>
           </div>
        </div>
                   
     </div>
        </div>
      </div>
       </div>
     
 
  )
}

export default Contact
