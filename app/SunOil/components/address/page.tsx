import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faGlobe, faEnvelope, faAddressBook } from '@fortawesome/free-solid-svg-icons';


function Address() {
    return (
        <div className='flex flex-col justify-center p-10 space-y-5'>
            {/* <div className='w-[50%]'> */}

            <div className='flex space-x-5 items-center'>
                <FontAwesomeIcon icon={faPhone} />
                <h3>Phone: +97143413339</h3>
            </div>
            <div className='flex space-x-5 items-center'>
                <FontAwesomeIcon icon={faGlobe} />
                <h3>website: www.sunoiltradingllc.com</h3>
            </div>
            <div className='flex space-x-5 items-center'>
                <FontAwesomeIcon icon={faEnvelope} />
                <h3>Email: info@sunoiltradingllc.com</h3>
            </div>
            <div className='flex space-x-5 items-center'>
                <FontAwesomeIcon icon={faAddressBook} />
                <h3>Address: Office No.213, Zainal Mohebi Plaza, 13 A Street, Dubai, United Arab Emirates</h3>
            </div>
            {/* </div> */}
        </div>
    )
}

export default Address