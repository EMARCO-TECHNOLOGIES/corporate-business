"use client"

import React from 'react'
import AnchorLink from "react-anchor-link-smooth-scroll";

function AboutUs() {

    const content = `Sun General Trading LLC is based in United States Of America ,is now a well renowned and well-established Importer and Exporters of

    • HMS1&2, Used rails, Steel billets, TMT steel bars, iron ore
    • Parboiled Rice, Basmati Rice, Sella Rice, Sona Mansouri Rice
    • ICUMSA 45 Sugar, Brown/Raw Sugar 600-1200
    • All types of Edible oils like Corn Oil. Soybean Oil, Palm Oil, Sunflower Oil, Rapeseed oil
    • Yellow Corn/Maize, Soybean, Wheat, Barley both GMO and Non GMO and also both Human Consumption grade and animal consumption grade
    • Copper wire, Copper cathode
    • Aluminium ingots, Aluminium wheel scraps, Aluminium UBC Scraps.
    • Urea Prilled and Granular, DAP, NPK
    • D2, EN590, Jet Fuel A1, Pet coke, Base Oil, LCO, AGO, Octane 93 and Octane 95
    • Coal, Sulpher Granular, Sulphur Lumps
    • Gold etc.
    
    We have every reason to be very satisfied with the results that have been achieved in the short span of 3 years Our strategic advice, coupled with prudent risk management, has helped our customers to perform to their revenue budget and beyond.`

    return (
        <div className=' flex justify-center' id='about'>
            <div className='flex lg:flex-row flex-col lg:p-20 md:p-10 lg:w-[100%] lg:h-[600px] mt-10 items-center'>
                <div className='lg:w-1/3'>
                    <img src="/home/SunGeneral.jpg" alt="" className='lg:w-[418px] lg:h-[437px] md:w-[420px] w-[250px] lg:rounded-tl-full lg:rounded-b-full lg:rounded-tr-none rounded-br-full rounded-t-full' />
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