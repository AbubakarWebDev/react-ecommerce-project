import React, { useState } from 'react';
import Home from './pages/Home';
import Blog from './pages/Blog';
import Shop from './pages/Shop';
import User from './pages/User';
import Cart from './pages/Cart';
import About from './pages/About';
import Contact from './pages/Contact';
import Wishlist from './pages/Wishlist';
import Error404 from './pages/Error404';
import TopBar from './components/TopBar';
import Navbar from './components/Navbar';
import FooterContent from './components/FooterContent';
import FooterCopyright from './components/FooterCopyright';
import { v4 as uuidv4 } from 'uuid';
import { useMediaQuery } from 'react-responsive';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

export const GolbalContext = React.createContext();

function App() {
  const screen = {
    sm: useMediaQuery({ query: '(max-width: 639px)' }),
    md: useMediaQuery({ query: '(max-width: 767px)' }),
    lg: useMediaQuery({ query: '(max-width: 1023px)' }),
    xl: useMediaQuery({ query: '(max-width: 1279px)' }),
    xl2: useMediaQuery({ query: '(max-width: 1535px)' })
  };

  const products = [
    {
      id: uuidv4(),
      title: "Top 100 Best And Premium Quality Brand New T-Shirts",
      frontImg: "featured-prod-1-front",
      backImg: "featured-prod-1-back",
      oldPrice: "30",
      newPrice: "15",
      badgeLeft: "-50%",
      featured: true,
    },
    {
      id: uuidv4(),
      title: "Premium Brand and Best Collection of Jeans T-Shirts",
      frontImg: "featured-prod-2-front",
      backImg: "featured-prod-2-back",
      oldPrice: "50",
      newPrice: "25",
      featured: true,
    },
    {
      id: uuidv4(),
      title: "One of the Best Mirag & Good T-Shirts For Sale",
      frontImg: "featured-prod-3-front",
      backImg: "featured-prod-3-back",
      oldPrice: "250",
      newPrice: "50",
      badgeLeft: "-25%",
      featured: true,
    },
    {
      id: uuidv4(),
      title: "Top Best Printed Shirts For Sale For Summer Season",
      frontImg: "featured-prod-4-front",
      backImg: "featured-prod-4-back",
      oldPrice: "50",
      newPrice: "15",
      badgeRight: "Sold Out",
      featured: true,
    },
  ];

  let [wishlist, setWishlist] = useState({count: 0, products: []});
  let [cart, setCart] = useState({count: 0, products: []});

  return (
    <>
      <GolbalContext.Provider value={{screen: screen, wishlist: [wishlist, setWishlist], cart: [cart, setCart], products: products}}>
        <Router>
          <header>
            <TopBar msg='FREE SHIPPING ON ORDERS OVER $70' />
            <Navbar />
          </header>
          <Switch>
            <Route exact path="/"> <Home /> </Route>

            <Route path="/blog">  <Blog /> </Route>

            <Route path="/shop"> <Shop /> </Route>

            <Route path="/about"> <About /> </Route>

            <Route path="/contact"> <Contact /> </Route>

            <Route path="/wishlist"> <Wishlist /> </Route>

            <Route path="/cart"> <Cart /> </Route>

            <Route path="/user"> <User /> </Route>

            <Route> <Error404 /> </Route>

          </Switch>
          <footer>
            <FooterContent />
            <FooterCopyright content={<span>Copyright © 2020 - 2021 | All Right Reserved - Made By <a className='hover:text-purple-300' href='abubakarwebdev.github.io' target='_blank'>AbubakarWebDev</a></span>} />
          </footer>
        </Router>
      </GolbalContext.Provider>
    </>
  );
}

export default App;
