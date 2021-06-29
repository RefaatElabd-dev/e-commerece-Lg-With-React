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
        <NavLink className="card col-md-2 m-2" 
    
          style={{ color: "black", textDecoration: "none",height:"260px" }}
          to={"/product/" + this.props.cardprod.id}
        >
         
          {/* IMAGES*/}
          <img
          className="card-img-top"
        height="150px"
            alt={this.props.cardprod.productName}
            src={`https://localhost:44340/images/${this.props.cardprod.image}`}
          />

<div className="card-body" style={{height:"130px",direction:"ltr"}}>
                 
                 <div className="card-text text-left" style={{overflow:"hidden",textOverflow:"ellipsis",height:"150px"}}>
                   {this.props.cardprod.description}
                  
                 <p className="card-text text-left">
              
              {this.props.cardprod.discount > 0 ? (
                <> 
                   <span className="sp1 m-1 " >
                     <b>
                <span>EGP</span>
                &nbsp;  <span>{nprice}</span>
                </b>
              </span>
                <span className="sp2 m-1">
                  <span>Egp</span>
                  &nbsp;  <span>{parseInt(this.props.cardprod.price)}</span> 
                </span>
               
                </>
              ):
              <span className="sp1 mt-1">
                <b>
              <span>EGP</span>
              &nbsp; <span>{parseInt(nprice)}</span>
              </b>
            </span>}
            </p>
        
                 </div> 
                 </div>
         
         
        </NavLink>
      </React.Fragment>
    );
  }
}
export default SmallCard;
