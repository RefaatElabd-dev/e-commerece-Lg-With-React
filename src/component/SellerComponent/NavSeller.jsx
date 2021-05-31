import React, { Component } from "react";
import { NavLink, BrowserRouter as Router } from "react-router-dom";

// import './Nav.css'
import { BiStar } from "react-icons/bi";
import { Link } from "react-router-dom";

class NavSeller extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <nav
          className="navbar navbar-expand-md fixed-top "
          style={{
            backgroundColor: "lightgray",
            position: "sticky",
            display: "flex",
            width: "100%",
          }}
        >
          <div className="container p-2">
            <NavLink className="navbar-brand pt-0" to="#">
              <img
                className=""
                src="https://3cv9ak2ajf5r17hu9d2d3jsa-wpengine.netdna-ssl.com/wp-content/uploads/2017/02/Jumia-Vendor-Hub-Logo_ws.png"
                alt="J6 Ecommerece"
                width="200"
              />
            </NavLink>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarScroll"
              aria-controls="navbarScroll"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse pt-2" id="navbarScroll">
              <ul className="navbar-nav ml-2 my-lg-0 navbar-nav-scroll ">
                <li className="nav-item m-2 dropdown ml-md-2">
                  <NavLink
                    className="nav-NavLink dropdown-toggle text-white font-weight-bolder"
                    to=""
                    id="navbarScrollingDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Knowledge/Training
                  </NavLink>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarScrollingDropdown"
                  >
                    <li>
                      <NavLink
                        className="dropdown-item bg-light text-dark"
                        to="/Register"
                      >
                        Guide to start selling
                      </NavLink>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <NavLink
                        className="dropdown-item bg-light text-dark"
                        to="/Login"
                      >
                        9 Tricks to grow your sales on Jumia!
                      </NavLink>
                    </li>
                  </ul>
                </li>
                <li className="nav-item m-2 dropdown">
                  <NavLink
                    className="nav-NavLink dropdown-toggle text-white font-weight-bolder"
                    to="#"
                    id="navbarScrollingDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Our Services
                  </NavLink>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarScrollingDropdown"
                  >
                    <li>
                      <NavLink
                        className="dropdown-item bg-light text-dark"
                        to="#"
                      >
                        New Vender Referral Program
                      </NavLink>
                    </li>
                  </ul>
                  <NavLink
                    className="nav-NavLink dropdown-toggle text-white font-weight-bolder"
                    to="#"
                    id="navbarScrollingDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Vendor Community
                  </NavLink>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarScrollingDropdown"
                  >
                    <li>
                      <NavLink
                        className="dropdown-item bg-light text-dark"
                        to="#"
                      >
                        Vender Success Stories
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        className="dropdown-item bg-light text-dark"
                        to="#"
                      >
                        Events Gallery
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        className="dropdown-item bg-light text-dark"
                        to="#"
                      >
                        Telegram
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        className="dropdown-item bg-light text-dark"
                        to="#"
                      >
                        FaceBook
                      </NavLink>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </React.Fragment>
    );
  }
}

export default NavSeller;
