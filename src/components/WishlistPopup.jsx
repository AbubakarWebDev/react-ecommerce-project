import React, { useRef, useEffect } from 'react';
import { NavLink } from "react-router-dom";

const WishlistPopup = ({ status, handler }) => {
    const modelRef = useRef(null);

    const wishlistOpener = () => {
        if (modelRef.current.style.opacity === '0' && modelRef.current.style.visibility === 'hidden') {
            modelRef.current.style.display = 'block';
            setTimeout(() => {
                modelRef.current.style.opacity = 1;
                modelRef.current.style.visibility = 'visible';
            }, 100);
        }
    }

    const wishlistCloser = () => {
        if (modelRef.current.style.opacity === '1' && modelRef.current.style.visibility === 'visible') {
            modelRef.current.style.opacity = 0;
            modelRef.current.style.visibility = 'hidden';
            setTimeout(() => {
                modelRef.current.style.display = 'none';
                handler(false);
            }, 100);
        }
    }

    useEffect(() => {
        if (status) {
            wishlistOpener(modelRef);
        }
    }, [status]);

    return (
        <div ref={modelRef} className='fixed z-50 left-0 right-0 bottom-0 top-0 bg-gray-800 bg-opacity-75' style={{ opacity: 0, visibility: 'hidden', display: 'none' }}>
            <div className="w-full h-screen flex justify-center items-center">
                <div className="flex flex-col max-w-sm mx-5 p-5 bg-white rounded-xl text-center">
                    <div className="text-red-900">
                        <i className="text-9xl fas fa-box-heart"></i>
                        <h3 className="text-2xl font-inter font-bold my-5">Product Successfully Added To Your Wishlist</h3>
                    </div>
                    <NavLink to='/wishlist' className="w-full py-2.5 bg-blue-700 text-xl hover:bg-blue-900 text-white rounded-full">
                        <i className="fas fa-heart"></i>
                        <span className="">&nbsp; View WishList</span>
                    </NavLink>
                    <button onClick={wishlistCloser} className="w-full mt-3 py-2.5 bg-blue-700 text-xl hover:bg-blue-900 text-white rounded-full">
                        <i className="fas fa-times"></i>
                        <span className="">&nbsp; Close</span>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default WishlistPopup
