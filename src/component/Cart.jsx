import axios from 'axios';
import React, { Component } from 'react';
import '../Styles/Cart.css'
class Cart extends Component {
    state = { 
        // productsIncart:this.props.productsCart
     }
    //   deleteFromCart=(productId)=> {
    //     axios.delete(
    //        'https://localhost:44340/api/CartsItemAPi/deleteProductsFromCart/1',{productId}
    //      );
    //      this.setState({productsIncart});
    //      console.log(this.state.productsIncart);
    //    };
    render() { 
        return ( 
            <React.Fragment>
                    {this.props.productsCart.length===0 
                    ?<h4 className="alert alert-danger">No Products</h4>
                    :
            <React.Fragment>
    <div className="container col-12 offset-lg-1 col-lg-10">
        <h3>Cart ({this.props.productsCart.length} items)</h3>
        <p className="font-weight-bolder text-justify">Your order is eligible for Free Shipping with Jumia Express or Jumia Primo. (Excludes large and bulky items) <span className="QM">?</span></p>
        
        <div>
            {/* Header ////////////////// */}
            <div className="row items pl-0 text-left">
                <div className="col-12 col-md-7">ITEM</div>
                <div className="col-md-1 d-none d-md-inline-block pl-md-0">QUANTITY</div>
                <div className="col-md-2 d-none d-md-inline-block">UNIT PRICE</div>
                <div className="col-md-2 d-none d-md-inline-block">SUBTOTAL</div>
            </div>
            {/* Header ////////////////// */}

            {/* cards////////////////////////// */}
            <div className="row  rounded shadow-sm mb-2 cont bg-white">
            {this.props.productsCart.map(product=>(
                <React.Fragment>
                <div>
                <div className="col-md-1 p-0 pr-1 text-center text-md-left d-none d-md-inline-block" style={{"border":"none"}}>
                    <div>
                        <a href="#">
                            <img src="https://eg.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/25/530212/1.jpg?4115" alt="item" className="mr-2 mt-3 rounded-circle" width="80" height="80"/>
                        </a>
                    </div>
                </div>
                    <div className="col-md-6 d-none d-md-inline-block" id="media">
                        <div className="" style={{overflow:"auto"}}>
                            <p className="mb-0"><a href="#" className="link "> {product.productName} </a></p>
                            <p className="mb-0" style={{ overflow: "hidden",textOverflow: "ellipsis" }}> {product.description}</p>
                            <div>
                            <a href="#" className="card-link text-danger"><i className="fa fa-heart mr-2"></i>MOVE TO SAVED ITEMS</a>
                            <button onClick={()=>{this.props.onDelete(product.productId)}}  className="card-link text-danger"><i className="fa fa-trash mr-2"></i>REMOVE</button>
                            {/* <button onClick={()=>{this.deleteFromCart(product.productId)}}  className="card-link text-danger"><i className="fa fa-trash mr-2"></i>REMOVE</button> */}
                            </div>
                        </div>
                    </div>
                    <div className="col-md-1 d-none d-md-inline-block pt-5">
                        <select>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </select>
    
                    </div>
                    <div className="col-md-2 text-center p-3 d-none d-md-inline-block">
                        <span className="sp1 m-1 ">
                            <span>Egp</span>
                            <span>{product.price}</span>
                        </span>
                        <span className="sp2 m-1">
                            <span>Egp</span>
                            <span>{parseInt(parseInt(product.price)*(1+(parseInt(product.discount)*.01)))}</span>
                        </span>
                        <span className="sp3">
                            <span>Saving :</span>
                            <span>{product.discount}%</span>
                        </span>
                    </div>
                    <div className="col-md-2 text-center d-none d-md-inline-block">
                    <span className="sp1 m-4" style={{"color": "orange"}}>
                        <span>Egp</span>
                        <span>{product.price*1}</span>
                    </span>
                </div>
                
                </div>
                  </React.Fragment>
                ))}
            </div>
            {/* total//////////// */}

            <div className="row col-12 col-sm-8 offset-sm-4 col-lg-6 offset-lg-6">
                <div>
                    <div className="row mt-3">
                        <p className="col-6 text-center font-weight-bolder" > Total:</p>
                        <p className="col-6 text-left font-weight-bolder oranged" > EGP <span>1,193</span></p>
                    </div>
                    <div>
                        <p className="p-2 border border-success m-2 mr-0 rounded">
                            Your order is eligible for Free Shipping with Jumia Express or Jumia Primo. (Excludes large and bulky items)<span className="QM">?</span>
                        </p>
                    </div>
                </div>
            </div>

            {/* total//////////// */}
        </div>
    </div>

    <div className="row bg-white shadow-sm mb-3">
        <div className="col-12 col-md-6 offset-md-6 p-2">
            <input type="button" className="col-md-5 col-12 btn-sm btn-light bg-white shadow-lg text-danger p-1" value="COUNTINUE SHOPING"/>
            <input type="button" className=" col-md-5 col-12 btn-sm btn-light bg-danger shadow-lg text-white p-1" value="Countinue to check out"/>
        </div>
    </div>
            </React.Fragment>
        }
        </React.Fragment>
            );
    }
}
 
export default Cart;