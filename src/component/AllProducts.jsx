import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import AuthService from "./Services/auth.service";
import axios from "axios";
import  Card  from './Card';


export class AllProducts extends Component {
 
  render() {
    const { products, loading } = this.props;
   
    if (loading) {
      return <h2>Loading...</h2>;
    }

    return (
      <React.Fragment>
       
        <ToastContainer />
           <div className="alert alert-primary">
          <div className="container row  ml-3">
            {
              products.map(p=><Card cardprod={p} key={p.productid}/>)
            }
            
          </div>
          </div>
        
      </React.Fragment>
    );
  }
}

export default AllProducts;

