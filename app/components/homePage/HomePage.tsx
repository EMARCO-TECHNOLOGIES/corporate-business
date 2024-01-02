"use client"

import React from 'react'
// import Banner from './Banner/page'
import About from './About/page'
import Verticals from './Verticals/page'
import WhyUs from './whyUs/page'
import Testimonials from './Testimonials/page'
import ContactUs from './ContactUs/page'
import Footer from './Footer/page'
import AnchorLink from "react-anchor-link-smooth-scroll";
import Directors from './Directors/page'
import { Variants, motion } from 'framer-motion'

function HomePage() {
    const bannerImg = '/home/BannerNew.jpg'
    const bannerTitle = 'Breaking Barriers, Building Bridges !'
    const bannertext = 'SUN OIL GROUP OF COMPANIES'



    function Banner() {

        const container = {
            hidden: { opacity: 1, scale: 1.25, },
            visible: {
                opacity: 1,
                scale: 1,
                transition: {
                    delayChildren: 1,
                    // staggerChildren: 1,
                    duration: 1
                },
            },
        };

        const item = {
            hidden: { y: 200, opacity: 0 },
            visible: {
                y: 0,
                opacity: 1,
                transition: {
                    duration: 3
                }
            },
        };


        return (

            <motion.div className={`h-screen bg-cover bg-center flex justify-center  bg-no-repeat`}
                style={{ backgroundImage: `url(${bannerImg})` }}
                initial='hidden'
                whileInView="visible"
                exit="hidden"
                variants={container}
            >

                <motion.div className='absolute self-center justify-center text-center xl:top-[370px] lg:top-[700px] md:top-[620px]'
                    initial='hidden'
                    whileInView="visible"
                    exit="hidden"
                    variants={item}
                >
                    {/* <div className='mb-3'>

                        <AnchorLink href={`#contact`}>
                            <button className=' bg-transparent md:px-6 px-4 md:py-3 py-2 rounded-md uppercase  lg:top-[490px] lg:left-[680px] md:top-[320px] md:left-[350px] top-[130px] left-[130px] border-2 border-white bg-white text-indigo-400 hover:bg-black hover:text-white md:text-lg text-xs animate-pulse '>
                                Enquire Now
                            </button>
                        </AnchorLink>
                    </div> */}
                    {/* <img src="/home/Banner1.jpg" alt="" className='w-screen h-full relative'/> */}

                    <div className=' lg:top-96 lg:left-96 md:top-64 md:left-52 top-24 left-16 '>

                        <h1 className={' lg:text-[58px] md:text-[35px] text-[25px] text-yellow-500 font-bold transition-transform hover:scale-110'} >{bannerTitle}</h1>
                        {/* <h1 className='text-lg text-black'> heeeey</h1> */}
                    </div>
                    <div className='  lg:top-[360px] lg:left-[650px] md:top-56 md:left-80 top-20 left-28 text-white'>

                        <p className='md:text-[16px] text-[16px] text-white  text-center transition-transform hover:scale-110'>{bannertext}</p>
                    </div>

                </motion.div>

            </motion.div >
        )
    }



    return (
        <div>
            <Banner />
            <About />
            <Directors />
            <Verticals />
            <WhyUs />
            <Testimonials />
            <ContactUs />
            <Footer />
        </div>


    )
}

export default HomePage