import React from 'react'
import { Link } from "react-router-dom";
import FeaturedTitle from './FeaturedTitle';

const FeaturedCategory = (props) => {
    const parentClasses = "group filter brightness-90 hover:filter hover:brightness-100 hover:backdrop-contrast-125 bg-center bg-cover relative rounded shadow transition-all duration-500 md:h-96";

    const childClasses = "absolute bottom-4 left-4 transition-all duration-500 font-poppins font-500 text-2xl group-hover:text-blue-900 group-hover:transform group-hover:translate-x-3 group-hover:-translate-y-3";

    return (
        <section className={`${props.className} flex justify-center items-center flex-col`}>
            <FeaturedTitle className='mb-10' title='Shop By Categories' tagline='PASSION FOR FASHION' />
            <div className='flex md:flex-col lg:w-full w-10/12 px-4'>
                <Link to='/shop' className={`${parentClasses} bg-featured-cat-1 md:w-full w-1/2 h-md mr-3 md:mb-3`}>
                    <span className={childClasses}>T-Shirts</span>
                </Link>
                <div className="flex flex-col md:w-full w-1/2">
                    <Link to='/shop' className={`${parentClasses} bg-featured-cat-2 w-full h-1/2 mb-3`}>
                        <span className={childClasses}>Bags</span>
                    </Link>
                    <div className='flex md:flex-col h-1/2'>
                        <Link to='/shop' className={`${parentClasses} bg-featured-cat-3 md:w-full w-1/2 h-full mr-3 md:mb-3`}>
                            <span className={childClasses}>Hats</span>
                        </Link>
                        <Link to='/shop' className={`${parentClasses} bg-featured-cat-4 md:w-full w-1/2 h-full`}>
                            <span className={childClasses}>Shoes</span>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default FeaturedCategory;
