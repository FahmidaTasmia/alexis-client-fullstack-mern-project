import React, { useContext} from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import background from '../../../asset/dots.png'
import featm from '../../../asset/photo.avif'
import { FaEnvelope, FaGithub, FaGoogle, FaUnlock } from 'react-icons/fa'
import useTitle from '../../../hooks/UseTitle'
import Modal from './Modal'
import useScrollToTop from '../../../hooks/useScrollToTop'
import { AuthContext } from '../../../contexts/AuthProvider'
import { toast } from 'react-hot-toast'
function Login() {
  useTitle('Login')
  useScrollToTop();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";

  const {
    loginWithGoogle,
    loginWithGitHub,
    signIn,
    setLoading,
  } = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    try {
      signIn(email, password)
        .then((result) => {
          const currentUser = {
            email: result.user.email,
            uid: result.user.uid,
            displayName: result.user.displayName,
          };

          // JWT TOKEN
          fetch(`${process.env.REACT_APP_SERVER_URL}/jwt`, {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(currentUser),
          })
            .then((res) => res.json())
            .then((data) => {
              // SET TOKEN TO LOCAL STORAGE
              localStorage.setItem("token", data.token);
              navigate(from, { replace: true });
              toast.success("Login Successful");
              e.target.reset();
            })
            .catch((error) => {
              toast.error(error.message);
            });
          setLoading(false);
        })
        .catch((error) => {
          setLoading(false);
          toast.error(error.message);
        });
    } catch (error) {
      toast.error(error.message);
      setLoading(false);
    }
  };

  const handleGoogleLogin = () => {
    loginWithGoogle()
      .then((result) => {
        const currentUser = {
          email: result.user.email,
          uid: result.user.uid,
          displayName: result.user.displayName,
        };

        // JWT TOKEN
        fetch(`${process.env.REACT_APP_SERVER_URL}/jwt`, {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(currentUser),
        })
          .then((res) => res.json())
          .then((data) => {
            // SET TOKEN TO LOCAL STORAGE
            localStorage.setItem("token", data.token);
            navigate(from, { replace: true });
            toast.success(`Welcome ${result.user.displayName}`);
          });
      })
      .catch((error) => {
        toast.error(error.message);
        setLoading(false);
      });
  };

  const handleGithubLogin = () => {
    loginWithGitHub()
      .then((result) => {
        const currentUser = {
          email: result.user.email,
          uid: result.user.uid,
          displayName: result.user.displayName,
        };

        // JWT TOKEN
        fetch(`${process.env.REACT_APP_SERVER_URL}/jwt`, {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(currentUser),
        })
          .then((res) => res.json())
          .then((data) => {
            // SET TOKEN TO LOCAL STORAGE
            localStorage.setItem("token", data.token);
            navigate(from, { replace: true });
            toast.success(`Welcome ${result.user.displayName}`);
          });
      })
      .catch((error) => {
        toast.error(error.message);
        setLoading(false);
      });
  };

  
  return (
    <div className='flex min-h-screen relative bg-black' style={{backgroundImage:(`url(${background})`)}}>
        <div className="absolute inset-0 min-h-screen bg-black opacity-60"></div>
       <div className='relative lg:left-40 lg:w-[40%] m-auto   '>
      <div className="card flex-shrink-0 h-[100%]  shadow-2xl rounded-none z-30 bg-[#262626] text-[#c5a47e]" data-aos="fade-right">
        <div >
          <h2 className='text-center pt-8 mb-5 text-2xl uppercase'>Sign In To Your Account</h2>
         <div className='flex gap-3 justify-center my-3'>
         <Link  onClick={handleGoogleLogin}  className='btn  btn-sm bg-black hover:bg-transparent hover:text-[#c5a47e] hover:border-[#c5a47e] gap-2 font-normal'><FaGoogle></FaGoogle> Google</Link>
         <Link  onClick={handleGithubLogin} className='btn  btn-sm bg-black hover:bg-transparent hover:text-[#c5a47e] hover:border-[#c5a47e] gap-2 font-normal'> <FaGithub></FaGithub> Github</Link>
         </div>
        </div>
      <form  className="card-body  " onSubmit={handleLogin}>
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
            <div className="flex flex-col ">
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
            <div>
              <Modal></Modal>
            </div>
                    <div className="form-control mt-6">
                        <input className="btn rounded-none bg-black border-black duration-700 hover:bg-transparent hover:text-[#c5a47e] hover:border-[#c5a47e]  text-white" type="submit" value="Login" />
                    </div>
                </form>

             

         <p className='text-center p-5 text-white'>New to <span className=' font-bold text-[#c5a47e]'>Alexis</span> services ? Please <Link className=' font-semibold text-[#c5a47e] ' to="/register">Register</Link> </p>
    </div>
  </div>
  <div className='max-w-[70%] z-10 hidden lg:block'>
        <img className='h-full w-full' src={featm} alt="" />
      </div>
    </div>
  )
}

export default Login
