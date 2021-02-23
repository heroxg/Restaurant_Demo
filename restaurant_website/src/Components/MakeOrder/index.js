import React from 'react'
import Order from './order'

import dot_2 from './../Asset/images/dot_2.png'
import './styles.css'

function MakeOrder() {
    return (
        <div className="how_to_order">
            <div className="design-dot_3">
                <img src={dot_2} alt="dot" />
            </div>
            <h3>How to Order</h3>
            <div className="container-fluid">
            <div className="row">
                <Order 
                    num= "01"
                    step= "order"
                    stepInfo= "Lorem ipsum dolor sit amet, consecte sectetur adipisicing elit, tation omne  ullamco laboris nisi ut aliqolore." 
                />
                 <Order 
                    num= "02"
                    step= "choose Menu"
                    stepInfo= "Lorem ipsum dolor sit amet, consecte sectetur adipisicing elit, tation omne  ullamco laboris nisi ut aliqolore." 
                />
                 <Order 
                    num= "03"
                    step= "Delivery"
                    stepInfo= "Lorem ipsum dolor sit amet, consecte sectetur adipisicing elit, tation omne  ullamco laboris nisi ut aliqolore." 
                />
            </div>
            </div>
        </div>
    )
}
export default MakeOrder
