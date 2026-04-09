import React, { useState } from 'react'
import '../App.css'

const Card = () => {
  const [username, Hii] = useState('')
  const [password, Login] = useState('')

  const handleLogin = () => {
    console.log('Username:', username, 'Password:', password)
  }

  const google= () => {
    window.open('https://accounts.google.com', '_blank')
  }

  const facebook = () => {
    window.open('https://www.facebook.com', '_blank')
  }

  return (
    <>
    <div className="card">
    <div className="top">
        <h1> Login page</h1>

    </div>
    <div className="mid">
        <h4> User name</h4>
        <input 
          type="text" 
          placeholder="Enter username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <h4> password</h4>
        <input 
          type="password" 
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

    </div>
    <div className="bottom">
        <h4>Forget Password</h4>
        <button onClick={handleLogin}>login</button>

    </div>
    <div className="end">
        <h4>Or signup using</h4>
        <img 
          src="https://logos-world.net/wp-content/uploads/2020/09/Google-Symbol.png" 
          alt="Google"
          onClick={google}
          style={{ cursor: 'pointer' }}
        />
        <img 
          src="https://www.pngmart.com/files/23/Facebook-Logo-PNG-Isolated-HD.png" 
          alt="Facebook"
          onClick={facebook}
          style={{ cursor: 'pointer' }}
        />
    </div>
    </div>
    </>
  )
}

export default Card