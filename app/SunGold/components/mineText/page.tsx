import React from 'react'
import { Roboto_Condensed } from 'next/font/google'

const font = Roboto_Condensed({ subsets: ['latin'], weight: '600' })


function MineText() {
    return (
        <h1 className={`w-full block text-blue-800 text-center mt-16 font-bold lg:text-6xl md:text-4xl ${font.className}`}>WE HAVE OUR OWN MINE IN UGANDA !!</h1>

    )
}

export default MineText