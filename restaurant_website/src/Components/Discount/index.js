import React from 'react'
import PlaceOrder from './../Asset/images/place_order.jpg'
import './styles.css'

function Order() {
    return (
        <div className="placeorder">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-6 order-left">
                        {/* <img src={PlaceOrder} alt="place order" /> */}
                    </div>
                    <div className="col-sm-6 order-right">
                        <h1>Discount up to 50% All Menu</h1>
                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, 
                            sed diam nonummy nibh euismod tincidunt ut laoreet dolore 
                            magna aliquam erat volutpat.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Order
