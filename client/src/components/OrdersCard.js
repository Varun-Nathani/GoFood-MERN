import React from 'react'

export default function OrdersCard(props) {
    return (
        <div>
            <div className="card" style={{width: "18rem"}}>
                    <div className="card-body">
                        <h5 className="card-title">{props.name}</h5>
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">quantity: {props.quantity}</li>
                        <li className="list-group-item">price: {props.price}</li>
                        <li className="list-group-item">size: {props.size}</li>
                    </ul>
            </div>
        </div>
    )
}
