import React from 'react'
import { NavLink } from "react-router-dom";
import styled from 'styled-components';

const NumberBadge = styled.span`
    & {
        position: relative;
    }

    &::after {
        content: '${props => props.count ? props.count : 0}';
        position: absolute;
        left: ${props => props.left ? props.left + 'px' : '0px'};
        bottom: ${props => props.bottom ? props.bottom + 'px' : '0px'};
        font-size: 12px;
        border-radius: 9999px;
        width: 20px;
        height: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        color: white;
        background-color: #1D4ED8; 
        outline: 1px solid black;
    }
`;

const NavIcons = ({ Clickhandler, classes }) => {

    if (classes) {
        classes = classes.map((current) => {
            let classes = "";
            classes = classes + current + " ";
            return classes;
        });
    }

    return (
        <div className={`text-2xl text-gray-900 py-4 pr-4 flex justify-center items-center ${classes}`}>
            <button onClick={Clickhandler} className='pl-3 hover:text-blue-700 transition-colors duration-300'>
                <i className="fas fa-search"></i>
            </button>

            <NavLink className='pl-3 hover:text-blue-700 transition-colors duration-300' activeClassName='text-blue-700' to="/user">
                <i className="fas fa-user"></i>
            </NavLink>

            <NavLink className='pl-3 hover:text-blue-700 transition-colors duration-300 relative' activeClassName='text-blue-700' to="/wishlist">
                <NumberBadge count="0" left='21' bottom='15'> <i className="fas fa-heart"></i> </NumberBadge>
            </NavLink>

            <NavLink className='pr-3 pl-6 hover:text-blue-700 transition-colors duration-300' activeClassName='text-blue-700' to="/cart">
                <NumberBadge count="3" left='25' bottom='15'> <i className="fas fa-shopping-cart"></i> </NumberBadge>
            </NavLink>
        </div>
    )
}

export default NavIcons;