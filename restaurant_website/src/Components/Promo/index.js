import React from 'react'
import './styles.css'

import dot_1 from './../Asset/images/dot_1.png'

function index() {
    return (
        <div className="promo">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-6 promo-left">
                    <div className="design-dot_2">
                         <img src={dot_1} alt="dot" />
                    </div>
                    <h1>January's Promo: <br/>
                        Buy 1 Get 1 Free!
                    </h1>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy 
                        nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>  
                    </div>
                    <div className="col-sm-6 promo-right">
                    </div>
                </div>
            </div>
        </div>
    )
}
export default index