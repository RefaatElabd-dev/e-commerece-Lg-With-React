import React, { Component } from "react";
import axios from "axios";
import { NavLink,Link} from "react-router-dom";
import DisplayedProducts from './displyedproducts';
import AllProducts from "./AllProducts";

class SearchResult extends Component {
    
    render(){
        console.log(this.props.location.state)
        return(
            <React.Fragment>
            {(!this.props.location.state||this.props.location.state.length==0)
              ?(
              <React.Fragment>
                <div className="alert alert-danger container text-center">
                <h1>Search Not Found</h1>
              </div>
               
              </React.Fragment>
              )
              :(
                <div className="container text-center p-4">
                  {/* <DisplayedProducts prods={this.props.location.state}  /> */}
                  <AllProducts products={this.props.location.state}  />
                </div>
              )
            }
          </React.Fragment>
        )
    }

}
export default SearchResult;