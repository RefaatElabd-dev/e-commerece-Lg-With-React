import React, { Component } from 'react';
import { Link } from 'react-router-dom';



class Footer extends Component {
    state = {  }
    render() { 
        return ( 
            // <!-- Footer -->
                <footer className="bg-dark text-center text-white">
                    {/* <!-- Grid container --> */}
                    <div className="container p-4">
                        <a className="navbar-brand" style={{color: "white"}}  href="#"><h1> <b>J6E-Commerce </b> <i className="far fa-shopping-cart"></i></h1></a>
                    {/* <!-- Section: Social media --> */}
                    <section className="mb-4">
                        {/* <!-- Facebook --> */}
                        <a className="btn btn-outline-light btn-info m-1" href="#!" role="button"
                        ><i className="fab fa-facebook-f"></i ></a>
                
                    
                
                        {/* <!-- Google --> */}
                        <a className="btn btn-outline-light btn-light m-1" href="#!" role="button"
                        ><i className="fab fa-google"></i></a>


                        {/* <!-- Twitter --> */}
                        <a className="btn btn-outline-light btn-primary m-1" href="#!" role="button"
                        ><i className="fab fa-twitter"></i ></a>
                
                        {/* <!-- Instagram --> */}
                        <a className="btn btn-outline-light btn-light m-1" href="#!" role="button"
                        ><i className="fab fa-instagram"></i ></a>
                
                        {/* <!-- Linkedin --> */}
                        <a className="btn btn-outline-light btn-info m-1" href="#!" role="button"
                        ><i className="fab fa-linkedin-in"></i></a>
                
                        
                    </section>
                    <div className="col-auto text-center">
                        <p className="pt-2">
                            <strong>New to Jumia?</strong><br/>
                        <label>Subscribe to get updates on our latest offers!</label>
                        
                        </p>
                    </div>
                    {/* <!-- Section: Social media --> */}
                
                    {/* <!-- Section: Form --> */}
                    <section className="">
                        <form action="">
                        {/* <!--Grid row--> */}
                        <div className="row d-flex justify-content-center">
                            {/* <!--Grid column--> */}
                        
                            {/* <!--Grid column--> */}
                
                            {/* <!--Grid column--> */}
                            <div className="col-md-5 col-12">
                            {/* <!-- Email input --> */}
                            <div className="form-outline form-white mb-4">
                                <input type="email" id="form5Example2" className="form-control "  placeholder="Enter E-mail address" />
                                {/* <!-- <label className="form-label" for="form5Example2">Email address</label> --> */}
                                
                            </div>
                            </div>
                            
                            {/* <!--Grid column--> */}
                
                            {/* <!--Grid column--> */}
                            <div className="col-auto">
                            {/* <!-- Submit button --> */}
                            <button type="submit" className="btn btn-outline-warning mb-4 mr-1" style={{height: "45px" }}>
                                female
                            </button>
                            <button type="submit" className="btn btn-outline-warning mb-4" style={{height: "45px"}}>
                            male
                            </button>

                            </div>

                            {/* <!--Grid column--> */}
                        </div>
                        {/* <!--Grid row--> */}
                        </form>
                    </section>
                    {/* <!-- Section: Form --> */}
                
                    {/* <!-- Section: Text --> */}
                    {/* <!-- <section className="mb-4"> */}
                        <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt distinctio earum
                        repellat quaerat voluptatibus placeat nam, commodi optio pariatur est quia magnam
                        eum harum corrupti dicta, aliquam sequi voluptate quas.
                        </p>
                    {/* </section> --> */}
                    {/* <!-- Section: Text --> */}
                
                    {/* <!-- Section: Links --> */}
                    <section className="">
                        {/* <!--Grid row--> */}
                        <div className="row">
                        {/* <!--Grid column--> */}
                        <div className="col-lg-6 col-md-6 mb-4 mb-md-0  text-left ">
                            <h6 className="text-uppercase">let us help you</h6>
                
                            <ul className="list-unstyled mb-0 " >
                            <li>
                            <Link to='/HelpCenter' className="text-white" >Help center</Link>                            </li>
                            <li>
                            <Link to='/ContactUs' className="text-white">Contact us</Link>
                            </li>
                            <li>
                                <a href="#!" className="text-white">How to buy on jumia</a>
                            </li>
                            <li>
                                <a href="#!" className="text-white">Delivery timelines</a>
                            </li>
                            <li>
                                <a href="#!" className="text-white">Return policy </a>
                            </li>
                            <li>
                                <a href="#!" className="text-white">Corporate Services </a>
                            </li>
                            <li>
                                <a href="#!" className="text-white">Report a product </a>
                            </li>
                            </ul>
                        </div>
                        {/* <!--Grid column--> */}
                
                        {/* <!--Grid column--> */}
                        <div className="col-lg-6 col-md-6 mb-4 mb-md-0 text-left ">
                            <h6 className="text-uppercase">About J6E-Commerce Egypt</h6>
                
                            <ul className="list-unstyled mb-0">
                            <li>
                            <Link to="/AboutUS" className="text-white">About Us</Link>
                            </li>
                            <li>
                                <a href="#!" className="text-white">JUMIA Careers</a>
                            </li>
                            <li>
                                <a href="#!" className="text-white">Terns and Conditions</a>
                            </li>
                            <li>
                                <a href="#!" className="text-white">Privacy Policy</a>
                            </li>
                            <li>
                                <a href="#!" className="text-white">JUMIA Express</a>
                            </li>
                            <li>
                                <a href="#!" className="text-white">JUMIA Mall</a>
                            </li>
                            <li>
                                <a href="#!" className="text-white">JUMIA Logistics Services</a>
                            </li>
                            <li>
                                <a href="#!" className="text-white">Ramadan</a>
                            </li>
                            </ul>
                        </div>
                      
                        </div>
                       
                    </section>
                
                    </div>
                   
                    <div className="text-center p-3" style={{backgroundColor: "rgba(0, 0, 0, 0.2)"}}>
                    ©️ 2020 Copyright:
                    <a className="text-white" href="https://mdbootstrap.com/">JUMIA.com</a>
                    </div>
                    {/* <!-- Copyright --> */}
                </footer>
         );
    }
}
 
export default Footer;