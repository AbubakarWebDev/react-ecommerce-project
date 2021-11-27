import React from 'react'

const FeaturedServices = (props) => {
    return (
        <section className={`${props.className} w-full flex lg:flex-col text-center text-white`}>
            <div className='flex sm:flex-col'>
                <div className="px-6 py-12 bg-blue-900">
                    <i className="fas fa-shipping-timed text-6xl"></i>
                    <h4 className="text-xl uppercase font-bold font-roboto py-3">Free Shipping</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel sit perferendis tempore et quos fugiat.</p>
                </div>
                <div className="px-6 py-12 bg-gray-900">
                    <i className="fas fa-cogs text-6xl"></i>
                    <h4 className="text-xl uppercase font-bold font-roboto py-3">Service Guarantee</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel sit perferendis tempore et quos fugiat.</p>
                </div>
            </div>
            <div className='flex sm:flex-col'>
                <div className="px-6 py-12 bg-green-700">
                    <i className="fas fa-money-bill-wave text-6xl"></i>
                    <h4 className="text-xl uppercase font-bold font-roboto py-3">100% Money Back</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel sit perferendis tempore et quos fugiat.</p>
                </div>
                <div className="px-6 py-12 bg-red-700">
                    <i className="fas fa-box-open text-6xl"></i>
                    <h4 className="text-xl uppercase font-bold font-roboto py-3">Products Offers</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel sit perferendis tempore et quos fugiat.</p>
                </div>
            </div>
        </section>
    );
}

export default FeaturedServices;
