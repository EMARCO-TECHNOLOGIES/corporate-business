import Image from 'next/image'
import Navbar from './components/navbar/Navbar'
import HomePage from './components/homePage/HomePage'

export default function Home() {
  return (
    <main className='p-0'>
      <Navbar />
      <HomePage />
    </main>
  )
}
