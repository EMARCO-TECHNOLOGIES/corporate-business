
"use client"

import { useRouter } from 'next/navigation'
import React from 'react'
// import H1 from '../../H1/page'
// import H3 from '../../H3/page'
import { Variants, motion } from 'framer-motion'
import { container, item as itemMotion } from '../../motionStyles/motionStyles'

function Verticals() {

    const router = useRouter()
    const items = [
        {
            img: '/home/IMG_5.jpg',
            name: 'SUNOIL TRADING REFINED OIL PRODUCTS ABROAD LLC',
            // desc: 'YouTube',
            redirect: 'SunOil'
        },
        {
            img: '/home/IMG_4.jpg',
            name: 'SUN GOLD &DIAMOND TRADING DMCC',
            // desc: 'YouTube'
            redirect: '/SunGold'

        },
        {
            img: '/home/IMG_2.jpg',
            name: 'RISING SUN ARKAN LTD',
            // desc: 'YouTube'
            redirect: '/RisingSun'
        },
        {
            img: '/home/sungeneral.jpg',
            name: 'SUN GENERAL TRADING LLC',
            // desc: 'YouTube'
            redirect: '/SunGeneral'

        },


    ]


    return (

        <motion.div className='md:p-10 lg:p-20 p-3 ' id='companies'

        >
            <div className='rounded-lg border-opacity-50 md:p-10 py-8 border-2'>

                <div className='text-center'>
                    <h1 className={`text-[36px] font-bold `} >{'OUR VERTICALS'} </h1>
                </div>
                <div className='flex justify-center '>

                    <div className='grid gap-10 md:p-5 p-3 mt-5 md:grid-cols-2 justify-center  '

                    >
                        {items.map((item, index) => (
                            <motion.div key={index} className=' flex w-full space-x-4 lg:shadow-md'
                                initial="hidden"
                                whileInView={"visible"}
                                exit={"hidden"}
                                variants={itemMotion}

                            >
                                <div className='flex items-center '>
                                    <img src={item.img} alt="" className='lg:w-[120px] lg:h-[120px] w-[120px] h-[120px]   ' />
                                </div>
                                <div className={'lg:space-y-5 space-y-2 p-3 w-1/2'}>
                                    <h3 className='font-semibold text-sm'>{item.name} </h3>
                                    <button className='px-2 py-1 rounded-md border border-black text-black hover:bg-black hover:text-slate-50' onClick={() => router.push(item.redirect)}>Explore</button>

                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

        </motion.div>



    )
}

export default Verticals