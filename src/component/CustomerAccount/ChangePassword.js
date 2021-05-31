import React,{Component} from 'react'
class ChangePssword extends Component{
    render(){
        return(
            <React.Fragment>
              
   
      <div className="card col-md-12" style={{marginTop: 10, padding: 10}}>
        <div className="card-header">
          <div className="row">
            <div className="col-md-12"> <h3>Change Password</h3> </div>
          </div>
        </div>
        <div className="card-body" style={{height: 400}}>
          <div className="row">
            <div className="container mt-4 ">
              <div className=" form-check-inline col-lg-8 ">
                <input className="input" id="CurrentPassword" type="text" placeholder="Current Password" />
                <span className="fa fa-fw fa-eye field-icon toggle-password" />
              </div>
            </div>
          </div> 
          <br />
          {/* --------------------------------------------------------- */}
          <div className="row">
            <div className="container mt-4  ">
              <div className=" form-check-inline col-lg-8 ">
                <input className="input" id="NewPassword" type="text" placeholder="New Password" />
                <span className="fa fa-fw fa-eye field-icon toggle-password" />
              </div>
            </div>
          </div> 
          <br />
          {/* --------------------------------------------------------- */}
          <div className="row">
            <div className="container mt-4 ">
              <div className=" form-check-inline col-lg-8 ">
                <input className="input" id="RetypeNewPassword" type="text" placeholder="Retype New Password" />
                <span className="fa fa-fw fa-eye field-icon toggle-password" />
              </div>
            </div>
          </div> 
          <br />
          {/*         ---------------------------------------------*/}
          <div className="form-group  mt-4"> 
            <button type="button" className="btn btn-warning btn-lg btn-block" style={{color: 'white'}}>Submit</button>
          </div>
        </div>
      </div>
 



            </React.Fragment>
        )
    }
}
export default ChangePssword;