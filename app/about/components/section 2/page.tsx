import React from 'react'

function AboutUs() {

    const content = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consectetur justo quis euismod vehicula. Quisque diam dui, imperdiet et hendrerit in, accumsan tempus erat.Nullam ornare blandit urna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consectetur justo quis euismod vehicula. Quisque diam dui, imperdiet et hendrerit in, accumsan tempus erat.Nullam ornare blandit urna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consectetur justo quis euismod vehicula. Quisque diam dui, imperdiet et hendrerit in, accumsan tempus erat.Nullam ornare blandit urna.'

    return (
        <div className=' flex justify-center'>
            <div className='flex md:flex-row flex-col lg:p-20 md:p-10 lg:w-[80%] md:mt-0 mt-10 items-center'>
                <div className='md:w-1/3'>
                    <img src="/About/img1.png" alt="" className='lg:w-[318px] lg:h-[337px] md:w-[280px] w-[180px]' />
                </div>
                <div className='md:w-2/3 space-y-5 p-10'>
                    <h1 className='text-lg font-bold '>About Us</h1>
                    <p>
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