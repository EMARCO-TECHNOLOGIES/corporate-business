"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { container, inputField, item } from '../../motionStyles/motionStyles'

import AnchorLink from "react-anchor-link-smooth-scroll";

function About() {



    const heading = 'ABOUT SUN OIL GROUP'

    const content = `Welcome to Sun Oil Group: Illuminating Global Horizons

    At Sun Oil Group, we're more than just a conglomerate; we're the radiant force behind numerous oil and trading companies  spanning the globe. Our commitment to excellence and innovation has propelled us to the forefront of the industry, shining brightly across continents.
    
    With a legacy built on unwavering integrity and a forward-thinking approach, Sun Oil Group has established a distinguished presence in the oil and trading sectors. Our extensive network and expertise empower us to navigate diverse markets, fostering growth and sustainable success.
    
    Driven by a passion for excellence, our teams tirelessly explore new avenues, leveraging cutting-edge technologies and strategic partnerships to illuminate opportunities in every corner of the world. Our commitment to quality, reliability, and responsible practices serves as the guiding light for all our endeavors.
    
    As we continue to expand our footprint across borders, Sun Oil Group remains dedicated to fostering relationships, delivering value, and illuminating pathways to a brighter, more interconnected future. Join us on this luminous journey as we redefine boundaries and illuminate possibilities across the global landscape.`


    return (
        <motion.div className={`flex items-center lg:flex-row flex-col lg:space-x-10 md:p-10 justify-center relative mt-5 `} id='about'

        >
            <motion.img src="/home/pattern1.png" alt="" className={`w-[500px] h-[400px] absolute md:block hidden lg:left-0 lg:top-[0px]`} variants={item} initial="hidden" whileInView={"visible"} exit={"hidden"} />
            <motion.div className='lg:w-[80%] lg:p-10 p-5 space-y-4'>
                <motion.h1 className={` font-bold md:text-[48px] md:text-left text-center text-[28px] `}
                    variants={item}
                    initial='hidden'
                    whileInView='visible'
                    exit="hidden"
                >{heading}</motion.h1>
                <motion.p className='text-[16px] text-black text-justify'
                    variants={inputField}
                    initial='hidden'
                    whileInView='visible'
                    exit="hidden"
                >
                    {content}
                </motion.p>
                <div >

                    <AnchorLink href={`#contact`}>
                        <button className='px-4 py-2 text-xs border-2 border-[#34373A] rounded-md text-black hover:bg-black hover:text-white'>
                            Connect Now
                        </button>
                    </AnchorLink>
                </div>
            </motion.div>
            <motion.img src="/home/pattern2.png" alt="" className='w-[400px] h-[400px] absolute md:block hidden -right-40 top-48 -rotate-20 opacity-50' variants={item} />
        </motion.div>
    )
}

export default About