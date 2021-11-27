import React, { useState, useRef, useContext } from 'react';
import NavIcons from './NavIcons';
import SearchModel from './SearchModel';
import { NavLink } from "react-router-dom";
import { GolbalContext } from '../App';

const NavItems = [
    { to: "/", text: "Home" },
    { to: "/blog", text: "Blog" },
    { to: "/shop", text: "Shop" },
    { to: "/about", text: "About" },
    { to: "/contact", text: "Contact" }
];

const Navbar = () => {
    const [search, setSearch] = useState(false);
    const [mobileMenu, setMobileMenu] = useState(false);
    const screen = useContext(GolbalContext).screen;
    const menuRef = useRef(null);

    const openMobileMenu = () => {
        if (menuRef.current.classList.contains('md:hidden')) {
            menuRef.current.classList.remove('md:hidden');
            setMobileMenu(true);
        }
        else if (!menuRef.current.classList.contains('md:hidden')) {
            menuRef.current.classList.add('md:hidden');
            setMobileMenu(false);
        }
    }

    return (
        <>
            <nav className='bg-white font-inter font-bold shadow'>
                <div className="lg:w-full w-10/12 m-auto flex justify-between items-center flex-wrap relative pl-5 lg:pl-0 py-2">
                    <NavLink exact className='text-2xl uppercase font-bold font-roboto py-3 lg:pl-3 text-gray-900 hover:text-blue-700 transition-colors duration-300' to="/">Fashion Shop</NavLink>

                    <div ref={menuRef} className='text-xl text-gray-900 text-center flex flex-wrap md:hidden md:border-t-2 md:border-b-2 md:flex-col md:absolute md:z-50 md:w-full md:top-full md:bg-white'>
                        {NavItems.map((current, index) => {
                            return (<NavLink exact key={index} className='py-3 pl-4 hover:text-blue-700 transition-colors duration-300' activeClassName='text-blue-700' to={current.to}>{current.text}</NavLink>)
                        })}
                        {screen.md && <NavIcons classes={['border-t-2', 'border-b-2']} Clickhandler={() => { setSearch(true) }} />}
                    </div>

                    {screen.md && <button onClick={openMobileMenu} className='text-2xl transition-colors duration-300 hover:text-blue-700 text-gray-900 py-3 px-3 flex font-bold items-center'>
                        <span>MENU {mobileMenu ? <i className="fas fa-times"></i> : <i className="fas fa-bars"></i>}</span>
                    </button>}

                    {!screen.md && <NavIcons Clickhandler={() => { setSearch(true) }} />}
                </div>
            </nav>
            <SearchModel status={search} handler={setSearch} />
        </>
    )
}

export default Navbar;