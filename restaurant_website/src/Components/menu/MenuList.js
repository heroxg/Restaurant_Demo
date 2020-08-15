import React from 'react'

function MenuList(props) {
  return (
    <div className="col-sm-4">
        <img src={props.homemenu.imgUrl} height="298" width="100%" />
        <div className="menu-details">
            <h4>{props.homemenu.title}</h4>
            <p>{props.homemenu.description}</p>
            <p>{props.homemenu.price}</p>
        </div>
    </div>
  )
}
export default MenuList
