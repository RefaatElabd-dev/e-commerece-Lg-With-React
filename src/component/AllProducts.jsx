import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Card from './Card'
export class AllProducts extends Component {

  render() {
    const { products, loading } = this.props;

    if (loading) {
      return <h2>Loading...</h2>;
    }

    return (
      <React.Fragment>
       
           <div className="alert alert-primary">
          <div className="container row  ml-3">
          
            {products.map((product,i) => (
              <Card key={i} cardprod={product}/>
           
            ))}
          </div>
          </div>
    
      </React.Fragment>
    );
  }
}

export default AllProducts;
