import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import AuthService from "./Services/auth.service";
import axios from "axios";


export class AllProducts extends Component {
  state = {
  };
  addToCart = async (productid) => {
     const productsIncart = {...this.state.prod};
     this.setState({ productsIncart });
     try {
       await axios
         .post(
           "https://localhost:44340/addproducttoCART/"+AuthService.getCurrentUser().id,{"Id":productid}
         )
         .then((res) => {
           toast.success(`Product Added`);
           window.location.reload();
         });
     } catch (ex) {
       toast.error("Can't Add Or already Exist");
       this.setState({ prod: productsIncart });
     }
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
  render() {
    const { products, loading } = this.props;
    let nprice;
    products.discount==0||products.discount==null?nprice=products.price:nprice=products.price*(1-products.discount)
    products.discount == 0 || products.discount == null
    ? (nprice = products.price)
    : (nprice = parseInt(products.price) + parseInt(products.discount));
    
    if (loading) {
      return <h2>Loading...</h2>;
    }

    return (
      <React.Fragment>
        {/* Toast just for notification  */}
        <ToastContainer />
           <div className="alert alert-primary">
          <div className="container row  ml-3">
            {products.map((product) => (
            <div className="col-md-3 col-12" key={product.id}>
              <div className="card item-box-blog">
                <NavLink to={"/Product/" + product.id}
                style={{ color: "black", textDecoration: "none" ,backgroundColor:"beige"}}
                >
                  <div className="product-1 align-items-center p-2 text-center">
                    <img
                      src={`https://localhost:44340/images/${product.image}`}
                      alt="chips"
                      className="card-img-top rounded"
                      height="250"
                    />
                   
                <div className="card-body" style={{height:"350px",direction:"ltr"}}>
                  <h6 className="card-title text-left" style={{overflow:"hidden",textOverflow:"ellipsis"}}>
                    {product.productName}
                  </h6>
                  <div className="card-text text-left" style={{overflow:"hidden",textOverflow:"ellipsis",height:"150px"}}>
                    {product.description}
                  </div>
                  <p className="card-text text-right">
                    {this.rate(product.rating)}
                  </p>
                  <p className="card-text text-right">
                  <span className="sp1 m-1 ">
              <span>Egp</span>
              <span>{product.price}</span>
            </span>
            {product.discount > 0 && (
              <span className="sp2 m-1">
                <span>Egp</span>
                <span>{parseInt(nprice)}</span>
              </span>
            )}
            {product.discount > 0 && (
              <span className="sp3">
                <span>Saving :</span>
                <span>{parseInt(nprice)-parseInt(product.price)} </span>
              </span>
            )}
            </p>
                </div>
           
                  </div>
                </NavLink>
                  {/* button for cards*/}
                  <button className="mb-5 mt-2" onClick={()=>this.addToCart(product.id)} style={{width:"100%",fontWeight:"600",fontSize:"16px",backgroundColor:"teal",color:"white"}}>Add to cart</button>

              </div>
            </div>
            ))}
          </div>
          </div>
         {/* ))} */}
      </React.Fragment>
    );
  }
}

export default AllProducts;

