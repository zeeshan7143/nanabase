'use client';

import React, { useState } from 'react';
import greenTick from '../../../../assets/icons/green-tick.png';
import Image from 'next/image';
const CreateWorkspaceScreen = ({ onBack, onContinue }) => {
  const [companyName, setCompanyName] = useState('Dell Technologies');
  const [workspaceSlug, setWorkspaceSlug] = useState('https://john.smith');

  const handleSubmit = (e) => {
    e.preventDefault();
    onContinue();
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
          Create your company workspace
        </h1>
        <p className="text-[#666] text-sm m-0">
          Set up a workspace for your team
        </p>
        <hr className='w-full border-0 border-b border-[#D7D7D7] md:my-7 sm:my-5 my-3' />
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className='flex flex-col gap-2'>
            <label htmlFor="cname" className="block text-sm font-normal text-black mb-2">
              Company name<span className="text-[#EF4444]">*</span>
            </label>
            <input
              type="text"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
              className="w-full text-[#333] placeholder:text-[#666] text-sm px-4 py-3.5 pl-4.5 pe-8 border border-[#D7D7D7] rounded-[50px] focus:outline-none focus:border-[#2563EB] hover:border-[#2563EB]"
            />
          </div>
          <div className='flex flex-col gap-2'>
            <label htmlFor="url" className="block text-sm font-normal text-black mb-2">
              Workspace URL<span className="text-[#EF4444]">*</span>
            </label>
            <div className="flex items-center gap-2.5 rounded-[50px] border border-[#D7D7D7] h-12.5 overflow-hidden">
              <Image
                src={greenTick}
                alt="tick"
                width={18}
                height={18}
                className="object-contain ml-4"
              />
              <input
                type="text"
                placeholder='https://john.smith'
                value={workspaceSlug}
                onChange={(e) => setWorkspaceSlug(e.target.value)}
                className="flex-1 text-sm px-4 py-3 border-0 placeholder:text-[#9CA3AF] text-[#666] focus:outline-none"
              />
              <div className="flex items-center h-full ps-3 pe-4 border-l border-[#d7d7d7] bg-[#F0F0F0] text-sm text-[#666666] whitespace-nowrap">
                .nanabase.co
              </div>
            </div>
          </div>

          <p className="text-[#666] text-sm m-0 italic mb-7">
            Your contacts are private by default. Only you decide what to share
            with the company directory.
          </p>
          <div className="flex items-center justify-between mt-4">
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
              className="flex items-center gap-2 cursor-pointer bg-[#2563EB] text-white py-4 px-6 rounded-[50px] text-sm font-normal hover:bg-[#1253e0] transition-colors mb-3 "
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

export default CreateWorkspaceScreen;


