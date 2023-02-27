import React from 'react';
import { BsCheck2Circle } from 'react-icons/bs';
import { BsArrowRight } from 'react-icons/bs';

const Pricing = () => {
    return (
        <div className='grid lg:grid-cols-3 md:grid-cols-2 mt-8 gap-8  '>
            <div className='text-start bg-[#262626] w-full p-6 py-8 border-b-4 border-b-[#c5a47e]  hover:border-[#c5a47e]  transition-all duration-500 ease-in-out hover:scale-105 relative overflow-hidden shadow  h-fit">'>
            <h6 className="font-bold text-start text-2xl  uppercase mb-5 text-[#c5a47e] numb tracking-[5px]">Free</h6>
            <div className="flex mb-5 text-[#c5a47e]">
                    <span className="text-xl font-semibold">$</span>
                    <span className="price text-4xl font-semibold mb-0">0</span>
                    <span className="text-xl font-semibold self-end mb-1">/mo</span>
             </div>
             <ul className="list-none text-[#c5a47e]">
                <li className='flex gap-2'><BsCheck2Circle className='self-center text-[#c5a47e] font-bold'></BsCheck2Circle>  Full Access</li>
                <li className='flex gap-2'><BsCheck2Circle className='self-center text-[#c5a47e] font-bold'></BsCheck2Circle>  Source Files</li>
             </ul>
             <button className='btn btn-[#c5a47e] hover:bg-transparent  text-[#c5a47e] bg-transparent btn-sm mt-5 px-5 gap-2'>LEARN MORE<BsArrowRight></BsArrowRight></button>
            </div>

            {/* price2 */}
            <div className='text-start w-full p-6 py-8 border-b-4 border-b-[#c5a47e] bg-[#262626]   hover:border-[#c5a47e]  transition-all duration-500 ease-in-out hover:scale-105 relative overflow-hidden shadow  h-fit">'>
            <h6 className="font-bold text-start text-2xl  uppercase mb-5 text-[#c5a47e] numb tracking-[5px]">Popular</h6>
            <div className="flex mb-5 text-[#c5a47e]">
                    <span className="text-xl font-semibold">$</span>
                    <span className="price text-4xl font-semibold mb-0">88</span>
                    <span className="text-xl font-semibold self-end mb-1">/mo</span>
             </div>
             <ul className="list-none text-[#c5a47e]">
                <li className='flex gap-2'><BsCheck2Circle className='self-center text-[#c5a47e] font-bold'></BsCheck2Circle>  Full Access</li>
                <li className='flex gap-2'><BsCheck2Circle className='self-center text-[#c5a47e] font-bold'></BsCheck2Circle>  Source Files</li>
                <li className='flex gap-2'><BsCheck2Circle className='self-center text-[#c5a47e] font-bold'></BsCheck2Circle>  Free Appointments</li>
                <li className='flex gap-2'><BsCheck2Circle className='self-center text-[#c5a47e] font-bold'></BsCheck2Circle> Enhanced Security</li>

             </ul>
             <button className='btn btn-[#c5a47e] hover:bg-transparent  text-[#c5a47e] bg-transparent btn-sm mt-5 px-5 gap-2'>LEARN MORE<BsArrowRight></BsArrowRight></button>
            </div>

            {/* price3 */}
            <div className='text-start w-full p-6 py-8 border-b-4 border-b-[#c5a47e]   hover:border-[#c5a47e] bg-[#262626] transition-all duration-500 ease-in-out hover:scale-105 relative overflow-hidden shadow  h-fit">'>
            <h6 className="font-bold text-start text-2xl  uppercase mb-5 text-[#c5a47e] numb tracking-[5px]">PROFESSIONAL</h6>
            <div className="flex mb-5 text-[#c5a47e]">
                    <span className="text-xl font-semibold">$</span>
                    <span className="price text-4xl font-semibold mb-0">100</span>
                    <span className="text-xl font-semibold self-end mb-1">/mo</span>
             </div>
             <ul className="list-none text-[#c5a47e]">
                <li className='flex gap-2'><BsCheck2Circle className='self-center text-[#c5a47e] font-bold'></BsCheck2Circle>  Full Access</li>
                <li className='flex gap-2'><BsCheck2Circle className='self-center text-[#c5a47e] font-bold'></BsCheck2Circle>  Source Files</li>
                <li className='flex gap-2'><BsCheck2Circle className='self-center text-[#c5a47e] font-bold'></BsCheck2Circle>  Free Appointments</li>
                <li className='flex gap-2'><BsCheck2Circle className='self-center text-[#c5a47e] font-bold'></BsCheck2Circle> Enhanced Security</li>
                <li className='flex gap-2'><BsCheck2Circle className='self-center text-[#c5a47e] font-bold'></BsCheck2Circle> Free Installment</li>
             </ul>
             <button className='btn btn-[#c5a47e] hover:bg-transparent  text-[#c5a47e] bg-transparent btn-sm mt-5 px-5 gap-2'>LEARN MORE <BsArrowRight></BsArrowRight></button>
            </div>
            
            
        </div>
    );
};

export default Pricing;