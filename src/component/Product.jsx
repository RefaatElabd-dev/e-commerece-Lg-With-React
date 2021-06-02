import React, { Component } from 'react';
import axios from 'axios'

import "../Styles/Product.css"
class Product extends Component {
    state = {product:{}  }
    findprod=(_id)=>{
        axios.get("http://localhost:21231/api/products/"+_id).then(res=>
         {
           this.setState({product:res.data})
           console.log("data",res.data,"prod",this.state.product)
         }).catch(err=>console.log(err))
      }
     
 componentDidMount(){
     this.findprod(this.props.match.params.id)
    console.log(this.state.product)
    //console.log(this.props.match)
}
    render() {
        return (
            <React.Fragment>
    <div className="container mt-2">
        <div className="row">
            <div className="col-sm col-lg-7 bg-light rounded">
                <div className="row">
                    {/*product section */}
                    <div className="col col-lg-5 p-0">
                        {/*image box */}
                        <div className="d-none d-sm-block col rounded p-0">
                            <img src="https://eg.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/40/278212/2.jpg?9826" id="basicImage" width="100%" />
                        </div>
                        <div className="m-0 row">
                            <div className="image p-2 col-sm col-md-6 col-lg-3">
                                <img src="https://eg.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/40/278212/1.jpg?9826" width="100%" height="50"/>
                            </div>
                            <div className="image p-2 col-sm col-md-6 col-lg-3">
                                <img src="https://eg.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/40/278212/2.jpg?9826" width="100%" height="50"/>
                            </div>
                            <div className="image p-2 col-sm col-md-6 col-lg-3">
                                <img src="https://eg.jumia.is/unsafe/fit-in/150x150/filters:fill(white)/product/40/278212/3.jpg?9826" width="100%" height="50"/>
                            </div>
                            <div className="image p-2 col-sm col-md-6 col-lg-3">
                                <img src="https://eg.jumia.is/unsafe/fit-in/150x150/filters:fill(white)/product/40/278212/4.jpg?9826" width="100%" height="50"/>
                            </div>
                        </div>
                    </div>
                    <div className="col col-lg-7">
                        {/*information box */}
                        <div className="row justify-content-between p-2">
                            <div className="d-flex justify-content-start badge badge-danger text-light">Official Store</div>
                            <div className="d-flex justify-content-end heart">
                                <i className="far fa-heart fa-1x text-right"></i>
                            </div>
                        </div>
                        <div className="font1">
                            <h6>SHARE THIS PRODUCT Official Store Kady Basic Crew Neck Comfy T-shirt</h6>
                        </div>
                        <div>
                            <span>Brand: </span> <a href="#">Kady</a> |<a href="#"> Similar products from Kady</a>
                        </div>
                        <div className="align-items-center mt-2 text-center">
                            <span className="star">
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                            </span>
                            <span>(<span>1</span> Rating)</span>
                        </div>
                        <hr className="my-2  w-75 d-none d-md-block"/>
                        <div className="row d-none d-md-block text-center">
                            <div className="p-0 text-center">
                                <h2 className="mb-0 badge badge-pill oranged text-white p-2">EGP <span>{this.state.product.price}</span></h2>
                            </div>
                           {parseInt(this.state.product.discount)>0&& <div className="mt-2 p-0">
                                <span className="sp  col-3 p-1">(Egp <span>{parseInt(parseInt(this.state.product.price)*(1+(parseInt(this.state.product.discount)*.01)))}</span>)</span>
                                <span className="alert text-danger col-3 p-0">-{this.state.product.discount}%</span>
                            </div>}
                        </div>
                        <div className="d-none d-md-block">
                            <span className="d-block size-sm font-weight-bold">SELECT VARIATION</span>
                            <ul className="donate-now">
                                <li className="col-1">
                                  <input type="radio" id="M" name="amount" />
                                  <label htmlFor="M">M</label>
                                </li>
                                <li className="col-1">
                                  <input type="radio" id="L" name="amount" />
                                  <label htmlFor="L">L</label>
                                </li>
                                <li className="col-1">
                                  <input type="radio" id="XL" name="amount" checked="checked" />
                                  <label htmlFor="XL">XL</label>
                                </li>
                                <li className="col-2">
                                  <input type="radio" id="XXL" name="amount" />
                                  <label htmlFor="XXL">XXL</label>
                                </li>
                                <li className="col-3">
                                    <input type="radio" id="XXXL" name="amount" />
                                    <label htmlFor="XXXL">XXXL</label>
                                </li>
                                <li className="col-3">
                                    <input type="radio" id="XXXXL" name="amount" />
                                    <label htmlFor="XXXXL">XXXXL</label>
                                </li>
                              </ul>
                              <button className="btn text-white oranged col shadow mt-3">
                                  <span>
                                    <i className="fas fa-cart-arrow-down"></i>
                                  </span>
                                  <span>
                                      Add To Cart
                                  </span>
                              </button>
                        </div>
                    </div>
                </div>
                <hr className="my-2  w-75 d-md-none"/>
                <div className="d-md-none text-center">
                    <div className="p-0">
                        <h2 className="mb-0 badge badge-pill oranged text-white p-2">EGP <span>69</span></h2>
                    </div>
                     {parseInt(this.state.product.discount)>0&& <div className="mt-2 p-0">
                                <span className="sp  col-3 p-1">(Egp <span>{parseInt(parseInt(this.state.product.price)*(1+(parseInt(this.state.product.discount)*.01)))}</span>)</span>
                                <span className="alert text-danger col-3 p-0">-{this.state.product.discount}%</span>
                            </div>}
                </div>
                <hr className="d-md-none"/>
                <div className="d-md-none">
                    <span className="d-block size-sm font-weight-bold">SELECT VARIATION</span>
                    <ul className="donate-now">
                        <li className="col-1">
                          <input type="radio" id="M" name="amount" />
                          <label htmlFor="M">M</label>
                        </li>
                        <li className="col-1">
                          <input type="radio" id="L" name="amount" />
                          <label htmlFor="L">L</label>
                        </li>
                        <li className="col-1">
                          <input type="radio" id="XL" name="amount" checked="checked" />
                          <label htmlFor="XL">XL</label>
                        </li>
                        <li className="col-2">
                          <input type="radio" id="XXL" name="amount" />
                          <label htmlFor="XXL">XXL</label>
                        </li>
                        <li className="col-3">
                            <input type="radio" id="XXXL" name="amount" />
                            <label htmlFor="XXXL">XXXL</label>
                        </li>
                        <li className="col-3">
                            <input type="radio" id="XXXXL" name="amount" />
                            <label htmlFor="XXXXL">XXXXL</label>
                        </li>
                      </ul>
                      <button className="btn text-white oranged col shadow-lg mt-3">
                          <span>
                            <i className="fas fa-cart-arrow-down "></i>
                          </span>
                          <span>
                              Add To Cart
                          </span>
                      </button>
                </div>
                <div className="card border-0 mt-2" id="details">
                    <header className="hs">
                        <h2 className="">Product details</h2>
                    </header>
                    <div className="markup">{this.state.product.description}</div>
                </div>


                <section className="card border-0 sec">

                    <div id="specifications" className=""></div>
                    <div></div>
                    <header className="card hs">
                        <h2 className="">Specifications</h2>
                    </header>


                    <div className="row sec1 mt-2 ">
                        <article className="col-6  art">
                            <div className="card art1 ">
                                <h2 className="">Key Features</h2>
                                <div className="">
                                    <ul>
                                        <li><b>Our Model Is wearing Size L</b></li>
                                        <li>Cotton Blended Material</li>
                                        <li>Regular fit</li>
                                        <li>Short Sleeves</li>
                                        <li>Heather pattern</li>
                                        <li>Crew Neck</li>
                                        <li>Slip On</li>
                                    </ul>
                                </div>
                            </div>
                        </article>
                        <article className="col-6 art ">
                            <div className="card  art1">
                                <h2 className="">Specifications</h2>
                                <ul className="">
                                    <li className=""><b className="">SKU</b>: KA433MW0NZAV8NAFAMZ</li>
                                    <li className=""><b className="">Color</b>: {this.state.product.color}</li>
                                    <li className=""><b className="">Main Material</b>: Cotton</li>
                                    <li className=""><b className="">Model</b>: {this.state.product.model}</li>
                                    <li className=""><b className="">Production Country</b>: Egypt</li>
                                </ul>
                            </div>
                        </article>
                    </div>
                </section>
            </div>
            {/*sider for seller & Delivery information */}
            <div className="col-sm col-md-4 mx-1">
                <div className="col my-2 bg-light rounded">
                    <h6 className="text-uppercase mt-1">Delivery&Returns</h6>
                    <hr/>
                    <div className="col my-2 bg-light rounded">
                      <h5>Choose your location</h5>
                      {/*Government */}
                      <div>
                        <select className="p-2 rounded " name="government" id="government">
                          <option>Al Daqahlia</option>
                          <option>Giza</option>
                          <option>Cairo</option>
                          <option>Al Gharbia</option>
                          <option>Alex</option>
                          <option>Ismailia</option>
                          <option>Qena</option>
                          <option>Souhag</option>
                          <option>Aswan</option>
                        </select>
                      </div>
                      {/*City */}
                      <div className="mt-2">
                        <select className="text-center p-2 rounded" name="city" id="city">
                          <option>Mansoura</option>
                          <option>Aga</option>
                          <option>Meet Ghamr</option>
                          <option>Bani Ebed</option>
                          <option>Dekernes</option>
                          <option>El-Gamailia</option>
                          <option>Nabroo</option>
                          <option>Sherben</option>
                          <option>Talkha</option>
                        </select>
                      </div>
                    </div>
                    <div>
                      {/*Door Delivery */}
                      <div className="text-dark container row m-0">
                        <div className="p-0 col-md-3 col-12">
                            <i className="fa fa-truck fa-2x p-1 mt-2 ml-md-3 m-1 rounded" style={{"border":"1px solid gray"}}></i>
                        </div>
                        <div className="col-md-9 col-12 ">
                            <div className="row">
                                <h6 className="col-md-8 col-6 mt-2">Door Delivery</h6>
                                <a className="mt-2 col-6 col-md-1"href="#" data-toggle="modal" data-target="#delivery">Details</a>
                            </div>
                        </div>
                        <p className="col-md-9 offset-md-3 col-12 " style={{"font-size": "small"}}>
                            Ready for pickup between<span className="font-weight-bold"> 05 May & 06 May </span>when you order within next <span className="font-weight-bold"> 22hrs 59mins</span> 
                        </p>
                      </div>
                      {/*Pickup Station */}
                      <div className="text-dark container row m-0">
                        <div className="p-0 col-md-3 col-12">
                            <i className="fa fa-truck fa-2x p-1 mt-2 ml-md-3 m-1 rounded" style={{"border": "1px solid gray"}}></i>
                        </div>
                        <div className="col-md-9 col-12 ">
                            <div className="row">
                                <h6 className="col-md-8 col-6 mt-2">Pickup Station</h6>
                                <a className="mt-2 col-6 col-md-1" href="#" data-toggle="modal" data-target="#delivery">Details</a>
                            </div>
                        </div>
                        <p className="col-md-9 offset-md-3 col-12 " style={{"font-size": "small"}}>
                            Ready for pickup between<span className="font-weight-bold"> 05 May & 06 May </span>when you order within next <span className="font-weight-bold"> 22hrs 59mins</span> 
                        </p>
                      </div>
                      <hr className="m-1"/>
                      {/*Return Policy */}
                      <div className="text-dark container row col-12 m-0">
                        <div className="p-2 col-md-3 col-6">
                          <i className="fa fa-undo fa-2x p-1 mt-2 ml-md-3 m-1 rounded" style={{"border": "1px solid gray"}}></i>
                        </div>
                        <div className="col-md-6">
                          <h6 className="mt-1 mt-md-3">Return Policy</h6>
                        </div>
                        <p className="col-12 ml-md-3" style={{"font-size": "small"}}>
                            14 days free return (except for underwear and personal items) up to 30 days for defective products with necessity for requesting a return within 24 hours from the delivery date.
                            <a href="#" className="d-inline-block">See more</a>
                          </p>
                      </div>
                    </div>
                </div>
                {/*Seller information & Performance*/}
                <div className="col bg-light rounded">
                  {/*information */}
                  <a href="#" className="seller">
                    <div className="row">
                      <h5 className="text-uppercase mt-2 col-9">Seller information</h5>
                      <i className="fa fa-chevron-right mt-2 offset-2"></i>
                    </div>
                    <hr/>
                  </a>
                  <div className="">
                    <h6 className="col-12">Fabyo marketplace</h6>
                    <div className="row container">
                      <div className="col-md-8 col-12">
                        <p className="mb-0"><span>80%</span>Seller Score</p>
                        <p><span>526</span>Followers</p>
                      </div>
                      <div className="col-md-4 col-12 mb-2">
                        <a href="#" className="btn text-white" style={{"background-color": "orange"}}>FOLLOW</a>
                      </div>
                    </div>
                  </div>
                    <hr/>
                    {/*Performance*/}
                    <div className="row">
                      <h5 className="text-uppercase col-9">Seller Performance</h5>
                      <a className="seller mt-3 offset-2" href="#" data-toggle="modal" data-target="#performance">
                        <i className="fa fa-info-circle "></i>
                      </a>
                    </div>
                    <div className="row">
                        <p className="mb-0 col-12">
                            <i className="fa fa-star text-success mr-1"></i>Order Fulfillment Rate:<span className="ml-1 font-weight-bold">Good</span>
                        </p>
                        <p className="mb-1 col-12">
                            <i className="fa fa-star text-success mr-1"></i>Quality Score:<span className="ml-1 font-weight-bold">Good</span>
                        </p>
                    </div>
                </div>
                {/*sell your product */}
                <div className="col bg-light mt-3 rounded" style={{"line-height":"1"}}>
                    <a href="#" className="seller">
                        <div className="row">
                          <h5 className="mt-2 col-9">Have one to sell?</h5>
                          <i className="fa fa-chevron-right mt-3 offset-2"></i>
                        </div>
                        <p>Click here to list your product</p>
                    </a>
                </div>
                {/*Links inside page */}
                <div className="col bg-light mt-3 rounded" style={{"line-height":"0%"}}>
                    <a href="#details" className="seller">
                        <div className="row links">
                            <i className="fa fa-file-alt fa-2x mt-2 ml-2"></i>
                            <h5 className="mt-2 col-9">Product details</h5>
                        </div>
                    </a>
                    <a href="#specifications" className="seller">
                        <div className="row links">
                            <i className="fa fa-list fa-2x mt-2 ml-2"></i>
                            <h5 className="mt-2 col-9">Specifications</h5>
                        </div>
                    </a>
                    <a href="#feedback" className="seller">
                        <div className="row links">
                            <i className="fa fa-info-circle fa-2x mt- ml-2"></i>
                            <h5 className="mt-2 col-9">Customer Feedback</h5>
                        </div>
                    </a>
                </div>
                {/*add to cart */}
                <div className="col bg-light mt-4 rounded" >
                    <div className="row col-12 mb-1 mt-2">
                        <img className="col-12 col-md-6" src="https://eg.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/40/278212/2.jpg?9826" id="basicImage" width="50%"/>
                        <div className="col-12 col-md-6 mt-3 font-weight-bolder">
                            <p>Fabyo Full Sleeve</p>
                            <p>EGP<span className="ml-1">{this.state.product.price}</span></p>
                            <p className="text-muted">
                                EGP <span style={{"text-decoration": "line-through","margin-right":"10px"}}>92</span><span className="bg-warning p-1">29%</span>
                            </p>
                        </div>
                    </div>
                    <div className="text-center text-white cursor col-12 row">
                        <a href="#" style={{"width":"100%"}} className="btn btn-warning text-uppercase text-white font-weight-bold ml-3 mb-2">Add to cart</a>
                    </div>
                </div>
            </div>
        </div>
    </div>


{/*DELIVERY Details Modal */}
<div className="modal" style={{"margin":"100px auto"}} tabindex="-1" role="dialog" id="delivery">
  <div className="modal-dialog" role="document">
    <div className="modal-content">
      <div className="modal-header text-dark">
        <h5 className="modal-title">Door Delivery</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
        <h6 className="text-muted">DOOR DELIVERY</h6>
        <p>
            Delivery time starts from the day you place your order to the day one of our associates makes a first attempt to deliver to you. Delivery will be attempted 3 times over 5 days (7.00 am to 5.30 pm) after which the item will be cancelled.
        </p>
        </div>
    </div>
  </div>
</div>
    {/* performance Modal */}
    <div className="modal" style={{"margin":"100px auto"}} tabindex="-1" role="dialog" id="performance">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header text-dark">
              <h5 className="modal-title">Seller Performance</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
                <p>
                To help you decide on the best offer we have several key metrics to help you with your decision
                </p>
              </div>
          </div>
        </div>
      </div>
     
            </React.Fragment>
         );
    }
}
 
export default Product;
