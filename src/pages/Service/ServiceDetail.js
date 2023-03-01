import React, { useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'
import Pricing from './Pricing';
import homesc from '../../asset/homesc.png'
import 'aos/dist/aos.css';
import Aos from 'aos';
import LazyLoad from 'react-lazy-load';
import AddReview from './AddReview';


function ServiceDetail() {
    useEffect(()=>{
        Aos.init({duration:2000})
      },[])
    const data = useLoaderData();
    const{name,description,des2,bold,des3,li1,li2,li3,li4,li5,img,art,single}=data
  return (
    <div className='bg-black'>
      <div className="hero  " style={{ backgroundImage: `url(${img})`, height:'60vh', backgroundRepeat: 'no-repeat', backgroundPosition:'center',  backgroundSize:"cover" }}>
                <div className="hero-overlay bg-black bg-opacity-80"></div>
                <div className="hero-content text-center text-neutral-content">
                  <div >
                    <h1 className="mb-5 md:text-8xl text-[40px] tracking-[10px] font-bold numb" >{name}</h1>
                    <div className='flex gap-5 justify-center'>
                      <p><img className=' w-20 h-20 ' src={art} alt="#" /></p>
                      {/* <p className='self-center'>{teacher}</p> */}
                      
                    </div>
                  </div>
                </div>
              </div>
            <div className=' w-[70%] '>  <h2 className='text-[#c5a47e] tracking-[10px] font-semibold text-2xl pt-8 uppercase text-start'>our Services</h2></div>
              <div className='bg-black pb-10'>
                <div className='max-w-screen-xl mx-auto'>
                   <div className='flex justify-center pt-10'>
                 
                   <div className='w-[70%] ' data-aos="zoom-in">
                       <LazyLoad>
                       <img className='' src={single} alt="" />
                       </LazyLoad>
                    </div>
                   </div>
                   <div className='flex justify-center text-start'>
                   <div className='w-[70%] '>
                   <div data-aos="fade-right">
                   <p className='text-white md:text-xl mt-12' >{description}</p>
                    <p className='text-gray-400 text-justify mt-10'>{des2}</p>
                    <p className='text-2xl text-white mt-10'>{bold}</p>
                    <p className='text-gray-400 text-justify my-10'>{des3}</p>
                   </div>
                    <div data-aos="fade-left">
                    <p className='text-xl mb-3 text-white'>{li1}</p>
                    <p className='text-xl mb-3  text-white'>{li2}</p>
                    <p className='text-xl mb-3  text-white'>{li3}</p>
                    <p className='text-xl mb-3  text-white'>{li4}</p>
                    <p className='text-xl mb-3  text-white'>{li5}</p>
                    </div>

                   

                  
                    
                   </div>
                   </div>
                </div>

              </div>

             <div className='bg-black   p-20' >
           
              <div className='max-w-screen-xl mx-auto '>
              <div className='text-start px-3' data-aos="fade-right">
                
                <h2 className='text-[#c5a47e] tracking-[10px] font-semibold text-2xl  uppercase'>REVIEW</h2>

                <h2 className='z-20 text-5xl tracking-[5px] font-bold text-white uppercase pb-16'> your  opinion matters.</h2>
          
                
                </div>
              <div className='shadow-2xl' data-aos="fade-up" >
             <div>
             <AddReview></AddReview>
             </div>
              </div>
              </div>
             </div>

             <div className='p-20 static' style={{backgroundImage:(`url(${homesc})`)}}>
                
             <div className='max-w-screen-xl mx-auto pb-10 text-start'>
             <h2 className='text-[#c5a47e] tracking-[10px] font-semibold text-2xl pt-8 uppercase' data-aos="fade-right">Pricing</h2>
  
            <h2 className=' text-3xl tracking-[5px] font-bold text-black uppercase' data-aos="fade-right">SERVICING COST.</h2>
               <div data-aos="fade-up">
               <Pricing></Pricing>
               </div>
              </div>
             </div>
    </div>
  )
}

export default ServiceDetail
