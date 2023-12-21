"use client"


import React from 'react'
// import Banner from '../components/homePage/Banner/page'
import Navbar from '../components/navbar/Navbar'
import About_us from "./components/section 2/page";
import What_We_Do from './components/section 3/page';
import OurClients from './components/section 4/page';
import ContactUs from '../components/homePage/ContactUs/page';
import Footer from '../components/homePage/Footer/page';
import Verticals from '../components/homePage/Verticals/page';
import AnchorLink from "react-anchor-link-smooth-scroll";


function AboutUs() {
    const bannerImg = '/About/RaisingSun.jpg'
    const bannerText = 'SUN GROUP OF COMPANIES'
    const bannerTitle = 'RISING SUN ARKAN LTD'


    function Banner() {

        return (

            <div className=' lg:h-screen lg:w-screen md:h-96 h-[280px] lg:bg-cover bg-repeat-x flex justify-center bg-cover'
                style={{ backgroundImage: `url(${bannerImg})` }}
            >
                <div className='absolute self-center justify-center text-center'>

                    {/* <img src="/home/Banner1.jpg" alt="" className='w-screen h-full relative'/> */}
                    <div className='  lg:top-[360px] lg:left-[650px] md:top-56 md:left-80 top-20 left-28 text-white'>

                        <p className='md:text-[16px] text-[12px] text-white'>{bannerText}</p>
                    </div>
                    <div className=' lg:top-96 lg:left-96 md:top-64 md:left-52 top-24 left-16 '>

                        <h1 className={' lg:text-[48px] md:text-[25px] text-[15px] text-white font-bold'} >{bannerTitle}</h1>
                        {/* <h1 className='text-lg text-black'> heeeey</h1> */}
                    </div>
                    <AnchorLink href={`#contact`}>
                        <button className=' bg-transparent md:px-6 px-2 md:py-3 py-1 rounded-md uppercase  lg:top-[490px] lg:left-[680px] md:top-[320px] md:left-[350px] top-[130px] left-[130px] border-2 border-white text-white hover:bg-white hover:text-black md:text-lg text-xs'>
                            Enquire Now
                        </button>
                    </AnchorLink>
                </div>
            </div>
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