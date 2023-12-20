import React from 'react'

function AboutUs() {

    const content = `SUN GOLD &DIAMOND TRADING DMCC is a gold and diamond producer/trader, with operations in the United States, Argentina, Australia, Brazil, Ghana, Guatemala, and West Africa. Our operations are organized in five geographic regions: North America, PAN AM (Central America, South America) Pacific, and Africa. Our Sales come from the sale of refined gold, and rough and finished diamonds and all metals like copper , silver and precious metals like rhodium . We acquire unprocessed gold ores concentrates or doré bars, produced from Minerals, refine and deliver them to our end buyers or use them for our own proprietary end user markets.

    Our upstream vertically integrated operations give local governments the ability to provide enhanced products allowing them to pass on the partnership savings to their citizens and provide the building of local wealth and efficiency.
    We have unrivalled expertise in the exploration, mining, sorting, sales, grading and marketing of diamond.`

    return (
        <div className=' flex justify-center'>
            <div className='flex md:flex-row flex-col lg:p-20 md:p-10 lg:w-[100%] md:mt-0 mt-10 items-center'>
                <div className='md:w-1/3'>
                    <img src="/home/IMG_4.jpg" alt="" className='lg:w-[418px] lg:h-[437px] md:w-[280px] w-[180px] rounded-tl-full rounded-b-full' />
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