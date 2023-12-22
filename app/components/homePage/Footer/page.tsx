"use client"

import React from 'react'

function Footer() {

    // const handleEmailClick = () => {

    //     const platform = window.navigator.platform
    //     console.log(platform, '454454')


    //     if (platform.toLowerCase().includes("ios") || platform.toLowerCase().includes("mac")) {
    //         // window.location.href = 'ms-outlook://compose?to=info@sunoilgroup.com'
    //         // window.location.href = 'mailto:?to=info@sunoilgroup.com'
    //         window.location.href = 'mailto:info@sunoilgroup.com'

    //     } else {
    //         window.location.href = 'mailto:info@sunoilgroup.com'
    //     }
    // };

    return (
        <div className='p-10 md:px-20 flex md:flex-row flex-colitems-center  bg-[#000000f8] '
        >

            <div className='flex md:space-x-16 space-x-14 justify-between w-full '>
                <div className='w-1/2 space-y-3'>
                    <h3 className='font-semibold text-white mb-3'>{`Follow Us`} </h3>
                    <small className='text-white '>Connect us to get updated</small>
                    <div className='flex'>
                        <img src="/home/instagram.png" alt="" className='w-5 h-5' />
                        <img src="/home/facebook.png" alt="" className='w-5 h-5' />
                        <img src="/home/linkedin.png" alt="" className='w-5 h-5' />
                        <img src="/home/twitter.png" alt="" className='w-5 h-5' />
                    </div>
                    <div className='py-10 '>

                        {/* <a href='mailto:info@sunoilgroup.com' className='text-sm text-blue-500 ' ><span className='text-sm'>Mail us here:</span>  info@sunoilgroup.com</a> */}
                        {/* <span onClick={handleEmailClick} className='text-sm text-blue-500 cursor-pointer'><span className='text-sm'>Mail us here:</span> info@sunoilgroup.com</span> */}
                        <a href="mailto:info@sunoilgroup.com" className="text-sm text-blue-500">Mail us here:  info@sunoilgroup.com</a>

                    </div>


                </div>
                <div className='w-1/2'>
                    <h3 className='font-semibold text-white mb-3' >{`Contact Us`}</h3>
                    <div className=' space-y-16 '>

                        <div className='flex flex-col text-white md:text-sm text-xs'>
                            <small>Phone: +971-45656699</small>
                            <small>Phone: +971-508595905</small>

                        </div>
                        <div className='flex justify-center md:hidden '>
                            <img src="/Navbar/logo.png" alt="" className='md:w-[110px] md:h-[90px] w-12 h-12' />
                        </div>

                    </div>
                </div>
                <img src="/Navbar/logo.png" alt="" className='md:w-[110px] md:h-[90px] w-12 h-12 -mt-3 md:block hidden' />

            </div>
        </div>
    )
}

export default Footer

