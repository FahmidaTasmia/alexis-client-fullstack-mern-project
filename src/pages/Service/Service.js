import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Loader from '../../Components/Spinner/Loader';
import ServiceCard from './ServiceCard';
import { BsArrowRight } from "react-icons/bs";

function Service() {
    const[services,setServices]=useState ([]);
    const [loading,setLoading]=useState(true);

    useEffect(()=>{
        fetch('https://alexis-server.vercel.app/services')
        .then(res=>res.json())
        .then(data=>{
            setLoading(false);
            setServices(data);
        })
    },[])
    if(loading){
        return <Loader></Loader>
    }

    
  return (
    <div className='bg-black pb-10'>
     <div className='max-w-screen-xl mx-auto'>
        <div className='text-start px-3'>
      
        <h2 className='text-[#c5a47e] tracking-[10px] font-semibold text-2xl pt-8 uppercase'>Services</h2>
  
        <h2 className=' text-3xl tracking-[5px] font-bold text-white uppercase'>THE SERVICEs WE PROVIDE.</h2>
   
        
        </div>
     <div className='grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2 gap-5  py-10  px-3'>

{
    services?.map(service=><ServiceCard key={service._id} service={service}>

    </ServiceCard>)
}

</div>

<div>
<Link to='/service' className='text-[#c5a47e] btn bg-transparent gap-3 hover:bg-transparent border-[#c5a47e] rounded-none'> SEE OUR ALL SERVICES <BsArrowRight></BsArrowRight>  </Link>
</div>
     </div>
    </div>
  )
}

export default Service
