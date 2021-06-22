import React, { Component } from "react";
import axios from "axios";
import { NavLink,Link} from "react-router-dom";

class SearchResult extends Component {
    state={
        searchResult:this.props.location.searchData
    }
    render(){
        console.log(this.props.location)
        return(
            <React.Fragment>
            {(this.state.searchResult.length!=0)
              ?(
              <React.Fragment>
               
              </React.Fragment>
              )
              :(
                <div className="alert alert-danger container text-center">
                  <h1>Search Not Found</h1>
                </div>
              )
            }
          </React.Fragment>
        )
    }

}
export default SearchResult;