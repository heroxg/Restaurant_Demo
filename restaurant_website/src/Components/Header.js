import React, { Component } from 'react'
import Nav from './Nav'
import Banner from './Banner'


import '../Components/Header.css'

class Header extends Component {
  render() {
    return (
      <div className="header">
          <Nav />
          <Banner />
      </div>
    )
  }
}
export default Header