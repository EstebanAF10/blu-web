import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { data } from './data';
import whiteLogo from '../../../public/assets/img/BLUWhite.svg';
import 'tailwindcss/tailwind.css';


const NavBar = () => {
  const [windowHeight, setWindowHeight] = useState(0);
  const menus = useRef();


  return (
   <nav className='pl-[8rem] pr-[8rem] fixed top-6 left-0 right-0'>
    <ul className='flex justify-center items-center space-x-12 h-36'>
      <a className='mr-[30rem]' href="index.html">
        <Image src={whiteLogo} className="max-h-24" alt="logo" priority />
      </a>
      <li>
        <a className='text-white text-2xl font-montserrat' href="#">About Us</a>
      </li>
      <li>
        <a className='text-white text-2xl font-montserrat' href="products.html">Our Water</a>
      </li>
      <li>
        <a className='text-white text-2xl font-montserrat' href="story.html">Products</a>
      </li>
      <li>
        <a className='text-white text-2xl font-montserrat' href="#">Contact</a>
      </li>
    </ul>
    </nav>


  );
};

export default NavBar;
