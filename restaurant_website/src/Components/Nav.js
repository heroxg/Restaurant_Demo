import React, { Component } from 'react'
import './Nav.css'
import Logo from './Asset/images/logo2.png'
import { Link } from 'react-router-dom'


class Nav extends Component {
  render() {
    return (
          <div className="main-wrapper">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <Link to="/" className="navbar-brand"><img src={Logo}  alt="logo"/></Link>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                    <Link to="/" className="nav-link">Home <span className="sr-only">(current)</span></Link>
                </li>
                <li className="nav-item">
                    <Link to="/menu" className="nav-link">Our Menu</Link>
                </li>
                <li className="nav-item">
                    <Link to="/promo" className="nav-link">Promo</Link>
                </li>
                <li className="nav-item">
                    <Link to="/order"  className="nav-link">Order</Link>
                </li>
                </ul>
            </div>
            </nav>
          </div>
      
    )
  }
}
export default Nav