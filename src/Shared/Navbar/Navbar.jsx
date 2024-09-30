import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import user from '../../assets/user.png'
import useEnhancedEffect from '@mui/material/utils/useEnhancedEffect';
import { Auth_Context } from '../../Authentication/AuthContext/AuthContex';

const Navbar = () => {
  const {User,logout} = useContext(Auth_Context);
const handleLogout = ()=>{
  logout()
  .then(()=>{
    console.log('logged out');
  })
  .catch((err)=>{
    console.log(err.message)
  })
}
    const navLinks =<>
    <li><NavLink to='/'>Home</NavLink></li>
    <li><NavLink to='/about'>About</NavLink></li>
    <li><NavLink to='/register'>register</NavLink></li>

    </>
    return (
        <div>
           <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
       {navLinks}
      </ul>
    </div>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    {navLinks}
    </ul>
  </div>
  <div className="navbar-end">
    <img src={user} className='w-12 h-12 mr-2' alt="" />
   {User? <button onClick={handleLogout} className='btn w-24'>Sign Out</button> :<Link to='/login' className="btn w-24">Login
   </Link>}
  </div>
</div> 
        </div>
    );
};

export default Navbar;