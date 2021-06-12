import React, { Component } from "react";
import axios from "axios";
import { Link, Route, Router } from "react-router-dom";
class Brand extends Component {
  
  
  render() {
    //console.log(this.props.sendBrands)
    return (
      <React.Fragment>
        
        <div className="text-center">
        <h2 className="mt-5" >
          Shop By Brand
        </h2>

        {this.props.sendBrands.map((b,i) => 
          <div key={i}
            className="container col-2  mt-5  w-300 "
            style={{
              display: "inline-block",
              backgroundColor: "white",
              marginLeft: "100px",
            }}
          >
            <div className="  " style={{ display: "inline-block" }}>
            <Link to={"/brand/"+b.brandId}>
              <div className="card w-100">
                <div className="card-img-top-wrapper">
                  <div className="card-overlay" />
                 
                  <img
                    className="card-img-top"
                    src={b.image}
                    alt="Card image cap"
                    width="200px"
                    height="150px"
                  />
                 
                 
                </div>
                <div className="card-body">
                  <p className="card-text">{b.brandName}</p>
                </div>
              </div>
              </Link>
            </div>
          </div>
        )}
        </div>
      </React.Fragment>
    );
  }
}

export default Brand;
