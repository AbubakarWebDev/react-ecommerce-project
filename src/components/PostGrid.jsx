import React from 'react';
import { NavLink } from "react-router-dom";

const PostGrid = ({ className, img, title, description }) => {
    return (
        <div className={`${className} flex flex-col justify-between shadow-lg relative`}>
            <div className='flex flex-col'>
                <NavLink to='/blog' className={`bg-${img} bg-top bg-cover w-full h-56 filter brightness-90 hover:filter hover:brightness-100 hover:backdrop-contrast-125 transition-all duration-500`}></NavLink>
                <div className='p-3'>
                    <NavLink to='/blog' className='text-xl hover:text-blue-700 transition-colors duration-500 font-bold text-justify'>{title}</NavLink>
                    <p className='text-base text-justify py-1'>{description}</p>
                    <NavLink to='/blog' className='text-left text-lg font-bold font-roboto text-black hover:text-blue-700 transition-colors duration-500'>READ MORE</NavLink>
                </div>
            </div>
            <div className="pl-2 py-1 pb-2 border-t-2 text-sm w-full font-bold">April 19, 2021 - No Comments</div>
        </div>
    )
}

export default PostGrid;
