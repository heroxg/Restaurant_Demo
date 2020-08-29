import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

import Home from './Pages/Home'
import MenuPage from './Pages/MenuPage'
import PromoPage from './Pages/PromoPage'
import OrderPage from './Pages/OrderPage'


function App() {
  return (
      <Router>
        <div>
          {/* <Home /> */}
          <Route exact path="/" component= {Home} />
          <Route path="/menu" component= {MenuPage} />
          <Route path="/promo" component= {PromoPage} />
          <Route path="/order" component= {OrderPage} /> 
        </div>
      </Router>
  );
}

export default App;
