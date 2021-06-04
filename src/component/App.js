import React, { Component } from 'react';
import {Helmet} from "react-helmet";
import { BrowserRouter as Router, Route, Link,Switch } from 'react-router-dom'
import axios from 'axios'
//import SavedItems from './SavedItems';
import "../Styles/Footer.css";
import "../Styles/NavBar.css";
import "../Styles/JumiaAccount.css";
import "../Styles/ChangePassword.css";
import "../Styles/Home.css";
import Footer from "./navBar-component/Footer"

//import Register from "./Register"
//import PedingView from "./PedingView"
//import RecentlyViewed from "./RecentlyViewed";
//import Register from "./Sign In/Register";
import JumiaAccount from './CustomerAccount/JumiaAccount';
import Test from './test';
import NavBar from './navBar-component/Nav';
//import Orders from './Orders';
import Login from './Sign In/Login';
import Register from './Sign In/Register';
import Home from './Home';
import AboutUs from "./AboutUs";
import ContactUs from "./ContactUs";
import HelpCenter from "./HelpCenter";
import Cart from "./Cart";
import Product from "./Product";
import {BiStar} from 'react-icons/bi'
import Guide from './SellerComponent/KnowledgeTraning/Guide';
import NavSeller from './SellerComponent/NavSeller';
import FooterSeller from "./SellerComponent/FooterSeller";
import VendorHub from './SellerComponent/VendorHub';
import Knowledge from './SellerComponent/KnowledgeTraning/Knowledge';
import Community from './SellerComponent/VendorCommunity/Community';
import Stories from './SellerComponent/VendorCommunity/Stories';
import Events from './SellerComponent/VendorCommunity/Events';
import Stations from './SellerComponent/Stations';
import BookTraining from './SellerComponent/Training/BookTraining';
import VendorHelp from './SellerComponent/VendorHelp';
import JumiaTrain from './SellerComponent/Training/JumiaTrain';
import ClaimForm from './SellerComponent/ClaimForm';


class App extends Component {
  state = { products:[
    { Id:1, Name: "chips", Price: 19, PhotoUrl: "https://eg.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/54/99402/1.jpg?7587", Count: 0, Description: "chips made of potatios", IsInCart: false },
    { Id:2, Name: "Oil", Price: 10, PhotoUrl: "https://eg.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/33/114581/1.jpg?0490", Count: 0, Description: "Oil for food", IsInCart: false },
    { Id:3, Name: "Choklate", Price: 11, PhotoUrl: "https://eg.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/95/833091/1.jpg?4297", Count: 0, Description: "Galaxi for you", IsInCart: false },
    { Id:4, Name: "Tea", Price: 12, PhotoUrl: "https://eg.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/07/160871/1.jpg?4925", Count: 0, Description: "Lenbton tea", IsInCart: false },
    { Id:5, Name: "Oreo", Price: 13, PhotoUrl: "https://eg.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/55/910081/1.jpg?4963", Count: 0, Description: "Oreo with creama", IsInCart: false },
    { Id:6, Name: "colorix", Price: 14, PhotoUrl: "https://eg.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/97/035671/1.jpg?6646", Count: 0, Description: "Clorix for clean", IsInCart: false },
    { Id:7, Name: "coca-cola", Price: 15, PhotoUrl: "https://eg.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/48/385112/1.jpg?0684", Count: 0, Description: "coca-cola soda category", IsInCart: false },
    { Id:8, Name: "Tang", Price: 16, PhotoUrl: "https://eg.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/37/910081/1.jpg?9216", Count: 0, Description: "tang 1 cup of juice", IsInCart: false },
    { Id:9, Name: "Persil", Price: 17, PhotoUrl: "https://eg.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/91/824991/1.jpg?8988", Count: 0, Description: "persil for clothes", IsInCart: false },
  ],
Customers:[]


}

  addnewcustomer = (newObj) => {
    console.log("AddnewCustomer");
    console.log(newObj);
    
    axios.post("http://localhost:21231/api/Customers",newObj).then(res=>{
        this.setState({
            Customers:res.Customers
        })
    }).catch(error=>{
        console.log(error)
    })
    
}

 login=(obj)=>{
 
  this.state.setters.push(obj);
  
  this.setState({
   
    setters:this.state.setters

})
console.log("ddddd",this.state.setters)


 }
 



  render() { 

    return ( 
      <React.Fragment>
        <Helmet>
          <title>J6 Ecommerece</title>
        </Helmet>
        
        
               
               <Router>
               <NavBar/>
             
             <Switch>
               <Route component={Home} path="/" exact /> 
               <Route component={Home} path="/Home" exact /> 

                 <Route component={() => <Register SendRegisterRef={this.addnewcustomer} />} path="/Register"  /> 
                 <Route component={() => <Login SendLoginRef={()=>this.login()} />} path="/Login"  />  
                 {/* <Route component={JumiaAccount} path="/Account"/>  */}
                 <JumiaAccount path="/Account" />
                 <Route path="/AboutUs" component={AboutUs} />
              <Route path="/ContactUs" component={ContactUs} />
              <Route path="/HelpCenter" component={HelpCenter} />
              <Route path="/Cart" component={Cart} />
              <Route path="/Product" component={Product} />
              <Router>
                <NavSeller/>
                <div className="">
                  <Route component={Knowledge} path="/Knowledge"/>
                  <Route component={VendorHub} path="/VendorHub"/>
                  <Route component={Community} path="/Vendor/Community"/>
                  <Route component={Stories} path="/Vendor/Stories"/>
                  <Route component={Events} path="/Vendor/Events"/>
                  <Route component={Stations} path="/Stations"/>
                  <Route component={BookTraining} path="/BookTraining"/>
                  <Route component={VendorHelp} path="/VendorHelp"/>
                  <Route component={JumiaTrain} path="/JumiaTrain"/>
                  <Route component={ClaimForm} path="/ClaimForm"/>
                </div>
                <FooterSeller/>
              </Router>
                 </Switch>
                
                
               <Footer/>
                 
            </Router>
      
         <Test/>
           
      </React.Fragment>
    );
  }
}

export default App;
