import React, { useContext } from 'react'
import { toast } from 'react-hot-toast';
import { AuthContext } from '../../../contexts/AuthProvider'

function Modal() {
    const {resetPassword,setLoading} =useContext(AuthContext);

    const handleResetPassword = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        resetPassword(email)
          .then(() => {
            toast.success("Reset email sent successfully. Check your inbox/spam.");
            setLoading(false);
          })
          .catch(() => {
            toast.error("Something went wrong. Check you email and try again.");
            setLoading(false);
          });
      };
  return (
    <div className='text-end '>
      {/* The button to open modal */}
<label htmlFor="my-modal-3" className="text-end  font-thin text-[#c5a47e]  cursor-pointer">Forgot Password?</label>

{/* Put this part before </body> tag */}
<input type="checkbox" id="my-modal-3" className="modal-toggle" />
<div className="modal ">
  <div className="modal-box relative rounded-none">
    <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
    <form onSubmit={handleResetPassword} className="scale-75">
                <div className="flex flex-col mb-2">
                  <div className="flex relative  mb-5 ">
                    <span className=" inline-flex  items-center p-5 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm">
                      <svg
                        width="15"
                        height="15"
                        fill="currentColor"
                        viewBox="0 0 1792 1792"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M1792 710v794q0 66-47 113t-113 47h-1472q-66 0-113-47t-47-113v-794q44 49 101 87 362 246 497 345 57 42 92.5 65.5t94.5 48 110 24.5h2q51 0 110-24.5t94.5-48 92.5-65.5q170-123 498-345 57-39 100-87zm0-294q0 79-49 151t-122 123q-376 261-468 325-10 7-42.5 30.5t-54 38-52 32.5-57.5 27-50 9h-2q-23 0-50-9t-57.5-27-52-32.5-54-38-42.5-30.5q-91-64-262-182.5t-205-142.5q-62-42-117-115.5t-55-136.5q0-78 41.5-130t118.5-52h1472q65 0 112.5 47t47.5 113z"></path>
                      </svg>
                    </span>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="  flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                      placeholder="Your email"
                    />
                  </div>
                </div>

                <div className="flex w-full">
                  <button
                    type="submit"
                    className="btn rounded-none w-full bg-black border-black duration-700 hover:bg-transparent hover:text-[#c5a47e] hover:border-[#c5a47e]  text-white"
                  >
                    Reset
                  </button>
                </div>
              </form>
  </div>
</div>
    </div>
  )
}

export default Modal
