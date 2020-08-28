import React from 'react'

function Order(props) {
    return (
        <div className="col-sm-4 order-process">
            <p>{props.num}</p>
            <h4>{props.step}</h4>
            <p className="brief">{props.stepInfo}</p>
        </div>
    )
}
export default Order