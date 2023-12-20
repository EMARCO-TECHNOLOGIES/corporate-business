import React from 'react'
// import H1 from '../../H1/page'
// import H3 from '../../H3/page'

function Verticals() {

    const items = [
        {
            img: '/home/item.png',
            name: 'SUNOIL TRADING REFINED OIL PRODUCT ABROAD LLC',
            desc: 'YouTube'
        },
        {
            img: '/home/item1.png',
            name: 'SUNOIL TRADING REFINED OIL PRODUCT ABROAD LLC',
            desc: 'YouTube'
        },
        {
            img: '/home/item2.png',
            name: 'SUNOIL TRADING REFINED OIL PRODUCT ABROAD LLC',
            desc: 'YouTube'
        },
        {
            img: '/home/item.png',
            name: 'SUNOIL TRADING REFINED OIL PRODUCT ABROAD LLC',
            desc: 'YouTube'
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

        <div className='md:p-10 p-3  mt-5' id='#companies'>
            <div className='text-center'>
                <h1 className={`text-2xl font-bold `} >{'OUR VERTICALS'} </h1>
            </div>
            <div className='flex justify-center w-screen'>

                <div className='grid gap-10 md:p-5 p-3 mt-5 md:grid-cols-2  '>
                    {items.map((item, index) => (
                        <div key={index} className=' flex w-3/4 space-x-4'>
                            <div >
                                <img src={item.img} alt="" className='' />
                            </div>
                            <div className={'space-y-5'}>
                                <h3 className='font-semibold'>{item.name} </h3>
                                <button className='px-2 py-1 rounded-md border-2 '>Explore</button>

                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </div>



    )
}

export default Verticals