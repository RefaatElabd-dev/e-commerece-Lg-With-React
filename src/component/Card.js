import axios from "axios";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import AuthService from "./Services/auth.service";
class Card extends Component {
  state = {
    prod: this.props.cardprod,
    user: {},
  };
  // Add To Cart (Mahmoud)
  addToCart = async (productid) => {
   // console.log("prodid",productid)
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
  SaveinViews = () => {
    axios
      .post("https://localhost:44340/api/ProductsAPi/SetView", {
         UserId: this.state.user.id,
         ProductId: this.props.cardprod.id,
      })
      .then(console.log("ok"));
  };

  componentDidMount() {
    if (localStorage.getItem("user")) {
      let user = JSON.parse(localStorage.getItem("user"));
      //console.log(localStorage.getItem('user')

      this.setState({ user });
    }
  }

  render() {
   
let nprice;
this.props.cardprod.discount==0||this.props.cardprod.discount==null?nprice=this.props.cardprod.price:nprice=this.props.cardprod.price*(1-this.props.cardprod.discount)

    return (
      <React.Fragment>
        {/* Toast just for notification  */}
        <ToastContainer />
        <div className="col-md-3 col-12">
          <div className="card item-box-blog">
            <Link
              to={{
                pathname: `/Product/${this.state.prod.id}`,
                HandlerSaving: this.state.user,
              }}
              onClick={this.SaveinViews}
              style={{ color: "black", textDecoration: "none" ,backgroundColor:"beige"}}
            >
                <img
                  className="card-img-top"
                  src="https://www.westernheights.k12.ok.us/wp-content/uploads/2020/01/No-Photo-Available.jpg"
                  alt={`${this.state.prod.productName}`}
                  height="250"
                />
                <div className="card-body" style={{height:"350px",direction:"ltr"}}>
                  <h6 className="card-title text-left" style={{overflow:"hidden",textOverflow:"ellipsis"}}>
                    {this.state.prod.productName}
                  </h6>
                  <div className="card-text text-left" style={{overflow:"hidden",textOverflow:"ellipsis",height:"150px"}}>
                    {this.state.prod.description}
                  </div>
                  <p className="card-text text-right">
                    {this.rate(this.state.prod.rating)}
                  </p>
                  <p className="card-text text-right">
                      {parseInt(nprice)} Egp
                      {(this.props.cardprod.discount) > 0 && (
                        <div className="mt-2 p-0">
                          <span className="sp">
                            (Egp
                            <span>
                              {
                              this.props.cardprod.price
                              }
                            </span>
                            )
                          </span>
                        </div>
                      )}
                      <p className="card-text text-right">
                         {(this.props.cardprod.discount > 0) && <span className="alert text-danger col-1 p-0">
                            -{this.props.cardprod.discount*100}%
                          </span>}
                      </p>
                  </p>
                </div>
            </Link>
            <button className="mb-5 mt-2 ml-5" onClick={()=>this.addToCart(this.state.prod.id)} style={{width:"50%",fontWeight:"600",fontSize:"16px",backgroundColor:"teal",color:"white"}}>Add to cart</button>
            </div>
        </div>
      </React.Fragment>
    );
  }
}
export default Card;
