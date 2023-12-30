"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { inputField, item, } from '../../motionStyles/motionStyles'

function ContactUs() {


    return (
        <motion.div className=' flex md:flex-row flex-col lg:p-20 p-10 items-center md:space-x-8 space-y-6 ' id='contact'

        >
            <motion.div className='md:w-1/3 space-y-5'
                variants={item}
                initial="hidden"
                whileInView={"visible"}
                exit={"hidden"}
            >
                <h1 className={`font-bold  text-[36px]`} >{`HEY, LET'S TALK.`}</h1>
                <p className='text-[16px] text-justify'>Get in touch with us to discuss your needs,
                    ask questions, or provide feedback.
                    We're eager to hear from you</p>
            </motion.div>
            <div className='md:w-2/3 lg:px-20 '>
                <form action="" className='space-y-10 '>
                    <motion.div
                        variants={inputField}
                        initial="hidden"
                        whileInView={"visible"}
                        exit={"hidden"}
                    >
                        <input type="text" className='w-full border border-black rounded-md p-3 text-center' placeholder='Name' />
                    </motion.div>
                    <motion.div className='space-x-5 flex'
                        variants={inputField}
                        initial="hidden"
                        whileInView={"visible"}
                        exit={"hidden"}
                    >
                        <input type="email" className='w-1/2 border border-black rounded-md p-3 text-center' placeholder='Email' />
                        <input type="text" className='w-1/2 border border-black rounded-md p-3 text-center' placeholder='Mobile' />
                    </motion.div>
                    <motion.div
                        variants={inputField}
                        initial="hidden"
                        whileInView={"visible"}
                        exit={"hidden"}
                    >
                        <textarea name="message" id="" placeholder='message' className='w-full border border-black rounded-md p-3 text-center '></textarea>
                    </motion.div>
                    <motion.div className='w-full justify-center'
                        variants={inputField}
                        initial="hidden"
                        whileInView={"visible"}
                        exit={"hidden"}
                    >
                        <button className='border border-black px-4 py-2 rounded-md hover:bg-black hover:text-white text-black'>Submit</button>
                    </motion.div>
                </form>

            </div>
        </motion.div>
    )
}

export default ContactUs