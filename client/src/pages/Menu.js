import React, { useState, useEffect } from 'react'
import Card from '../components/Card'


export default function Menu() {

  const [foodCat, setFoodCat] = useState([])
  const [foodItems, setFoodItems] = useState([])
  const [search, setSearch] = useState("")


  const loadData = async () => {
    const response = await fetch(`http://localhost:5000/api/foodData`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      }
    })
    const data = await response.json()


    setFoodCat(data[1])
    setFoodItems(data[0])
  }

  useEffect(() => {
    loadData()
  }, [])

  return (
    <div>

      <div className="container my-3">
        <input type="search" className='form-control me-2 bg-white' placeholder='Search' aria-label='search' value={search} onChange={(e) => { setSearch(e.target.value) }} />
      </div>

      <div className='container'>
        {
          foodCat.length > 0 ?
            foodCat.map((data) => {
              return (
                <div className='row row-cols mb-3'>
                  <h1 key={data._id} className="m-3">
                    {data.CategoryName}
                  </h1>
                  <hr />
                  {
                    foodItems.length > 0
                      ? foodItems.filter((itemData) => (itemData.CategoryName === data.CategoryName) && (itemData.name.toLowerCase().includes(search.toLocaleLowerCase()))).map((item) => {
                        return (
                          <div key={item._id} className='col-12 col-md-6 col-lg-3'>
                            <Card
                              foodItem = {item}
                              options={item.options[0]}
                            />

                          </div>
                        )
                      })
                      : "No Such Data Available"
                  }
                </div>
              )
            }) :
            <div>......Loading</div>
        }
      </div>
    </div>
  )
}
