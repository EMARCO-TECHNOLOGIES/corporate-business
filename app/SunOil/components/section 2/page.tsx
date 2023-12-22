"use client"

import React from 'react'
import AnchorLink from "react-anchor-link-smooth-scroll";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faGlobe, faEnvelope, faAddressBook } from '@fortawesome/free-solid-svg-icons';


function AboutUs() {

    const content = 'Sunoil Trading Refined Oil Product Abroad LLC (SUN) is an energy company. It carries out the exploration, development and production of crude oil and natural gas, transportation of crude oil and production of liquefied petroleum gas (LPG). The company’s business operations are mainly confined in Arab and African countries. It also has participating interest in exploration blocks in Kampala and in various projects in Libya, Gabon, Nigeria, the US, Venezuela, Mozambique, Bangladesh, Russia, and Israel. The company also provides upstream related services and operates crude and product pipelines. SUN is headquartered in Dubai, United Arab Emirates.'

    return (
        <div className=' flex flex-col justify-center' id='about'>
            <div className='flex lg:flex-row flex-col lg:p-20 md:p-10 lg:w-[100%] lg:h-[600px] mt-10 items-center'>
                <div className='lg:w-1/3'>
                    <img src="/home/IMG_5.jpg" alt="" className='lg:w-[418px] lg:h-[437px] md:w-[420px] w-[250px] lg:rounded-tl-full lg:rounded-b-full lg:rounded-tr-none rounded-br-full rounded-t-full' />
                </div>
                <div className='lg:w-2/3 space-y-5 p-10'>
                    <h1 className='text-4xl font-bold '>About Us</h1>
                    <p className='lg:text-lg'>
                        {content}
                    </p>
                    <div className='mt-5'>

                        <AnchorLink href={`#contact`}>
                            <button className='border-2 border-green-600 rounded-2xl px-4 py-2 text-green-800 text-sm'>
                                Connect Us
                            </button>
                        </AnchorLink>
                    </div>
                    <div className='w-full p-10 pl-0 text-sm space-y-2 text-black'>
                        <div className='flex space-x-5 items-center '>
                            <FontAwesomeIcon icon={faPhone} />
                            <h5>Phone: +97143413339</h5>
                        </div>
                        <div className='flex space-x-5 items-center'>
                            <FontAwesomeIcon icon={faGlobe} />
                            <h5>website: www.sunoiltradingllc.com</h5>
                        </div>
                        <div className='flex space-x-5 items-center'>
                            <FontAwesomeIcon icon={faEnvelope} />
                            <h5>Email: info@sunoiltradingllc.com</h5>
                        </div>
                        <div className='flex space-x-5 items-center'>
                            <FontAwesomeIcon icon={faAddressBook} />
                            <h5>Address: Office No.213, Zainal Mohebi Plaza, 13 A Street, Dubai, United Arab Emirates</h5>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default AboutUs