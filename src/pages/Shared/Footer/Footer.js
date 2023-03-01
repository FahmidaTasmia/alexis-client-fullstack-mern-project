import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaGoogle, FaTwitter, FaLinkedin } from "react-icons/fa";
import dot from '../../../asset/patern.png'


const Footer = () => {
    return (
      <div className='bg-black ' >
          
          <div className='z-30'>
            <footer className="footer p-32 z-30   text-[#c5a47e] font-bold rounded-md  ">
       <div >
        <span className='text-3xl text-center  font-semibold '>Alexis</span>
        <p className='text-start'>ACME Industries Ltd.<br/>Providing reliable tech since 1992</p>
       </div>
       <div className="divider lg:divider-horizontal"></div> 
        <div >
          <span className="text-lg  uppercase  font-semibold">Company</span> 
          <Link className="link link-hover">Home</Link>
          <Link className="link link-hover">About</Link>
          <Link className="link link-hover">Contact</Link>
      
        </div> 
        <div className="divider \ lg:divider-horizontal"></div> 
        <div >
          <span className="text-lg  uppercase  font-semibold">Legal</span> 
          <Link className="link link-hover ">Terms of use</Link>
          <Link className="link link-hover ">Privacy Policy</Link>
          <Link className="link link-hover ">Cookie policy</Link>
        </div> 
        <div className="divider lg:divider-horizontal"></div> 
        <div>
    <span className="text-lg  uppercase  font-semibold">Social</span> 
    <p className='uppercase  '>Stay with US:</p>
    <div className="grid grid-flow-col gap-4">
     <FaFacebook className=' w-5 mt-5 h-5'></FaFacebook>
     <FaGoogle   className=' w-5 mt-5 h-5'></FaGoogle>
     <FaLinkedin className=' w-5 mt-5 h-5'></FaLinkedin>
     <FaTwitter  className=' w-5 mt-5 h-5'></FaTwitter>
    </div>
  </div>
        
     </footer>
     <footer className="footer footer-center p-4 text-base-content border-t-2 border-t-[#c5a47e] ">
          
  <div className='text-[#c5a47e] '>
    <p>Copyright © 2022 - All right reserved by Alexis</p>
  </div>
</footer>
        </div>
      </div>
     
    );
};

export default Footer;