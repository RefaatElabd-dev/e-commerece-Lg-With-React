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
          "https://localhost:44340/addproducttoCART/"+AuthService.getCurrentUser().id,{"id":productid}
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
  rate = (v) => {
    let t=parseFloat(v);
    if (t >= 1 && t < 1.5) {
      return (
        <div>
          {" "}
          <i className="fa fa-star" />
        </div>
      );
    } else if (t >= 1.5 && t < 2.5) {
      return (
        <div>
          {" "}
          <i className="fa fa-star" />
          <i className="fa fa-star" />
        </div>
      );
    } else if (t > 2.5 && t < 3.5) {
      return (
        <div>
          {" "}
          <i className="fa fa-star" />
          <i className="fa fa-star" />
          <i className="fa fa-star" />
        </div>
      );
    } else if (t >= 3.5 && t < 4.5) {
      return (
        <div>
          {" "}
          <i className="fa fa-star" />
          <i className="fa fa-star" />
          <i className="fa fa-star" />
          <i className="fa fa-star" />
        </div>
      );
    } else if (t >= 4.5 && t <= 5) {
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
   //console.log(this.state.prod.image)
let nprice;
//this.props.cardprod.discount==0||this.props.cardprod.discount==null?nprice=this.props.cardprod.price:nprice=this.props.cardprod.price*(1-this.props.cardprod.discount)
this.props.cardprod.discount == 0 || this.props.cardprod.discount == null
? (nprice = this.props.cardprod.price)
: (nprice = parseInt(this.props.cardprod.price*(1-this.props.cardprod.discount)));

    return (
      <React.Fragment>
        {/* Toast just for notification  */}
        <ToastContainer />
        <div className="col-md-3 col-12 mt-2">
          <div className="card item-box-blog">
            <Link
              to={{
                pathname: `/Product/${this.state.prod.id}`,
                HandlerSaving: this.state.user,
              }}
              onClick={this.SaveinViews}
              style={{ color: "black", textDecoration: "none"}}
            >
                <img
                  className="card-img-top"
                 src={`https://localhost:44340/images/${this.state.prod.image}`}
                  alt={`${this.state.prod.productName}`}
                  height="150px"
                />
                <div className="card-body" style={{height:"150px",direction:"ltr"}}>
                 
                  <div className="card-text text-left" style={{overflow:"hidden",textOverflow:"ellipsis",height:"150px"}}>
                    {this.state.prod.description}
                   
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
             <p className="card-text text-left">
                    {this.rate(this.state.prod.rating)}
                  </p>
                  </div> 
                  </div>
           
            </Link>
            <button  onClick={()=>this.addToCart(this.state.prod.id)} style={{width:"100%",fontWeight:"600",fontSize:"16px",backgroundColor:"teal",color:"white"}}>Add to cart</button>
            </div>
        </div>
      </React.Fragment>
    );
  }
}
export default Card;
