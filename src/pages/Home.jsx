import React from 'react'
import Announcement from '../components/Announcement'
import Navbar from '../components/Navbar'
import Products from '../components/Products';
import Slide from '../components/Slide'
import Categories from './../components/Categories';
import Newsletter from './../components/Newsletter';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div>
        <Announcement/>
        <Navbar/>
        <Slide/>
        <Categories/>
        <Products/>
        <Newsletter/>
        <Footer/>
    </div>
  )
}

export default Home