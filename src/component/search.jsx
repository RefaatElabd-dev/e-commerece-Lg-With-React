import React, { Component } from "react";
import DisplayedProducts from './displyedproducts';

class SearchResult extends Component {
    
    render(){
        return(
            <React.Fragment>
            {(this.props.location.state.length==0)
              ?(
              <React.Fragment>
                <div className="alert alert-danger container text-center"
                style={{
                  height: "300px",
                  background:
                    "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcxuJV_b9ynulFWS62lf8CpZcJiT32LAdm4fqSVrcWeAZki-GqmTWujCR0M7t-howzB6s&usqp=CAU') fixed no-repeat",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  backgroundAttachment: "inherit",
                  backgroundOrigin: "border-box",
                  backgroundClip: "border-box",
                  backgroundColor: "initial",
                  backgroundSize: "contain",
                  border:"none"
                }}
                >
                <h2>Search Not Found</h2>
              </div>
               
              </React.Fragment>
              )
              :(
                <div className="container text-center p-4"
                style={{
                  background:
                    "url('https://store.hp.com/app/assets/images/uploads/prod/10-best-minecraft-seeds-2020-hero1583953010552802.png?impolicy=prdimg&imdensity=1&imwidth=1000') fixed no-repeat",
                  // backgroundPosition: "left",
              // backgroundRepeat: "no-repeat",
              backgroundAttachment: "inherit",
              // backgroundOrigin: "border-box",
              // backgroundClip: "border-box", 
              // backgroundColor: "initial",
              // backgroundSize: "contain",
              backgroundSize: "cover",
              // backgroundPositionX: "350px",
              // backgroundPositionY: "10px",
                }}
                >
                  <DisplayedProducts  prods={this.props.location.state} name={this.props.location.name} />
                </div>
              )
            }
          </React.Fragment>
        )
    }

}
export default SearchResult;