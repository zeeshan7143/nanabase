'use client';

import React, { useState } from 'react';

const AccountDetailsScreen = ({ onContinue }) => {
  const [firstName, setFirstName] = useState('John');
  const [lastName, setLastName] = useState('Doe');
  const [jobTitle, setJobTitle] = useState('Sr. Manager');

  const handleSubmit = (e) => {
    e.preventDefault();
    onContinue();
  };

  return (
    <div className="md:h-[calc(100vh-63px)] bg-white px-4 py-8 md:overflow-auto">
      <div className='w-full md:absolute z-10 top-9 left-0 md:mb-0 mb-6'>
        <div className="flex items-center border border-[#F3F3F3] bg-white w-fit max-w-150 mx-auto rounded-[50px] sm:py-2.5 py-2 sm:px-3.5 px-2">
          <span className="flex items-center justify-center sm:w-8 w-6 sm:h-8 h-6 rounded-full border border-[#2563EB] text-[#2563EB] sm:text-sm text-xs">
            1
          </span>
          <span className="font-normal sm:text-sm text-xs text-[#2563EB] ml-2">Account</span>
          <span className="h-px w-8 bg-[#D2D2D2] mx-2.5" />
          <span className="flex items-center justify-center sm:w-8 w-6 sm:h-8 h-6 rounded-full border border-[#d2d2d2] text-[#999999] sm:text-sm text-xs">
            2
          </span>
          <span className="font-normal sm:text-sm text-xs text-[#666] ml-2">Workspace</span>
          <span className="h-px w-8 bg-[#D2D2D2] mx-2.5" />
          <span className="flex items-center justify-center sm:w-8 w-6 sm:h-8 h-6 rounded-full border border-[#d2d2d2] text-[#999999] sm:text-sm text-xs">
            3
          </span>
          <span className="font-normal sm:text-sm text-xs text-[#666] ml-2">Get Started</span>
        </div>
      </div>
      <div className="flex flex-col md:justify-center justify-start max-w-md w-full m-auto md:h-full">
        <h1 className="sm:text-[28px] text-[24px] font-bold text-[#333333] mb-3">
          Tell us about yourself
        </h1>
        <p className="text-[#666] text-sm m-0">
          This helps your teammates recognize you
        </p>
        <hr className='w-full border-0 border-b border-[#D7D7D7] md:my-7 sm:my-5 my-3' />
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className='flex flex-col gap-2'>
              <label htmlFor="firstname" className="block text-sm font-normal text-black mb-2">
                First Name<span className="text-[#EF4444]">*</span>
              </label>
              <input
                type="text"
                placeholder='John'
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="w-full text-[#333] placeholder:text-[#666] text-sm px-4 py-3.5 pl-4.5 pe-8 border border-[#D7D7D7] rounded-[50px] focus:outline-none focus:border-[#2563EB] hover:border-[#2563EB]"
              />
            </div>
            <div className='flex flex-col gap-2'>
              <label htmlFor="lastname" className="block text-sm font-normal text-black mb-2">
                Last Name<span className="text-[#EF4444]">*</span>
              </label>
              <input
                type="text"
                placeholder='Doe'
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="w-full text-[#333] placeholder:text-[#666] text-sm px-4 py-3.5 pl-4.5 pe-8 border border-[#D7D7D7] rounded-[50px] focus:outline-none focus:border-[#2563EB] hover:border-[#2563EB]"
              />
            </div>
          </div>
          <div className='flex flex-col gap-2'>
            <label htmlFor="lastname" className="block text-sm font-normal text-black mb-2">
              Job title
            </label>
            <input
              type="text"
              placeholder='e.g. Sr. Manager'
              value={jobTitle}
              onChange={(e) => setJobTitle(e.target.value)}
              className="w-full text-[#333] placeholder:text-[#666] text-sm px-4 py-3.5 pl-4.5 pe-8 border border-[#D7D7D7] rounded-[50px] focus:outline-none focus:border-[#2563EB] hover:border-[#2563EB]"
            />
          </div>
          <div className="pt-4">
            <button
              type="submit"
              className="ml-auto flex items-center gap-2 cursor-pointer bg-[#2563EB] text-white py-4 px-6 rounded-[50px] text-sm font-normal hover:bg-[#1253e0] transition-colors mb-3 disabled:bg-[#D7D7D7] disabled:cursor-not-allowed"
            >
              Continue
              <span className="text-lg leading-none">➜</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AccountDetailsScreen;


