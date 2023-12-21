"use client"

import { faAddressBook, faEnvelope, faGlobe, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import AnchorLink from "react-anchor-link-smooth-scroll";

function AboutUs() {

    const content = `SUN GOLD &DIAMOND TRADING DMCC is a gold and diamond producer/trader, with operations in the United States, Argentina, Australia, Brazil, Ghana, Guatemala, and West Africa. Our operations are organized in five geographic regions: North America, PAN AM (Central America, South America) Pacific, and Africa. Our Sales come from the sale of refined gold, and rough and finished diamonds and all metals like copper , silver and precious metals like rhodium . We acquire unprocessed gold ores concentrates or doré bars, produced from Minerals, refine and deliver them to our end buyers or use them for our own proprietary end user markets.

    Our upstream vertically integrated operations give local governments the ability to provide enhanced products allowing them to pass on the partnership savings to their citizens and provide the building of local wealth and efficiency.
    We have unrivalled expertise in the exploration, mining, sorting, sales, grading and marketing of diamond.`

    return (
        <div className=' flex justify-center lg:mt-16' id='about'>
            <div className='flex lg:flex-row flex-col lg:p-20 md:p-10 lg:w-[100%] lg:h-[600px] mt-10 items-center'>
                <div className='lg:w-1/3'>
                    <img src="/home/IMG_4.jpg" alt="" className='lg:w-[418px] lg:h-[437px] md:w-[420px] w-[250px] lg:rounded-tl-full lg:rounded-b-full lg:rounded-tr-none rounded-br-full rounded-t-full' />
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
                    <div className='w-full p-10 pl-0  space-y-1 flex flex-col text-sm '>
                        <h3>Address :</h3>
                        <h5>Unit No: 4718</h5>
                        <h5>DMCC Business Centre</h5>
                        <h5>Level No 1</h5>
                        <h5>Jewellery & Complex 3 </h5>
                        <h5>Dubai, United Arab Emirates </h5>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default AboutUs