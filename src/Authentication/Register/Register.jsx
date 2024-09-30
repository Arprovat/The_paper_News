import React, { useContext } from 'react';
import { Auth_Context } from '../AuthContext/AuthContex';
import Navbar from '../../Shared/Navbar/Navbar';
import { Link } from 'react-router-dom';

const Register = () => {

    const {RegisterUser} = useContext(Auth_Context);
    const handleSubmit = (e)=>{
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        RegisterUser(email, password)
        .then((res)=>{
            console.log(res.user)
        })
        .catch((err)=>{
            console.log(err.message);
        })
        
    }
    return (
      <div>
        <Navbar></Navbar>
        <div className="hero bg-base-200 min-h-screen">
          <div className=" bg-base-100 w-full max-w-lg shrink-0 shadow-2xl">
            <h1 className="text-5xl mt-4 text-center font-bold ">Register here</h1> 
            <form onSubmit={handleSubmit} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" name='name' placeholder="name" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
              </div>
              <p className="mt-3 text-lg text-center">ALready have an account! <Link className="font-bold text-blue-600" to='/login'>LogIn</Link></p>

            </form>
          </div>
        </div>

      </div>
    );
};

export default Register;