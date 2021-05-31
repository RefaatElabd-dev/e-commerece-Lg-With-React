import React, { Component } from 'react';
import { NavLink, BrowserRouter as Router } from 'react-router-dom';

// import './Nav.css'

class NavBar extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
              <nav className="navbar navbar-expand-lg navbar-light bg-warning ">
  <div className=" offset-sm-0 offset-md-1 ">
    <button className="navbar-toggler " type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <a className="navbar-brand" href="#"><h1> <b>JUMIA</b> <i className="far fa-shopping-cart" /></h1></a>
  </div>
  <form className="form-inline my-2 my-lg-0 col-12 col-md-6 ">
    <input className="form-control mr-sm-2 col-7" type="search" placeholder="Search" aria-label="Search" />
    <button className="btn btn-dark my-2 my-sm-0" type="submit">Search</button>
  </form>
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      {/* <li class="nav-item active">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Link</a>
      
      </li> */}
      <li className="nav-item dropdown ">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          login
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <div style={{textAlign: 'center'}}>
            <a className="btn btn-warning  btn-lg" href="/Login">Login</a></div>
          <div className="dropdown-divider" />
          <a className="dropdown-item " href="/Register" style={{color: '#A78B88'}}>Create An Account</a>
          <div className="dropdown-divider" />
          <a className="dropdown-item " href="Account" style={{color: '#D18C67'}}> <i className="fad fa-user" style={{color: 'black'}} />&nbsp; Account</a>
          <div className="dropdown-divider" />
          <a className="dropdown-item " href="#" style={{color: 'rgb(233, 179, 31)'}}> <i className="far fa-shopping-cart" style={{color: 'black'}} />  &nbsp; Social Orders</a>
          <div className="dropdown-divider" />
          <a className="dropdown-item " href="#" style={{color: 'rgb(233, 179, 31)'}}> <i className="fal fa-heart" style={{color: 'black'}} />   &nbsp; Saved Items</a>
        </div>
      </li>
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="far fa-question-circle" />
          help
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <a className="dropdown-item" href="#" style={{color: 'rgb(233, 179, 31)'}}>Help Center</a>
          <div className="dropdown-divider" />
          <a className="dropdown-item" href="#" style={{color: 'rgb(233, 179, 31)'}}>Place &amp; track Order</a>
          <div className="dropdown-divider" />
          <a className="dropdown-item" href="#" style={{color: 'rgb(233, 179, 31)'}}>Order Cancelling</a>
          <div className="dropdown-divider" />
          <a className="dropdown-item" href="#" style={{color: 'rgb(233, 179, 31)'}}>Returns and Refunds</a>
          <div className="dropdown-divider" />
          <a className="dropdown-item" href="#" style={{color: 'rgb(233, 179, 31)'}}>Payment and Account</a>
        </div>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#"> <i className="far fa-shopping-cart" /> &nbsp; cart</a>
      </li>
    </ul>
  </div>
</nav>
              
            </React.Fragment>
         );
    }
}
 
export default NavBar;