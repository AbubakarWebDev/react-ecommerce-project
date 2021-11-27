import React, { useRef, useEffect } from 'react';

const SearchModel = ({ status, handler }) => {

    const modelRef = useRef(null);

    const searchOpener = () => {
        if (modelRef.current.style.opacity === '0' && modelRef.current.style.visibility === 'hidden') {
            modelRef.current.style.display = 'block';
            setTimeout(() => {
                modelRef.current.style.opacity = 1;
                modelRef.current.style.visibility = 'visible';
            }, 100);
        }
    }

    const searchCloser = () => {
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
            searchOpener(modelRef);
        }
    }, [status]);

    return (
        <div ref={modelRef} className='fixed z-50 left-0 right-0 bottom-0 top-0 bg-gray-800 bg-opacity-75' style={{ opacity: 0, visibility: 'hidden', display: 'none' }}>
            <div className="w-screen h-screen flex justify-center items-center">
                <div className="flex flex-col md:w-80 w-7/12 mx-5 bg-white">
                    <div className="flex justify-between items-center p-3 shadow">
                        <h5 className="text-xl font-bold font-inter">Type To Search</h5>
                        <button type="button" onClick={() => { searchCloser(modelRef, handler) }} className="font-bold text-3xl hover:text-blue-700 transition-colors duration-300"><i className="fas fa-times"></i></button>
                    </div>

                    <form className="flex justify-between items-center py-3 pl-3 pr-1">
                        <label className='hidden' htmlFor="search">Search for: </label>
                        <input type="search" className="outline-none border-none text-xl w-11/12" placeholder="Search Products…" required="required" />
                        <button type="submit" className='flex justify-center items-center text-2xl w-12 h-12 font-bold'>
                            <i className="fas fa-search"></i>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default SearchModel;
