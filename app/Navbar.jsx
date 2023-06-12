'use client'

import Link from 'next/link';
import Image from 'next/image';
import UserButton from './components/userMenu'
import { useMediaQuery } from 'react-responsive';

const Navbar = () => {
  const isNotPhone = useMediaQuery({ query: '(min-width: 768px)' });
  return (
    <>
      <nav className='flex justify-between w-full flex-wrap bg-[#17224D] py-2 px-6 rounded-lg'>
        <div>
        <Link className='inline-flex items-center' href='/'>
          <Image alt='logo' src="/SPOTS-white-icon.svg" height={50} width={50}/>
        </Link>
        </div>
        
        <div className='inline-flex'>
          <div className='lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start flex flex-col justify-center lg:h-auto'>
            <Link className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:text-green-600' href='/eksplorasi'>
                {isNotPhone && 'Cari Coworking Space'}
                {!isNotPhone && 'Cari'}
            </Link>
          </div>
        </div>
      
        <UserButton></UserButton>
      </nav>
    </>
  );
}

export default Navbar

