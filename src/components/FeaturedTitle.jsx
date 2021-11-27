import React from 'react'

const FeaturedTitle = (props) => {
    return (
        <div className={`${props.className} text-center px-2`}>
            <p className='text-xl sm:text-lg mb-2 font-poppins uppercase'>{props.tagline}</p>
            <h3 className='text-4xl sm:text-3xl font-bold text-blue-700 font-lato'>{props.title}</h3>
        </div>
    );
}

export default FeaturedTitle;