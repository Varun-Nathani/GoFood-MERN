import React from 'react'
import Carousel from '../components/Carousel'
import logo from "../images/gofood-logo-zip-file/png/logo-black-bg.png"
export default function Home() {
  return (
    <div>
      <Carousel/>
      <div className="container text-center my-5">
        <h1>Welcome To <span className='fst-italic'>GoFood</span></h1>
        <p className='fs-5 my-5'>We are multi-cuisine restaurant serving healthy, flavourful, handcrafted food made from fresh ingredients and authentic spices, served with oodles of love. We aim to delight you with our legacy of unique flavours, cuisines, and recipes from India and the world. We love you! And we endeavour to consistently bring you our best.</p>
      </div>
      <div className="container container-fluid grid text-center">
        <div className="row">
            <div className="col" >
                <img src="https://www.shivsagar.com/img/dosa.svg" alt="dosa img" style={{"width": "100px", "height": "100px"}}/>
                <h3 className='fs-2'>South Indian</h3>
                <p className='fs-5' >Traditional delicacies from the homes of South India served on a bed of banana leaves</p>
            </div>
            <div className="col"></div>
            <div className="col" >
                <img className='justify-content-end' src="https://www.shivsagar.com/img/tikka-masala.svg" alt="dosa img" style={{"width": "100px", "height": "100px"}}/>
                <h3 className='fs-2'>North Indian</h3>
                <p className='fs-5'>Delicious recipes from the Northern lands of India cooked in rich, creamy splendour</p>
            </div>
        </div>

        <div className="row">
            <div className="col" >
                <img src="https://www.shivsagar.com/img/samosa.svg" alt="dosa img" style={{"width": "100px", "height": "100px"}}/>
                <h3 className='fs-2'>Street Food</h3>
                <p className='fs-5' >Zesty flavours celebrating the colourful lanes of India</p>
            </div>
            <div className="col">
                <img src={logo} alt="" width={"400"}/>
            </div>
            <div className="col" >
                <img className='justify-content-end' src="https://www.shivsagar.com/img/noodles.svg" alt="dosa img" style={{"width": "100px", "height": "100px"}}/>
                <h3 className='fs-2'>Chinese</h3>
                <p className='fs-5'>Savoury and joyful delicacies with a zingy desi twist.</p>
            </div>
        </div>

        <div className="row">
            <div className="col" >
                <img src="https://www.shivsagar.com/img/pizza.svg" alt="dosa img" style={{"width": "100px", "height": "100px"}}/>
                <h3 className='fs-2'>Mexican</h3>
                <p className='fs-5' >Premium creations loaded with cheese and seasoned to perfection. A visually stunning fiesta of powerful flavours.</p>
            </div>
            <div className="col"></div>
            <div className="col" >
                <img className='justify-content-end' src="https://www.shivsagar.com/img/drink.svg" alt="dosa img" style={{"width": "100px", "height": "100px"}}/>
                <h3 className='fs-2'>Falooda Juices and Milkshakes</h3>
                <p className='fs-5'>Every slurp is a gateway to heaven. Glasses filled with deliciousness, a flavour for every weather!</p>
            </div>
        </div>
      </div>
    </div>
  )
}
