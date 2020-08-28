import React from 'react';
import './App.css';
import Header from './Components/Header'
import FeaturedMenu from './Components/menu/FeaturedMenu'
import PlaceOrder from './Components/Discount'
import Promo from './Components/Promo'
import MakeOrder from './Components/MakeOrder';
import FreeDelivery from './Components/FreeDelivery'
import Testimonial from './Components/Testimonial'

function App() {
  return (
    <div>
      <Header/>
      <FeaturedMenu />
      <PlaceOrder />
      <Promo />
      <MakeOrder />
      <FreeDelivery />
      <Testimonial />
    </div>
  );
}

export default App;
