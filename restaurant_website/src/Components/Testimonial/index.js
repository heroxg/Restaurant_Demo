import React from 'react'
import quote from './../Asset/images/quote.png'

import './styles.css'

function Testimonial() {
    return (
        <div className="testimonial-sec">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-6 col-offset-sm-6 mx-auto">
                        <img src={quote} alt="quote" />
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor 
                            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis </p>
                        <h5>Agus Waiters</h5>
                        <ul>
                            <li><i className="fa fa-facebook"></i></li>
                            <li><i className="fa fa-twitter"></i></li>
                            <li><i className="fa fa-instagram"></i></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Testimonial