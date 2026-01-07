'use client';
import Image from "next/image";
import logo from '../../assets/images/logo.png';

const Header = () => {
  return (
    <div className="border-b border-[#E7E7E7] px-8 py-4">
      <Image
        src={logo}
        alt="nanabase logo"
        width={160}
        height={30}
        className="object-contain"
      />
    </div>
  );
};

export default Header;

