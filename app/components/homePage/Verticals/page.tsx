
"use client"

import { useRouter } from 'next/navigation'
import React from 'react'
// import H1 from '../../H1/page'
// import H3 from '../../H3/page'

function Verticals() {


    const router = useRouter()
    const items = [
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

    ]

    return (
        // <div >
        //     <div className='text-center'>
        //         <H1 text={`OUR VERTICALS`} />
        //     </div>

        //     <div className='flex space-x-8 p-20 overflow-x-auto w-screen'>
        //         {
        //             items.map((item, index) => (
        //                 <div className='flex w-[410px] h-[200px]'>
        //                     <div>
        //                         <img src={item.img} alt="" className='w-[200px] h-[200px]' width={100} height={100} />
        //                     </div>
        //                     <div>
        //                         <H3 text={item.name} />
        //                     </div>
        //                 </div>
        //             ))
        //         }

        //     </div>
        // </div >

        // <div className='md:p-10 p-3 lg:px-20 mt-5'>
        //     <div className='text-center'>
        //         <h1 className={`text-2xl font-bold `} >{'OUR VERTICALS'} </h1>
        //     </div>
        //     <div className='flex max-w-screen-2xl overflow-x-auto space-x-8 md:p-5 p-3 mt-5 scrollbar-none'>
        //         {items.map((item, index) => (
        //             <div key={index} className=' flex flex-shrink-0 w-96 space-x-4'>
        //                 <div >
        //                     <img src={item.img} alt="" className='' />
        //                 </div>
        //                 <div className={'space-y-5'}>
        //                     <h3 className='font-semibold'>{item.name} </h3>
        //                     <button className='px-2 py-1 rounded-md border-2 '>Explore</button>

        //                 </div>
        //             </div>
        //         ))}
        //     </div>
        // </div>

        <div className='md:p-10 lg:p-20 p-3  ' id='companies' >
            <div className='rounded-lg  border-opacity-50 md:p-10 py-8 border-2'>

                <div className='text-center'>
                    <h1 className={`text-[36px] font-bold `} >{'OUR VERTICALS'} </h1>
                </div>
                <div className='flex justify-center '>

                    <div className='grid gap-10 md:p-5 p-3 mt-5 md:grid-cols-2 justify-center  '>
                        {items.map((item, index) => (
                            <div key={index} className=' flex w-full space-x-4 lg:shadow-md'>
                                <div className='flex items-center'>
                                    <img src={item.img} alt="" className='lg:w-[120px] lg:h-[120px]' />
                                </div>
                                <div className={'space-y-5 p-3'}>
                                    <h3 className='font-semibold'>{item.name} </h3>
                                    <button className='px-2 py-1 rounded-md border border-black text-black hover:bg-black hover:text-slate-50' onClick={() => router.push(item.redirect)}>Explore</button>

                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </div>



    )
}

export default Verticals