import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import logo from "../images/gofood-logo-zip-file/png/logo-color.png"
import logout from "../images/Icons/logout.png"
import cart from "../images/Icons/shopping-cart.png"
import { useCart } from './ContextReducer'

export default function Navbar() {

    const navigate = useNavigate();

    let data = useCart()

    const handleCart = () => {
        navigate('/cart');
    }

    const handleLogout = () => {
        if (window.confirm('Are you sure you want to log out?')) {
            localStorage.removeItem("authToken");
            navigate('/');
        }
    }


    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-success navbar-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand fs-1 fst-italic" to="/">
                        <img src={logo} alt="logo" width={"100"} height={"100"} />
                    </Link>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link fs-3 active fst-bold" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link fs-3 active fst-bold" aria-current="page" to="/menu">Menu</Link>
                            </li>
                            {
                                localStorage.getItem('authToken') ?
                                    <li className="nav-item">
                                        <Link className="nav-link fs-3 active fst-bold" aria-current="page" to="/orders">My Orders</Link>
                                    </li>
                                    : ""
                            }
                        </ul>
                        {
                            localStorage.getItem('authToken') ?
                                <div className='d-flex'>
                                    <div>
                                        <img src={cart} alt="logout" className='' onClick={handleCart} style={{width:"50px", height:"50px"}}/>
                                        {
                                            data.length > 0? <span className="top-0 start-100 translate-middle badge rounded-pill bg-danger" style={{width: "25px", height: "25px", fontSize:"15px"}}>{data.length}</span>: ""
                                        }
                                    </div>
                                    <img src={logout} alt="logout" className='mx-5' onClick={handleLogout} style={{width:"40px", height:"40px"}}/>
                                    {/* <FontAwesomeIcon className='mx-5' icon="fa-solid fa-cart-shopping" size='2xl' onClick={handleCart} />
                                    <FontAwesomeIcon className='mx-5' icon="fa-solid fa-right-from-bracket" size='2xl' onClick={handleLogout} /> */}
                                </div>
                                :
                                <div className="d-flex">
                                    <Link className="btn btn-lg fs-5 mx-2" to="/login" style={{ "backgroundColor": "white", "color": "#00BC8C" }}>Login</Link>
                                    <Link className="btn btn-lg fs-5 mx-2" to="/signup" style={{ "backgroundColor": "white", "color": "#00BC8C" }}>Signup</Link>
                                </div>
                        }
                    </div>
                </div>
            </nav>
        </div>
    )
}
