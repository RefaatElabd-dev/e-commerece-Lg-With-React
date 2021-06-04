import React, { Component } from "react";
import Card from "./Card";


class AllBestSelling extends Component {
    state={
        alldata:this.props.location.HandlerSaving,
    }
  
    render() {
        console.log("card product data",this.props)
        if(this.state.alldata==undefined||this.state.alldata.length==0) return null;
        return (

            <React.Fragment>
               
                
              <div className="container row  ml-3">
                  {this.state.alldata.map((c,i)=><Card cardprod={c}  key={i}/> )}

              </div>
            </React.Fragment>)

    }
}
export default AllBestSelling;