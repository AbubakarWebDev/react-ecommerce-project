import React from 'react';
import { NavLink } from "react-router-dom";

const FooterContent = (props) => {
    return (
        <section className={`${props.className ? props.className : ""}bg-gray-900 px-5 min-md:py-10 md:py-5`}>
            <div className="flex justify-center">
                <div className="lg:w-full w-5/6 flex lg:flex-col justify-between">
                    <div className="flex lg:w-full lg:mb-5 sm:flex-col w-1/2">
                        <div className="flex flex-col text-gray-300 sm:w-full w-1/2 sm:mb-5 pr-5 text-base">
                            <span className="font-bold text-white text-2xl uppercase mb-2">Get In Touch</span>
                            <div className="flex items-center my-2">
                                <i className="fas fa-phone-square-alt"></i>
                                <span className="ml-3">+923214617091</span>
                            </div>
                            <div className="flex items-center my-2">
                                <i className="fas fa-envelope"></i>
                                <span className="ml-3">info@ecommerce.com</span>
                            </div>
                            <div className="flex items-center my-2">
                                <i className="fas fa-clock"></i>
                                <span className="ml-3">Mon - Fri, 10AM - 7PM </span>
                            </div>
                            <div className="flex items-center my-2">
                                <i className="fas fa-map-marker-alt"></i>
                                <span className="ml-3">Saddar Bazar Lahore Cantt</span>
                            </div>
                            <div className="flex text-3xl my-2 text-gray-300">
                                <NavLink to='' className="hover:transform pr-5 hover:scale-125 transition-all duration-400 hover:text-white">
                                    <i className="fab fa-facebook"></i>
                                    </NavLink>
                                <NavLink to='' className="hover:transform pr-5 hover:scale-125 transition-all duration-400 hover:text-white">
                                    <i className="fab fa-instagram"></i>
                                </NavLink>
                                <NavLink to='' className="hover:transform pr-5 hover:scale-125 transition-all duration-400 hover:text-white">
                                    <i className="fab fa-twitter"></i>
                                </NavLink>
                                <NavLink to='' className='hover:transform pr-5 hover:scale-125 transition-all duration-400 hover:text-white'>
                                    <i className="fab fa-youtube"></i>
                                </NavLink>
                            </div>
                        </div>
                        <div className="flex flex-col sm:w-full text-gray-300 w-1/2 pr-5">
                            <span className="font-bold text-white text-2xl uppercase mb-2">Customers</span>
                            <NavLink to='' className="my-2 text-base hover:text-white">Track Orders</NavLink>
                            <NavLink to='' className="my-2 text-base hover:text-white">My Account</NavLink>
                            <NavLink to='' className="my-2 text-base hover:text-white">My WishList</NavLink>
                            <NavLink to='' className="my-2 text-base hover:text-white">Checkout</NavLink>
                            <NavLink to='' className="my-2 text-base hover:text-white">My Cart</NavLink>
                        </div>
                    </div>
                    <div className="flex lg:w-full text-gray-300 lg:mb-5 sm:mb-0 sm:flex-col w-1/2">
                        <div className="flex flex-col sm:w-full w-1/2 pr-5 sm:mb-5">
                            <span className="font-bold text-white text-2xl uppercase mb-2">Quick Links</span>
                            <NavLink to='' className="my-2 text-base hover:text-white">Terms & Conditions</NavLink>
                            <NavLink to='' className="my-2 text-base hover:text-white">Contact With Us</NavLink>
                            <NavLink to='' className="my-2 text-base hover:text-white">Privacy Policy</NavLink>
                            <NavLink to='' className="my-2 text-base hover:text-white">About us</NavLink>
                            <NavLink to='' className="my-2 text-base hover:text-white">Blog</NavLink>
                        </div>
                        <div className="flex flex-col sm:w-full w-1/2 text-gray-300">
                            <span className="font-bold text-white text-2xl uppercase mb-2">Categories</span>
                            <NavLink to='' className="flex justify-between mr-5 my-2 text-base hover:text-white">
                                <span>Shopping Methods</span>
                                <span className="font-bold">10</span>
                            </NavLink>
                            <NavLink to='' className="flex justify-between mr-5 my-2 text-base hover:text-white">
                                <span>Personality Cloths</span>
                                <span className="font-bold">5</span>
                            </NavLink>
                            <NavLink to='' className="flex justify-between mr-5 my-2 text-base hover:text-white">
                                <span>Shopping Mistakes</span>
                                <span className="font-bold">8</span>
                            </NavLink>
                            <NavLink to='' className="flex justify-between mr-5 my-2 text-base hover:text-white">
                                <span>Bad Cloths</span>
                                <span className="font-bold">4</span>
                            </NavLink>
                            <NavLink to='' className="flex justify-between mr-5 my-2 text-base hover:text-white">
                                <span>Cloths Collection</span>
                                <span className="font-bold">3</span>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default FooterContent
