import React from 'react'
import '../css/login.css'
import { Link } from 'react-router-dom'

const Login = (props) => {

  const decideWhichToReturn = ()=>{
    let obj = {}
    if (props.type==='login') {
      obj.action = "Log In"
      obj.usernameAttr = true
      obj.maintext = "I don't have an account"
      obj.passline = "Enter Password"
      obj.path = "/signup"
      return obj
    }else{
      obj.action = "Register"
      obj.maintext = "I already have an account"
      obj.passline = "Create a strong Password"
      obj.path = "/login"
      return obj
    }
  }
  const mainObj = decideWhichToReturn()
  // console.log(mainObj)
  return (
    <div className='page'>
        <div className="loginContent">
          <h1 style={{fontSize:"45px",textAlign:"center",
          marginBottom:"50px"}} 
          id='welcomeTxt'>{props.heading}</h1>
        {}
        <div hidden={mainObj.usernameAttr} className="mb-3 mainContent">
          <label className="s-label form-label">Username</label>
          <input spellCheck="false" type="text" className="txtArea form-control" id="" placeholder="Enter Username here" />
        </div>
        <div className="mb-3 mainContent">
          <label className="s-label form-label">Email address</label>
          <input spellCheck="false" type="email" className="txtArea form-control" id="" placeholder="Enter email here"/>
        </div>
        <div className="mb-3 mainContent">
          <label className="s-label form-label">{mainObj.passline}</label>
          <textarea spellCheck="false" className="txtArea form-control" id="" rows="1" placeholder='Enter password here'></textarea>
          <div className="login">
            <button id='loginButton'>{mainObj.action}</button>
          </div>
          <div className="no-acc">
          <Link to={mainObj.path}>
            {/* I Don't have an account */}
            {mainObj.maintext}
          </Link>
          </div>
        </div>
          {/* <input type="text" row="10"/> */}
        </div>
    </div>
  )
}

export default Login
