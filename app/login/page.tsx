import React from 'react';
import Image from 'next/image';
// import { useRouter } from 'next/router';

const Login = () => {//   const router = useRouter();

//   const handleSubmit = (e) => {
    // e.preventDefault();
    // Handle login logic here
    // router.push('/'); 
  // };

  return (
    <div className="flex h-screen">
      {/* Left Side */}
      <div className="w-1/2 bg-gray-300 flex items-center justify-center">
        <h1 className="text-black font-bold text-center">Welcome to Mosaic</h1>
      </div>

      {/* Right Side */}
      <div className="w-1/2 flex flex-col justify-center items-center p-8">
        <div className="flex items-center mb-8">
          <Image src="/logo.png" alt="FI Logo" width={50} height={50} />
          <div className="ml-4">
            <h2 className="text-orange-500 font-bold text-xl">FUSION INTELLIGENCE</h2>
            <p className="text-black">Fusing business and technology</p>
          </div>
        </div>
        
        <h1 className="text-2xl font-bold mb-2">WELCOME BACK</h1>
        <p className="text-gray-500 mb-8">Welcome back, please log in to your mosaic</p>

        <form  className="w-3/4 max-w-md">
          <input
            type="email"
            placeholder="Email Address"
            className="w-full mb-4 p-2 border border-gray-400 rounded"
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full mb-4 p-2 border border-gray-400 rounded"
            required
          />
          <div className="flex justify-between items-center mb-4">
            <label className="flex items-center">
              <input type="checkbox" defaultChecked className="mr-2" />
              Remember password
            </label>
            <a href="/forgot-password" className="text-red-500">Forgot Password</a>
          </div>
          <button type="submit" className="w-full bg-orange-500 text-white p-2 rounded">Log In</button>
        </form>
      </div>
    </div>
  );
};

export default Login;