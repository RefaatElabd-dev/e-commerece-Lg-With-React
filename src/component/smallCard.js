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
        <a className="card col-md-2 m-1 mb-3 h-100 item-box-blog" 
    
          style={{ color: "black", textDecoration: "none"}}
          href={"/product/" + this.props.cardprod.id}
        >
         
          {/* IMAGES*/}
          <img
          className="card-img-top mt-1"
        height="150px"
            alt={this.props.cardprod.productName}
            src={`https://localhost:44340/images/${this.props.cardprod.image}`}
          />


<h6 className="card-title text-center mt-1" style={{fontSize:"15px",fontWeight:"700",whiteSpace: "nowrap",overflow:"hidden",textOverflow:"ellipsis",color:"black"}}> {this.props.cardprod.productName}</h6>
<div className="" style={{height:"80px"}}>
{/* <p className="text-left" style={{fontSize:"15px",whiteSpace: "nowrap",overflow:"hidden",textOverflow:"ellipsis",color:"black"}}> 
{this.props.cardprod.description}
</p> */}

                 {/* <div className="card-text text-left" style={{overflow:"hidden",textOverflow:"ellipsis",height:"150px"}}> */}
                 <p className="card-text text-center">
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
        
{/* </div>  */}
                 </div>
         
         
        </a>
      </React.Fragment>
    );
  }
}
export default SmallCard;
