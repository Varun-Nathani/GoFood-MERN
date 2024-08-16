import React from 'react'
import { useCart, useDispatchCart } from '../components/ContextReducer';
import trash from "../images/Icons/delete.png"
export default function Cart() {
  let data = useCart();
  let dispatch = useDispatchCart();
  if (data.length === 0) {
    return (
      <div>
        <div className='m-5 w-100 text-center fs-3'>The Cart is Empty!</div>
      </div>
    )
  }
  const handleRemove = (index)=>{
    console.log(index)
    dispatch({type:"REMOVE",index:index})
  }


  const handleCheckout = async () => {
    const userEmail = localStorage.getItem("email")
    const date = new Date();
    const response = await fetch('https://gofood-backend-pt4i.onrender.com/api/placeOrder', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: userEmail,
        order_data: [data, {date: date.toLocaleDateString("en-GB"), time: date.toLocaleTimeString("en-US")}],

      }),
    })



    dispatch({type: "CLEAR_CART"})
    alert("Order Placed Successfully!")
  }

  let totalPrice = data.reduce((total, food) => total + food.totalCost, 0)
  return (
    <div>
      <div className='container m-auto mt-5 table-responsive  table-responsive-sm table-responsive-md' >
        <table className='table table-hover '>
          <thead className=' text-success fs-4'>
            <tr>
              <th scope='col' >#</th>
              <th scope='col' >Name</th>
              <th scope='col' >Size</th>
              <th scope='col' >Quantity</th>
              <th scope='col' >Rate</th>
              <th scope='col' >Amount</th>
              <th scope='col' ></th>
            </tr>
          </thead>
          <tbody>
            {data.map((food, index) => (
              <tr>
                <th scope='row' >{index + 1}</th>
                <td >{food.name}</td>
                <td>{food.size}</td>
                <td>{food.quantity}</td>
                <td>{food.price}</td>
                <td>{food.totalCost}</td>
                <td ><img src={trash} alt="" style={{width:"30px", height: "30px"}} onClick={handleRemove}/></td>
              </tr>
            ))}
          </tbody>
        </table>
        <div>
          <h1 className='fs-2'>Total Price: {totalPrice}/-</h1>
        </div>
        <div>
          <button className='btn bg-success mt-5 ' onClick={handleCheckout}> Check Out </button>
        </div>
      </div>



    </div>
  )
}