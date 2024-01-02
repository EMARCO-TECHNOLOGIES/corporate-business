"use client"
import React from 'react'
import { motion } from "framer-motion";
import { container, item } from "../../motionStyles/motionStyles";


function Directors() {

    return (
        <motion.div className='  flex items-center justify-center p-3'>
            <motion.div className={`md:w-2/3  space-y-14 p-4  border-2 rounded-lg ${container}`}
                variants={container}
                initial="hidden"
                whileInView="visible"
                exit="hidden"
            >

                <motion.div className={`space-y-6 text-center ${item}`} variants={item}>
                    <h3 className='text-3xl text-[#000080] opacity-70'>A job is worth doing together</h3>
                    <h3 className='text-lg'>Introducing the guiding visionaries: Steering our team towards innovation, excellence, and success</h3>
                </motion.div>
                <motion.div className='flex justify-around text-center md:space-x-5 lg:space-x-16'>
                    <motion.div className='space-y-5 flex flex-col justify-center' variants={item}>
                        <img src="/Directors/CEO.jpg" alt="CEO" className='rounded-full md:w-56 md:h-56 w-28 h-28 transition-transform hover:scale-110 self-center' />
                        <div className='space-y-1'>
                            <h5 className='font-semibold md:text-xl text-sm text-black'>PRASANTH DEVARAJ</h5>
                            <h3 className='md:text-sm font-normal text-xs'>CHIEF EXECUTIVE OFFICER</h3>
                            {/* <h6 className='font-bold text-sm md:hidden block'>CHIEF EXECUTIVE OFFICER</h6> */}
                        </div>
                    </motion.div>
                    <motion.div className='space-y-5 flex flex-col justify-center' variants={item}>
                        <img src="/Directors/MD.jpg" alt="MANAGING DIRECTOR" className='rounded-full md:w-56 md:h-56 w-28 h-28 transition-transform hover:scale-110 self-center' />
                        <div className='space-y-1'>
                            {/* <h6 className='font-bold text-sm md:hidden block'>CHIEF EXECUTIVE OFFICER</h6> */}
                            <h5 className='font-semibold md:text-xl text-sm text-black'>S.VENKATA RAJU</h5>
                            <h3 className='font-normal md:text-sm text-xs'>MANAGING DIRECTOR</h3>
                        </div>
                    </motion.div>

                </motion.div>
            </motion.div>
        </motion.div>
    )
}

export default Directors