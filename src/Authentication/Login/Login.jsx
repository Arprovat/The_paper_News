import { useContext } from "react";
import Navbar from "../../Shared/Navbar/Navbar";
import { Auth_Context } from "../AuthContext/AuthContex";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate =useNavigate();
  const location = useLocation();
const{loginUser}=useContext(Auth_Context);
const handleLogin = (e)=>{
e.preventDefault();
const form = new FormData(e.currentTarget);
const email = form.get('email');
const password = form.get('password');
loginUser(email, password)
.then((res)=>{
  console.log(res.user);
  navigate(location.state?.from?.pathname || '/');
})
.catch((err)=>{
  console.log(err.message);
})
}
    return (
        <div>
          <Navbar></Navbar>
        <div className="hero bg-base-200 min-h-screen">
          <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow-2xl">
            <h1 className="text-5xl mt-4 text-center font-bold">Login now!</h1> 
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input name="email"  type="email" placeholder="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input name="password"  type="password" placeholder="password" className="input input-bordered" required />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            <p className="mt-3 text-lg text-center">Don't have account <Link className="font-bold text-blue-600" to='/register'>Register</Link></p>
            </form>
          </div>
        </div>

        </div>
    );
};

export default Login;