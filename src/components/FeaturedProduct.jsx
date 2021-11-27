import React, { useContext } from 'react';
import Product from './Product';
import FeaturedTitle from './FeaturedTitle';
import { GolbalContext } from '../App';

const FeaturedProduct = (props) => {

    const products = useContext(GolbalContext).products;
    const product = products.filter((element) => element.featured).slice(0, 4);

    return (
        <section className={`${props.className} flex justify-center items-center flex-col`}>
            <FeaturedTitle className='mb-10' title='Featured Products' tagline='LET’S SHOP' />
            <div className="flex lg:w-full w-10/12 px-5 lg:min-h-sm min-lg:h-md lg:flex-col">
                <div className="flex w-1/2 lg:w-full sm:flex-col">
                    <Product
                        id={product[0].id}
                        className="w-1/2 lg:w-full mr-5 lg:h-md h-full sm:mb-5"
                        title={product[0].title}
                        frontImg={product[0].frontImg}
                        backImg={product[0].backImg}
                        oldPrice={product[0].oldPrice}
                        newPrice={product[0].newPrice}
                        badgeLeft={product[0].badgeLeft ? { value: product[0].badgeLeft, bgColor: "bg-blue-600" } : null}
                        badgeRight={product[0].badgeRight ? { value: product[0].badgeRight, bgColor: "bg-green-600" } : null}
                    />

                    <Product
                        id={product[1].id}
                        className="w-1/2 lg:w-full mr-5 lg:h-md h-full lg:mr-0"
                        title={product[1].title}
                        frontImg={product[1].frontImg}
                        backImg={product[1].backImg}
                        oldPrice={product[1].oldPrice}
                        newPrice={product[1].newPrice}
                        badgeLeft={product[1].badgeLeft ? { value: product[1].badgeLeft, bgColor: "bg-blue-600" } : null}
                        badgeRight={product[1].badgeRight ? { value: product[1].badgeRight, bgColor: "bg-green-600" } : null}
                    />
                </div>
                <div className="flex w-1/2 lg:w-full sm:flex-col lg:mt-5">
                    <Product
                        id={product[2].id}
                        className="w-1/2 lg:w-full lg:h-md h-full sm:mb-5 mr-5"
                        title={product[2].title}
                        frontImg={product[2].frontImg}
                        backImg={product[2].backImg}
                        oldPrice={product[2].oldPrice}
                        newPrice={product[2].newPrice}
                        badgeLeft={product[2].badgeLeft ? { value: product[2].badgeLeft, bgColor: "bg-blue-600" } : null}
                        badgeRight={product[2].badgeRight ? { value: product[2].badgeRight, bgColor: "bg-green-600" } : null}
                    />

                    <Product
                        id={product[3].id}
                        className="w-1/2 lg:w-full lg:h-md h-full"
                        title={product[3].title}
                        frontImg={product[3].frontImg}
                        backImg={product[3].backImg}
                        oldPrice={product[3].oldPrice}
                        newPrice={product[3].newPrice}
                        badgeLeft={product[3].badgeLeft ? { value: product[3].badgeLeft, bgColor: "bg-blue-600" } : null}
                        badgeRight={product[3].badgeRight ? { value: product[3].badgeRight, bgColor: "bg-green-600" } : null}
                    />
                </div>
            </div>
        </section>
    )
}

export default FeaturedProduct;
