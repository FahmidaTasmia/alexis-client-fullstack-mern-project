import React from 'react';

import { useState } from 'react';
import toast from 'react-hot-toast';




const AddReview = ({serviceId, serviceName}) => {
    const [rating,setRating]=useState("2");
  

    
    const handleSubmit = event =>{
        event.preventDefault();
        const review = event.target.review.value;


        if(review.length<10){
            toast.error('Review must be at least 10 characters long');
            return;
        }

        const newReview ={
            serviceId,
            serviceName,
            rating,
            review,
          
            reviewTime: new Date().toLocaleString(),
    
        };
        
        fetch('https://alexis-server.vercel.app/review',{
            method:"POST",
            headers:{
                "content-type":"application/json",
            },
            body: JSON.stringify(newReview),
        })

        .then(res=>res.json())
        .then(data =>{
            if(data.success){
                toast.success(data.message);
                event.target.reset();
            }
            else{
                toast.error(data.error);
            }
        })

        .catch(error=>console.error(error));
    };

   

    return (
        <div className='bg-[#262626] p-12' >
  
<form onSubmit={handleSubmit} className=" w-full ">
  
<div className="rating rating-md gap-3">
  <input type="radio" name="rating" onChange={(e)=>setRating(e.target.value)} value={1} className="mask mask-star-2 bg-[#c5a47e]" />
  <input type="radio" name="rating" onChange={(e)=>setRating(e.target.value)} value={2} className="mask mask-star-2 bg-[#c5a47e]" defaultChecked />
  <input type="radio" name="rating" onChange={(e)=>setRating(e.target.value)} value={3} className="mask mask-star-2 bg-[#c5a47e]" />
  <input type="radio" name="rating" onChange={(e)=>setRating(e.target.value)} value={4} className="mask mask-star-2 bg-[#c5a47e]" />
  <input type="radio" name="rating" onChange={(e)=>setRating(e.target.value)} value={5} className="mask mask-star-2 bg-[#c5a47e]" />
</div>
 <div className='w-[60%] mx-auto'>
 <textarea name="review" className="textarea textarea-bordered border-[#c5a47e] h-24  my-5 text-white bg-black w-full " placeholder="Drop Your Valuable FeedBack" required></textarea>
 </div>
  
</form>
<button className='btn btn-wide rounded-none z-30 border-[#c5a47e] bg-transparent hover:bg-[#c5a47e] text-[#c5a47e] hover:text-black' type='submit'>submit</button>      
</div>
    );
};

export default AddReview;