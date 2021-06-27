import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


import { Link ,NavLink} from "react-router-dom";
import { BiStar } from "react-icons/bi";
import AuthService from "../Services/auth.service";
import SearchResult from "../search";

import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
class NavBar extends Component {
  state = {
    prod: this.props.cardprod,
    user: {},
    searchString:'',
    searchResult:[],
  };
// Add To Cart (Mahmoud)
addToCart = async (productid) => {
  const productsIncart = {...this.state.prod};
  this.setState({ productsIncart });
  try {
    await axios
      .post(
        "https://localhost:44340/api/CartsItemAPi/addproducttoCART/1?productid=" +
          productid
      )
      .then((res) => {
        toast.success(`Product Added`);
        window.location.reload();
      });
  } catch (ex) {
    toast.error("Can't Add Or already Exist");
    this.setState({ prod: productsIncart });
  }
};


// Get Search
 search=async(name,e)=>{
  e.preventDefault();
  try{
  await axios.get("https://localhost:44340/api/SearchsAPi/"+name)
  .then((res) => {
    this.setState({ searchResult: res.data })
  
    console.log(res.data)
    this.props.history.push("/search",res.data)
 
    
  })}
  catch {
    toast.error("Enter Valid String");
  }
};

//Form input Search
handleChange = (e) => {
  this.setState({searchString:e.target.value});
  console.log(e.currentTarget.value);
};
  render() {
   
    return (
      <React.Fragment>
        <nav
          className="navbar navbar-expand-lg navbar-light text-white fixed-top"
          style={{ backgroundColor: "#343a40",position: "sticky",
          display: "flex" }}
        >
          <div className="col-md-2 col-12 offset-md-1">
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
            <Link className="navbar-brand text-white" to="/" title="Home">
              <h1>
                {" "}
                <b>J6</b> <i className="fa fa-shopping-cart text-light" />
              </h1>
            </Link>
          </div>
         
          <form 
            // action="/search"
            onSubmit={(event)=>this.search(this.state.searchString,event)}
            className="form-inline col-md-5 offset-1 col-12"
            >
            <input
              className="form-control mr-sm-2 col-7"
              type="search"
              placeholder="Search"
              aria-label="Search"
              onChange={this.handleChange}
              value={this.state.searchString}
              name="searchString"
            />
            
            <button
              className="btn btn-primary my-2 my-sm-0"
              type="submit"
            >
              Search
            </button>
          
          </form>
         
          <div
            className="collapse navbar-collapse col-12 col-md-3"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav mr-auto">
              <li className="nav-item m-2 dropdown ml-md-2">
                <NavLink
                  className="nav-NavLink dropdown-toggle text-light font-weight-bolder"
                  to=""
                  id="navbarScrollingDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-expanded="false"
                >
                  {/* <i className="fas fa-user"> Login</i> */}
                  {!JSON.parse(localStorage.getItem("user")) ? (
                      <i className="fas fa-user"> Login</i>
                    ) : (
                        // <i className="fas fa-user">Logout</i>
                        <i>
                         { JSON.parse(localStorage.getItem("user")).userName}
                        </i>
                    )}
                </NavLink>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="navbarScrollingDropdown"
                >
                  {!JSON.parse(localStorage.getItem("user")) ? (
                  <li>
                    <NavLink
                      className="dropdown-item bg-light text-dark"
                      to="/Register"
                    >
                      Create An Account
                    </NavLink>
                  </li>)
                  :(
                    <li className="dropdown-item bg-light text-dark text-center h5 font-weight-bold"><Link to="Account/Index">{ JSON.parse(localStorage.getItem("user")).userName}</Link></li>
                  )}
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    {!JSON.parse(localStorage.getItem("user")) ? (
                      <NavLink
                        className="dropdown-item bg-light text-dark"
                        to="/Login"
                      >
                        <i className="fas fa-user mr-2"></i>Login
                      </NavLink>
                    ) : (
                      <button
                        className="dropdown-item bg-light text-dark"
                        onClick={AuthService.logout}
                      >
                        <i className="fas fa-user mr-2"></i>Logout
                      </button>
                    )}
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <NavLink
                      className="dropdown-item bg-light text-dark"
                      to="/Account/Orders"
                    >
                      <i className="fas fa-shopping-cart mr-2"></i>Social Orders
                    </NavLink>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    {AuthService.getCurrentUser() ? (
                      <NavLink
                        className="dropdown-item bg-light text-dark"
                        to="/Account/wishlist"
                      >
                        <i className="fas fa-heart mr-2"></i>Saved Items
                      </NavLink>
                    ) : (
                      <NavLink
                        className="dropdown-item bg-light text-dark"
                        to="/Login"
                      >
                        <i className="fas fa-heart mr-2"></i>Saved Items
                      </NavLink>
                    )}
                  </li>
                </ul>
              </li>
              <li className="nav-item m-2 dropdown">
                <NavLink
                  className="nav-NavLink dropdown-toggle text-light font-weight-bolder"
                  to="#"
                  id="navbarScrollingDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i className="fas fa-question-circle mr-2">help</i>
                </NavLink>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="navbarScrollingDropdown"
                >
                  <li>
                    <NavLink
                      className="dropdown-item bg-light text-dark"
                      to="/HelpCenter"
                    >
                      Help Center
                    </NavLink>
                  </li>
                  {/* <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <NavLink
                      className="dropdown-item bg-light text-dark"
                      to="#"
                    >
                      Place &amp; track Order
                    </NavLink>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <NavLink
                      className="dropdown-item bg-light text-dark"
                      to="#"
                    >
                      Payment and Account
                    </NavLink>
                  </li> */}
                </ul>
              </li>
              <li className="nav-item m-2">
                <NavLink
                  className="nav-NavLink text-white font-weight-bolder"
                  to="/cart"
                  title="Cart"
                  role="button"
                  aria-expanded="false"
                >
                  <span>
                    <i className="fas fa-shopping-cart fa-2x"></i>
                    <span className="badge rounded-pill badge-notification bg-danger align-top">
                      {this.props.productsCart.length}
                    </span>
                  </span>
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
        <Link
          to="/Knowledge/Guide"
          target="_blank"
          className="m-2 font-weight-bolder"
          style={{ color: "teal" }}
        >
          <BiStar size="22" /> Sell On Jumia
        </Link>
 
    
     


        {/* Search Result */}
        
      </React.Fragment>
    );
  }
}
export default NavBar;
