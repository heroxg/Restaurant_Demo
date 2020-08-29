import React from 'react'

import Header from './../../Components/Header'
import FeaturedMenu from './../../Components/menu/FeaturedMenu'
import PlaceOrder from './../../Components/Discount'
import Promo from './../../Components/Promo'
import MakeOrder from './../../Components/MakeOrder';
import FreeDelivery from './../../Components/FreeDelivery'
import Testimonial from './../../Components/Testimonial'
import Footer from './../../Components/Footer'

 function Home() {
    return (
        <div>
            <Header/>
            <FeaturedMenu />
            <PlaceOrder />
            <Promo />
            <MakeOrder />
            <FreeDelivery />
            <Testimonial />
            <Footer /> 
        </div>
    )
}
export default Home