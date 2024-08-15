import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Signup() {

  const [credentials, setCredentials] = useState({name: "", phone:"", email: "", password: "",})
  


  const handleOnChange = (e) => {
    setCredentials({...credentials, [e.target.name]: e.target.value})
  }

  let navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()

    

    const response = await fetch('http://localhost:5000/api/createUser', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: credentials.name,
        phone: credentials.phone,
        email: credentials.email,
        password: credentials.password,
      }),
    })
    const json = await response.json()

    if (!json.success) {
      alert(json.errors[0].msg)
      return
    }

    navigate('/login')
    alert('User registered successfully!')
    setCredentials({name: "", phone:"", email: "", password: "",})

  }

  return (
   <> 
      <div className="container border border-success my-5">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Name</label>
              <input type="text" className="form-control" name='name' value={credentials.name} onChange={handleOnChange}/>
            </div>
            <div className="mb-3">
              <label htmlFor="phone" className="form-label">Phone Number</label>
              <input type="text" className="form-control" name='phone' value={credentials.phone} onChange={handleOnChange}/>
            </div>
            <label htmlFor="email" className="form-label">Email address</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name='email' value={credentials.email} onChange={handleOnChange}/>
            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input type="password" className="form-control" id="exampleInputPassword1" name='password' value={credentials.password} onChange={handleOnChange}/>
          </div>
          <button type="submit" className=" m-3 btn btn-success">Submit</button>
          <Link to="/login" className="m-3 btn btn-danger">Already a user?</Link>
        </form>
      </div>
    </>
  )
}
