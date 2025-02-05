import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { GoogleLogin } from '@react-oauth/google';



function Signup() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('')
  const [pass, setPass] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`http://localhost:8000/api/v1/user/signup`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username,
          email,
          password: pass,
        }),
      });

      const data = await response.json();
      console.log(data);

      if (response.status === 402) {
        alert(data.message);
      } else {
        localStorage.setItem('token', data.token);
        navigate('/');
      }
    } catch (error) {
      console.log('Error logging in:', error);
    }
  };

  //google signup here

  const onLoginSuccess = async (response)=>{
    try {
      console.log('success google signup', response)

      const token = response.credential

      const userData = await fetch('http://localhost:8000/api/v1/user/login',{
        method:'POST',
        headers:{
          'Content-Type':'application/json'
        },
        body: JSON.stringify({token})
      })
      if(!userData){
        throw new error('failed to fetch data')
      }
      const data = await userData.json();
      console.log(data)
      localStorage.setItem('token',data.token)
      navigate('/')

    } catch (error) {
      console.log('error in fetching data from BE...')
    }
  }

  const onLoginFailure = (error) => {
    console.log("Login Failed! Error:", error);
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-10 bg-gray-50">
      <div className="w-full max-w-md sm:max-w-lg md:max-w-xl bg-white p-6 sm:p-8 md:p-10 shadow-lg rounded-lg">
        <div className="text-center">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">Get started today!</h1>
          <p className="mt-2 text-gray-500">Signup here</p>
        </div>

        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          {/* Email Input */}
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-gray-700">
              username
            </label>
            <input
              type="text"
              className="w-full border border-gray-300 p-3 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Enter username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              className="w-full border border-gray-300 p-3 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/* Password Input */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              className="w-full border border-gray-300 p-3 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Enter password"
              value={pass}
              onChange={(e) => setPass(e.target.value)}
            />
          </div>

          {/* Login Button & Link */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-4">
            <p></p>
            <button
              type="submit"
              className="w-full sm:w-auto px-6 py-3 mt-4 sm:mt-0 font-semibold text-white bg-indigo-600 rounded-md shadow hover:bg-indigo-700 transition duration-200"
            >
              Sign in
            </button>
          </div>
        </form>
        <div className='mt-5'>
          <GoogleLogin 
          onSuccess={onLoginSuccess}
          onError={onLoginFailure}/>
        </div>
      </div>
    </div>
  );
}

export default Signup;
