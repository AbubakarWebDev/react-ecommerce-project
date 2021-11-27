import React from 'react';
import FeaturedTitle from './FeaturedTitle';
import PostGrid from './PostGrid';

const FeaturedBlogPost = ({className}) => {
    return (
        <section className={`${className} flex justify-center items-center flex-col`}>
            <FeaturedTitle className='mb-10' title='Latest Blog Posts' tagline='Top Interesting' />
            <div className="flex md:flex-col lg:w-full w-10/12 px-5">
                <PostGrid className='w-1/3 md:w-full mr-5 md:mr-0 md:mb-5' img='featured-blog-1' title='Best Kurta Design Winter Collection In Pakistan' description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae est ut asperiores provident nesciunt aliquid magnam nam, blanditiis iusto neque' />

                <PostGrid className='w-1/3 md:w-full mr-5 md:mr-0 md:mb-5' img='featured-blog-2' title='Three Reasons Why You Should Buy KidznKidz Clothes At Affordable.' description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae est ut asperiores provident nesciunt aliquid magnam nam, blanditiis iusto neque' />

                <PostGrid className='w-1/3 md:w-full ' img='featured-blog-3' title='Top 5 Benefits Of Online Shopping In Pakistan' description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae est ut asperiores provident nesciunt aliquid magnam nam, blanditiis iusto neque' />
            </div>
        </section>
    );
}

export default FeaturedBlogPost;
