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
import React, { useState } from 'react';
import AnchorLink from "react-anchor-link-smooth-scroll";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const NavbarItems = [
        'Home',
        'Services',
        // {name:'Services',onclick:'/services'}
        'Companies',
        // {name:'Companies',onclick:'/companies'}
        'About',
        // { name: 'About', onclick: '/about' },
        'Contact'
        // {name:'Contact Us',onclick:'/contact'}
    ];

    return (
        <nav className="bg-opacity-30 bg-[#D9D9D94D] backdrop-filter backdrop-blur-md absolute top-0 left-0 w-full z-50  ">
            <div className="container mx-auto flex justify-between items-end md:py-4 md:pt-16 py-2 lg:px-32 px-10 ">
                {/* Logo */}
                <div className="text-xl font-bold text-gray-800  ">
                    {!isOpen ? <img src="/Navbar/SUNLOGO.png" alt="" width={100} height={100} className='lg:w-[380px] absolute  lg:-top-[108px] left-0 lg:h-[380px] md:w-[220px] md:h-[200px] md:top-[8px] h-[150px] w-[150px] -top-[38px] bg-contain' /> : null}
                </div>

                {/* Toggle button for mobile */}
                <div className="md:hidden ">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="text-gray-100 focus:outline-none"
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
                <div className={`md:flex items-center ${isOpen ? 'block' : 'hidden'} lg:space-x-16 space-x-8`}>
                    {NavbarItems.map((item, index) => (

                        <AnchorLink key={index} href={`#${item.toLowerCase()}`}>

                            <button
                                key={index}
                                className="block lg:inline-block mt-4 lg:mt-0 mx-2 text-[#000080] font-semibold hover:text-[#87b5eb] "
                            >
                                {item}
                            </button>
                        </AnchorLink>
                    ))}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
