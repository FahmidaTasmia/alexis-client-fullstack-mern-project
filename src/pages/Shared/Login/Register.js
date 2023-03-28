import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import background from '../../../asset/dots.png'
import featm from '../../../asset/photo.avif'
import { FaCamera, FaEnvelope, FaGithub, FaGoogle, FaUnlock, FaUser } from 'react-icons/fa'
import 'aos/dist/aos.css';
import Aos from 'aos';
import useTitle from '../../../hooks/UseTitle'
function Register() {
  useTitle('Register')
  useEffect(()=>{
    Aos.init({duration:3000})
  },[])
  return (
    <div className='flex  min-h-screen relative bg-black' style={{backgroundImage:(`url(${background})`)}}>
        <div className="absolute inset-0 min-h-screen bg-black opacity-60"></div>
       <div className='relative lg:left-40 lg:w-[40%] m-auto   '>
      <div className="card flex-shrink-0 h-[100%]  shadow-2xl rounded-none z-30 bg-[#262626] text-[#c5a47e]" data-aos="fade-right">
        <div >
          <h2 className='text-center pt-8 mb-5 text-2xl uppercase'>Sign In To Your Account</h2>
         <div className='flex gap-3 justify-center my-3'>
         <Link className='btn  btn-sm bg-black hover:bg-transparent hover:text-[#c5a47e] hover:border-[#c5a47e] gap-2 font-normal'><FaGoogle></FaGoogle> Google</Link>
         <Link className='btn  btn-sm bg-black hover:bg-transparent hover:text-[#c5a47e] hover:border-[#c5a47e] gap-2 font-normal'> <FaGithub></FaGithub> Github</Link>
         </div>
        </div>
        <form className='scale-90 '>
            <div className="flex flex-col mb-2">
              <div className="flex relative ">
                <span className=" inline-flex  items-center p-5 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm">
                  <FaUser />
                </span>
                <input
                  type="text"
                  id="name"
                  className="  flex-1 appearance-none border  border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-1 focus:ring-[#c5a47e] focus:border-transparent"
                  placeholder="Your Name"
                />
              </div>
            </div>

            <div className="flex flex-col my-5">
              <div className="flex relative ">
                <span className=" inline-flex  items-center p-5 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm">
                  <FaEnvelope />
                </span>
                <input
                  type="email"
                  id="email"
                  className="  flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-1 focus:ring-[#c5a47e] focus:border-transparent"
                  placeholder="Your Email"
                />
              </div>
            </div>

            <div className="flex flex-col mb-5">
              <div className="flex relative ">
                <span className=" inline-flex  items-center p-5 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm">
                  <FaUnlock />
                </span>
                <input
                  type="password"
                  id="password"
                  className="  flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-1 focus:ring-[#c5a47e] focus:border-transparent"
                  placeholder="Your Password"
                />
              </div>
            </div>

            <div className="flex flex-col mb-6">
              <div className="flex relative ">
                <span className=" inline-flex  items-center p-5 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm">
                  <FaCamera />
                </span>
                <input
                  type="url"
                  id="photoURL"
                  className="  flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-1 focus:ring-[#c5a47e] focus:border-transparent"
                  placeholder="Your Photo URL"
                />
              </div>
            </div>

            <div className="form-control mt-6">
                        <input className="btn rounded-none bg-black border-black duration-700 hover:bg-transparent hover:text-[#c5a47e] hover:border-[#c5a47e]  text-white" type="submit" value="Register" />
                    </div>
          </form>
               

                <p className='text-center p-5 text-white'> Already Have An <span className=' font-bold text-[#c5a47e]'>Account</span>  ? Please <Link className=' font-semibold text-[#c5a47e] ' to="/login">Login</Link> </p>
    </div>
  </div>
  <div className='max-w-[70%] z-10 hidden lg:block'>
        <img className='h-full w-full' src={featm} alt="" />
      </div>
    </div>
  )
}

export default Register
