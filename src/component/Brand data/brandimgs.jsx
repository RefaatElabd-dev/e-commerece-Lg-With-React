import React, { Component } from "react";
import axios from "axios";
import { Link, Route, Router } from "react-router-dom";
class Brand extends Component {
  
  
  render() {
    //console.log(this.props.sendBrands)
    return (
      <React.Fragment>
        <span className="text-left">
          <Link
            to={{
              pathname: `allBrands`,

              HandlerSaving: this.props.Brands,
            }}
            className="btn btn-success  "style={{ marginLeft: "1200px" }}
          >
            SEE ALL
          </Link>
        </span>
        <div className="text-center">
        <h2 className="mt-5" >
          Shop By Brand
        </h2>

        {this.props.sendBrands.map((b) => 
          <div
            className="container col-2  mt-5  w-300 "
            style={{
              display: "inline-block",
              backgroundColor: "white",
              marginLeft: "100px",
            }}
          >
            <div className="  " style={{ display: "inline-block" }}>
              <div className="card w-100">
                <div className="card-img-top-wrapper">
                  <div className="card-overlay" />
                  <Link >
                  <img
                    className="card-img-top"
                    src={b.image}
                    alt="Card image cap"
                    width="200px"
                    height="150px"
                  />
                  </Link>
                 
                </div>
                <div className="card-body">
                  <p className="card-text">{b.brandName}</p>
                </div>
              </div>
            </div>
          </div>
        )}
        </div>
      </React.Fragment>
    );
  }
}

export default Brand;
