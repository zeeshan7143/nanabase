'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import googleIcon from '../../../../assets/icons/google.png';
import greenTick from '../../../../assets/icons/green-tick.png';
import cross from '../../../../assets/icons/cross.png';


const SignInScreen = ({ onEmailSubmit, onGoogleLogin }) => {
  const [email, setEmail] = useState('');
  const [isValid, setIsValid] = useState(true);

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    setIsValid(value.includes('@') && value.includes('.'));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isValid && email) {
      onEmailSubmit(email);
    }
  };

  return (
    <div className="md:h-[calc(100vh-63px)] bg-white px-4 py-8 md:overflow-auto">
      <div className="flex flex-col md:justify-center justify-start max-w-md w-full m-auto md:h-full">
        <h1 className="sm:text-[28px] text-[24px] font-bold text-[#333333] mb-3">
          Sign in or create account
        </h1>
        <p className="text-[#666] text-sm m-0">
          Enter your email address to receive the link
        </p>
        <hr className='w-full border-0 border-b border-[#D7D7D7] md:my-7 sm:my-5 my-3' />
        {/* Email Input */}
        <form onSubmit={handleSubmit} className="mb-4">
          <label htmlFor="email" className="block text-sm font-normal text-black mb-2">
            Email Address
          </label>
          <div className="relative">
            <input
              type="email"
              id="email"
              placeholder='john.smith@gmail.com'
              value={email}
              onChange={handleEmailChange}
              className="w-full text-[#333] placeholder:text-[#666] text-sm px-4 py-3.5 pl-4.5 pe-8 border border-[#D7D7D7] rounded-[50px] focus:outline-none focus:border-[#2563EB] hover:border-[#2563EB]"
            />
            {isValid && email ?
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                <Image
                  src={greenTick}
                  alt="valid"
                  width={20}
                  height={20}
                  className="object-contain"
                />
              </div>
              :
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                <Image
                  src={cross}
                  alt="valid"
                  width={20}
                  height={20}
                  className="object-contain"
                />
              </div>
            }
          </div>
        </form>

        {/* Login Button */}
        <button
          onClick={handleSubmit}
          disabled={!isValid || !email}
          className="w-full cursor-pointer bg-[#2563EB] text-white py-4 px-2 rounded-[50px] text-sm font-normal hover:bg-[#1253e0] transition-colors mb-3 disabled:bg-[#D7D7D7] disabled:cursor-not-allowed"
        >
          Login
        </button>

        {/* Google Sign-in Button */}
        <button
          onClick={onGoogleLogin}
          className="w-full cursor-pointer bg-white border border-[#D7D7D7] text-black py-4 px-2 rounded-[50px] text-sm font-normal focus:outline-none focus:border-[#2563EB] hover:border-[#2563EB] transition-colors flex items-center justify-center gap-2"
        >
          <Image
            src={googleIcon}
            alt="Google"
            width={20}
            height={20}
            className='object-contain'
          />
          Continue with Google
        </button>
        <div className="flex items-center gap-2 text-sm text-[#666] md:mt-20 mt-8">
          <a href="#" className="hover:text-black">Terms of Service</a>
          <span>•</span>
          <a href="#" className="hover:text-black">Privacy Policy</a>
        </div>
      </div>
    </div>
  );
};

export default SignInScreen;

