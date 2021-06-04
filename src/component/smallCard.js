import React, { Component } from "react";

import { NavLink } from 'react-router-dom';

class SmallCard extends Component {
    

    render() {
        console.log("card product data",this.props.cardprod)
        return (

            <React.Fragment>
             <div className="col-md-2">
                 <NavLink to={"/product/"+this.props.cardprod.productId}>
                <div className="item-box-blog">
                    <div className="item-box-blog-image">
                        {/*Date*/}
                        <div className="item-box-blog-date bg-blue-ui white"> <span className="mon"></span> </div>
                        {/* IMAGES*/}
                        <figure> <img alt src={this.props.cardprod.mimg}/> </figure>
                    </div>
                    <div className="item-box-blog-body">
                        {/*Heading*/}
                        <div className="item-box-blog-heading">
                            <p> {this.props.cardprod.productName}</p>
                        </div>
                        {/*Text*/}
                        <div className="item-box-blog-text">
                            <p><span>EGP</span> <span>{this.props.cardprod.price}</span></p>
                            <p><del>{parseInt(this.props.cardprod.discount) > 0 && <div className="mt-2 p-0">
                                    <span className="sp  ">(Egp <span>{parseInt(parseInt(this.props.cardprod.price) * (1 + (parseInt(this.props.cardprod.discount) * .01)))}</span>)</span>
                                    <span className="alert text-danger col-1 p-0">-{this.props.cardprod.discount}%</span>
                                </div>}</del></p>
                        </div>
                    </div>
                </div>
                </NavLink>
             </div>
            </React.Fragment>)

    }
}
export default SmallCard;