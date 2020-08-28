import React from 'react'
import Order from './order'

import './styles.css'

function MakeOrder() {
    return (
        <div className="how_to_order container-fluid">
            <h3>How to Order</h3>
            <div className="row">
                <Order 
                    num= {"01"}
                    step= {"order"}
                    stepInfo= {"Lorem ipsum dolor sit amet, consecte sectetur adipisicing elit, tation omne  ullamco laboris nisi ut aliqolore."} 
                />
                 <Order 
                    num= {"02"}
                    step= {"choose Menu"}
                    stepInfo= {"Lorem ipsum dolor sit amet, consecte sectetur adipisicing elit, tation omne  ullamco laboris nisi ut aliqolore."} 
                />
                 <Order 
                    num= {"03"}
                    step= {"Delivery"}
                    stepInfo= {"Lorem ipsum dolor sit amet, consecte sectetur adipisicing elit, tation omne  ullamco laboris nisi ut aliqolore."} 
                />
            </div>
        </div>
    )
}
export default MakeOrder
