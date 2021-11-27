import React from 'react'

const TopBar = (props) => {
    return (
        <div className="text-lg sm:text-sm tracking-wide font-medium font-roboto text-center text-white bg-blue-600 w-full py-1 uppercase"> {props.msg} </div>
    );
}

export default TopBar;
