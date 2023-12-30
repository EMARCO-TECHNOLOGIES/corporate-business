"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { container, item } from '../../motionStyles/motionStyles'


function WhyUs() {

    const sideContent = [
        {
            title: 'Info marketing',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit vel sem posuere.'
        },
        {
            title: 'Info marketing',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit vel sem posuere.'
        },
        {
            title: 'Info marketing',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit vel sem posuere.'
        },
        {
            title: 'Info marketing',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit vel sem posuere.'
        },
    ]

    return (
        <motion.div className=' flex items-center lg:flex-row flex-col md:px-20 px-5 justify-center '
            style={{ backgroundImage: `url('/home/whyUs.png')` }}
            variants={container}
            initial="hidden"
            whileInView={"visible"}
            exit={"hidden"}

        >
            <div className=' py-10 space-y-5 lg:w-5/6 md:text-left text-center'>
                <motion.h1 className='text-[36px] font-bold'
                    variants={item}
                    initial="hidden"
                    whileInView={"visible"}
                    exit={"hidden"}
                >
                    HELPING CLIENTS STAND OUT</motion.h1>

                <div className='flex lg:flex-row flex-col lg:space-x-5 lg:space-y-0 space-y-5'

                >
                    <motion.div className='border border-[#0079DC] rounded-md p-5 lg:w-1/2 space-y-3 '
                        variants={item}
                        initial="hidden"
                        whileInView={"visible"}
                        exit={"hidden"}>
                        <h5 className='text-[#000080]  text-[14px]'>OUR MISSION</h5>

                        <div>
                            <p className='text-[16px] text-justify'>At Sun Oil Group, our mission is to harmonize excellence and responsibility across our spectrum of industries, including commodities trading in oil, gas, diamond, and gold, coupled with ethical mining practices. We strive to optimize value creation while ensuring utmost integrity, transparency, and sustainability in all our endeavors. Through innovation and strategic partnerships, we aim to expand our global presence, pioneering new standards in diversified trading and responsible resource extraction. Our commitment extends beyond profits; we are dedicated to positively impacting communities.</p>
                        </div>
                    </motion.div>
                    <motion.div className='border border-[#0079DC] rounded-md p-5 lg:w-1/2 space-y-3 '
                        variants={item}
                        initial="hidden"
                        whileInView={"visible"}
                        exit={"hidden"}
                    >
                        <h5 className='text-[#000080] text-[14px]'>OUR VISION</h5>
                        <div>
                            <p className='text-[16px] text-justify'>At Sun Oil Group, our vision is a luminous tapestry woven from diverse industries, including commodities trading in oil, gas, diamond, and gold, alongside responsible mining practices. We aim to be a global pioneer, harnessing innovation and sustainability as guiding stars in our journey. Our vision encompasses ethical trading, responsible resource extraction, and global impact, all while fostering a people-centric culture of excellence and empowerment. Together, we illuminate pathways towards a brighter future, where our integrated approach to diversified industries sets new standards and leaves a positive legacy for generations to come.</p>
                        </div>
                    </motion.div>
                </div>
            </div>

        </motion.div>
    )
}

export default WhyUs