import React, { Component } from "react";

import { NavLink } from 'react-router-dom';

class Card extends Component {
    state = {
        prod: this.props.cardprod

    };
    rate=(t)=>{
        if(t==1){
            return(<div> <i className="fa fa-star" /></div>)
        }else if(t>1 && t<=2){return(<div> <i className="fa fa-star" /><i className="fa fa-star" /></div>)}
        else if(t>2 && t<=3){return(<div> <i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /></div>)}
        else if(t>3 && t<=4){return(<div> <i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /></div>)}
        else if(t>4 && t<=5){return(<div> <i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /></div>)}

        else{return null}
    }
    render() {
        console.log("card product data",this.state.cardprod)
        return (

            <React.Fragment>
               
                <div className="col-md-3" >
                    <div className="card m-3 ">
                        <NavLink to={"/Product/"+this.state.prod.productId}>
                        <div className="product-1 align-items-center p-2 text-center">
                            <img
                                src={this.state.prod.mimg}
                                alt="chips"
                                className="rounded"
                            />
                            <h5>{this.state.prod.productName}s</h5>
                            {/* card info */}
                            <div className="mt-3 info">
                                <span className="text1 d-block">
                                  {this.state.prod.description}
                            </span>
                                <span className="text1">Lorem, ipsum dolor.</span>
                            </div>
                            <div className="cost mt-3 text-dark">
                                <span className="col-3"> {this.state.prod.price}Egp<br />
                               {parseInt(this.state.prod.discount) > 0 && <div className="mt-2 p-0">
                                    <span className="sp  ">(Egp <span>{parseInt(parseInt(this.state.prod.price) * (1 + (parseInt(this.state.prod.discount) * .01)))}</span>)</span>
                                    <span className="alert text-danger col-1 p-0">-{this.state.prod.discount}%</span>
                                </div>} </span>
                              <span> {this.rate(this.state.prod.rating)}</span> 
                           

                            </div>
                        </div>
                        {/* button for cards*/}
                        <div className="bbtn col-6 offset-3 p-2 bg-warning text-center text-white my-3 cursor rounded">
                            <span className="text-uppercase">Add to cart</span>
                        </div>
                        </NavLink>
                    </div>
                </div>
              
            </React.Fragment>)

    }
}
export default Card;