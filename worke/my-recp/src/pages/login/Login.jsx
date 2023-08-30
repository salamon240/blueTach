import React from 'react'
import './login.scss'

function Login() {
  return (
    <div>
        <div className="container">
            <form action="" className='form'>
                <div className="items">
                    <h3>Login</h3>
                <div className="item">
                    <input type="text" placeholder='user name' />
                </div>
                <div className="item">
                    <input type="password" placeholder='password' />
                </div>
                <div className="item">
                    <input type="password" placeholder='confrim password' />
                </div>
               
            <button type="submit">login</button>
                </div>
               
            </form>
        </div>

    </div>
  )
}

export default Login