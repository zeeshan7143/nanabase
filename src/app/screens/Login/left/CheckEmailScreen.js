'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import mailIcon from '../../../../assets/icons/mail.png';

const CheckEmailScreen = ({ email, onResend, onUseDifferentEmail}) => {
  const [countdown, setCountdown] = useState(10);

  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [countdown]);

  const handleResend = () => {
    if (countdown === 0) {
      setCountdown(10);
      onResend();
    } else {
      onResend();
    }
  };


  return (
    <div className="md:h-[calc(100vh-63px)] bg-white px-4 py-8 md:overflow-auto">
      <div className="flex flex-col md:justify-center justify-start max-w-md w-full m-auto md:h-full">
        <Image
          src={mailIcon}
          alt="Email"
          width={64}
          height={64}
          className="object-contain mb-5"
        />
        <h1 className="sm:text-[28px] text-[24px] font-bold text-[#333333] mb-3">
          Check your email message
        </h1>
        <p 
          className="text-[#666] text-sm m-0 break-all transition-colors"
          title="Click to simulate link click (testing)"
        >
          An email with a login link has been sent to <strong>{email}</strong>. Please click the link to access your account. If you don't see the email, check your spam folder.
        </p>
        <p className="text-[#666] text-sm m-0 pt-6">
          Didn't receive the link?
        </p>
        <button
          onClick={handleResend}
           disabled={countdown > 0}
          className="w-full cursor-pointer bg-white border border-[#666] text-[#666] py-4 px-2 rounded-[50px] text-sm font-normal hover:bg-[#2563EB] hover:border-[#2563EB] hover:text-white transition-colors mt-4 disabled:bg-[#D7D7D7] disabled:cursor-not-allowed"
          title={countdown > 0 ? `Wait ${countdown} seconds or click email message to test` : "Click to test link expired flow"}
        >
          Resend <span className='text-[#F59E0B]'>{countdown > 0 && `(${countdown})`}</span> {countdown > 0 && <span>Sec</span>}
        </button>
        <p
          onClick={onUseDifferentEmail}
          className="cursor-pointer text-sm text-[#666] md:mt-6 mt-4"
        >
          Use a different email
        </p>
      </div>
    </div>
  );
};

export default CheckEmailScreen;

