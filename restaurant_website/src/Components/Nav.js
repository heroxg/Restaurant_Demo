import React,{ useEffect } from 'react'
import './Nav.css'
import Logo from './Asset/images/logo2.png'
import { Link } from 'react-router-dom'


const Nav =() => {
  const [scrolled, setScrolled] = React.useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    if(offset > 200) {
      setScrolled(true);
    }else {
      setScrolled(false);
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
  })

  let x = ['mynav'];
  if(scrolled) {
    x.push('scrolled');
  }
    return (
        <div className={x.join(" ")}>
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
        </div> 
    )
  }
export default Nav