'use client';

import React from 'react';

const AllSetScreen = () => {
  return (
    <div className="md:h-[calc(100vh-63px)] bg-white px-4 py-8 md:overflow-auto">
      <div className='w-full md:absolute z-10 top-9 left-0 md:mb-0 mb-6'>
        <div className="flex items-center border border-[#F3F3F3] bg-white w-fit max-w-150 mx-auto rounded-[50px] sm:py-2.5 py-2 sm:px-3.5 px-2">
          <span className="flex items-center justify-center sm:w-8 w-6 sm:h-8 h-6 rounded-full border bg-[#2563EB] border-[#2563EB] text-whtite sm:text-sm text-xs">
            ✓
          </span>
          <span className="font-normal sm:text-sm text-xs text-[#2563EB] ml-2">Account</span>
          <span className="h-px w-8 bg-[#2563EB] mx-2.5" />
          <span className="flex items-center justify-center sm:w-8 w-6 sm:h-8 h-6 rounded-full border bg-[#2563EB] border-[#2563EB] text-whtite sm:text-sm text-xs">
            ✓
          </span>
          <span className="font-normal sm:text-sm text-xs text-[#2563EB] ml-2">Workspace</span>
          <span className="h-px w-8 bg-[#2563EB] mx-2.5" />
          <span className="flex items-center justify-center sm:w-8 w-6 sm:h-8 h-6 rounded-full border bg-[#2563EB] border-[#2563EB] text-whtite sm:text-sm text-xs">
            ✓
          </span>
          <span className="font-normal sm:text-sm text-xs text-[#2563EB] ml-2">Get Started</span>
        </div>
      </div>
      <div className="flex flex-col md:justify-center justify-start max-w-md w-full m-auto md:h-full">

        <h1 className="sm:text-[28px] text-[24px] font-bold text-[#333333] mb-3">
          You're all set!
        </h1>
        <p className="text-[#666] text-sm m-0">
          Your account is ready. Let's get started.
        </p>
        <h1 className="sm:text-[20px] text-[18px] font-bold text-[#333333] my-4">
          What’s Next?
        </h1>
        <div className="mb-6 space-y-3">
          <button
            type="button"
            className="w-fit gap-2.5 flex items-center justify-between border border-[#D1D5DB] rounded-[999px] px-4 py-2.5 text-xs text-[#111827] hover:bg-[#F9FAFB] transition-colors"
          >
            <span className='text-[18px]'>➜</span>
            <span>Add your first contact</span>

          </button>
          <button
            type="button"
            className="w-fit gap-2.5 flex items-center justify-between border border-[#D1D5DB] rounded-[999px] px-4 py-2.5 text-xs text-[#111827] hover:bg-[#F9FAFB] transition-colors"
          >
            <span className='text-[18px]'>➜</span>
            <span>Import contacts</span>
          </button>
          <button
            type="button"
            className="w-fit gap-2.5 flex items-center justify-between border border-[#D1D5DB] rounded-[999px] px-4 py-2.5 text-xs text-[#111827] hover:bg-[#F9FAFB] transition-colors"
          >
            <span className='text-[18px]'>➜</span>
            <span>Invite colleagues</span>
          </button>
        </div>

        <button
          type="button"
          className="ml-auto w-fit flex items-center gap-2 cursor-pointer bg-[#2563EB] text-white py-4 px-6 rounded-[50px] text-sm font-normal hover:bg-[#1253e0] transition-colors mb-3 "
        >
          Go to Dashboard
          <span className="text-lg leading-none">➜</span>
        </button>
      </div>
    </div>
  );
};

export default AllSetScreen;


