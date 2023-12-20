"use client"

import React, { createContext, useState } from 'react'
// import H1 from '../../H1/page'
import { Swiper, SwiperSlide } from 'swiper/react';

function Testimonials() {
    const [activeIndex, setIndex] = useState(0)
    const review = [
        {
            name: 'ALEX JOHN',
            img: '/home/people.png',
            message: `“Sun Group's exceptional expertise in trading oil and gas is unparalleled. Their Comment to quality and reliability makes them our go-to partner for all our trading needs.Their professionalism make them a top choice for our business needs.“`
        },
        {
            name: 'Robert',
            img: '/home/people.png',
            message: '“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed interdum justo vel ipsum condimentum finibus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed fermentum enim eget sodales suscipit. Sed metus tellus, “'
        },
        {
            name: 'ALEX JOHN',
            img: '/home/people.png',
            message: '“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed interdum justo vel ipsum condimentum finibus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed fermentum enim eget sodales suscipit. Sed metus tellus, “'
        },
    ]


    const handleSlideChange = (swiper) => {
        setIndex(swiper.index);
    };
    return (
        <div className='p-10 ' style={{
            background: 'linear-gradient(0deg, rgba(0, 121, 220, 0.10) 0%, rgba(0, 121, 220, 0.10) 100%)',

            backgroundColor: 'lightgray'
        }}>


            <div
            >
                <h1 className={`font-bold text-[36px]`} >{`LISTEN TO OUR CLIENTS`}</h1>
            </div>
            <div className='flex justify-center'>
                <div
                    className='flex justify-center md:w-[900px]'
                >
                    <Swiper

                    >
                        {review.map((item, index) => (
                            <React.Fragment key={index}>
                                {activeIndex === index && (
                                    <SwiperSlide className='w-full flex md:flex-row flex-col justify-between  md:py-10 py-10 md:space-y-0 space-y-5 '>
                                        {/* <div> */}
                                        <img src={item.img} alt="" className='w-20 h-20' />
                                        {/* </div> */}
                                        <div className='space-y-10 md:w-2/3 '>
                                            <p>{item.message}</p>
                                            <small>{item.name}</small>
                                        </div>
                                    </SwiperSlide>
                                )}
                            </React.Fragment>
                        ))}
                    </Swiper>
                </div>
            </div>

        </div >





    )
}

export default Testimonials