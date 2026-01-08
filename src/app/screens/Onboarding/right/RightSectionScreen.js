'use client';
import Image from 'next/image';
import frame4 from '../../../../assets/images/frame-4.png';
import frame5 from '../../../../assets/images/frame-5.png';
import frame6 from '../../../../assets/images/frame-6.png';
import frame7 from '../../../../assets/images/frame-7.png';
import frame2 from '../../../../assets/images/frame-2.png';
import frame9 from '../../../../assets/images/frame-9.png';

const STEPS = {
  ACCOUNT_DETAILS: 'account-details',
  WORKSPACE_OPTIONS: 'workspace-options',
  JOIN_COMPANY: 'join-company',
  CREATE_WORKSPACE: 'create-workspace',
  REQUEST_SENT: 'request-sent',
  ALL_SET: 'all-set',
};

const RightSectionScreen = ({ currentStep }) => {
  const getImage = () => {
    switch (currentStep) {
      case STEPS.ACCOUNT_DETAILS:
        return { src: frame5, width: 430, height: 5200, alt: 'Profile setup illustration' };
      case STEPS.WORKSPACE_OPTIONS:
        return { src: frame4, width: 400, height: 400, alt: 'Workspace options illustration' };
      case STEPS.JOIN_COMPANY:
        return { src: frame6, width: 400, height: 400, alt: 'Join company illustration' };
      case STEPS.CREATE_WORKSPACE:
        return { src: frame7, width: 400, height: 400, alt: 'Create workspace illustration' };
      case STEPS.REQUEST_SENT:
        return { src: frame2, width: 400, height: 400, alt: 'Request sent illustration' };
      case STEPS.ALL_SET:
        return { src: frame9, width: 400, height: 400, alt: 'All set illustration' };
      default:
        return { src: frame4, width: 400, height: 400, alt: 'Onboarding illustration' };
    }
  };

  const image = getImage();

  return (
    <div className={`md:h-[calc(100vh-63px)] bg-[#F4F7FE] ${currentStep === STEPS.WORKSPACE_OPTIONS ? 'p-0' : 'px-4 py-8'}`}>
      <div className="flex flex-col md:justify-center justify-start w-full m-auto md:h-full">
        <Image
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
          className={`${currentStep ===STEPS.WORKSPACE_OPTIONS ? 'object-contain w-full h-full' : 'object-contain m-auto'}`}
          priority="true"
        />
      </div>
    </div>
  );
};

export default RightSectionScreen;

