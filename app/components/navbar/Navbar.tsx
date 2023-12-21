// import React from 'react'
// import Button from '../button/Button'
// import log from '../logging'

// function Navbar() {

//     const NavbarItems = [
//         'Home',
//         'Services',
//         'Companies',
//         'About',
//         'Contact Us'
//     ]
//     // log(NavbarItems)
//     return (
//         <div className='md:flex hidden lg:p-5 lg:px-20 p-5 backdrop-blur-lg bg-opacity-30 items-end '>
//             <div>
//                 <img src="/Navbar/logo.png" alt="" className='w-10 h-10' />
//             </div>
//             <div className='flex justify-end w-screen  '>
//                 <ul className='flex space-x-12'>
//                     {NavbarItems.map((item, index) => (
//                         <li key={index}>{item}</li>
//                     ))}
//                 </ul>
//                 {/* <Button style='px-4 py-2 bg-[#040506] text-[#fbfcf8] lg:mr-14 text-sm' text='Contact Us' /> */}
//             </div>
//         </div>

//     )
// }

// export default Navbar

"use client"
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import AnchorLink from "react-anchor-link-smooth-scroll";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const router = useRouter()

    const NavbarItems = [
        'Home',
        // { name: 'Home', onclick: '#Home' }
        // 'Services',
        // { name: 'Services', onclick: '#services' },
        // { name: 'Companies', onclick: '#companies' },
        'About',
        'Companies',
        // { name: 'About', onclick: '#about' },
        'Contact'
        // { name: 'Contact Us', onclick: '#contact' }
    ];

    return (
        <nav className={`bg-opacity-30 md:pb-0 ${isOpen ? 'pb-5 ' : null} bg-[#D9D9D94D] backdrop-filter backdrop-blur-md absolute top-0 left-0 w-full z-50 `}>
            <div className="container mx-auto flex justify-between items-end md:py-4 lg:pt-16 md:pt-4 pt-6 py-2 lg:px-32 px-10 ">
                {/* Logo */}
                {/* <div className="text-xl font-bold text-gray-800  ">
                    {!isOpen ? <img src="/Navbar/SUNLOGO.png" alt="" width={100} height={100} className='lg:w-[380px] absolute  lg:-top-[108px] left-0 lg:h-[380px] md:w-[220px] md:h-[200px] md:top-[8px] h-[150px] w-[150px] -top-[38px] bg-contain' /> : null}
                </div> */}
                <div className="text-xl font-bold text-gray-800  ">
                    {!isOpen ? (
                        <div className='absolute flex  lg:top-[32px] lg:left-20  md:top-[26px] md:left-6 top-[8px] left-5 '>
                            <img src="/Navbar/logo.png" alt="" width={100} height={100} className='lg:w-[100px] lg:h-[90px] md:w-[80px] md:h-[60px]  h-[50px] w-[50px]  bg-contain ' />
                            <h1 className='lg:mt-7 md:mt-5 -ml-2 lg:text-3xl md:text-xl text-sm mt-4'>SUN OIL GROUP</h1>
                        </div>
                    ) : null}
                </div>

                {/* Toggle button for mobile */}
                <div className="md:hidden ">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className={`${isOpen ? 'absolute top-5 left-5' : 'text-gray-100 focus:outline-none'}`}
                    >
                        <svg
                            className="h-6 w-6"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            {isOpen ? (
                                <path d="M6 18L18 6M6 6l12 12"></path>
                            ) : (
                                <path d="M4 6h16M4 12h16m-7 6h7"></path>
                            )}
                        </svg>
                    </button>
                </div>

                {/* Navbar Items */}
                <div className={`md:flex items-center ${isOpen ? 'block' : 'hidden'} lg:space-x-16  space-x-5 `}>
                    {NavbarItems.map((item, index) => (
                        // <div className=''>

                        <AnchorLink key={index} href={`#${item.toLowerCase()}`}>
                            <button
                                key={index}
                                className="block lg:inline-block mt-4 lg:mt-0 mx-2 text-[#000080] font-semibold hover:text-[#87b5eb] "
                                onClick={item === 'Home' ? () => router.push('/') : null}
                            >
                                {item}
                            </button>
                        </AnchorLink>
                        // </div>
                    ))}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
