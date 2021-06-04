import React, { Component } from "react";
import { NavLink, BrowserRouter as Router } from "react-router-dom";

// import './Nav.css'
import { BiStar } from "react-icons/bi";
import { Link } from "react-router-dom";

class NavBar extends Component {
<<<<<<< HEAD
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
  <form className="form-inline my-2 my-lg-0 col-12 col-md-6">
    <input className="form-control mr-sm-2 col-7" type="search" placeholder="Search" aria-label="Search" />
    <button className="btn btn-dark my-2 my-sm-0" type="submit" onClick={this. Search}>Search</button>
  </form>
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      {/* <li class="nav-item active">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
=======
  state = {};
  render() {
    return (
      <React.Fragment>
        <Link
          to="/Knowledge/Guide"
          target="_blank"
          className="m-2 text-warning font-weight-bolder"
        >
          <BiStar size="22" /> Sell On Jumia
        </Link>

        <nav
         className="navbar navbar-expand-lg navbar-light bg-warning ">
          <div className=" offset-sm-0 offset-md-1 ">
            <button
              className="navbar-toggler "
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <NavLink className="navbar-brand" to="/">
              <h1>
                {" "}
                <b>JUMIA</b> <i className="far fa-shopping-cart" />
              </h1>
            </NavLink>
          </div>
          <form className="form-inline my-2 my-lg-0 col-12 col-md-6 ">
            <input
              className="form-control mr-sm-2 col-7"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-dark my-2 my-sm-0" type="submit">
              Search
            </button>
          </form>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              {/* <li class="nav-item active">
        <NavLink class="nav-link" to="#">Home <span class="sr-only">(current)</span></NavLink>
>>>>>>> 4e607f3ee306134e6298a2eabf8a4d3b25a92506
      </li>
      <li class="nav-item">
        <NavLink class="nav-link" to="#">Link</NavLink>
      
      </li> */}
<<<<<<< HEAD
       <li className="nav-item m-2 dropdown ml-md-2">
                                    <NavLink className="nav-NavLink dropdown-toggle text-black font-weight-bolder" to="" id="navbarScrollingDropdown" role="button" data-toggle="dropdown" aria-expanded="false">
                                    <i className="fas fa-user"> Login</i>
                                    </NavLink>
                                    <ul className="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
                                        <li><NavLink className="dropdown-item bg-light text-dark" to="/Register">Create An Account</NavLink></li>
                                        <li><hr className="dropdown-divider"/></li>
                                        <li><NavLink className="dropdown-item bg-light text-dark" to="/Login"><i className="fas fa-user mr-2"></i>Login</NavLink></li>
                                        <li><hr className="dropdown-divider"/></li>
                                        <li><NavLink className="dropdown-item bg-light text-dark" to="#"><i className="fas fa-shopping-cart mr-2"></i>Social Orders</NavLink></li>
                                        <li><hr className="dropdown-divider"/></li>
                                        <li><NavLink className="dropdown-item bg-light text-dark" to="#"><i className="fas fa-heart mr-2"></i>Saved Items</NavLink></li>
                                    </ul>
                                </li>
                                <li className="nav-item m-2 dropdown">
                                    <NavLink className="nav-NavLink dropdown-toggle text-black font-weight-bolder" to="#" id="navbarScrollingDropdown" role="button" data-toggle="dropdown" aria-expanded="false">
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
                                <li className="nav-item m-2">
                                    <NavLink className="nav-NavLink text-white font-weight-bolder" to="#" role="button"aria-expanded="false">
                                        <span>
                                            <i className="fas fa-shopping-cart fa-sm"></i> 
                                            <span className="badge rounded-pill badge-notification bg-danger align-top">+9</span>
                                        </span>
                                        
                                    </NavLink>
                                </li>
    </ul>
  </div>
</nav>

            </React.Fragment>
         );
    }
=======
              <li className="nav-item dropdown ">
              <NavLink
                    className="nav-NavLink dropdown-toggle text-white font-weight-bolder"
                    to="/"
                    id="navbarScrollingDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i className="fas fa-user"> Login</i>
                  </NavLink>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <div style={{ textAlign: "center" }}>
                    <NavLink className="btn btn-warning  btn-lg" to="/Login">
                      Login
                    </NavLink>
                  </div>
                  <div className="dropdown-divider" />
                  <NavLink
                        className="dropdown-item bg-light"
                        to="/Register"
                        style={{ color: "#D18C67" }}
                      >
                        Create An Account
                  </NavLink>
                  <div className="dropdown-divider" />
                  <NavLink
                    className="dropdown-item "
                    to="Account"
                    style={{ color: "#D18C67" }}
                  >
                    {" "}
                    <i className="fad fa-user" style={{ color: "black" }} />
                    &nbsp; Account
                  </NavLink>
                  <div className="dropdown-divider" />
                  <NavLink
                        className="dropdown-item bg-light"
                        to="#"
                        style={{ color: "#D18C67" }}
                      >
                        <i className="fas fa-shopping-cart mr-2"></i>Social
                        Orders
                      </NavLink>
                  <div className="dropdown-divider" />
                  <NavLink
                        className="dropdown-item bg-light"
                        to="#"
                        style={{ color: "#D18C67" }}
                      >
                        <i className="fas fa-heart mr-2"></i>Saved Items
                      </NavLink>
                </div>
              </li>
              <li className="nav-item dropdown">
              <NavLink
                    className="nav-NavLink dropdown-toggle text-white font-weight-bolder"
                    to="#"
                    id="navbarScrollingDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i className="fas fa-question-circle mr-2"> help</i>
                  </NavLink>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <NavLink
                        className="dropdown-item bg-light"
                        to="/HelpCenter"
                        style={{ color: "rgb(233, 179, 31)" }}
                      >
                        Help Center
                      </NavLink>
                  <div className="dropdown-divider" />
                  <NavLink
                    className="dropdown-item bg-light bg-light"
                    to="#"
                    style={{ color: "rgb(233, 179, 31)" }}
                  >
                    Place &amp; track Order
                  </NavLink>
                  <div className="dropdown-divider" />
                  <NavLink
                    className="dropdown-item bg-light"
                    to="#"
                    style={{ color: "rgb(233, 179, 31)" }}
                  >
                    Order Cancelling
                  </NavLink>
                  <div className="dropdown-divider" />
                  <NavLink
                    className="dropdown-item bg-light"
                    to="#"
                    style={{ color: "rgb(233, 179, 31)" }}
                  >
                    Returns and Refunds
                  </NavLink>
                  <div className="dropdown-divider" />
                  <NavLink
                    className="dropdown-item bg-light"
                    to="#"
                    style={{ color: "rgb(233, 179, 31)" }}
                  >
                    Payment and Account
                  </NavLink>
                </div>
              </li>
              <li className="nav-item">
              <NavLink
                    className="nav-NavLink text-white font-weight-bolder"
                    to="/Cart"
                    role="button"
                    aria-expanded="false"
                  >  {" "}
                  <i className="far fa-shopping-cart" /> &nbsp; cart
                  </NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </React.Fragment>
    );
  }
>>>>>>> 4e607f3ee306134e6298a2eabf8a4d3b25a92506
}

export default NavBar;
