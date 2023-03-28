import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { AuthContext } from '../../../contexts/AuthProvider';
import 'aos/dist/aos.css';
import Aos from 'aos';
import { FaUser } from 'react-icons/fa';


const Header = () => {
  useEffect(()=>{
    Aos.init({duration:2000})
  },[])
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(err => console.log(err));
    }
   
    const menuItems = <React.Fragment>
        <li><Link to="/" className='hover:bg-[#262626]'>Home</Link></li>
        <li><Link to="/about" className='hover:bg-[#262626]'>About</Link></li>
        <li><Link to="/contact" className='hover:bg-[#262626]'>Contact</Link></li>
        <li>
              
        <div className='hover:bg-[#262626]' >
                    {
                        user?.uid?
                        <>
                       
                        <button onClick={ handleLogOut} >Log out</button>
                        </>
                        :
                        <>
                        <Link className='mr-3' to='/login'>Login</Link>
                        
                        </>
                    }
                    </div>

                    <div>

                       {
                        user?.photoURL ?
                        <img className='h-10 rounded-full' src={user.photoURL} alt="" />
                        :
                        <FaUser></FaUser>
                       } 

                     {
                     user?.displayName
                     }
                    </div>
        </li>
    </React.Fragment>

    return (
     <div className='bg-[#262626]' >
        <div className='max-w-screen-xl mx-auto ' data-aos="fade-down" >
         <div className="navbar md:top[-70] relative  text-[#c5a47e] font-bold flex justify-between  ">
            <div className="navbar-start">
            <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden hover:bg-[#262626]">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={1} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-transparent rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <Link to="/" className="btn btn-ghost normal-case text-2xl hover:bg-[#262626] ">ALEXIS</Link>
            </div>
            <div className="navbar-center hidden lg:flex  ">
                <ul className="menu menu-horizontal p-0 ">
                    {menuItems}
                </ul>
            </div>
            
        </div>
       </div>
     </div>
    );
};

export default Header;