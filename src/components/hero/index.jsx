import React from 'react';
import 'tailwindcss/tailwind.css';
import NavBar from '../navBar';
import Image from 'next/image';
import blu600 from '../../../public/assets/img/photos/Blu600-Web2024.png';


const Hero = () => {
  return (
    <>
    <div className="pl-[8rem] pr-[8rem] flex justify-center gap-0 items-end h-dvh bg-gradient-to-b from-light-turquoise-1 to-light-turquoise-2 to-light-turquoise-3">
      <div className='flex gap-52'>
      <h1 className="text-white text-[6vw] font-cubano leading-none flex items-center mb-5">El Agua Alcalina<br/>de Costa Rica</h1>
      <Image src={blu600}  className='w-auto h-[630px]' alt="Glass Bottle" priority />
      </div>
    </div>
    </>
  );
};

export default Hero;
