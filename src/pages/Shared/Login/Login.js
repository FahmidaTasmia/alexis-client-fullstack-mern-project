import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import background from '../../../asset/dots.png'
import featm from '../../../asset/photo.avif'
import { FaGithub, FaGoogle } from 'react-icons/fa'
import 'aos/dist/aos.css';
import Aos from 'aos';
function Login() {
  useEffect(()=>{
    Aos.init({duration:3000})
  },[])
  return (
    <div className='flex min-h-screen relative bg-black' style={{backgroundImage:(`url(${background})`)}}>
        <div className="absolute inset-0 min-h-screen bg-black opacity-60"></div>
       <div className='relative lg:left-40 lg:w-[40%] m-auto   '>
      <div className="card flex-shrink-0 h-[100%]  shadow-2xl rounded-none z-30 bg-[#262626] text-[#c5a47e]" data-aos="fade-right">
        <div >
          <h2 className='text-center pt-8 mb-5 text-2xl uppercase'>Sign In To Your Account</h2>
         <div className='flex gap-3 justify-center my-3'>
         <Link className='btn  btn-sm bg-black hover:bg-transparent hover:text-black gap-2 font-normal'><FaGoogle></FaGoogle> Google</Link>
         <Link className='btn  btn-sm bg-black hover:bg-transparent hover:text-black gap-2 font-normal'> <FaGithub></FaGithub> Github</Link>
         </div>
        </div>
      <form  className="card-body  ">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-[#c5a47e]">Your Email</span>
                        </label>
                        <input type="text" name='email' placeholder="email" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-[#c5a47e]">Password</span>
                        </label>
                        <input type="text" name='password' placeholder="password" className="input input-bordered" />
                        <label className="label">
                            <Link href="#" className="label-text-alt link link-hover">Forgot password?</Link>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <input className="btn bg-black border-none  text-white" type="submit" value="Login" />
                    </div>
                </form>
               

                <p className='text-center p-5'>New to <span className=' font-bold '>Alexis</span> services ? Please <Link className=' font-bold ' to="/signup">Sign Up</Link> </p>
    </div>
  </div>
  <div className='max-w-[70%] z-10 hidden lg:block'>
        <img className='h-full w-full' src={featm} alt="" />
      </div>
    </div>
  )
}

export default Login
