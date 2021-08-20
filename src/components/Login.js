import React, { useState } from "react";
import axios from 'axios'

const Login = (props) => {
  const [user, setUser] = useState({
    username:"",
    password: "",
  })

  const [error, setError] = useState(
    ""
  );
  const handleChange = e => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = e =>{
    e.preventDefault()
    axios
     .post('http://localhost:5000/api/login', user)
      .then(res=>{
        localStorage.setItem("token", res.data.payload)
        props.history.push('/bubble')
      })
      .catch((err=>{
        console.log(err)
        setError("Error")
      }))
  }

  return (
    <div>
      <h1>Welcome to the Bubble App!</h1>
      <div>
        <form onSubmit={handleSubmit} data-testid="loginForm" className="login-form">
            <input
              name="username"
              type="text"
              id="username"
              value={user.username}
              onChange={handleChange}
              placeholder="--- username ---"
            />
            <input
              name="password"
              type="password"
              id="password"
              value={user.password}
              onChange={handleChange}
              placeholder="--- password ---"
            />
            <button id="submit" type="submit" onClick={handleSubmit}>
              Log-In
            </button>
        </form>
      </div>

      <p id="error" className="error">{error}</p>
    </div>
  );
};

export default Login;

//Task List:
//1. Build a form containing a username and password field.
//2. Add whatever state necessary for form functioning.
//4. If either the username or password is not entered, display the following words with the p tag provided: Username or Password not valid.
//5. If the username / password is equal to "Lambda" / "School", save that token to localStorage and redirect to a BubblePage route.
//6. MAKE SURE YOUR USERNAME AND PASSWORD INPUTS INCLUDE id="username" and id="password"
//7. MAKE SURE YOUR SUBMIT BUTTON INCLUDES id="submit"
//8. MAKE SURE YOUR ERROR p tag contains the id="error"