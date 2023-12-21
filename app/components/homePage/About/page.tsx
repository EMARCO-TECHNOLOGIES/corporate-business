"use client"

import React from 'react'

// import H1 from '../../H1/page'
import AnchorLink from "react-anchor-link-smooth-scroll";

function About() {



    const heading = 'ABOUT SUN GROUP'

    const content = `Welcome to Sun Group: Illuminating Global Horizons

    At Sun Group, we're more than just a conglomerate; we're the radiant force behind numerous oil and trading companies  spanning the globe. Our commitment to excellence and innovation has propelled us to the forefront of the industry, shining brightly across continents.
    
    With a legacy built on unwavering integrity and a forward-thinking approach, Sun Group has established a distinguished presence in the oil and trading sectors. Our extensive network and expertise empower us to navigate diverse markets, fostering growth and sustainable success.
    
    Driven by a passion for excellence, our teams tirelessly explore new avenues, leveraging cutting-edge technologies and strategic partnerships to illuminate opportunities in every corner of the world. Our commitment to quality, reliability, and responsible practices serves as the guiding light for all our endeavors.
    
    As we continue to expand our footprint across borders, Sun Group remains dedicated to fostering relationships, delivering value, and illuminating pathways to a brighter, more interconnected future. Join us on this luminous journey as we redefine boundaries and illuminate possibilities across the global landscape.`


    return (
        <div className='flex lg:flex-row flex-col lg:space-x-10 md:p-10 justify-center relative' id='about'>
            {/* <div className='lg:w-[50%] lg:p-10 p-5 flex lg:justify-start justify-center'>
                <img src="/home/About.png" alt="" className='md:w-[610px] md:h-[369px]' />
            </div> */}
            <img src="/home/pattern1.png" alt="" className='w-[500px] h-[400px] absolute md:block hidden lg:left-0 lg:top-[0px]' />
            <div className='lg:w-[80%] lg:p-10 p-5 space-y-4'>
                <h1 className={` font-bold md:text-[48px] md:text-left text-center text-[28px] `}>{heading}</h1>
                <p className='text-[16px] text-black'>
                    {content}
                </p>
                <div >

                    <AnchorLink href={`#contact`}>
                        <button className='px-4 py-2 text-xs border-2 border-[#34373A] rounded-md text-black hover:bg-black hover:text-white'>
                            Connect Now
                        </button>
                    </AnchorLink>
                </div>
            </div>
            <img src="/home/pattern2.png" alt="" className='w-[400px] h-[400px] absolute md:block hidden -right-40 top-48 -rotate-20 opacity-50' />
        </div>
    )
}

export default About