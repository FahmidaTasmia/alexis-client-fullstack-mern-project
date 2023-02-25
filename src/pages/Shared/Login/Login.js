import React from 'react'
import { Link } from 'react-router-dom'
import background from '../../../asset/line-pattern1.png'
import featm from '../../../asset/photo.avif'
import { FaGithub, FaGoogle } from 'react-icons/fa'
function Login() {
  return (
    <div className='flex min-h-screen ' style={{backgroundImage:(`url(${background})`)}}>
        <div className="absolute inset-0 min-h-screen bg-black opacity-70"></div>
       <div className='relative lg:left-40 lg:w-[40%] m-auto  '>
      <div className="card flex-shrink-0 h-[100%]  shadow-2xl bg-base-100 z-30">
        <div >
          <h2 className='text-center pt-8 mb-5 text-2xl'>Sign In To Your Account</h2>
         <div className='flex gap-3 justify-center my-3'>
         <Link className='btn  btn-sm bg-black hover:bg-transparent hover:text-black gap-2 font-normal'><FaGoogle></FaGoogle> Google</Link>
         <Link className='btn  btn-sm bg-black hover:bg-transparent hover:text-black gap-2 font-normal'> <FaGithub></FaGithub> Github</Link>
         </div>
        </div>
      <form  className="card-body ">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="text" name='email' placeholder="email" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
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
