import React, { Component } from 'react'
import MenuList from './MenuList'
import MenuData from './MenuData'

// assests
import '../menu/FeaturedMenu.css'
import dot_1 from '../Asset/images/dot_1.png'


class FeaturedMenu extends Component {
  render() {
      const listMenu = MenuData.map(menu => <MenuList key={menu.id} homemenu={menu} />)
    return (
      <div className="menu-list-sec">
          <div className="main-wrapper">
                <div className="sub-heading">
                    <h2>Popular Menu</h2>
                </div>
                <div className="container menu-items">
                  <div className="row">
                      {listMenu}
                      <div className="col-sm-12 see-more-menu">
                          <a href="#">show more</a>
                      </div>
                  </div>
                  <div className="design-dot">
                    <img src={dot_1} alt="dot" />
                  </div>
                </div>
          </div>
      </div>
    )
  }
}
export default FeaturedMenu