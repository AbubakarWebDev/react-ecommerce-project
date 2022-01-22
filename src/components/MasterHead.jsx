import React from 'react'
import { NavLink } from "react-router-dom";

const MasterHead = () => {
    return (
        <section className='bg-master-head w-full bg-t bg-center bg-fixed bg-cover'>
            <div className="flex flex-col lg:w-full w-10/12 m-auto pl-5 py-20">
                <p className='md:text-sm text-2xl uppercase mb-5'>WE’RE PROUD TO INTRODUCE</p>
                <h1 className='md:text-3xl text-5xl font-bold font-montserrat uppercase'>
                    Fashionable Fit AbubakarWebDev <br />
                    Trending Style <br />
                    Men Wear
                </h1>
                <p className='md:text-sm text-2xl uppercase my-5'>Exclusively from Our Fashion Shop™</p>
                <NavLink to='/shop' className='text-center rounded-full md:py-2 md:px-2 md:text-sm md:w-28 py-3 px-4 w-44 text-xl font-bold font-inter uppercase text-white bg-gradient-to-r from-green-400 to-blue-500 hover:from-blue-500 hover:to-green-400 transition-bg duration-500 shadow-lg'>Shop Now</NavLink>
            </div>
        </section>
    );
}

export default MasterHead
