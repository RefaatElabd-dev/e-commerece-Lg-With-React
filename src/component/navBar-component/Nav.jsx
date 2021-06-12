import React, { Component } from "react";
import { NavLink, BrowserRouter as Router } from "react-router-dom";
import axios from 'axios'
// import './Nav.css'
import { BiStar } from "react-icons/bi";
import { Link } from "react-router-dom";
import AuthService from '../Services/auth.service';

class NavBar extends Component {

  state = {}
  

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
            <button className="btn btn-dark my-2 my-sm-0" type="submit" onClick={this.Search}>Search</button>
          </form>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
    

              <li className="nav-item m-2 dropdown ml-md-2">
                <NavLink className="nav-NavLink dropdown-toggle text-black font-weight-bolder" to="" id="navbarScrollingDropdown" role="button" data-toggle="dropdown" aria-expanded="false">
                  <i className="fas fa-user"> Login</i>
                </NavLink>
                <ul className="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
                  <li><NavLink className="dropdown-item bg-light text-dark" to="/Register">Create An Account</NavLink></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li>{!JSON.parse(localStorage.getItem('user')) ? <NavLink className="dropdown-item bg-light text-dark" to="/Login"><i className="fas fa-user mr-2"></i>Login</NavLink>:
                  <button className="dropdown-item bg-light text-dark" onClick={AuthService.logout}><i className="fas fa-user mr-2"></i>Logout</button>}</li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><NavLink className="dropdown-item bg-light text-dark" to="#"><i className="fas fa-shopping-cart mr-2"></i>Social Orders</NavLink></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><NavLink className="dropdown-item bg-light text-dark" to="#"><i className="fas fa-heart mr-2"></i>Saved Items</NavLink></li>
                </ul>
              </li>
              <li className="nav-item m-2 dropdown">
                <NavLink className="nav-NavLink dropdown-toggle text-black font-weight-bolder" to="#" id="navbarScrollingDropdown" role="button" data-toggle="dropdown" aria-expanded="false">
                  <i className="fas fa-question-circle mr-2"> help</i>
                </NavLink>
                <ul className="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
                  <li><NavLink className="dropdown-item bg-light text-dark" to="#">Help Center</NavLink></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><NavLink className="dropdown-item bg-light text-dark" to="#">Place &amp; track Order</NavLink></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><NavLink className="dropdown-item bg-light text-dark" to="#">Payment and Account</NavLink></li>
                </ul>
              </li>
              <li className="nav-item m-2">
                <NavLink className="nav-NavLink text-white font-weight-bolder" to="/cart" role="button" aria-expanded="false">
                  <span>
                    <i className="fas fa-shopping-cart fa-sm"></i>
                    <span className="badge rounded-pill badge-notification bg-danger align-top">{this.props.productsCart.length}</span>
                  </span>

                </NavLink>
              </li>
            </ul>
          </div>
        </nav>

      </React.Fragment>
    );
  }}

//  <li className="nav-item dropdown ">
//   <NavLink
//     className="nav-NavLink dropdown-toggle text-white font-weight-bolder"
//     to="/"
//     id="navbarScrollingDropdown"
//     role="button"
//     data-toggle="dropdown"
//     aria-expanded="false"
//   >
//     <i className="fas fa-user"> Login</i>
//   </NavLink>
//   <div className="dropdown-menu" aria-labelledby="navbarDropdown">
//     <div style={{ textAlign: "center" }}>
//       <NavLink className="btn btn-warning  btn-lg" to="/Login">
//         Login
//                     </NavLink>
//     </div>
//     <div className="dropdown-divider" />
//     <NavLink
//       className="dropdown-item bg-light"
//       to="/Register"
//       style={{ color: "#D18C67" }}
//     >
//       Create An Account
//                   </NavLink>
//     <div className="dropdown-divider" />
//     <NavLink
//       className="dropdown-item "
//       to="Account"
//       style={{ color: "#D18C67" }}
//     >
//       {" "}
//       <i className="fad fa-user" style={{ color: "black" }} />
//                     &nbsp; Account
//                   </NavLink>
//     <div className="dropdown-divider" />
//     <NavLink
//       className="dropdown-item bg-light"
//       to="#"
//       style={{ color: "#D18C67" }}
//     >
//       <i className="fas fa-shopping-cart mr-2"></i>Social
//                         Orders
//                       </NavLink>
//     <div className="dropdown-divider" />
//     <NavLink
//       className="dropdown-item bg-light"
//       to="#"
//       style={{ color: "#D18C67" }}
//     >
//       <i className="fas fa-heart mr-2"></i>Saved Items
//                       </NavLink>
//   </div>
// </li>
//   <li className="nav-item dropdown">
//     <NavLink
//       className="nav-NavLink dropdown-toggle text-white font-weight-bolder"
//       to="#"
//       id="navbarScrollingDropdown"
//       role="button"
//       data-toggle="dropdown"
//       aria-expanded="false"
//     >
//       <i className="fas fa-question-circle mr-2"> help</i>
//     </NavLink>
//     <div className="dropdown-menu" aria-labelledby="navbarDropdown">
//       <NavLink
//         className="dropdown-item bg-light"
//         to="/HelpCenter"
//         style={{ color: "rgb(233, 179, 31)" }}
//       >
//         Help Center
//                       </NavLink>
//       <div className="dropdown-divider" />
//       <NavLink
//         className="dropdown-item bg-light bg-light"
//         to="#"
//         style={{ color: "rgb(233, 179, 31)" }}
//       >
//         Place &amp; track Order
//                   </NavLink>
//       <div className="dropdown-divider" />
//       <NavLink
//         className="dropdown-item bg-light"
//         to="#"
//         style={{ color: "rgb(233, 179, 31)" }}
//       >
//         Order Cancelling
//                   </NavLink>
//       <div className="dropdown-divider" />
//       <NavLink
//         className="dropdown-item bg-light"
//         to="#"
//         style={{ color: "rgb(233, 179, 31)" }}
//       >
//         Returns and Refunds
//                   </NavLink>
//       <div className="dropdown-divider" />
//       <NavLink
//         className="dropdown-item bg-light"
//         to="#"
//         style={{ color: "rgb(233, 179, 31)" }}
//       >
//         Payment and Account
//                   </NavLink>
//     </div>
//   </li>
//   <li className="nav-item">
//     <NavLink
//       className="nav-NavLink text-white font-weight-bolder"
//       to="/Cart"
//       role="button"
//       aria-expanded="false"
//     >  {" "}
//       <i className="far fa-shopping-cart" /> &nbsp; cart
//                   </NavLink>
//   </li>
//             </ul >
//           </div >
//         </nav >
//       </React.Fragment >
//     );
//   }

// }

export default NavBar;
