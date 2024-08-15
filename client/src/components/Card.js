import React, { useState } from 'react'
import { useDispatchCart, useCart } from '../components/ContextReducer'

export default function Card(props) {
    // Initialize selectedOption with the first key from options if available
    let options = props.options || {}; // Default to an empty object if options are not provided
    let optionKeys = Object.keys(options); // Get all the keys of the options object

    const [selectedOption, setSelectedOption] = useState(optionKeys[0] || ''); // Default to the first option key if available
    const [qty, setQty] = useState(1); // Initialize qty with 1 to avoid totalCost being 0 at the start

    const handleIncrement = () => {
        setQty(prevQty => prevQty + 1);
    };

    const handleDecrement = () => {
        if (qty > 0) {
            setQty(prevQty => prevQty - 1);
        }
    }


    const handleInputChange = (e) => {
        const inputValue = parseInt(e.target.value, 10);
        if ((!isNaN(inputValue) || inputValue === "") && inputValue >= 0) {
            setQty(inputValue);
        } else {
            setQty(0); // Reset to 0 if invalid input
        }
    };

    const handleSelectChange = (e) => {
        setSelectedOption(e.target.value); // Update the state with the selected option
    };

    // Get the value corresponding to the selected option
    let selectedOptionValue = selectedOption ? options[selectedOption] : 0;

    // Calculate the total cost based on selected option value and quantity
    let totalCost = selectedOptionValue * qty;

    const price = selectedOptionValue * 1

    let dispatch = useDispatchCart()

    let data = useCart()

    const handleAddToCart = async () => {

        if (!localStorage.getItem("authToken")){
            alert("Please login to add items to the cart.")
            return;
        }

        let itemInCart = data.find(item => item.id === props.foodItem._id && item.size === selectedOption);
        
        if (itemInCart) {
            // If the item is already in the cart, update the quantity
            await dispatch({
                type: "UPDATE_QUANTITY",
                id: props.foodItem._id,
                size: selectedOption,
                quantity: qty
            });
        } else {
            // If the item is not in the cart, add it to the cart
            await dispatch({
                type: "ADD",
                payload: {
                    id: props.foodItem._id,
                    name: props.foodItem.name,
                    price: price,
                    quantity: qty,
                    totalCost: totalCost,
                    size: selectedOption
                }
            });
        }
    
    };

    return (
        <div>
            <div className="card my-3" style={{ width: "19rem", border: "px", borderRadius: "20px" }}>
                <img src={props.foodItem.img} className="card-img-top" alt="..." style={{ height: "200px" }} />
                <div className="card-body">
                    <h5 className="card-title text-center">{props.foodItem.name}</h5>
                    <p className="card-text text-center" style={{ height: "75px" }}>{props.foodItem.description}</p>
                    <h3 className='text-center my-1'>Price: {price}</h3>
                    <div style={{ display: "flex" }}>
                        <div className="btn-group text-left mx-3" role="group" aria-label="Basic example">
                            <button type="button" className="btn btn-success" onClick={handleDecrement}>-</button>
                            <input
                                type="text"
                                value={qty}
                                onChange={handleInputChange}
                                className="form-control btn btn-success"
                                style={{ width: "45px" }}
                                min="0"
                            />
                            <button type="button" className="btn btn-success" onClick={handleIncrement}>+</button>
                        </div>
                        <div className="btn-group mx-2 w-100" role="group" aria-label="Basic example">
                            <select
                                className="btn btn-success h-100"
                                style={{ maxWidth: "110px" }}
                                value={selectedOption}
                                onChange={handleSelectChange}
                            >
                                {
                                    optionKeys.map((data) => {
                                        return <option key={data} value={data}>{data}</option>
                                    })
                                }
                            </select>
                        </div>
                    </div>
                    <hr />
                    <h3 className='text-center my-3'>Total Cost: {totalCost}</h3>
                    <div className="d-flex justify-content-center">
                        <button href="/" className="btn btn-lg btn-success my-3" onClick={handleAddToCart}>Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
