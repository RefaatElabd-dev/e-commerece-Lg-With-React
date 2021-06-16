import React, { Component } from "react";
import {Link } from "react-router-dom";
class Brand extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="container text-center">
          {/* header Shop By Brand*/}
          <h2>Shop By Brand</h2>
          {/* List of 6 Brands */}
          <div className="row m-0 p-0 mt-4  mb-4">
            {this.props.sendBrands.slice(0, 6).map((c, i) => (
              <div key={i} className="col-md-2 col-12">
                <Link
                  to={`/brand/` + c.brandId}
                  style={{ color: "black", textDecoration: "none" }}
                >
                  <div
                    className="item-box-blog p-0 bg-light"
                    style={{ height: "150px" }}
                  >
                    <img
                      alt={`brand${c.brandName}`}
                      className="m-0 p-0"
                      height="100%"
                      width="100%"
                      //src={c.image}
                       src={'../C:/Users/a/Documents/GitHub/J6\wwwroot/images/f7b8cd04-a93e-45bf-acaf-f58f57fa5eae_maca.jpg'}
                    />
                  </div>
                  <div className="bg-warning">
                    <p style={{overflow:"hidden",textOverflow:"ellipsis"}}> {c.brandName}</p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
          {/* See All Brands */}
          <Link
            style={{
              fontWeight: "600",
              fontSize: "16px",
              backgroundColor: "teal",
              color: "white",
            }}
            to={{
              pathname: `/AllBrands`,
              HandlerSaving: this.props.sendBrands,
            }}
            className="btn btn-success m-3 text-uppercase p-2"
          >
            See All Brands
          </Link>
        </div>
      </React.Fragment>
    );
  }
}

export default Brand;
