import React, { useEffect } from 'react'
import { createContext } from "react";
import { useLocation } from 'react-router-dom';

const BasicContext = createContext()

const BasicStates = (props) => {
  let location = useLocation()
  // useEffect(() => {
  //   console.log(location)
  // },[location])
  

  const buttonText = ()=>{
    if(location.pathname === "/login"){
      return {re_url:"/signup",
        btext:"Sign Up"}
    }
    else if(location.pathname === "/signup"){
      return {
        re_url: "/login",
        btext: "Log In"
      }
    }
    else{
      return {
        re_url: "/login",
        btext: "Log In"
      }
    }
    // console.log(location)
  }

  return (
    <BasicContext.Provider value = {{buttonText}}>
        {props.children}
    </BasicContext.Provider>
  )
}

export default BasicStates
export {BasicContext}