import React from 'react'

function AboutUs() {

    const content = 'Sunoil Trading Refined Oil Product Abroad LLC (SUN) is an energy company. It carries out the exploration, development and production of crude oil and natural gas, transportation of crude oil and production of liquefied petroleum gas (LPG). The company’s business operations are mainly confined in Arab and African countries. It also has participating interest in exploration blocks in Kampala and in various projects in Libya, Gabon, Nigeria, the US, Venezuela, Mozambique, Bangladesh, Russia, and Israel. The company also provides upstream related services and operates crude and product pipelines. SUN is headquartered in Dubai, United Arab Emirates.'

    return (
        <div className=' flex justify-center'>
            <div className='flex md:flex-row flex-col lg:p-20 md:p-10 lg:w-[100%] md:mt-0 mt-10 items-center'>
                <div className='md:w-1/3'>
                    <img src="/home/IMG_5.jpg" alt="" className='lg:w-[418px] lg:h-[437px] md:w-[280px] w-[180px] rounded-tl-full rounded-b-full' />
                </div>
                <div className='md:w-2/3 space-y-5 p-10'>
                    <h1 className='text-4xl font-bold '>About Us</h1>
                    <p className='text-lg'>
                        {content}
                    </p>
                    <button className='border-2 border-green-600 rounded-2xl px-4 py-2 text-green-800 text-sm'>
                        Connect Us
                    </button>
                </div>
            </div>

        </div>
    )
}

export default AboutUs