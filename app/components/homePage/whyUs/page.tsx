import React from 'react'
// import H3 from '../../H3/page'
// import CarouselComp from '../../carousal/page'

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
        <div className='flex lg:flex-row flex-col md:px-20 px-5 justify-center '
            style={{ backgroundImage: `url('/home/whyUs.png')` }}
        >
            <div className=' py-10 space-y-5 lg:w-5/6 md:text-left text-center'>
                <h1 className='text-[36px] font-bold'>HELPING CLIENTS STAND OUT</h1>
                {/* <div >
                    <img src="/home/image.png" alt="" className='w-full' />
                </div> */}
                <div className='flex lg:flex-row flex-col lg:space-x-5 lg:space-y-0 space-y-5'>
                    <div className='border border-[#0079DC] rounded-md p-5 lg:w-1/2 space-y-3 '>
                        <h5 className='text-[#0079DC]  text-[14px]'>OUR MISSION</h5>
                        {/* <div >
                            <h3 >{`Mas que FLOC? Uma visão da alternativa que o Google dá para os Cookies.`}</h3>
                        </div> */}
                        <div>
                            <p className='text-[16px]'>At Sun Group, our mission is to harmonize excellence and responsibility across our spectrum of industries, including commodities trading in oil, gas, diamond, and gold, coupled with ethical mining practices. We strive to optimize value creation while ensuring utmost integrity, transparency, and sustainability in all our endeavors. Through innovation and strategic partnerships, we aim to expand our global presence, pioneering new standards in diversified trading and responsible resource extraction. Our commitment extends beyond profits; we are dedicated to positively impacting communities.</p>
                        </div>


                    </div>
                    <div className='border border-[#0079DC] rounded-md p-5 lg:w-1/2 space-y-3 '>
                        <h5 className='text-[#0079DC] text-[14px]'>OUR VISION</h5>

                        {/* <div>
                            <h3 >{`Por que 'Jogos de guerra’ são essenciais para o future-proof marketing?`} </h3>
                        </div> */}
                        <div>
                            <p className='text-[16px]'>At Sun Group, our vision is a luminous tapestry woven from diverse industries, including commodities trading in oil, gas, diamond, and gold, alongside responsible mining practices. We aim to be a global pioneer, harnessing innovation and sustainability as guiding stars in our journey. Our vision encompasses ethical trading, responsible resource extraction, and global impact, all while fostering a people-centric culture of excellence and empowerment. Together, we illuminate pathways towards a brighter future, where our integrated approach to diversified industries sets new standards and leaves a positive legacy for generations to come.</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className='ml-5 py-10 lg:w-1/6 space-y-5 lg:mt-16'>
                {sideContent.map((item, index) => (

                    <div key={index} className='border-t-2 p-5 border-[#0079DC] border-opacity-60 space-y-3 '>
                        <h5 className='font-semibold'>{item.title}</h5>
                        <p className='text-[16px]'>{item.desc}</p>

                    </div>
                ))}
            </div> */}
        </div>
    )
}

export default WhyUs