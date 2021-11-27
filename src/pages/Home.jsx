import React from 'react'
import MasterHead from '../components/MasterHead';
import FeaturedCategory from '../components/FeaturedCategory';
import FeaturedProduct from '../components/FeaturedProduct';
import FeaturedServices from '../components/FeaturedServices';
import FeaturedBlogPost from '../components/FeaturedBlogPost';

const Home = () => {
    return (
        <>
            <main>
                <MasterHead />
                <FeaturedCategory className="mt-36" />
                <FeaturedProduct className="mt-36" />
                <FeaturedServices className="mt-36" />
                <FeaturedBlogPost className="my-36" />
            </main>
        </>
    );
}

export default Home
