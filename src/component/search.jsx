import React, { Component } from "react";
import axios from "axios";
import { NavLink,Link} from "react-router-dom";
import DisplayedProducts from './displyedproducts';

class SearchResult extends Component {
    
    render(){
        console.log(this.props.location.state)
        return(
            <React.Fragment>
            {(this.props.location.state.length==0)
              ?(
              <React.Fragment>
                <div className="alert alert-danger container text-center">
                <h1>Search Not Found</h1>
              </div>
               
              </React.Fragment>
              )
              :(
                <DisplayedProducts prods={this.props.location.state} name={this.props.location.name} />
              )
            }
          </React.Fragment>
        )
    }

}
export default SearchResult;