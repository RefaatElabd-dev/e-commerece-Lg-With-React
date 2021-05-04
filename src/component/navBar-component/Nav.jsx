import React, { Component } from 'react';
import {  NavLink } from 'react-router-dom';

// import './Nav.css'

class NavBar extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
                <nav className="navbar navbar-expand-md navbar-light px-0" style={{backgroundImage:"linear-gradient(to right, #f9e0ae, rgb(206 91 34) )",position:"fixed",width:"100%"}}>
                    <div className="container px-0">
                        
                        <NavLink className="navbar-brand pt-0" to="#"><img className="rounded-circle" src="https://s3-us-east-2.amazonaws.com/designevo/projects/uid-2589817/cb74736c21518770b8b3806050baa564/preview.png?t=1620012253848" alt="J6 Ecommerece" width="50" /></NavLink>
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                        <div className="collapse navbar-collapse pt-2" id="navbarScroll">
                            <ul className="navbar-nav ml-2 my-lg-0 navbar-nav-scroll" >
                                <li className="nav-item">
                                    <form className="form-group">
                                        <div className="input-icons mb-2">
                                            <i className="fas fa-search icon text-primary"></i>
                                            <input className="form-control form-control-lg mr-2 text-center p-2" type="search" placeholder="Search"/>
                                        </div>
                                    </form>
                                </li>
                                <li className="nav-item dropdown ml-md-2">
                                    <NavLink className="nav-link dropdown-toggle text-white font-weight-bolder" to="#" id="navbarScrollingDropdown" role="button" data-toggle="dropdown" aria-expanded="false">
                                    <i className="fas fa-user"> Login</i>
                                    </NavLink>
                                    <ul className="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
                                        <li><NavLink className="dropdown-item bg-light text-dark" to="#">Create An Account</NavLink></li>
                                        <li><hr className="dropdown-divider"/></li>
                                        <li><NavLink className="dropdown-item bg-light text-dark" to="#"><i className="fas fa-user mr-2"></i>Login</NavLink></li>
                                        <li><hr className="dropdown-divider"/></li>
                                        <li><NavLink className="dropdown-item bg-light text-dark" to="#"><i className="fas fa-shopping-cart mr-2"></i>Social Orders</NavLink></li>
                                        <li><hr className="dropdown-divider"/></li>
                                        <li><NavLink className="dropdown-item bg-light text-dark" to="#"><i className="fas fa-heart mr-2"></i>Saved Items</NavLink></li>
                                    </ul>
                                </li>
                                <li className="nav-item dropdown">
                                    <NavLink className="nav-link dropdown-toggle text-white font-weight-bolder" to="#" id="navbarScrollingDropdown" role="button" data-toggle="dropdown" aria-expanded="false">
                                    <i className="fas fa-question-circle mr-2"> help</i>
                                    </NavLink>
                                    <ul className="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
                                        <li><NavLink className="dropdown-item bg-light text-dark" to="#">Help Center</NavLink></li>
                                        <li><hr className="dropdown-divider"/></li>
                                        <li><NavLink className="dropdown-item bg-light text-dark" to="#">Place &amp; track Order</NavLink></li>
                                        <li><hr className="dropdown-divider"/></li>
                                        <li><NavLink className="dropdown-item bg-light text-dark" to="#">Payment and Account</NavLink></li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link text-white font-weight-bolder" to="#" role="button"aria-expanded="false">
                                        <span>
                                            <i className="fas fa-shopping-cart fa-sm"></i> 
                                            <span className="badge rounded-pill badge-notification bg-danger align-top">+9</span>
                                        </span>
                                        
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </React.Fragment>
         );
    }
}
 
export default NavBar;