import React, { Component } from "react";
import axios from 'axios';
import Card from './Card';
import AllBestSelling from './allbestselling';

import {Link, Route, Router} from'react-router-dom';
class BestSelling extends Component {
  state = {
    TopSellings: [],
    firstcards:[],
   // secondCard:this.props.getBestSelling.slice(4,7)
  };
  bestselling=async ()=>{
    await axios.get("http://localhost:21231/highselling").then(res=>{
      this.setState({TopSellings:res.data,firstcards:res.data.slice(0,4)});
    console.log("bestsellings from home",res.data);
    
  }
  )
  }
async componentDidMount(){
 await this.bestselling();
  
}
  render() {
    console.log("bestsellings from component",this.state.TopSellings)
  console.log("firstbest",this.state.firstcards)
 // console.log("first",this.state.secondCard)
  if( this.state.TopSellings==undefined|| this.state.TopSellings.length==0){
    return (<div>loading.......................</div>)
  }else{
    return (
      <React.Fragment>
        <section>
       {/* <Router>
       <Route path="/allbestselling" component={(props)=>{<AllBestSelling {...props} allbest={this.state.TopSellings} />}}/>
       </Router> */}
          
          <div className="container productCont">
            <h2>Top Selling items </h2>
            <span className="text-right"> 

            <Link to={{  pathname:`allbestselling`,
                        
                            HandlerSaving:this.state.TopSellings
                            }} className="btn btn-success" >SEE ALL</Link>
                        
            </span>
            <div id="gallery1" className="carousel slide" data-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div className="row rbg rounded py-3">
                   {this.state.firstcards.map((c,i)=>
                   <Card cardprod={c} key={i}/>
                   )}
                    </div>
                    </div>
                   
              </div>
              <a
                className="carousel-control-prev slide-arrow"
                href="#gallery1"
                role="button"
                data-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                />
                <span className="sr-only">Previous</span>
              </a>
              <a
                className="carousel-control-next slide-arrow"
                href="#gallery1"
                role="button"
                data-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                />
                <span className="sr-only">Next</span>
              </a>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}}


export default BestSelling;
