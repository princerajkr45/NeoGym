import React from 'react'
import heroImg from '../assets/hero-bg.jpg'
import { Link } from 'react-router-dom'
import Footer from './Footer'
import Contact from '../components/Contact'
import Healthy from '../components/Healthy'
import Info from '../components/Info'
import Trainner from '../components/Trainner'
import Why from '../components/Why'



function Home() {
    return (
        <>
            <div style={{
                backgroundImage: `url(${heroImg})`,
                backgroundSize: 'cover',
                minHeight: '100vh',
                backgroundAttachment: 'fixed'
            }}>

                <div className='flex flex-col gap-6 items-center text-white text-center pt-28'>
                    <h1 className='text-xl md:text-2xl lg:text-3xl xl:text-4xl font-medium'>FITNESS</h1>
                    <h1 className='text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-medium'>TRAINING</h1>
                    <h1 className='text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-medium'>NEOGYM</h1>
                    <p className='px-4 md:px-8 lg:px-16 xl:px-40 2xl:px-60'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis neque expedita iure quaerat nobis ducimus reiciendis nulla eius. Aliquam ducimus optio sapiente deleniti libero quos harum debitis necessitatibus quo praesentium.
                    </p>
                    <Link to='/contact'><button className='border px-8 py-2 mt-4'>CONTACT US</button></Link>
                </div>
            </div>

            <Why />
            <Trainner />
            <Healthy />
            <Contact />

            <Info />
            <Footer />
            
        </>
    )
}

export default Home