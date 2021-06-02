import React, { Component } from "react";
import Card from './Card'
class BestSelling extends Component {
  state = {
    TopSellings: this.props.getBestSelling,
    firstcards:[],
   // secondCard:this.props.getBestSelling.splice(4,7)
  };
componentDidMount(){
  if(this.props.getBestSelling==undefined) return;
  
  this.setState({firstcards:this.props.getBestSelling.splice(0,4)})
}
  render() {

  console.log("first",this.state.firstcards)
 // console.log("first",this.state.secondCard)
  if( this.state.TopSellings==undefined|| this.state.TopSellings.length==0){
    return (<div>loading.......................</div>)
  }else{
    return (
      <React.Fragment>
        <section>
          
          <div className="container productCont">
            <h2>Top Selling items </h2>
            <span className="text-right"><a href="#">see all &gt;</a></span>
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
