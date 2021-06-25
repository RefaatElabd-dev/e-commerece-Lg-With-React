import React, { Component } from "react";
import axios from "axios";
import authHeader from "./Services/auth-header";
import "../Styles/Product.css";
class Product extends Component {
  state = {
    product: {},
    prodimgs: "",
    mainimg: "",
    user: JSON.parse(localStorage.getItem("user")),
  };

  SaveItems = () => {
    //console.log(this.props.location.HandlerSaving)
    //  console.log(this.props)
    if (this.state.user) {
      let _id = this.state.user.id;
      let _PId = this.state.product.productId;
      axios
        .post(
          "https://localhost:44340/api/UserBagApi/SetProductToSavedItems",
          { UserId: _id, ProductId: _PId },
          { headers: authHeader() }
        )
        .then(console.log(_id, _PId, authHeader()));
    }
  };
  findprod = (_id) => {
    axios
      .get("https://localhost:44340/api/ProductsAPi/" + _id)
      .then((res) => {
        //  this.setState({product:res.data,prodimgs:res.data.productImages[0].image})
        this.setState({ product: res.data });
        // console.log("data",res.data,"prod",res.data.productImages)
      })
      .catch((err) => console.log(err));
  };
  rate = (t) => {
    if (t === 1) {
      return (
        <div>
          {" "}
          <i className="fa fa-star" />
        </div>
      );
    } else if (t > 1 && t <= 2) {
      return (
        <div>
          {" "}
          <i className="fa fa-star" />
          <i className="fa fa-star" />
        </div>
      );
    } else if (t > 2 && t <= 3) {
      return (
        <div>
          {" "}
          <i className="fa fa-star" />
          <i className="fa fa-star" />
          <i className="fa fa-star" />
        </div>
      );
    } else if (t > 3 && t <= 4) {
      return (
        <div>
          {" "}
          <i className="fa fa-star" />
          <i className="fa fa-star" />
          <i className="fa fa-star" />
          <i className="fa fa-star" />
        </div>
      );
    } else if (t > 4 && t <= 5) {
      return (
        <div>
          {" "}
          <i className="fa fa-star" />
          <i className="fa fa-star" />
          <i className="fa fa-star" />
          <i className="fa fa-star" />
          <i className="fa fa-star" />
        </div>
      );
    } else {
      return null;
    }
  };
  componentDidMount() {
    this.findprod(this.props.match.params.id);
    //console.log(this.props)
    //console.log(this.props.match)
  }
  render() {
    //  console.log(this.props);
    // console.log(this.props.match.params)
    let nprice;
    this.state.product.discount == 0 || this.state.product.discount == null
      ? (nprice = this.state.product.price)
      : (nprice = this.state.product.price * (1 - this.state.product.discount));
    this.state.product.discount == 0 || this.state.product.discount == null
      ? (nprice = this.state.product.price)
      : (nprice =
          parseInt(this.state.product.price) +
          parseInt(this.state.product.discount));

    return (
      <React.Fragment>
        <div className="container mt-2">
          <div className="row m-0 p-0">
            <div className="col-12 rounded">
              <div className="row m-0 p-0  mt-3">
                {/*product section */}
                {/* left */}
                <div className="col-12 col-md-5 p-0">
                  {/*image box */}
                  {/* Main Image */}
                  <div>
                    <img
                      src={`https://localhost:44340/${this.state.product.image}`}
                      id="basicImage"
                      width="100%"
                      height="280px"
                      className="rounded"
                      alt={this.state.product.productName}
                    />
                  </div>
                  {/* 4 Images */}
                </div>
                {/* Right */}
                <div
                  className="col-12 col-md-7"
                  style={{ fontFamily: "cursive " }}
                >
                  {/*information box */}
                  <div className="row justify-content-between p-2">
                    <div className="d-flex justify-content-start badge badge-danger text-light">
                      Official Store
                    </div>
                    <div className="d-flex justify-content-end heart">
                      <i
                        className="far fa-heart fa-1x text-right"
                        onClick={this.SaveItems}
                      ></i>
                    </div>
                  </div>
                  <div>
                    <h3>{this.state.product.productName}</h3>
                  </div>
                  <div className="">
                    <h5>{this.state.product.description}</h5>
                  </div>
                  <div className="align-items-center mt-2 text-center">
                    <span>{this.rate(this.state.product.rating)}</span>
                  </div>
                  <hr className="m-0 mb-2 mt-2 d-md-block" />
                  <div className="p-0 text-center">
                    <h2 className="mb-0 badge badge-pill oranged text-white p-2">
                      EGP <span>{this.state.product.price}</span>
                    </h2>

                    {this.state.product.discount > 0 && (
                      <span className="sp2 m-1" style={{ fontSize: "17px" }}>
                        <span>Egp</span>
                        <span>{parseInt(nprice)}</span>
                      </span>
                    )}
                    {this.state.product.discount > 0 && (
                      <span className="sp3" style={{ fontSize: "17px" }}>
                        <span>Saving :</span>
                        <span>
                          {parseInt(nprice) -
                            parseInt(this.state.product.price)}{" "}
                        </span>
                      </span>
                    )}
                  </div>
                  <div className="text-center text-white cursor col-12 row m-0 p-2">
                    <button
                      style={{ backgroundColor: "teal" }}
                      onClick={() => this.props.onAdd(this.state.product.id)}
                      className="btn text-uppercase text-white font-weight-bold mb-2 offset-md-2 col-12 col-md-8"
                    >
                      Add to cart
                    </button>
                  </div>
                  {/* </div> */}
                </div>
                <hr className="my-2 m-0" />
                {/* Product details */}
                <div
                  className="card  mt-2 mb-2 p-2 font-size-small item-box-blog text-left"
                  id="details"
                >
                  <header className="h">
                    <h2 className="">Product details</h2>
                  </header>
                  <ul style={{ fontFamily: "cursive " }}>
                    <li>
                      <div className="">
                        <span style={{ fontWeight: "700" }}>Name : </span>
                        {this.state.product.productName}
                      </div>
                    </li>
                    <li>
                      <div className="">
                        <span style={{ fontWeight: "700" }}>
                          Description :{" "}
                        </span>
                        {this.state.product.description}
                      </div>
                    </li>
                    <li>
                      <div className="">
                        <span style={{ fontWeight: "700" }}>Model : </span>
                        {this.state.product.model}
                      </div>
                    </li>
                    <li>
                      <div className="">
                        <span style={{ fontWeight: "700" }}>Color : </span>
                        <span style={{ color: this.state.product.color }}>
                          {this.state.product.color}
                        </span>
                      </div>
                    </li>
                    <li>
                      <div className="">
                        <span style={{ fontWeight: "700" }}>Material : </span>
                        {this.state.product.material}
                      </div>
                    </li>
                    <li>
                      <div className="">
                        <span style={{ fontWeight: "700" }}>manufacture : </span>
                        {this.state.product.manufacture}
                      </div>
                    </li>
                    <li>
                      <div className="">
                        <span style={{ fontWeight: "700" }}>Size : </span>
                        {this.state.product.size}
                      </div>
                    </li>
                    <li>
                      <div className="">
                        <span style={{ fontWeight: "700" }}>Price : </span>
                        EGP {this.state.product.price}
                      </div>
                    </li>
                    <li>
                      {" "}
                      <div className="">
                        <span style={{ fontWeight: "700" }}>Shipped From </span>
                        <span>
                          {" "}
                          {this.state.product.ship == 1 ? "Egypt" : "Abroad"}
                        </span>
                      </div>
                    </li>
                  </ul>

                  {/* <div className="">
                    <span style={{ fontWeight: "800" }}>Brand : </span>
                    {this.state.product.brandId}
                  </div> */}
                </div>
                {/*  specifications */}
                {/*                 
                <div
                  id="specifications"
                  className="col-12 border-0 mt-2 p-2 font-size-small mb-3"
                >
                  <div className="h">
                    <h2>Specifications</h2>
                  </div>
                  <div className="row p-0 m-0">
                    <div className="col-md-6 col-12">
                      <div className="card  item-box-blog text-left">
                        <h6>Key Features</h6>
                        <div className="">
                          <ul>
                            <li>
                              <b>Our Model Is wearing Size L</b>
                            </li>
                            <li>Cotton Blended Material</li>
                            <li>Regular fit</li>
                            <li>Short Sleeves</li>
                            <li>Heather pattern</li>
                            <li>Crew Neck</li>
                            <li>Slip On</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 col-12">
                      <div className="card  item-box-blog text-left">
                        <h6>Specifications</h6>
                        <ul className="">
                          <li className="">
                            <b className="">SKU</b>: KA433MW0NZAV8NAFAMZ
                          </li>
                          <li className="">
                            <b className="">Color</b>:{" "}
                            <span style={{ color: this.state.product.color }}>
                              {this.state.product.color}
                            </span>
                          </li>
                          <li className="">
                            <b className="">Main Material</b>: Cotton
                          </li>
                          <li className="">
                            <b className="">Model</b>:{" "}
                            {this.state.product.model}
                          </li>
                          <li className="">
                            <b className="">Production Country</b>: Egypt
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              */}
              </div>
            </div>
          </div>
        </div>

        {/*DELIVERY Details Modal */}
      </React.Fragment>
    );
  }
}

export default Product;
