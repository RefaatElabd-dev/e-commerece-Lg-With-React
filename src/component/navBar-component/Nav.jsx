import React, { Component } from "react";
import { NavLink, BrowserRouter as Router } from "react-router-dom";

// import './Nav.css'
import { BiStar } from "react-icons/bi";
import { Link } from "react-router-dom";

class NavBar extends Component {
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
      </li>
      <li class="nav-item">
        <NavLink class="nav-link" to="#">Link</NavLink>
      
      </li> */}
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
}

export default NavBar;
