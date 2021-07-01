import React,{Component} from 'react'
import SmallCard from '../smallCard';
import Saveditemscard from './saveditemscard'

class Opened extends Component{

    render(){
      console.log(this.props.ondelievery)
      const {ondelievery} = this.props;
      if (ondelievery.lenghth == 0) {
        return(
          
            <React.Fragment>
 <div className="container mt-12" id="OpenOrders">
        <img src="../img/ordercart.png" width="120px" height="120px" /><br /> <br />
        <div className=" form col-lg-12 ">
          <h6><i>You have placed no orders yet!</i></h6><br />
          <p><i>All your orders will be saved here for you to access their state anytime.</i></p> 
          <button type="button" className="btn btn-warning " style={{color: 'white', marginTop: 30}}> <b>Continue Shopping</b></button>
        </div>
      </div>
            </React.Fragment>)}
            else {
              return( <div className="container " >
                   {ondelievery.map((o,i)=>
                   <>
                   <h4 className="text text-left">order: {i+1}</h4>
                   <div key={i} className="row p-0 m-0"> 
                   
                     {o.products.map((p,j)=>
                      <SmallCard key={j} cardprod={p}/>
        
                     )}
                     <hr/>
                    </div> 
                    </>
                    
                   )}
              </div>
              )
            }
          }
            }
      
            export default Opened;