import React from 'react'

function OurClients() {
    const images = [
        '/About/indianOil.png',
        '/About/Gulf.png',
        '/About/BP.png',
        '/About/HP.png',
        '/About/Reliance.png'
    ]
    return (
        <div className='md:p-20 space-y-12 mb-10'>
            <div className='text-center space-y-10'>
                <h1 className='font-bold text-4xl'>Our Clients</h1>
                <p>Delivering a comprehensive range of high-quality petroleum products, we specialize in sourcing, refining, and distributing fuels and lubricants to meet the diverse needs of industries, ensuring reliability and efficiency in every drop.</p>
            </div>
            <div className='flex justify-center'>

                <div className='flex justify-between w-full'>
                    {images.map((item, index) => (
                        <div key={index} className=' '>
                            <img src={item} alt="" className='w-32 h-28 object-contain' />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default OurClients