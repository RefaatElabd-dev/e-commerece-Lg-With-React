import React, { Component } from 'react';
class AccountDetails extends Component {
    state = {  }
    render() { 
        return (
            <React.Fragment>
                {/* <div className="padding">
  <div className="row">
    <div className="container-fluid d-flex justify-content-center">
      <div className="col-sm-8 col-md-6"> */}
      <div className="card col-md-12" style={{marginTop: 10, padding: 10} }>
       
          <div className="card-header">
            <div className="row">
              <div className="col-md-6"> <span>Details</span> </div>
            </div>
          </div>
          <div className="card-body" style={{height:450}}>
            <div className="row">
              <div className="input-group col-lg-6 mb-4">
                <div className="input-group-prepend">
                  <span className="input-group-text bg-white px-4 border-md border-right-0">
                    <i className="fa fa-user text-muted" />
                  </span>
                </div>
                <input id="firstName" type="text" name="firstname" placeholder="First Name" className="form-control bg-white border-left-0 border-md" />
              </div>
              <div className="input-group col-lg-6 mb-4">
                <div className="input-group-prepend">
                  <span className="input-group-text bg-white px-4 border-md border-right-0">
                    <i className="fa fa-user text-muted" />
                  </span>
                </div>
                <input id="lastName" type="text" name="lastname" placeholder="Last Name" className="form-control bg-white border-left-0 border-md" />
              </div>
            </div>
            <br />
            {/* --------------------------------------------------------- */}
            <div className="row">
              <div className="input-group col-lg-6 mb-4">
                <div className="input-group-prepend">
                  <span className="input-group-text bg-white px-4 border-md border-right-0">
                    <i className="fa fa-envelope text-muted" />
                  </span>
                </div>
                <input id="email" type="email" name="email" placeholder="Email Address" className="form-control bg-white border-left-0 border-md" />
              </div>
              <div className="input-group col-lg-6 mb-4">
                <div className="input-group-prepend">
                  <span className="input-group-text bg-white px-4 border-md border-right-0">
                    <i className="fa fa-phone-square text-muted" />
                  </span>
                </div>
                <select id="countryCode" name="countryCode" style={{maxWidth: 80}} className="custom-select form-control bg-white border-left-0 border-md h-100 font-weight-bold text-muted">
                  <option value>+12</option>
                  <option value>+10</option>
                  <option value>+15</option>
                  <option value>+18</option>
                </select>
                <input id="phoneNumber" type="tel" name="phone" placeholder="Phone Number" className="form-control bg-white border-md border-left-0 pl-3" />
              </div>
            </div>
            <br />
            {/* --------------------------------------------------------- */}
            <div className="row">
              <div className="input-group col-lg-6 mb-4  h-100">
                <div className="input-group-prepend  ">
                  <span className="input-group-text bg-white px-4 border-md border-right-0 h-200">
                    <i className="fa fa-black-tie text-muted" />
                  </span>
                </div>
                <select id="Gender" name="Gender" className="form-control custom-select bg-white border-left-0 border-md">
                  <option value>Please Select</option>
                  <option value>Male</option>
                  <option value>Female</option>
                </select>
              </div>
              <div className="input-group col-lg-6 mb-4 h-100">
                <div className="input-group-prepend">
                  <span className="input-group-text bg-white px-4 border-md border-right-0">
                    <i className="fa fa-calendar" />
                  </span>
                </div>
                <input id="birthday" type="date" name="birthday" placeholder="birthday" className="form-control bg-white border-left-0 border-md" />
              </div>
            </div>
            <br />
            <div className="form-group"> 
              <button type="button" className="btn btn-warning btn-lg btn-block">Save</button>
            </div>
          </div>
        </div>
     
   

            </React.Fragment>
          );
    }
}
 
export default AccountDetails;