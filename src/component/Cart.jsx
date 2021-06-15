import React, { Component } from "react";
import "../Styles/Cart.css";
import { Link } from "react-router-dom";
class Cart extends Component {
  state = {};
  render() {
    // const a=[...this.props.productsCart.map(p=>p.prodCarts.map(c=>c.quantity))];
    // const index=a.indexOf(1);
    // const quat=a[index].quantity;
    // console.log([...this.props.productsCart.map(p=>p.prodCarts.map(c=>c.quantity))])
    return (
      <React.Fragment>
        {this.props.productsCart.length === 0 ? (
          <React.Fragment>
            <div className="container text-center m-4">
            <h1 className="alert alert-danger">Cart is empty</h1>
              <Link
                className="btn btn-warning"
                style={{ textDecoration: "none" }}
                to="/"
              >
                Go Shopping
              </Link>
            </div>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <div className="container col-12 col-lg-10 mt-2 table-responsive">
              <h3>Cart ({this.props.productsCart.length} items)</h3>
              <p className="font-weight-bolder text-justify">
                Your order is eligible for Free Shipping with Jumia Express or
                Jumia Primo. (Excludes large and bulky items)
              </p>

              {/* Table  */}
              <table className="table table-hovered table-bordered m-0">
                <thead
                  className="text-center text-white"
                  style={{
                    fontSize: "16px",
                    fontWeight: "600",
                    backgroundColor: "teal",
                  }}
                >
                  <tr>
                    <th>image</th>
                    <th>ITEM</th>
                    <th>QUANTITY</th>
                    <th>UNIT PRICE</th>
                    <th>SUBTOTAL</th>
                    <th>Saved/Removed</th>
                  </tr>
                </thead>
                <tbody>
                  {this.props.productsCart.map((product) => (
                    <tr key={product.productId}>
                      {/* image */}
                      <td>
                        <Link 
                        to={{
                          pathname: `/Product/${product.productId}`,
                        }}
                        >
                          <img
                            src="https://www.westernheights.k12.ok.us/wp-content/uploads/2020/01/No-Photo-Available.jpg"
                            alt="item"
                            className="mr-2 mt-3 rounded-circle"
                            width="80"
                            height="80"
                          />
                        </Link>
                      </td>
                      {/* Item */}
                      <td>
                        <p className="mb-0 col-12">
                          <Link 
                          to={{
                            pathname: `/Product/${product.productId}`,
                          }}
                          className="link">
                            {" "}
                            {product.productName}{" "}
                          </Link>
                        </p>
                        <p
                          className="mb-0 col-12"
                          style={{
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                          }}
                        >
                          {" "}
                          {product.description}
                        </p>
                      </td>
                      {/* QUANTITY */}
                      <td>
                        <select>
                          <option>1</option>
                          <option>2</option>
                          <option>3</option>
                          <option>4</option>
                          <option>5</option>
                        </select>
                        {/* <button type="submit" onClick={()=>{this.props.onAdd(product.productId)}} className="btn btn-sm btn-primary text-uppercase p-1 m-2"><i className="fas fa-plus-circle fa-2x"></i></button>
                                    {product.quantity} */}
                      </td>
                      {/* UNIT PRICE	 */}
                      <td>
                        <span className="sp1 m-1 ">
                          <span>Egp</span>
                          <span>{product.price}</span>
                        </span>
                        <span className="sp2 m-1">
                          <span>Egp</span>
                          <span>
                            {parseInt(
                              parseInt(product.price) *
                                (1 + parseInt(product.discount) * 0.01)
                            )}
                          </span>
                        </span>
                        <span className="sp3">
                          <span>Saving :</span>
                          <span>{product.discount}%</span>
                        </span>
                      </td>
                      {/* SUBTOTAL */}
                      <td>
                        <span className="sp1" style={{ color: "orange" }}>
                          <span>Egp</span>
                          <span>{product.price * 1}</span>
                        </span>
                      </td>
                      {/* Saved/Removed Buttons */}
                      <td>
                        <button className="btn btn-light mb-2 text-danger col-12">
                          <i className="fa fa-heart mr-2"></i>
                        </button>
                        <button
                          onClick={(event) => {
                            this.props.onDelete(product, event);
                          }}
                          type="submit"
                          className=" btn btn-light text-danger col-12"
                        >
                          <i className="fa fa-trash mr-2"></i>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {/* Footer */}
            <div className="container col-12 col-lg-10">
              <div
                className="row col-12 m-0 mb-4"
                style={{
                  fontSize: "16px",
                  fontWeight: "600",
                  backgroundColor: "teal",
                }}
              >
                <div className="col-12 col-md-6 mt-5">
                  <Link
                    className="col-md-6  btn-sm btn-light bg-warning shadow-lg text-dark p-2 m-2"
                    style={{ textDecoration: "none" }}
                    to="/"
                  >
                    COUNTINUE SHOPING
                  </Link>
                  <Link
                    className="col-md-6  btn-sm btn-light bg-danger shadow-lg text-white p-2 m-2"
                    style={{ textDecoration: "none" }}
                    to="#"
                  >
                    Countinue to check out
                  </Link>
                </div>
                <div className="col-12 col-md-6">
                  <div className="row mt-3">
                    <p className="col-6 text-center font-weight-bolder text-light">
                      {" "}
                      Total:
                    </p>
                    <p className="col-6 text-center font-weight-bolder bg-light">
                      {" "}
                      EGP <span>{this.props.totalPrice}</span>
                    </p>
                  </div>
                  <div>
                    <p className="p-2 border border-success m-2 mr-0 rounded text-light">
                      Your order is eligible for Free Shipping with Jumia
                      Express or Jumia Primo. (Excludes large and bulky items)
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </React.Fragment>
        )}
      </React.Fragment>
    );
  }
}

export default Cart;
