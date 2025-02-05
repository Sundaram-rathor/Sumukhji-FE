import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { GoogleLogin } from '@react-oauth/google';

function Login() {
  const navigate = useNavigate();
 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  //manual login here
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://my-backend-ocyz.onrender.com/api/v1/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        console.log('Error signing up');
        return;
      }

      const data = await response.json();
      console.log(data);
      localStorage.setItem('token', data.token);
      navigate('/');

      if (response.status === 402) {
        alert(data.message);
      }
    } catch (error) {
      console.log('Error in user sign-up', error);
    }
  };


  //google login here
  const handleLoginSuccess = async(response) => {
    try {
      console.log("Login Successful! Response:", response);
    // You can send the response token to your backend server for validation

    const token = response.credential
    console.log(token)

    const userData = await fetch("https://my-backend-ocyz.onrender.com/api/v1/user/login",{
      method:'POST',

      headers:{
        'Content-Type':'application/json',
        
      },
      body:JSON.stringify({token})
    })
    if(!userData){
      throw new error('failed to fetch data')
    }
    const data = await userData.json()
    
    localStorage.setItem('token',data.token)

    navigate('/')
    } catch (error) {
      console.log('error inthis ', error)
    }
    
  };

  const handleLoginFailure = (error) => {
    console.log("Login Failed! Error:", error);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full bg-white p-6 sm:p-8 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold text-center text-gray-900 sm:text-3xl">
          Get Started Today!
        </h1>
        <p className="mt-2 text-gray-500 text-center">Sign up here</p>

        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          {/* Username */}
          

          {/* Email */}
          <div>
            <label className="sr-only">Email</label>
            <input
              type="email"
              className="w-full border-gray-300 p-3 rounded-lg shadow-sm text-sm"
              placeholder="Enter Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/* Password */}
          <div>
            <label className="sr-only">Password</label>
            <input
              type="password"
              className="w-full border-gray-300 p-3 rounded-lg shadow-sm text-sm"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {/* Sign-Up Button */}
          <div className="flex items-center justify-between">
            <p className="text-sm text-gray-500">
              Already have an account? <a className="text-indigo-600 hover:underline" href="#">Login</a>
            </p>

            <button
              type="submit"
              className="px-6 py-2 font-semibold text-white bg-indigo-600 rounded-lg shadow hover:bg-indigo-700 transition duration-200"
            >
              Sign Up
            </button>
          </div>
        </form>

        <div className='mt-10'>
        <GoogleLogin 
          onSuccess={handleLoginSuccess}
          onError={handleLoginFailure}
        />
        </div>
      </div>
    </div>
  );
}

export default Login;
