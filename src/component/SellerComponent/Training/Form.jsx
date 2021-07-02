// import React, { Component } from 'react';
// import Joi from "joi-browser";
// class Form extends Component {
//     // state = {  }
//     state = {
//         name: "",
//         marketName: "",
//         phone: "",
//         email: "",
//         errors: {},
//       };
    
//       schema = {
//         name: Joi.string().required().trim(),
//         marketName: Joi.string().required().trim(),
//         phone: Joi.string().max(11).min(11).trim(),
//         email: Joi.string().email().required().trim(),
//       };
    
//       handleSubmit = (e) => {
//         e.preventDefault();
    
//         const errors = this.validate();
    
//         if (errors) return;
    
//         //Call Backend
//         console.log("submit");
//       };
    
//       validate = () => {
//         const errors = {};
//         //Clone State
//         const state = { ...this.state };
//         delete state.errors;
//         const res = Joi.validate(state, this.schema, { abortEarly: false });
//         if (res.error === null) {
//           this.setState({ errors: {} });
//           return null;
//         }
    
//         for (const error of res.error.details) {
//           errors[error.path] = error.message;
//         }
    
//         //Set State
//         this.setState({ errors });
//         return errors;
//       };
    
//       handleChange = (e) => {
//         //Clone
//         let state = { ...this.state };
//         //Edit
//         state[e.currentTarget.name] = e.currentTarget.value;
//         //Set state
//         this.setState(state);
//         console.log("s");
//       };
    
//     render() { 
//         return ( 
//             <React.Fragment>
//  {/* بيانات متجرك */}
//  <div className="container text-center mb-3 mt-1" style={{ direction: "rtl" }}>
//           <h2
//             className="btn p-4"
//             style={{
//               width: "80%",
//               backgroundColor: "#f68b1e",
//               color: "white",
//               cursor: "auto",
//               fontSize: "30px",
//               fontWeight: "800",
//             }}
//           >
//             بيانات متجرك
//           </h2>
//         </div>
//         <div className="container text-right mb-3 mt-1">
//             <form className="row g-3" onSubmit={this.handleSubmit}>
//                 <div className="col-md-6 col-12">
//                     <div className="form-outline">
//                     <label htmlFor="validationServer01" className="form-label">الاسم*</label>
//                     <input
//                         name="name"
//                         type="text"
//                         className="form-control"
//                         id="validationServer01"
//                         value={this.state.name}
//                         onChange={this.handleChange}
//                         autoFocus
//                     />
//                     {this.state.errors.name && (
//                     <div className="alert alert-danger">
//                         {this.state.errors.name}
//                     </div>
//                     )}
//                     </div>
//                 </div>
//                 <div className="col-md-6 col-12">
//                     <div className="form-outline">
//                     <label htmlFor="validationServer02" className="form-label">اسم متجرك*</label>
//                     <input
//                          name="marketName"
//                         type="text"
//                         className="form-control"
//                         id="validationServer02"
//                         value={this.state.marketName}
//                         onChange={this.handleChange}
//                     />
//                     {this.state.errors.marketName && (
//                     <div className="alert alert-danger">
//                         {this.state.errors.marketName}
//                     </div>
//                     )}
//                     </div>
//                 </div>
//                 <div className="col-md-6 col-12">
//                     <div className="form-outline">
//                     <label htmlFor="validationServer03" className="form-label">البريد الإلكتروني*</label>
//                     <input
//                         name="email"
//                         type="email"
//                         className="form-control"
//                         id="validationServer03"
//                         value={this.state.email}
//                         onChange={this.handleChange}
//                     />
//                     {this.state.errors.email && (
//                     <div className="alert alert-danger">
//                         {this.state.errors.email}
//                     </div>
//                     )}
//                     </div>
//                 </div>
//                 <div className="col-md-6 col-12">
//                     <div className="form-outline">
//                     <label htmlFor="validationServer04" className="form-label">(مثال: 01090119556)رقم الموبيل*</label>
//                     <input
//                         name="phone"
//                         type="tel"
//                         pattern="^[0]{1}[1]{1}([0]{1}|[2]{1}|[1]{1}|[5]{1})[0-9]{8}$"
//                         maxLength="11"
//                         minLength="11"
//                         className="form-control"
//                         id="validationServer04"
//                         value={this.state.phone}
//                         onChange={this.handleChange}
//                     />
//                     {this.state.errors.phone && (
//                     <div className="alert alert-danger">
//                         {this.state.errors.phone}
//                     </div>
//                     )}
//                     </div>
//                 </div>
//                 <div className="col-12 text-center mt-4">
//                     <button className="btn p-2"
//                     style={{
//                     width: "30%",
//                     backgroundColor: "#f68b1e",
//                     color: "white",
//                     fontSize: "30px",
//                     fontWeight: "800",
//                     }} 
//                     type="submit">احجز الأن</button>
//                 </div>
//             </form>
//         </div>

//             </React.Fragment>
//             );
//         }
//     }
//     export default Form;

// import Chatbody from "./CustomerAccount/chatbody";
import React, { Component } from "react";
import Joi from "joi-browser";
import { Link, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import AuthService from "../../Services/auth.service";
class Form extends Component {
  state = {  }
  state = {
    UserName: "",
    FirstName: "",
    LastName: "",
    Email: "",
    Password: "",
    PhoneNumber: "",
    errors: {},
  };

  schema = {
    UserName: Joi.string().min(5).max(255).required(),
    FirstName: Joi.string().required(),
    LastName: Joi.string().required(),
    Email: Joi.string().email().required(),
    Password: Joi.string().min(6).required(),
    PhoneNumber: Joi.string().min(7).required(),
  };

  validate = () => {
    const errors = {};
    const state = { ...this.state };
    delete state.errors;
    const res = Joi.validate(state, this.schema, { abortEarly: false });
    if (res.error === null) {
      this.setState({ errors: {} });
      return null;
    }

    for (const error of res.error.details) {
      errors[error.path] = error.message;
    }
    this.setState({ errors });
    return errors;
  };

  //------------------
  handleSubmit = (e) => {
    e.preventDefault();

    const errors = this.validate();

    if (errors) return;
    else {
      AuthService.SellerRegister(
        this.state.UserName,
        this.state.FirstName,
        this.state.LastName,
        this.state.Email,
        this.state.Password,
        this.state.PhoneNumber
      ).then(
        () => {
          this.props.history.push("/Home");
          window.location.reload();
        },
        (error) => {
          console.log(error.response.data);
          alert(error.response.data);
        }
      );
    }
  };
  handleChange = (e) => {
    //Clone
    let state = { ...this.state };
    //Edit
    state[e.currentTarget.name] = e.currentTarget.value;
    //Set state
    this.setState(state);
  };

  render() {
    return (
      <>
        {/* Toast just for notification  */}
        <ToastContainer />
        <header className="header">
          <nav className="navbar navbar-expand-lg navbar-light py-3">
            <div className="container">{/* Navbar Brand */}</div>
          </nav>
        </header>
        <div className="container">
          <div className="row  align-items-center">
            {/* For Demo Purpose */}
            <div className="col-md-5 pr-lg-5 mb-5 mb-md-0">
              <img
                src="http://www.ansonika.com/mavia/img/registration_bg.svg"
                alt
                className="img-fluid mb-3 d-none d-md-block"
                style={{ height: 480 }}
              />
        
              <h1  style={{color:"#41aaa2"}} > Create an Account </h1>
              <p />
            </div>
            {/* Registeration Form */}

            <div className="col-md-7 col-md-6 ml-auto" style={{backgroundColor:"#41aaa2",  borderRadius:"30px"}}>
              <form>
                <div className="row">
                  {/* First Name */}
                  <div className=" col-md-6 mb-4">
                    <input
                      id="FirstName"
                      type="text"
                      name="FirstName"
                      placeholder="First Name"
                      style={{borderRadius:"15px"}}
                      className="form-control bg-white border-left-0 border-md mt-5"
                      value={this.state.FirstName}
                      onChange={this.handleChange}
                    />

                    {this.state.errors.FirstName && (
                      <div className="alert alert-danger">
                        {this.state.errors.FirstName}
                      </div>
                    )}
                  </div>
                  {/* Last Name */}
                  <div className="input-group col-md-6 mb-4">
                    <input
                      id="LastName"
                      type="text"
                      name="LastName"
                      placeholder="Last Name"
                      className="form-control bg-white border-left-0 border-md mt-5"
                      style={{borderRadius:"15px"}}
                      value={this.state.LastName}
                      onChange={this.handleChange}
                    />
                    {this.state.errors.LastName && (
                      <div className="alert alert-danger">
                        {this.state.errors.LastName}
                      </div>
                    )}
                  </div>
                  {/* Phone Number */}
                  <div className="input-group col-md-12 mb-4">
                    
                    <input
                      id="PhoneNumber"
                      type="tel"
                      name="PhoneNumber"
                      placeholder="PhoneNumber "
                      style={{borderRadius:"15px"}}
                      className="form-control bg-white border-left-0 border-md  "
                      value={this.state.PhoneNumber}
                      onChange={this.handleChange}
                    />
                    {this.state.errors.PhoneNumber && (
                      <div className="alert alert-danger">
                        {this.state.errors.PhoneNumber}
                      </div>
                    )}
                  </div>
                  
                  {/* Email Address */}
                  <div className="input-group col-md-12 mb-4">
                   

                    <input
                      type="text"
                      name="Email"
                      id="Email"
                      style={{borderRadius:"15px"}}
                      className="form-control"
                      placeholder="Email address"
                      value={this.state.Email}
                      onChange={this.handleChange}
                    />
                     {this.state.errors.Email && (
                      <div className="alert alert-danger">
                        {this.state.errors.Email}
                      </div>
                    )}
                  </div>
                  
                  {/* UserName */}
                  <div className="input-group col-md-12 mb-4">
                    
                    <input
                      id="UserName"
                      type="text"
                      name="UserName"
                      placeholder="UserName"
                      className="form-control bg-white border-left-0 border-md"
                      style={{borderRadius:"15px"}}
                      value={this.state.UserName}
                      onChange={this.handleChange}
                    />
                     {this.state.errors.UserName && (
                    <div className="alert alert-danger">
                      {this.state.errors.UserName}
                    </div>
                  )}
                    
                  </div>
                  
                  {/* Password */}
                  <div className="input-group col-md-12 mb-4">
                   
                    <input
                      id="Password"
                      type="Password"
                      name="Password"
                      placeholder="Password"
                      style={{borderRadius:"15px"}}
                      className="form-control bg-white border-left-0 border-md"
                      value={this.state.Password}
                      onChange={this.handleChange}
                    />
                     {this.state.errors.Password && (
                    <div className="alert alert-danger">
                      {this.state.errors.Password}
                    </div>
                  )}
                  </div>
                  
                  {/* Submit Button */}
                  <div className="form-group col-lg-12 mx-auto mb-0">
                    <button
                      href="#"
                      type="submit"
                      className="btn btn-block py-2 text-white"
                      style={{backgroundColor:"#A52A2A"}}
                      onClick={this.handleSubmit}
                    >
                      <span className="font-weight-bold">
                        Create your account
                      </span>
                    </button>
                  </div>
                  {/* Divider Text */}
                  <div className="form-group col-lg-12 mx-auto d-flex align-items-center my-4">
                    <div className="border-bottom w-100 ml-5" />
                    <span className="px-2 small text-muted font-weight-bold text-muted">
                      OR
                    </span>
                    <div className="border-bottom w-100 mr-5" />
                  </div>
                  {/* Social Login */}
                  <div className="form-group col-lg-12 mx-auto">
                    <a
                      href="#"
                      className="btn  btn-block py-2 btn-facebook text-white"
                      style={{backgroundColor:"#A52A2A"}}
                    >
                      <i className="fa fa-facebook-f mr-2" />
                      <span className="font-weight-bold">
                        Continue with Facebook
                      </span>
                    </a>
                    
                  </div>
                  {/* Already Registered */}
                  <div className="text-center w-100">
                    <p className="text-muted font-weight-bold">
                      Already Registered?{" "}
                      <Link
                      to={{
                        pathname: "https://localhost:44340/",
                      }} className="text-reset"
                      target="_blank"
                      >
                        Login
                      </Link>
                    </p>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </>
    );
  }}
  export default Form;