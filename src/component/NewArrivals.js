import React, { Component } from "react";
import axios from 'axios';
import Card from './Card';
import {Link, Route, Router} from'react-router-dom';
class NewArrivals extends Component {
  state = {
    NewArrivals:[],
    firstfournew:[],
  };
  getnewArrivals=async ()=>{
    await axios.get("http://localhost:21231/allproduct").then(res=>{
      this.setState({NewArrivals:res.data,firstfournew:res.data.slice(0,4)});
    console.log("new arrival ",res.data);
    
  }
  )
  }
 async componentDidMount(){
  await  this.getnewArrivals();
  }
  
  render() {
console.log("new arrivals from component",this.state.newproducts)
if(this.state.NewArrivals==undefined ||this.state.NewArrivals.length==0){
  return (<div>loading............................</div>)
}else{
    return (
      <React.Fragment>
        <section>
        
           
        <div className="container productCont">
            <h2>NewArrivals </h2>
            <span className="text-right">
            <Link to={{  pathname:`allbestselling`,
                        
                        HandlerSaving:this.state.NewArrivals
                        }} className="btn btn-success" >SEE ALL</Link>
            </span>
            <div id="gallery1" className="carousel slide" data-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div className="row rbg rounded py-3">
                   {this.state.firstfournew.map((c,i)=>
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
  }}
}
export default NewArrivals;
