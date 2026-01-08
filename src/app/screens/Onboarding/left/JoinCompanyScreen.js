'use client';

import React, { useState } from 'react';
import infoicon from '../../../../assets/icons/info-circle.png';
import sendicon from '../../../../assets/icons/send-03.png';
import Image from 'next/image';
const JoinCompanyScreen = ({ onBack, onRequestSent }) => {
  const [email, setEmail] = useState('roger.smith@delltech.com');

  const handleSubmit = (e) => {
    e.preventDefault();
    onRequestSent();
  };

  return (
    <div className="md:h-[calc(100vh-63px)] bg-white px-4 py-8 md:overflow-auto">
      <div className='w-full md:absolute z-10 top-9 left-0 md:mb-0 mb-6'>
        <div className="flex items-center border border-[#F3F3F3] bg-white w-fit max-w-150 mx-auto rounded-[50px] sm:py-2.5 py-2 sm:px-3.5 px-2">
          <span className="flex items-center justify-center sm:w-8 w-6 sm:h-8 h-6 rounded-full border bg-[#2563EB] border-[#2563EB] text-whtite sm:text-sm text-xs">
            ✓
          </span>
          <span className="font-normal sm:text-sm text-xs text-[#2563EB] ml-2">Account</span>
          <span className="h-px w-8 bg-[#2563EB] mx-2.5" />
          <span className="flex items-center justify-center sm:w-8 w-6 sm:h-8 h-6 rounded-full border border-[#2563EB] text-[#2563EB] sm:text-sm text-xs">
            2
          </span>
          <span className="font-normal sm:text-sm text-xs text-[#2563EB] ml-2">Workspace</span>
          <span className="h-px w-8 bg-[#D2D2D2] mx-2.5" />
          <span className="flex items-center justify-center sm:w-8 w-6 sm:h-8 h-6 rounded-full border border-[#d2d2d2] text-[#999999] sm:text-sm text-xs">
            3
          </span>
          <span className="font-normal sm:text-sm text-xs text-[#666] ml-2">Get Started</span>
        </div>
      </div>
      <div className="flex flex-col md:justify-center justify-start max-w-md w-full m-auto md:h-full">
        <h1 className="sm:text-[28px] text-[24px] font-bold text-[#333333] mb-3">
          Join your company
        </h1>
        <p className="text-[#666] text-sm m-0">
          Enter a colleague's email from your company
        </p>
        <hr className='w-full border-0 border-b border-[#D7D7D7] md:my-7 sm:my-5 my-3' />
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className='flex flex-col gap-2'>
            <label htmlFor="lastname" className="block text-sm font-normal text-black mb-2">
              Colleague's work email<span className="text-[#EF4444]">*</span>
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full text-[#333] placeholder:text-[#666] text-sm px-4 py-3.5 pl-4.5 pe-8 border border-[#D7D7D7] rounded-[50px] focus:outline-none focus:border-[#2563EB] hover:border-[#2563EB]"
            />
          </div>
          <div className="bg-[#d0defb]  rounded-[10px] sm:p-5 p-4">
            <div className='flex items-center gap-2 mb-3'>
              <Image
                src={infoicon}
                alt='info'
                width={20}
                height={20}
                className='object-contain'
              />
              <p className="font-semibold text-sm m-0 text-black">What happens next?</p>
            </div>
            <p className="leading-relaxed font-normal text-sm m-0 text-[#666]">
              Your colleague will receive an email. If your company is already
              on Nanabase, they&apos;ll approve your request. If not, they&apos;ll
              be invited to create the workspace. Either way, you&apos;ll be
              notified!
            </p>
          </div>

          <div className="flex items-center justify-between pt-2">
            <button
              type="button"
              onClick={onBack}
              className=" flex items-center gap-2 cursor-pointer border border-[#999999] text-[#999999] py-4 px-6 rounded-[50px] text-sm font-normal hover:border-[#2563EB] hover:text-[#2563EB] transition-colors mb-3 "
            >
              <span className="text-lg leading-none rotate-180">➜</span>
              Back
            </button>
            <button
              type="submit"
              className="flex items-center gap-2 cursor-pointer bg-[#2563EB] text-white py-4 px-6 rounded-[50px] text-sm font-normal hover:bg-[#1253e0] transition-colors mb-3"
            >
              Send Request
              <Image
                src={sendicon}
                alt='info'
                width={18}
                height={18}
                className='object-contain'
              />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default JoinCompanyScreen;


