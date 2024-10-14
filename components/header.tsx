// 'use client';
// import Image from 'next/image';
// import React from 'react'
// import { Link } from 'react-scroll';
// import Nav from './nav';
// import MobileNav from './mobileNav';


// const Header = () => {


// const handleClick = () => {
//   // Replace with the number you want to dial
//   window.location.href = 'tel:+918340947374';
// };

//   return (
//    <>
//    <header className='fixed z-50 w-full bg-primary py-2 xl:py-3 '>
//     <div className='container mx-auto flex flex-row items-center justify-between'>
//     {/* logo */}
//     <Link to='/' spy= {true} smooth={true} className='cursor-pointer'>
//     <div className="flex items-center justify-center space-x-4">
//   <Image src='/angel/CERT-Fundamentals-Power-Platform.png' height={120} width={120} alt='logo' />
//   <Image src='/logo1.png' height={80} width={80} alt='logo' />
// </div>

//     {/* <Image src='/angel/CERT-Fundamentals-Power-Platform.png' height={80} width={80} alt='logo'/>
//     <Image src='/logo1.png' height={80} width={80} alt='logo'/> */}
//     </Link>

//     {/* desktop nav */}
//     <div className='hidden items-center gap-x-8 xl:flex'>
//      <Nav/>
//      <Link to='/' spy= {true} smooth={true}   onClick={handleClick} className='text-md rounded-full bg-blue px-6 py-2 font-medium text-white transition-all hover:bg-blue/80'>
//        Hire me
//     </Link>
//     </div>
//     {/* mobile nav */}
//     <div className=' z-50 xl:hidden'>
//         <MobileNav/>
//     </div>
//     </div>
//    </header>
//    </>
//   )
// }

// export default Header







'use client';
import Image from 'next/image';
import React from 'react';
import { Link } from 'react-scroll';
import Nav from './nav';
import MobileNav from './mobileNav';

const Header = () => {
  return (
    <>
      <header className='fixed z-50 w-full bg-primary py-2 xl:py-3'>
        <div className='container mx-auto flex flex-row items-center justify-between'>
          {/* logo */}
          <Link to='/' spy={true} smooth={true} className='cursor-pointer'>
            <div className="flex items-center justify-center space-x-4">
              <Image src='/angel/CERT-Fundamentals-Power-Platform.png' height={120} width={120} alt='logo' />
              <Image src='/logo1.png' height={80} width={80} alt='logo' />
            </div>
          </Link>

          {/* desktop nav */}
          <div className='hidden items-center gap-x-8 xl:flex'>
            <Nav />
            {/* Phone call link */}
            <a 
              href='tel:+918340947374' 
              className='text-md rounded-full bg-blue px-6 py-2 font-medium text-white transition-all hover:bg-blue/80'
            >
              Hire me
            </a>
          </div>

          {/* mobile nav */}
          <div className='z-50 xl:hidden'>
            <MobileNav />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;



