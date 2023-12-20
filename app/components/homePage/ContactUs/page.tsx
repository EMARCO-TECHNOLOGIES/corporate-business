import React from 'react'
// import H1 from '../../H1/page'

function ContactUs() {
    return (
        <div className='flex md:flex-row flex-col lg:p-20 p-10 items-center md:space-x-8 space-y-6' id='contact'>
            <div className='md:w-1/3 space-y-5'>
                <h1 className={`font-bold  text-[36px]`} >{`HEY, LET'S TALK.`}</h1>
                <p className='text-[16px]'>Get in touch with us to discuss your needs,
                    ask questions, or provide feedback.
                    We're eager to hear from you</p>
            </div>
            <div className='md:w-2/3 lg:px-20 '>
                <form action="" className='space-y-6 '>
                    <div >
                        <input type="text" className='w-full border border-black rounded-md p-2 text-center' placeholder='Name' />
                    </div>
                    <div className='space-x-5 flex'>
                        <input type="email" className='w-1/2 border border-black rounded-md p-2 text-center' placeholder='Email' />
                        <input type="text" className='w-1/2 border border-black rounded-md p-2 text-center' placeholder='Mobile' />
                    </div>
                    <div>
                        <textarea name="message" id="" placeholder='message' className='w-full border border-black rounded-md p-2 text-center '></textarea>
                    </div>
                    <div className='w-full justify-center'>
                        <button className='border border-black px-4 py-2 rounded-md hover:bg-black hover:text-white'>Submit</button>
                    </div>
                </form>

            </div>
        </div>
    )
}

export default ContactUs