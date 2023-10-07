import React from 'react'
import {Link} from 'react-router-dom';


function Login() {
  return (
    <div>
        <h1>This is the Login page</h1>
        <br />
        <Link to='/'>Home</Link>
        <Link to='/listings'>Listings</Link>
    </div>
  )
}

export default Login