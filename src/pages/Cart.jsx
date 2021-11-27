import React from 'react'
import { NavLink } from "react-router-dom";
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
    title: {
        '@media (max-width: 767px)': {
            '&::before': {
                content: "attr(data-title)",
            }
        }
    }
});

const Cart = () => {
    const classes = useStyles();
    
    return (
        <>
            <div className='lg:w-full w-10/12 mx-auto my-12 px-5'>
                <table className="w-full border border-gray-400 text-left text-lg font-inter">
                    <thead className='bg-blue-700 text-white font-bold uppercase md:hidden'>
                        <tr>
                            <th className='p-3'>&nbsp;</th>
                            <th className='p-3'>&nbsp;</th>
                            <th className='p-3'>Product</th>
                            <th className='p-3'>Price</th>
                            <th className='p-3'>Quantity</th>
                            <th className='p-3'>SubTotal</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className='border-b border-gray-400 md:flex md:flex-col md:relative md:pl-28 md:text-base'>
                            <td className='p-3 md:flex md:justify-between md:items-center md:absolute md:right-0'>
                                <button className='border border-black rounded-full w-7 h-7 font-bolder'>
                                    <i className="fas fa-times"></i>
                                </button>
                            </td>
                            <td className='p-3 md:flex md:justify-between md:items-center md:absolute md:left-0'>
                                <NavLink to='' className="block w-16 h-16 md:w-20 md:h-28 bg-featured-prod-1-front bg-center bg-cover"></NavLink>
                            </td>
                            <td className='p-3 md:flex md:justify-between md:items-center md:pl-0 md:border-b md:border-gray-400 md:font-bold' data-title='Product'>
                                <NavLink to=''>101 Premium Quality Roses</NavLink>
                            </td>
                            <td className={`p-3 md:flex md:justify-between md:items-center md:pl-0 md:border-b md:border-gray-400 ${classes.title}`} data-title='Price'>Rs 18,000</td>
                            <td className={`p-3 md:flex md:justify-between md:items-center md:pl-0 md:border-b md:border-gray-400 ${classes.title}`} data-title='Quantity'>
                                <div className="flex justify-center items-center border border-gray-400 w-32">
                                    <button className='border-r border-gray-400 w-10 h-10 leading-10'>+</button>
                                    <input className='w-12 h-10 py-3 text-center border-none outline-none' defaultValue='0' type="text" />
                                    <button className='border-l border-gray-400 w-10 h-10 leading-10'>-</button>
                                </div>
                            </td>
                            <td className={`p-3 md:flex md:justify-between md:items-center md:pl-0 ${classes.title}`} data-title='SubTotal'>Rs 18,000</td>
                        </tr>
                        <tr className='border-b border-gray-400 md:flex md:flex-col md:relative md:pl-28 md:text-base'>
                            <td className='p-3 md:flex md:justify-between md:items-center md:absolute md:right-0'>
                                <button className='border border-black rounded-full w-7 h-7 font-bolder'>
                                    <i className="fas fa-times"></i>
                                </button>
                            </td>
                            <td className='p-3 md:flex md:justify-between md:items-center md:absolute md:left-0'>
                                <NavLink to='' className="block w-16 h-16 md:w-20 md:h-28 bg-featured-prod-1-front bg-center bg-cover"></NavLink>
                            </td>
                            <td className='p-3 md:flex md:justify-between md:items-center md:pl-0 md:border-b md:border-gray-400 md:font-bold' data-title='Product'>
                                <NavLink to=''>101 Premium Quality Roses</NavLink>
                            </td>
                            <td className={`p-3 md:flex md:justify-between md:items-center md:pl-0 md:border-b md:border-gray-400 ${classes.title}`} data-title='Price'>Rs 18,000</td>
                            <td className={`p-3 md:flex md:justify-between md:items-center md:pl-0 md:border-b md:border-gray-400 ${classes.title}`} data-title='Quantity'>
                                <div className="flex justify-center items-center border border-gray-400 w-32">
                                    <button className='border-r border-gray-400 w-10 h-10 leading-10'>+</button>
                                    <input className='w-12 h-10 py-3 text-center border-none outline-none' defaultValue='0' type="text" />
                                    <button className='border-l border-gray-400 w-10 h-10 leading-10'>-</button>
                                </div>
                            </td>
                            <td className={`p-3 md:flex md:justify-between md:items-center md:pl-0 ${classes.title}`} data-title='SubTotal'>Rs 18,000</td>
                        </tr>
                        <tr className='border-b border-gray-400 md:flex md:flex-col md:relative md:pl-28 md:text-base'>
                            <td className='p-3 md:flex md:justify-between md:items-center md:absolute md:right-0'>
                                <button className='border border-black rounded-full w-7 h-7 font-bolder'>
                                    <i className="fas fa-times"></i>
                                </button>
                            </td>
                            <td className='p-3 md:flex md:justify-between md:items-center md:absolute md:left-0'>
                                <NavLink to='' className="block w-16 h-16 md:w-20 md:h-28 bg-featured-prod-1-front bg-center bg-cover"></NavLink>
                            </td>
                            <td className='p-3 md:flex md:justify-between md:items-center md:pl-0 md:border-b md:border-gray-400 md:font-bold' data-title='Product'>
                                <NavLink to=''>101 Premium Quality Roses</NavLink>
                            </td>
                            <td className={`p-3 md:flex md:justify-between md:items-center md:pl-0 md:border-b md:border-gray-400 ${classes.title}`} data-title='Price'>Rs 18,000</td>
                            <td className={`p-3 md:flex md:justify-between md:items-center md:pl-0 md:border-b md:border-gray-400 ${classes.title}`} data-title='Quantity'>
                                <div className="flex justify-center items-center border border-gray-400 w-32">
                                    <button className='border-r border-gray-400 w-10 h-10 leading-10'>+</button>
                                    <input className='w-12 h-10 py-3 text-center border-none outline-none' defaultValue='0' type="text" />
                                    <button className='border-l border-gray-400 w-10 h-10 leading-10'>-</button>
                                </div>
                            </td>
                            <td className={`p-3 md:flex md:justify-between md:items-center md:pl-0 ${classes.title}`} data-title='SubTotal'>Rs 18,000</td>
                        </tr>
                    </tbody>
                    <tfoot>
                        <tr >
                            <td colSpan='6'>
                                <div className='flex justify-between items-center md:flex-col p-4'>
                                    <form className='flex justify-between items-center w-96 md:w-full md:order-2'>
                                        <input className='border border-gray-400 focus:border-none py-2 px-3 outline-nones sm:w-2/4 md:w-2/3 mr-3' type="text" placeholder='Coupen Code' />
                                        <button type="submit" className='bg-blue-700 md:w-1/3 sm:w-2/4 text-white py-2 px-3'>Apply&nbsp;Coupon</button>
                                    </form>
                                    <button type="submit" className='md:order-1 md:w-full md:mb-3 min-md:ml-3 flex justify-center bg-blue-700 text-white items-center w-40 py-2 px-3'>Update Cart</button>
                                </div>
                            </td>
                        </tr>
                    </tfoot>
                </table>

                <div className="flex w-full border border-gray-400 font-inter flex-col mt-10 text-lg">
                    <h3 className='bg-blue-700 text-white font-bold p-3 uppercase text-center'>Cart Totals</h3>
                    <div className="flex flex-col">
                        <div className="flex justify-between p-4 border-b border-gray-400">
                            <h3 className="font-bold">Subtotal</h3>
                            <p>Rs 30,500</p>
                        </div>
                        <div className="flex justify-between p-4 border-b border-gray-400">
                            <h3 className="font-bold">Shipping</h3>
                            <p>Shipping Costs Are Calculated During Checkout.</p>
                        </div>
                        <div className="flex justify-between p-3 border-b border-gray-400">
                            <h3 className="font-bold">Total</h3>
                            <p>Rs 30,500</p>
                        </div>
                    </div>
                    <div className="p-3">
                        <button className='w-full bg-blue-700 text-white font-bold p-3 uppercase text-center'>Proceed To Check Out</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cart
