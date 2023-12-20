"use client"

import React, { useState } from 'react'

function What_We_Do() {

    const [showMore, setShowMore] = useState(null)
    const content = 'Delivering a comprehensive range of high-quality petroleum products, we specialize in sourcing, refining, and distributing fuels and lubricants to meet the diverse needs of industries, ensuring reliability and efficiency in every drop.'


    const items = [
        {
            img: "/home/item.png",
            itemName: 'CRUDE OIL',
            itemDesc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consectetur justo quis euismod vehicula. Quisque diam dui, imperdiet et hendrerit in, accumsan tempus erat.Nullam ornare blandit urna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consectetur justo quis euismod vehicula. Quisque diam dui, imperdiet et hendrerit in, accumsan tempus e'
        },
        {
            img: "/home/item.png",
            itemName: 'NATURAL GAS',
            itemDesc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consectetur justo quis euismod vehicula. Quisque diam dui, imperdiet et hendrerit in, accumsan tempus erat.Nullam ornare blandit urna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consectetur justo quis euismod vehicula. Quisque diam dui, imperdiet et hendrerit in, accumsan tempus e'
        },
        {
            img: "/home/item.png",
            itemName: 'POWER',
            itemDesc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consectetur justo quis euismod vehicula. Quisque diam dui, imperdiet et hendrerit in, accumsan tempus erat.Nullam ornare blandit urna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consectetur justo quis euismod vehicula. Quisque diam dui, imperdiet et hendrerit in, accumsan tempus e'
        },
        // {
        //     img: "/home/item.png",
        //     itemName: 'Oil Trading',
        //     itemDesc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consectetur justo quis euismod vehicula. Quisque diam dui, imperdiet et hendrerit in, accumsan tempus erat.Nullam ornare blandit urna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consectetur justo quis euismod vehicula. Quisque diam dui, imperdiet et hendrerit in, accumsan tempus e'
        // },
        // {
        //     img: "/home/item.png",
        //     itemName: 'Oil Trading',
        //     itemDesc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consectetur justo quis euismod vehicula. Quisque diam dui, imperdiet et hendrerit in, accumsan tempus erat.Nullam ornare blandit urna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consectetur justo quis euismod vehicula. Quisque diam dui, imperdiet et hendrerit in, accumsan tempus e'
        // },
        // {
        //     img: "/home/item.png",
        //     itemName: 'Oil Trading',
        //     itemDesc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consectetur justo quis euismod vehicula. Quisque diam dui, imperdiet et hendrerit in, accumsan tempus erat.Nullam ornare blandit urna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consectetur justo quis euismod vehicula. Quisque diam dui, imperdiet et hendrerit in, accumsan tempus e'
        // },

    ]

    return (
        <div className='lg:p-20 text-center space-y-10 p-5'>
            <h1 className='font-bold text-4xl'>What We Do</h1>
            <p>{content}</p>

            <div className='flex justify-center'>
                <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:gap-x-10 md:gap-y-20 gap-5 w-3/4 md:w-full lg:w-3/4'>
                    {items.map((item, index) => (

                        <div key={index} className='space-y-5' onClick={() => showMore != index ? setShowMore(index) : setShowMore(null)}>
                            <div className='relative flex justify-center'>
                                <img
                                    src={item.img}
                                    alt=""
                                    className='w-full shadow-inner '

                                />
                                <div className='absolute w-full h-full gradient-overlay'></div>


                                <h1 className='absolute font-bold bottom-10 md:text-2xl text-xl text-white'>{item.itemName}</h1>
                            </div>
                            {/* <div className={`md:block hidden  `}>
                                <p className='text-left  '>
                                    {item.itemDesc}
                                </p>
                            </div> */}
                            {/* {showMore === index ?
                                (<div className='block md:hidden'>
                                    <p className='text-left  '>
                                        {item.itemDesc}
                                    </p>
                                </div>) : <small className='block md:hidden text-blue-400 '>Click to Know more</small>
                            } */}
                        </div>
                    ))}

                </div>
            </div>
        </div>
    )
}

export default What_We_Do