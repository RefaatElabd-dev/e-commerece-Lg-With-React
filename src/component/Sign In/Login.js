import React, { Component } from 'react';
import Joi from 'joi-browser';
class Login extends Component {
  state = {
    email:'',
    password:'',
    errors:{}
   

}
CustomLoginHAndler = () => {
    let newobj = {
      email: this.state.email,
      password:this.state.password
      
    }
    console.log(newobj);
    this.props.SendLoginRef(newobj);
}
    render() { 
        return ( 
            <>
            <main className="d-flex align-items-center min-vh-100 py-3 py-md-0">
  <div className="container">
    <div className="card login-card">
      <div className="row no-gutters">
        <div className="col-md-5">
          <img src="./img/login.jpg" height="600px" alt="login" className="login-card-img w-100" />
        </div>
        <div className="col-md-7">
          <div className="card-body">
            <div className="brand-wrapper">
              <h1 className="text-warning"> <b>JUMIA</b></h1>
            </div>
            <p className="login-card-description   text-primary">Sign into your account</p>
            <form action="#!">
              <div className="form-group">
                <label htmlFor="email" className="sr-only">Email</label>
                <input type="email" name="email" id="email" className="form-control" placeholder="Email address"    required value={this.state.email}  onChange={(e)=>this.setState({email:e.target.value})}/>
              </div>
              <div className="form-group mb-4">
                <label htmlFor="password" className="sr-only">Password</label>
                <input type="password" name="password" id="password" className="form-control" placeholder="***********"   
                               required  value={this.state.password}   onChange={(e)=>this.setState({password:e.target.value})}/>
              </div>
              <input name="login" id="login" className="btn btn-block  login-mb-5 bg-warning d-inline-block " type="button" defaultValue="Login" onClick={this.CustomLoginHAndler} />
            </form>
            <div className="custom-control custom-checkbox">
              <input type="checkbox" className="custom-control-input" id="customCheck1" />
              <label className="custom-control-label m-3 d-inline-block" htmlFor="customCheck1">Rember me</label>
              <a href="#!" className="forgot-password-link m-3 d-inline-block font-weight-bold text-warning">Forgot your password?</a>
            </div>
            <p className="login-card-footer-text">Don't have an account? <a href="register.html" className="text-reset">Register here</a></p>
            <div className="form-group"> 
              <a href="#" className="btn btn-primary  btn-social btn-facebook mb-4  ">
                <i className="fa fa-facebook-f mr-2" />
                <span className="font-weight-bold">  login with Facebook</span>
              </a>
            </div>   
            <nav className="login-card-footer-nav">
              <a href="#!">Terms of use.</a>
              <a href="#!">Privacy policy</a>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </div>
</main>


            </>
         );
    }
}


 
export default Login;

