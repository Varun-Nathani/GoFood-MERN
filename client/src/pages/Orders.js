import React, { useEffect, useState } from 'react';
import OrdersCard from '../components/OrdersCard';

export default function Orders() {
  const [uniqueDates, setUniqueDates] = useState([]);
  const [myOrders, setMyOrders] = useState([]);

  const loadOrders = async () => {
    const response = await fetch(`https://gofood-backend-2zv8.onrender.com/api/myOrder`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email: localStorage.getItem('email')
      })
    });

    try {
      const json = await response.json();
      const orders = json.myOrders.order_data;
      setMyOrders(orders);
      const dates = orders.map((order) => order[1].date);
      setUniqueDates(Array.from(new Set(dates)));
    } catch (error) {
    
    }



  }

  useEffect(() => {
    loadOrders();
  }, []);

  useEffect(() => {
    console.log(myOrders);
  }, [myOrders]);

  return (
    <div>
      {
        myOrders.length === 0 ? (
          <h1 className="text-center text-danger my-5">No orders found</h1>
        ) : (
          uniqueDates.reverse().map((date, index) => (
            <div key={index}>
              <h4 className='text-success'>Date: {date}</h4>
              <hr />
              {
                myOrders.filter((order) => order[1].date === date).reverse()
                  .map((order, orderIndex) => (
                    <div key={orderIndex}>
                      <h3>Order No: {orderIndex + 1}</h3>
                      <div className="row m-3">
                        <h3>Items:</h3>
                        {
                          order[0].map((item, itemIndex) => (
                            <div className='col-12 col-md-6 col-lg-3' key={itemIndex}>
                              <OrdersCard
                                name={item.name}
                                price={item.price}
                                quantity={item.quantity}
                                size={item.size}
                              />
                            </div>
                          ))
                        }
                      </div>
                      <hr /> {/* Add an hr tag after each order */}
                    </div>
                  ))
              }
            </div>
          ))
        )
      }
    </div>
  )
}
