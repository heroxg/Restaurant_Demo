import React, { Component } from 'react'
import MenuList from './MenuList'
import MenuData from './MenuData'

import '../menu/FeaturedMenu.css'

class FeaturedMenu extends Component {
  render() {
      const listMenu = MenuData.map(menu => <MenuList key={menu.id} homemenu={menu} />)
    return (
      <div className="menu-list-sec">
          <div className="main-wrapper">
                <div className="sub-heading">
                    <h2>Popular Menu</h2>
                </div>
                <div className="container">
                  <div className="row">
                      {listMenu}
                      <div className="col-sm-12 see-more-menu">
                          <a href="#">show more</a>
                      </div>
                  </div>
                </div>
          </div>
      </div>
    )
  }
}
export default FeaturedMenu