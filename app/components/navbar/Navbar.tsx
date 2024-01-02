

"use client"
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import AnchorLink from "react-anchor-link-smooth-scroll";
import { motion } from "framer-motion";
import { container, inputField, item } from '../motionStyles/motionStyles';

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

    const logo = {
        hidden: { y: -50, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 1
            }
        },
    };

    return (
        <nav className={`bg-transparent md:pb-0 ${isOpen ? 'pb-5 ' : null}  absolute top-0 left-0 w-full z-50 `}>
            <div className="container mx-auto flex justify-between items-end md:py-4 lg:pt-16 md:pt-4 pt-6 py-2 lg:px-32 px-10 ">
                {/* Logo */}
                {/* <div className="text-xl font-bold text-gray-800  ">
                    {!isOpen ? <img src="/Navbar/SUNLOGO.png" alt="" width={100} height={100} className='lg:w-[380px] absolute  lg:-top-[108px] left-0 lg:h-[380px] md:w-[220px] md:h-[200px] md:top-[8px] h-[150px] w-[150px] -top-[38px] bg-contain' /> : null}
                </div> */}
                <div className="text-xl font-bold text-gray-800  ">
                    {!isOpen ? (
                        <motion.div className='absolute flex  lg:top-[32px] lg:left-20  md:top-[26px] md:left-6 top-[8px] left-5 cursor-pointer '
                            variants={logo}
                            initial='hidden'
                            whileInView='visible'
                            exit={"hidden"}

                        >
                            <motion.img variants={item} src="/Navbar/logo.png" alt="" width={100} height={100} className='lg:w-[100px] lg:h-[90px] md:w-[80px] md:h-[60px]  h-[50px] w-[50px] bg-contain ' />
                            <h1 className='lg:mt-7 md:mt-5 -ml-2 lg:text-2xl md:text-xl text-sm mt-4 hover:scale-110 transition-transform'>SUN OIL GROUP</h1>
                        </motion.div>
                    ) : null}
                </div>

                {/* Toggle button for mobile */}
                <div className="">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className={`absolute lg:top-10 lg:right-16 md:top-10 md:right-10 top-6 right-7 text-[#87b5eb] focus:outline-none`}
                    >
                        <svg
                            className="h-6 w-6 lg:h-8 lg:w-8"
                            fill="#87b5eb"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            stroke="#87b5eb"
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
                <motion.div className={` items-center ${isOpen ? 'flex' : 'hidden'} xl:space-x-32 md:space-x-20  space-x-1 md:bg-transparent p-5  absolute lg:top-5 lg:right-52 md:top-1 md:right-20 -top-2 right-[38px] `}
                    variants={inputField}
                    animate={"visible"}
                    initial="hidden"
                    exit={"hidden"}
                >
                    {NavbarItems.map((item, index) => (
                        // <div className=''>

                        <AnchorLink key={index} href={`#${item.toLowerCase()}`}>
                            <button
                                key={index}
                                className="block lg:inline-block mt-4 lg:mt-0 mx-2 hover:text-[#87b5eb] md:text-[18px] text-sm font-semibold text-[#5783b5]"
                                onClick={item === 'Home' ? () => router.push('/') : null}
                            >
                                {item}
                            </button>
                        </AnchorLink>
                        // </div>
                    ))}
                </motion.div>
            </div>
        </nav >
    );
};

export default Navbar;
