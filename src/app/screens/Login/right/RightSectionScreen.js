'use client';
import Image from 'next/image';
import frame1 from '../../../../assets/images/frame-1.png';
import frame2 from '../../../../assets/images/frame-2.png';
import frame3 from '../../../../assets/images/frame-3.png';

const RightSectionScreen = ({ currentScreen }) => {
  return (
    <div className="md:h-[calc(100vh-63px)] px-4 py-8 bg-[#F4F7FE] ">
      <div className="flex flex-col md:justify-center justify-start w-full max-w-md m-auto md:h-full">
        {currentScreen === 'signin' && (

          <Image
            src={frame1}
            alt={currentScreen}
            width={400}
            height={370}
            className="object-contain"
          />
        )}
        {currentScreen === 'checkEmail' && (
          <Image
            src={frame2}
            alt={currentScreen}
            width={400}
            height={400}
            className="object-contain"
          />
        )}
        {(currentScreen !== 'signin' && currentScreen !== 'checkEmail') && (
          <Image
            src={frame3}
            alt={currentScreen}
            width={450}
            height={280}
            className="object-contain"
          />
        )}
      </div>
    </div>
  );
}
export default RightSectionScreen;