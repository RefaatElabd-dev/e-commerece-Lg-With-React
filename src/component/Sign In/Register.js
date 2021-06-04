import React, { Component } from "react";
import Joi from "joi-browser";
class Register extends Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phone: "",
    checkTerms: false,
    errors: {},
  };

  CustomRegister = () => {
    let newobj = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      password: this.state.password,
      phone: this.state.phone,
      checkTerms: this.state.checkTerms,
    };
  //   if (newobj.checkTerms == true) {
  //     this.props.SendRegisterRef(newobj);
  //   } else {
  //     //console.log(newobj)
  //     alert("you must accept terms");
  //     console.log(this.props.history);
  //   }
  // };
  // handleChangeCheck = (e) => {
  //   this.setState({
  //     checkTerms: e.target.checked,
  //   });
  //   console.log(e.target.checked);
   };
  schema = {
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
    phone: Joi.string().min(6).required(),
    //acceptTerms: Joi.boolean().valid(true).required()
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

    //Call Backend
    console.log("submit");
  };
  handleChange = (e) => {
    //Clone
    let state = { ...this.state };
    //Edit
    state[e.currentTarget.name] = e.currentTarget.value;
    //Set state
    this.setState(state);
  };

  render() 
  {
    return (
      <>
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
                src="./img/register3.jpg"
                alt
                className="img-fluid mb-3 d-none d-md-block"
                style={{ height: 300 }}
              />
              {/* <img src="https://res.cloudinary.com/mhmd/image/upload/v1569543678/form_d9sh6m.svg" alt="" class="img-fluid mb-3 d-none d-md-block">   */}
              <h1>Create an Account</h1>
              <p />
            </div>
            {/* Registeration Form */}
            <div className="col-md-7 col-lg-6 ml-auto">
              <form onSubmit={this.handleSubmit}>
                <div className="row">
                  {/* id */}
                  {/* <div className="input-group col-lg-6 mb-4">
                        <div className="input-group-prepend">
                          <span className="input-group-text bg-white px-4 border-md border-right-0">
                            <i className="fa fa-user text-muted" />
                          </span>
                        </div>
                        <input id="id" type="text" name="id" placeholder="id" className="form-control bg-white border-left-0 border-md" value={this.state.id}
                         onChange={(e)=>this.setState({id:e.target.value})}/>
                      </div> */}
                  {/* First Name */}
                  <div className="input-group col-lg-6 mb-4">
                    <div className="input-group-prepend">
                      <span className="input-group-text bg-white px-4 border-md border-right-0">
                        <i className="fa fa-user text-muted" />
                      </span>
                    </div>
                    <input
                      id="firstName"
                      type="text"
                      name="firstname"
                      placeholder="First Name"
                      className="form-control bg-white border-left-0 border-md"
                      value={this.state.firstName}
                      onChange={(e) =>
                        this.setState({ firstName: e.target.value })
                      }
                    />
                    {this.state.errors.firstName && (
                      <div className="alert alert-danger">
                        {this.state.errors.firstName}
                      </div>
                    )}
                  </div>
                  {/* Last Name */}
                  <div className="input-group col-lg-6 mb-4">
                    <div className="input-group-prepend">
                      <span className="input-group-text bg-white px-4 border-md border-right-0">
                        <i className="fa fa-user text-muted" />
                      </span>
                    </div>
                    <input
                      id="lastName"
                      type="text"
                      name="lastname"
                      placeholder="Last Name"
                      className="form-control bg-white border-left-0 border-md"
                      value={this.state.lastName}
                      onChange={(e) =>
                        this.setState({ lastName: e.target.value })
                      }
                    />
                    {this.state.errors.lastName && (
                      <div className="alert alert-danger">
                        {this.state.errors.lastName}
                      </div>
                    )}
                  </div>
                  {/* Email Address */}
                  <div className="input-group col-lg-12 mb-4">
                    <div className="input-group-prepend">
                      <span className="input-group-text bg-white px-4 border-md border-right-0">
                        <i className="fa fa-envelope text-muted" />
                      </span>
                    </div>

                    <input
                      type="text"
                      name="email"
                      id="email"
                      className="form-control"
                      placeholder="Email address"
                      value={this.state.email}
                      onChange={(e) => this.setState({ email: e.target.value })}
                    />
                    </div>
                    {this.state.errors.email && (
                      <div className="alert alert-danger form-control" style={{marginLeft:"15px",marginTop:"0px"}}>
                        {this.state.errors.email}
                      </div>
                    )}
                  
                  {/* Phone Number */}
                  <div className="input-group col-lg-12 mb-4">
                    <div className="input-group-prepend">
                      <span className="input-group-text bg-white px-4 border-md border-right-0">
                        <i className="fa fa-phone-square text-muted" />
                      </span>
                    </div>
                    <select
                      id="countryCode"
                      name="countryCode"
                      style={{ maxWidth: 80 }}
                      className="custom-select form-control bg-white border-left-0 border-md h-100 font-weight-bold text-muted"
                    >
                      <option value>+12</option>
                      <option value>+10</option>
                      <option value>+15</option>
                      <option value>+18</option>
                    </select>
                    <input
                      id="phone"
                      type="tel"
                      name="phone"
                      placeholder="Phone Number"
                      className="form-control bg-white border-md border-left-0 mb-0 "
                      value={this.state.phone}
                      onChange={(e) => this.setState({ phone: e.target.value })}
                    />
                     </div>
                    {this.state.errors.phone && (
                      <div className="alert alert-danger" style={{marginLeft:"15px",marginTop:"0px"}}>
                        {this.state.errors.phone}
                      </div>
                    )}
                  
                  .{/* Password */}
                  <div className="input-group col-lg-12 mb-4">
                    <div className="input-group-prepend">
                      <span className="input-group-text bg-white px-4 border-md border-right-0">
                        <i className="fa fa-lock text-muted" />
                      </span>
                    </div>
                    <input
                      id="password"
                      type="password"
                      name="password"
                      placeholder="Password"
                      className="form-control bg-white border-left-0 border-md"
                      value={this.state.password}
                      onChange={(e) =>
                        this.setState({ password: e.target.value })
                      }
                    />
                    </div>
                    {this.state.errors.password && (
                      <span className="alert alert-danger " style={{marginLeft:"15px",marginBottom:"0px"}}>
                        {this.state.errors.password}
                      </span>
                    )}
                  
                  {/* checkbox */}
                  <div className="custom-control ">
                    <input
                      type="checkbox"
                      id="checkTerms"
                      name="checkTerms"
                      value={this.state.checkTerms}
                      onChange={this.handleChangeCheck}
                    />
                    <label htmlFor="customCheck1"> &nbsp; I accept the</label>
                    <a
                      href="#!"
                      className="forgot-password-link m-3 d-inline-block font-weight-bold text-warning"
                    >
                      Terms &amp; Conditions
                    </a>
                  
          
                  </div>
                  {/* Submit Button */}
                  <div className="form-group col-lg-12 mx-auto mb-0">
                    <button
                      href="#"
                      type="submit"
                      className="btn btn-primary btn-block py-2"
                      onClick={this.CustomRegister}
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
                      className="btn btn-primary btn-block py-2 btn-facebook"
                    >
                      <i className="fa fa-facebook-f mr-2" />
                      <span className="font-weight-bold">
                        Continue with Facebook
                      </span>
                    </a>
                    <a
                      href="#"
                      className="btn btn-primary btn-block py-2 btn-twitter"
                    >
                      <i className="fa fa-twitter mr-2" />
                      <span className="font-weight-bold">
                        Continue with Twitter
                      </span>
                    </a>
                  </div>
                  {/* Already Registered */}
                  <div className="text-center w-100">
                    <p className="text-muted font-weight-bold">
                      Already Registered?{" "}
                      <a href="login.html" className="text-primary ml-2">
                        Login
                      </a>
                    </p>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Register;
