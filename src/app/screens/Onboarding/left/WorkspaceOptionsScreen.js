'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import icon1 from '../../../../assets/icons/Icon-1.png';
import icon2 from '../../../../assets/icons/Icon-2.png';
import icon3 from '../../../../assets/icons/Icon-3.png';

const WorkspaceOptionsScreen = ({
  onBack,
  onJoinCompany,
  onCreateWorkspace,
  onUsePersonalContacts,
}) => {
  const [selected, setSelected] = useState('join');

  const handleContinue = () => {
    if (selected === 'join') onJoinCompany();
    else if (selected === 'create') onCreateWorkspace();
    else onUsePersonalContacts();
  };

  const optionBase =
    'w-full text-left border rounded-2xl px-5 py-4 mb-3 cursor-pointer transition-all duration-200 flex items-center gap-4 group';

  const getOptionClasses = (key, colors) => {
    const { activeBorder, activeBg, defaultBorder, hoverBorder } = colors;
    return `${optionBase} ${selected === key
      ? `${activeBorder} ${activeBg}`
      : `${defaultBorder} bg-white hover:${hoverBorder} hover:bg-gray-50`
      }`;
  };

  const getIconBgClasses = (key, colors) => {
    const { activeBg, defaultBg } = colors;
    return `flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-200 ${selected === key ? activeBg : `${defaultBg} group-hover:opacity-90`
      }`;
  };

  const getIconFilter = (key, activeFilter, defaultFilter) => {
    return selected === key ? activeFilter : defaultFilter;
  };

  const options = {
    join: {
      colors: {
        activeBorder: 'border-[#F59E0B]',
        activeBg: 'bg-[#fffbf5]',
        defaultBorder: 'border-[#E9E9E9]',
        hoverBorder: 'border-[#F59E0B]',
        iconActiveBg: 'bg-[#fdecce]',
        iconDefaultBg: 'bg-[#d0defb]',
      },
      icon: icon1,
      iconActiveFilter: 'invert(74%) sepia(86%) saturate(1923%) hue-rotate(357deg) brightness(103%) contrast(103%)',
      iconDefaultFilter: 'invert(29%) sepia(94%) saturate(3796%) hue-rotate(220deg) brightness(95%) contrast(101%)',
    },
    create: {
      colors: {
        activeBorder: 'border-[#F59E0B]',
        activeBg: 'bg-[#fffbf5]',
        defaultBorder: 'border-[#E9E9E9]',
        hoverBorder: 'border-[#F59E0B]',
        iconActiveBg: 'bg-[#fdecce]',
        iconDefaultBg: 'bg-[#d0defb]',
      },
      icon: icon2,
      iconActiveFilter: 'invert(74%) sepia(86%) saturate(1923%) hue-rotate(357deg) brightness(103%) contrast(103%)',
      iconDefaultFilter: 'invert(29%) sepia(94%) saturate(3796%) hue-rotate(220deg) brightness(95%) contrast(101%)',
    },
    personal: {
      colors: {
        activeBorder: 'border-[#F59E0B]',
        activeBg: 'bg-[#fffbf5]',
        defaultBorder: 'border-[#E9E9E9]',
        hoverBorder: 'border-[#F59E0B]',
        iconActiveBg: 'bg-[#fdecce]',
        iconDefaultBg: 'bg-[#d0defb]',
      },
      icon: icon3,
      iconActiveFilter: 'invert(74%) sepia(86%) saturate(1923%) hue-rotate(357deg) brightness(103%) contrast(103%)',
      iconDefaultFilter: 'invert(29%) sepia(94%) saturate(3796%) hue-rotate(220deg) brightness(95%) contrast(101%)',
    },
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
          How do you want to get started?
        </h1>

        <div className="mb-6">
          <button
            type="button"
            className={getOptionClasses('join', options.join.colors)}
            onClick={() => setSelected('join')}
          >
            <div className={getIconBgClasses('join', {
              activeBg: options.join.colors.iconActiveBg,
              defaultBg: options.join.colors.iconDefaultBg,
            })}>
              <Image
                src={options.join.icon}
                alt="Join company"
                width={24}
                height={24}
                className="object-contain transition-all duration-200"
                style={{
                  filter: getIconFilter('join', options.join.iconActiveFilter, options.join.iconDefaultFilter)
                }}
              />
            </div>
            <div className="flex-1">
              <p className="md:text-[18px] sm:text-base text-shadow-amber-100 font-bold text-black mb-1.5">
                Join my company
              </p>
              <p className="sm:text-sm text-xs text-[#666] m-0">
                My company might already be here, or I&apos;ll invite a colleague
                to set it up.
              </p>
            </div>
          </button>

          <button
            type="button"
            className={getOptionClasses('create', options.create.colors)}
            onClick={() => setSelected('create')}
          >
            <div className={getIconBgClasses('create', {
              activeBg: options.create.colors.iconActiveBg,
              defaultBg: options.create.colors.iconDefaultBg,
            })}>
              <Image
                src={options.create.icon}
                alt="Create workspace"
                width={24}
                height={24}
                className="object-contain transition-all duration-200"
                style={{
                  filter: getIconFilter('create', options.create.iconActiveFilter, options.create.iconDefaultFilter)
                }}
              />
            </div>
            <div className="flex-1">
              <p className="md:text-[18px] sm:text-base text-shadow-amber-100 font-bold text-black mb-1.5">
                Create company workspace
              </p>
              <p className="sm:text-sm text-xs text-[#666] m-0">
                I want to set up Nanabase for my company and become the admin.
              </p>
            </div>
          </button>

          <button
            type="button"
            className={getOptionClasses('personal', options.personal.colors)}
            onClick={() => setSelected('personal')}
          >
            <div className={getIconBgClasses('personal', {
              activeBg: options.personal.colors.iconActiveBg,
              defaultBg: options.personal.colors.iconDefaultBg,
            })}>
              <Image
                src={options.personal.icon}
                alt="Personal contacts"
                width={24}
                height={24}
                className="object-contain transition-all duration-200"
                style={{
                  filter: getIconFilter('personal', options.personal.iconActiveFilter, options.personal.iconDefaultFilter)
                }}
              />
            </div>
            <div className="flex-1">
              <p className="md:text-[18px] sm:text-base text-shadow-amber-100 font-bold text-black mb-1.5">
                Just use personal contacts
              </p>
              <p className="sm:text-sm text-xs text-[#666] m-0">
                Skip company setup for now and manage my private contact list
                only.
              </p>
            </div>
          </button>
        </div>

        <p className="text-[#666] text-sm m-0 italic mb-5">
          <span className="font-semibold">Not sure?</span> You can always
          create or join a company later from your settings.
        </p>

        <div className="flex items-center justify-between">
          <button
            type="button"
            onClick={onBack}
            className=" flex items-center gap-2 cursor-pointer border border-[#999999] text-[#999999] py-4 px-6 rounded-[50px] text-sm font-normal hover:border-[#2563EB] hover:text-[#2563EB] transition-colors mb-3 "
          >
            <span className="text-lg leading-none rotate-180">➜</span>
            Back
          </button>
          <button
            type="button"
            onClick={handleContinue}
            className="flex items-center gap-2 cursor-pointer bg-[#2563EB] text-white py-4 px-6 rounded-[50px] text-sm font-normal hover:bg-[#1253e0] transition-colors mb-3 "
          >
            Continue
            <span className="text-lg leading-none">➜</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default WorkspaceOptionsScreen;


