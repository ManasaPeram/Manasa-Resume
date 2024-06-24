'use client';
import Image from 'next/image';
import React from 'react'
import { Link } from 'react-scroll';
import Nav from './nav';
import MobileNav from './mobileNav';


const Header = () => {
  return (
   <>
   <header className='fixed z-50 w-full bg-primary py-6 xl:py-8 '>
    <div className='container mx-auto flex items-center justify-between'>
    {/* logo */}
    <Link to='/' spy= {true} smooth={true} className='cursor-pointer'>
    <Image src='/logo1.png' height={80} width={80} alt='logo'/>
    </Link>

    {/* desktop nav */}
    <div className='hidden items-center gap-x-8 xl:flex'>
     <Nav/>
     <Link to='/' spy= {true} smooth={true} className='text-md rounded-full bg-blue px-6 py-2 font-medium text-white transition-all hover:bg-blue/80'>
       Hire me
    </Link>
    </div>
    {/* mobile nav */}
    <div className=' z-50 xl:hidden'>
        <MobileNav/>
    </div>
    </div>
   </header>
   </>
  )
}

export default Header
