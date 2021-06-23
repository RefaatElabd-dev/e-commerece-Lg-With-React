import React, { Component } from 'react';
import AuthService from '../Services/auth.service';
class Inbox extends Component {
  state = {
 
    text:""
  }

  render() {
    //console.log(this.props.mess)
    return (
      <React.Fragment>

        {/* <div className="card col-md-12" style={{ marginTop: 10, padding: 10 }}>
          <div className="card-header">
            <div className="row">
              <div className="col-md-6"> <h3>Inbox Message</h3> </div>
            </div>
          </div>
          {/*  --------------------------OpenOrders---------------------- */}
          {/* <div className="row" style={{ textAlign: 'center', marginTop: 60 }}>
            <div className="container mt-12" id="OpenOrders">
              <img src="../img/message.jpg" width="120px" height="120px" /><br /> <br />
              <div className=" form col-lg-12 ">
                <h6>You don't have any messages</h6><br />
                <p> Here you will be able to see all the messages that we send you. Stay tuned.</p>
              </div>
            </div>
          </div>
          <br />
        </div>  */}

        {(AuthService.getCurrentUser().id &&this.props.mess!=undefined&& this.props.mess.length>0) && <React.Fragment>
          <div className="border col-12 m-5 ">
            <ul className="list-unstyled" style={{ overflow: "auto" ,height:200}}>
              {this.props.mess.map((c, i) =>
                <li key={i}>
                     {c.userName == AuthService.getCurrentUser().userName ? <p className="bg-warning"> {c.userName}: {c.text}</p> : <p>{c.userName}: {c.text}</p>}
                  </li>)
              }

            </ul>
            <div className="input-group">
              <input type="text" className="form-control rounded"  
                 onChange={(e)=>this.setState({text:e.target.value})}/>
              <button type="button" className="btn btn-outline-primary" onClick={()=>this.props.sendmess(this.state.text)}>send</button>
            </div>

          </div>

        </React.Fragment>}

      </React.Fragment>

    );
  }
}

export default Inbox;