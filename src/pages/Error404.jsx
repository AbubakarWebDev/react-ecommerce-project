import React from 'react';
import { NavLink } from "react-router-dom";

function Error404() {
    return (
        <>
            <div className='font-roboto w-full h-sm flex justify-center items-center flex-col'>
                <h3 className='text-9xl font-bold leading-none mb-8'>404</h3>
                <h4 className='text-3xl mb-6'>There's nothing here!</h4>
                <p className='text-xl mb-6'>Sorry, the page you were looking for in this blog does not exist.</p>
                <NavLink className='text-xl bg-black border border-black py-3 px-5 font-semibold text-white transition-colors duration-500 hover:bg-transparent hover:text-black hover:border-black' to='/'> Home </NavLink>
            </div>
        </>
    );
}

export default Error404;