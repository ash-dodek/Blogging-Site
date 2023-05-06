import React, { useContext } from 'react'
import { Link } from "react-router-dom";
import BasicStates, { BasicContext } from '../Context/BasicStates';

const Navbar = () => {
  const context = useContext(BasicContext)
  const {buttonText} = context
  // gets the text to be diplayed on the button on top right, weher it should be login or sign up
  
  return (<>
    <nav style={{backgroundColor:'transparent'}} 
    className="navbar navbar-dark bg-dark navbar-expand-lg ">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">Blog</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/create">Create a new Blog</Link>
        </li>
      </ul>
      <div style={{
        float:'right'
      }} className="right-items">
      <Link to='/create'>
        <button className="btn mx-4 btn-secondary">Create Blog</button>
      </Link>
      {/* Login/signup button */}
      <Link to={buttonText().re_url}>
        <button className="btn btn-secondary">{buttonText().btext}</button>
      </Link>
      </div>
    </div>
  </div>
</nav>
  </>)
}

export default Navbar
