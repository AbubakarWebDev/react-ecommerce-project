import React, { useState, useContext } from 'react';
import { NavLink } from "react-router-dom";
import { GolbalContext } from '../App';
import WishlistPopup from './WishlistPopup';

const quickView = (id, event) => {
    event.preventDefault();
    console.log(id);
}

const Product = ({ id, className, title, frontImg, backImg, oldPrice, newPrice, badgeLeft, badgeRight }) => {

    let setWishlist = useContext(GolbalContext).wishlist[1];
    let setCart = useContext(GolbalContext).cart[1];
    let [favourite, setFavourite] = useState(false);
    let [popup, setPopup] = useState(false);
    let [carted, setCarted] = useState(false);

    const AddToWishlist = (id, event) => {
        event.preventDefault();
        if (!favourite) {
            setFavourite(true);
            setWishlist((prevState) => {
                return { count: prevState.count + 1, products: [...prevState.products, id] }
            });
            setPopup(true);
        }
    }

    const AddToCart = (id, event) => {
        event.preventDefault();
        if (!carted) {
            setCarted(true);
            setCart((prevState) => {
                return { count: prevState.count + 1, products: [...prevState.products, id] }
            });
        }
    }

    return (
        <>
            <div className={`${className} group flex flex-col shadow`}>
                <NavLink to='/shop' className={`flex w-full h-4/5 bg-${frontImg} transition-bg-img duration-500 hover:bg-${backImg} bg-center bg-cover relative`}>
                    <button onClick={(e) => { quickView(id, e) }} className="absolute bottom-0 cursor-pointer opacity-0 group-hover:opacity-100 bg-black bg-opacity-50 hover:bg-opacity-75 w-full text-center text-white text-xl group-hover:block transition-all duration-500 py-1">
                        <i className="fas fa-eye"></i>
                        <span>&nbsp;Quick View</span>
                    </button>

                    <button onClick={(e) => { AddToWishlist(id, e) }} className={`absolute right-2 bottom-11 opacity-0 group-hover:opacity-100 rounded-full text-xl w-10 leading-none h-10 flex justify-center items-center shadow hover:bg-red-900 hover:text-white transition-all duration-500 ${favourite ? "bg-red-900 text-white" : "bg-white text-red-900"}`}>
                        <i className="far fa-heart"></i>
                    </button>

                    {badgeLeft && <span className={`absolute top-2 text-xs left-2 py-1 px-2 text-white font-poppins ${badgeLeft.bgColor ? badgeLeft.bgColor : 'bg-blue-600'}`}>{badgeLeft.value}</span>}

                    {badgeRight && <span className={`absolute top-2 text-xs right-2 py-1 px-2 text-white font-poppins ${badgeRight.bgColor ? badgeRight.bgColor : 'bg-green-600'}`}>{badgeRight.value}</span>}
                </NavLink>

                <div className="flex flex-col p-2 text-base font-poppins">
                    <NavLink to='/shop' className="mb-1 text-justify">{title}</NavLink>
                    <div className='mb-1'>
                        <span className='line-through text-sm'>{`$${oldPrice}.00`}</span>
                        <span className='text-xl font-semibold'>&nbsp;{`$${newPrice}.00`}</span>
                    </div>
                    <button onClick={(e) => { AddToCart(id, e) }} className={`${carted ? "bg-white text-black border border-gray-500" : "bg-blue-700 hover:bg-blue-900 text-white"} py-2  transition-colors font-semibold`}>
                        <i className="fas fa-shopping-cart"></i>
                        <span>&nbsp;{carted ? "View Cart" : "Add to Cart"}</span>
                    </button>
                </div>
            </div>
            <WishlistPopup status={popup} handler={setPopup} />
        </>
    )
}

export default Product;
