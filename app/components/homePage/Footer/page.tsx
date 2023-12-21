import React from 'react'

function Footer() {
    return (
        <div className='p-10 md:px-20 flex md:flex-row flex-col justify-between items-center  bg-[#000000f8] '
        // style={{
        // background: 'linear-gradient(0deg, rgba(0, 121, 220, 0.10) 0%, rgba(0, 121, 220, 0.10) 100%)',

        //     backgroundColor: 'lightgray'
        // }}
        >
            <div>
                <img src="/Navbar/logo.png" alt="" className='md:w-[110px] md:h-[90px] w-12 h-12' />
            </div>
            <div className='flex space-x-16'>
                <div>
                    <h3 className='font-semibold text-white mb-3'>{`Follow Us`} </h3>
                    <small className='text-white'>Connect us to get updated</small>
                    <div className='flex'>
                        <img src="/home/instagram.png" alt="" className='w-5 h-5' />
                        <img src="/home/facebook.png" alt="" className='w-5 h-5' />
                        <img src="/home/linkedin.png" alt="" className='w-5 h-5' />
                        <img src="/home/twitter.png" alt="" className='w-5 h-5' />
                    </div>
                    <div className='py-10'>

                        <a href='mailto:info@sunoilgroup.com' className='text-xs text-blue-500 ' ><span className='text-sm'>Mail us here:</span>  info@sunoilgroup.com</a>
                    </div>

                </div>
                <div>
                    <h3 className='font-semibold text-white mb-3' >{`Contact Us`}</h3>
                    <div className='flex flex-col text-white'>

                        <small><span >Phone:</span> +971 045656699</small>
                        <small><span >Phone:</span> +971 509343324</small>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Footer

