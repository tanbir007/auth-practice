import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from './context/UserContext';

const Register = () => {

  const {createUser,user,googleSignIn} =useContext(AuthContext);
 const navigate =useNavigate()
  // console.log(createUser,"user ct");

    const handleSubmit=(e)=>{
        e.preventDefault();
        
        const  email = e.target.email.value;
        const  password = e.target.password.value;
        const  name = e.target.name.value;

        createUser(email,password)
        .then(result=>{
          const user =result.user
          e.target.reset()
          
          navigate('/home')
          console.log(user,"new user");
        })
        .catch(err=>{
          console.log(err);
        })
        console.log(email,password,name);
            }

          const handleGoogleSignIn=()=>{
            googleSignIn()
            .then(result=>{
              const user =result.user
            
              navigate('/home')
              console.log(user);
            })
            .catch(err=>{
              console.log(err);
            })
          }
    return (
       
            <div>
           <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col ">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Register Now!</h1>
      
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleSubmit} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name </span>
          </label>
          <input type="text" name="name" placeholder="Name" className="input input-bordered" required/>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="text" name="email" placeholder="email" className="input input-bordered" required/>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name="password" placeholder="password" className="input input-bordered" required/>
          <label className="label">
            <Link to={"/login"} className="label-text-alt link link-hover">Already have an account?</Link>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Register</button>
        </div>
       <button> <p onClick={handleGoogleSignIn}>Sign in with Google🤪 </p></button>
      </form>
    </div>
  </div>
</div>
        
        </div>
    );
};

export default Register;