"use client"


import React from 'react'
import { motion } from 'framer-motion'
import Navbar from '../components/navbar/Navbar'
import About_us from "./components/section 2/page";
import What_We_Do from './components/section 3/page';
import OurClients from './components/section 4/page';
import ContactUs from '../components/homePage/ContactUs/page';
import Footer from '../components/homePage/Footer/page';
import Verticals from '../components/homePage/Verticals/page';
import AnchorLink from "react-anchor-link-smooth-scroll";
import { container, item } from '../components/motionStyles/motionStyles';


function AboutUs() {
    const bannerImg = '/About/RaisingSun.jpg'
    const bannerText = 'SUN OIL GROUP OF COMPANIES'
    const bannerTitle = 'RISING SUN ARKAN LTD'


    function Banner() {

        return (

            <div className=' lg:h-screen lg:w-screen md:h-96 h-[280px] lg:bg-cover bg-repeat-x flex justify-center bg-cover'
                style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(${bannerImg})` }}
            >
                <div className='absolute self-center justify-center text-center'>

                    {/* <img src="/home/Banner1.jpg" alt="" className='w-screen h-full relative'/> */}
                    <div className='  lg:top-[360px] lg:left-[650px] md:top-56 md:left-80 top-20 left-28 text-white'>

                        <p className='md:text-[16px] text-[12px] text-white md:text-left text-center'>{bannerText}</p>
                    </div>
                    <div className=' lg:top-96 lg:left-96 md:top-64 md:left-52 top-24 left-16 '>

                        <h1 className={' lg:text-[48px] md:text-[25px] text-[15px] text-white font-bold'} >{bannerTitle}</h1>
                        {/* <h1 className='text-lg text-black'> heeeey</h1> */}
                    </div>
                    <div className='mt-3'>
                        <AnchorLink href={`#contact`}>
                            <button className=' bg-transparent md:px-6 px-2 md:py-3 py-1 rounded-md uppercase  lg:top-[490px] lg:left-[680px] md:top-[320px] md:left-[350px] top-[130px] left-[130px] border-2 border-white text-white hover:bg-white hover:text-black md:text-lg text-xs'>
                                Enquire Now
                            </button>
                        </AnchorLink>
                    </div>
                </div>
            </div>

            // <motion.div className={`h-screen bg-cover bg-center flex justify-center  bg-no-repeat`}
            //     style={{ backgroundImage: `url(${bannerImg})` }}
            //     initial='hidden'
            //     whileInView="visible"
            //     exit="hidden"
            //     variants={container}
            // >

            //     <motion.div className='absolute self-center justify-center text-center xl:top-[370px] lg:top-[700px] md:top-[620px]'
            //         initial='hidden'
            //         whileInView="visible"
            //         exit="hidden"
            //         variants={item}
            //     >
            //         <div className='mb-3'>

            //             <AnchorLink href={`#contact`}>
            //                 <button className=' bg-transparent md:px-6 px-4 md:py-3 py-2 rounded-md uppercase  lg:top-[490px] lg:left-[680px] md:top-[320px] md:left-[350px] top-[130px] left-[130px] border-2 border-white bg-white text-indigo-400 hover:bg-black hover:text-white md:text-lg text-xs animate-pulse '>
            //                     Enquire Now
            //                 </button>
            //             </AnchorLink>
            //         </div>
            //         {/* <img src="/home/Banner1.jpg" alt="" className='w-screen h-full relative'/> */}

            //         <div className=' lg:top-96 lg:left-96 md:top-64 md:left-52 top-24 left-16 '>

            //             <h1 className={' lg:text-[58px] md:text-[35px] text-[25px] text-yellow-500 font-bold transition-transform hover:scale-110'} >{bannerTitle}</h1>
            //             {/* <h1 className='text-lg text-black'> heeeey</h1> */}
            //         </div>
            //         <div className='  lg:top-[360px] lg:left-[650px] md:top-56 md:left-80 top-20 left-28 text-white'>

            //             <p className='md:text-[16px] text-[16px] text-white  text-center transition-transform hover:scale-110'>{bannertext}</p>
            //         </div>

            //     </motion.div>

            // </motion.div >

        )
    }


    return (
        <main>
            <Navbar />
            <Banner />
            <About_us />
            {/* <What_We_Do /> */}
            {/* <OurClients /> */}
            <Verticals />
            <ContactUs />
            <Footer />
        </main>
    )
}

export default AboutUs