import React, { Component } from "react";

import { NavLink } from "react-router-dom";

class SmallCard extends Component {
  render() {
    let nprice;
    this.props.cardprod.discount == 0 || this.props.cardprod.discount == null
      ? (nprice = this.props.cardprod.price)
      : (nprice =
          parseInt(this.props.cardprod.price*(1-this.props.cardprod.discount)));

    // console.log("card product data",this.props.cardprod)
    return (
      <React.Fragment>
        <NavLink class="card col-md-2 m-2" 
    
          style={{ color: "black", textDecoration: "none",height:"250px" }}
          to={"/product/" + this.props.cardprod.id}
        >
          {/* IMAGES*/}
          <img
          class="card-img-top"
        height="170px"
            alt={this.props.cardprod.productName}
            src={`https://localhost:44340/images/${this.props.cardprod.image}`}
          />

          <div className="card-body" style={{ backgroundColor: "beige" }}>
            {/*Heading*/}
            <h6
              className="card-title"
              style={{ overflow: "hidden", textOverflow: "ellipsis" }}
            >
            
              {this.props.cardprod.productName}
            </h6>
            {/*Text For price and discount*/}
            <div className="card-text">
              <span className="sp1 mb-4 ">
                <span>Egp</span>
                <span>{nprice}</span>
              </span>
           
              
            </div>
          </div>
        </NavLink>
      </React.Fragment>
    );
  }
}
export default SmallCard;
