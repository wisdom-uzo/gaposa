import { Button, TextField } from '@mui/material';
import { useRouter } from 'next/router';
import React, { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const router = useRouter()

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setErrorMessage('Please enter a valid email address.');
      return;
    }
  
    // Password validation
    if (password.length < 8) {
      setErrorMessage('Password must be at least 8 characters long.');
      return;
    }
  
    // Check if email and password are correct
    if (email === 'admin@gmail.com' && password === 'password123') {
      // Save the data to localhost or perform any other action
      router.push('/admin')
      localStorage.setItem('loggedIn', 'true');
      setEmail('');
      setPassword('');
      setErrorMessage('');
    } else {
      setErrorMessage('Email or password is incorrect.');
    }
  };
  

  return (
    <div className="flex items-center justify-center ">

      <form onSubmit={handleSubmit} className="bg-white mt-10 shadow-md space-y-5 rounded p-5 ">
        <h2 className="text-2xl font-medium mb-4">Admin Login</h2>
        <div className=" mb-4">
          <TextField
            label="Email"
            variant="outlined"
            size="small"
            fullWidth
            type='email'
            value={email}
            onChange={handleEmailChange}
            required
            error={Boolean(errorMessage)}
            helperText={errorMessage}
          />
        </div>
        <div className="mb-6">
          <TextField
            label="Password"
            variant="outlined"
            size="small"
            fullWidth
            type="password"
            value={password}
            onChange={handlePasswordChange}
            required
            error={Boolean(errorMessage)}
          />
        </div>
        <div className="flex items-center justify-between">
          <button className='bg-blue-700 text-white rounded w-[100%] py-2' type="submit">
            Login
          </button>
        </div>
      </form>


    </div>
  );
};

export default Login;
