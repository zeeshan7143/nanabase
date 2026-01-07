'use client';
import React from 'react';
import Image from 'next/image';
import linkIcon from '../../../../assets/icons/link-icon.png';

const LinkExpiredScreen = ({ onBackToLogin }) => {
  return (
    <div className="md:h-[calc(100vh-63px)] bg-white px-4 py-8 md:overflow-auto">
      <div className="flex flex-col md:justify-center justify-start max-w-md w-full m-auto md:h-full">
        <Image
          src={linkIcon}
          alt="Email"
          width={64}
          height={64}
          className="object-contain mb-5"
        />
        <h1 className="sm:text-[28px] text-[24px] font-bold text-[#333333] mb-3">
          Link expired
        </h1>
        <p className="text-[#666] text-sm m-0 pb-6 pt-3">
          This link has expired. Please request a new one.
        </p>
        <button
          onClick={onBackToLogin}
          className="w-full cursor-pointer bg-[#2563EB] text-white py-4 px-2 rounded-[50px] text-sm font-normal hover:bg-[#1253e0] transition-colors mb-3 disabled:bg-[#D7D7D7] disabled:cursor-not-allowed"
        >
          Back to login
        </button>
      </div>
    </div>
  );
};

export default LinkExpiredScreen;

