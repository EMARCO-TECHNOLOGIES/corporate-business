"use client"

import React from 'react'
import AnchorLink from "react-anchor-link-smooth-scroll";

function AboutUs() {

    const content = 'Sunoil Trading Refined Oil Product Abroad LLC (SUN) is an energy company. It carries out the exploration, development and production of crude oil and natural gas, transportation of crude oil and production of liquefied petroleum gas (LPG). The company’s business operations are mainly confined in Arab and African countries. It also has participating interest in exploration blocks in Kampala and in various projects in Libya, Gabon, Nigeria, the US, Venezuela, Mozambique, Bangladesh, Russia, and Israel. The company also provides upstream related services and operates crude and product pipelines. SUN is headquartered in Dubai, United Arab Emirates.'

    return (
        <div className=' flex justify-center' id='about'>
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
                </div>
            </div>

        </div>
    )
}

export default AboutUs