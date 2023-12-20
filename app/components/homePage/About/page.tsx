import React from 'react'
// import H1 from '../../H1/page'

function About() {




    const heading = 'ABOUT SUN GROUP'

    const content = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed interdum justo vel ipsum condimentum finibus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed fermentum enim eget sodales suscipit. Sed metus tellus, scelerisque et ultricies quis, feugiat semper dui. Ut placerat tincidunt magna id maximus. Sed sodales, ligula eu laoreet euismod, justo metus consectetur lacus, eu finibus felis eros a dolor. Curabitur auctor hendrerit est, at molestie sem mattis eget. Vestibulum quis pharetra erat, eget congue justo. In hac habitasse platea dictumst. Orci varius natoque penatibus et magnis dis parturient montes.'


    return (
        <div className='flex lg:flex-row flex-col lg:space-x-10 md:p-10 justify-center relative'>
            {/* <div className='lg:w-[50%] lg:p-10 p-5 flex lg:justify-start justify-center'>
                <img src="/home/About.png" alt="" className='md:w-[610px] md:h-[369px]' />
            </div> */}
            <img src="/home/pattern1.png" alt="" className='w-[500px] h-[400px] absolute md:block hidden lg:left-0 lg:top-[0px]' />
            <div className='lg:w-[80%] lg:p-10 p-5 space-y-4'>
                <h1 className={` font-bold md:text-[48px] md:text-left text-center text-[28px] `}>{heading}</h1>
                <p className='text-[16px]'>
                    {content}
                </p>
                <button className='px-4 py-2 text-xs border-2 border-[#34373A] rounded-md'>
                    Connect Now
                </button>
            </div>
            <img src="/home/pattern2.png" alt="" className='w-[400px] h-[400px] absolute md:block hidden -right-40 top-48 -rotate-20 opacity-50' />
        </div>
    )
}

export default About