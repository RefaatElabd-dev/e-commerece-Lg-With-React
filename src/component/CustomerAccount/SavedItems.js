import React,{Component} from 'react'
class SavedItems extends Component{
    render(){
        return(
            <React.Fragment>
                <div className="col-sm-8 col-md-12" style={{marginTop: 10}}>
  <div className="card">
    <div className="card-header">
      <div className="row">
        <div className="col-md-6"> <h3>Saved Item</h3> </div>
      </div>
    </div>
    {/*  --------------------------OpenOrders---------------------- */}
    <div className="row" style={{textAlign: 'center', marginTop: 60}}>
      <div className="container mt-12" id="OpenOrders">
        <img src="../img/saveditems.png" width="80px" height="70px" /><br /> <br />
        <div className=" form col-lg-12 ">
          <h6><i>You haven’t saved an item yet!</i></h6><br />
          <p><i>  Found something you like? Tap on the heart shaped icon next 
              to the item to add it to your wishlist! All your saved items will appear here.</i></p> 
          <button type="button" className="btn btn-warning " style={{color: 'white', marginTop: 30}}><b>Continue Shopping </b></button>
        </div>
      </div>
    </div> 
    <br />
    <div className="row" style={{marginTop: 60}}>
      <div className="col-sm-6 " style={{marginTop: 10, display: 'inline-block'}}>
        <div className="card h-100 " style={{width: '100%'}}>
          <div className="card-body">
            <div style={{float: 'left'}}>
              <img src="./img/saveditems.png" style={{display: 'inline-block'}} width="80px" height="70px" />
              <span className=" form col-lg-12 " style={{display: 'inline-block'}}>
                <i> Ab Wheel Roller For Exercise Workout With Knee Pad</i>
              </span>
              <p> EGP 75</p>
              <p><del> EGP 100</del></p></div>
            <div style={{float: 'right'}}>
              <button type="button" className="btn btn-warning " style={{color: 'white', marginTop: 30}}> <b>Buy Now</b></button>
              <button type="button" className="btn btn-warning " style={{color: 'white', marginTop: 30}}> <b>  <i className="fas fa-trash-alt" />&nbsp; Remove</b></button>‏
            </div>
          </div>
        </div>
      </div>
    </div> 
    <br />
  </div>
</div>


            </React.Fragment>)}}
export default SavedItems;