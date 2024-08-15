import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Login() {

  const [credentials, setCredentials] = useState({ email: "", password: "", })


  const handleOnChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value })
  }

  let navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()

    const response = await fetch('https://gofood-backend-2zv8.onrender.com/api/loginUser', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: credentials.email,
        password: credentials.password,
      }),
    })
    const json = await response.json()

    if (!json.success) {
      alert(json.errors[0].msg)

    }
    else {
      localStorage.setItem("authToken", json.authToken)
      localStorage.setItem("email", json.user.email)
      console.log(localStorage.getItem("email"))
      navigate('/')
      alert('Logged in successfully!')
    }
  }

  return (
    <div className='container border border-success my-5'>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name='email' value={credentials.email} onChange={handleOnChange} />
          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
          <input type="password" className="form-control" id="exampleInputPassword1" name='password' value={credentials.password} onChange={handleOnChange} />
        </div>
        <button type="submit" className="btn btn-success m-3" >Submit</button>
        <Link to="/signup" className="m-3 btn btn-danger">New user?</Link>
      </form>
    </div>
  )
}
