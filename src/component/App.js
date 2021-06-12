import React, { Component } from 'react';
import {Helmet} from "react-helmet";
import { BrowserRouter as Router, Route, Link,Switch } from 'react-router-dom';
import axios from 'axios';


import "../Styles/Footer.css";
import "../Styles/NavBar.css";
import "../Styles/JumiaAccount.css";
import "../Styles/Home.css";
import "../Styles/ChangePassword.css";
import "../Styles/Product.css";
import "../Styles/Category.css"
import Footer from "./navBar-component/Footer"

import JumiaAccount from './CustomerAccount/JumiaAccount';
import Category from "./Category data/category"
import AuthService from './Services/auth.service';
import NavBar from './navBar-component/Nav';
import Card from './Card'
import Login from './Sign In/Login';
import Register from './Sign In/Register';
import Home from './Home';
import Brand from './Brand data/brand'

import AboutUs from "./AboutUs";
import ContactUs from "./ContactUs";
import HelpCenter from "./HelpCenter";
import Cart from "./Cart";

import {BiStar} from 'react-icons/bi'
import Guide from './SellerComponent/KnowledgeTraning/Guide';
import NavSeller from './SellerComponent/NavSeller';
import FooterSeller from "./SellerComponent/FooterSeller";
//import VendorHub from './SellerComponent/VendorHub';
import Knowledge from './SellerComponent/KnowledgeTraning/Knowledge';
import Community from './SellerComponent/VendorCommunity/Community';
import Stories from './SellerComponent/VendorCommunity/Stories';
import Events from './SellerComponent/VendorCommunity/Events';
import Stations from './SellerComponent/Stations';
import BookTraining from './SellerComponent/Training/BookTraining';
import VendorHelp from './SellerComponent/VendorHelp';
import JumiaTrain from './SellerComponent/Training/JumiaTrain';
import ClaimForm from './SellerComponent/ClaimForm';


import AllBestSelling from './allbestselling';
import Product from './Product';
import SubcatProd from './Category data/subcatprod';
import Images from './Images';
import Subcategory from './subcategory data/subcategory'


class App extends Component {
  state = {
     products:[
    // { Id:1, Name: "chips", Price: 19, PhotoUrl: "https://eg.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/54/99402/1.jpg?7587", Count: 0, Description: "chips made of potatios", IsInCart: false },
    // { Id:2, Name: "Oil", Price: 10, PhotoUrl: "https://eg.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/33/114581/1.jpg?0490", Count: 0, Description: "Oil for food", IsInCart: false },
    // { Id:3, Name: "Choklate", Price: 11, PhotoUrl: "https://eg.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/95/833091/1.jpg?4297", Count: 0, Description: "Galaxi for you", IsInCart: false },
    // { Id:4, Name: "Tea", Price: 12, PhotoUrl: "https://eg.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/07/160871/1.jpg?4925", Count: 0, Description: "Lenbton tea", IsInCart: false },
    // { Id:5, Name: "Oreo", Price: 13, PhotoUrl: "https://eg.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/55/910081/1.jpg?4963", Count: 0, Description: "Oreo with creama", IsInCart: false },
    // { Id:6, Name: "colorix", Price: 14, PhotoUrl: "https://eg.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/97/035671/1.jpg?6646", Count: 0, Description: "Clorix for clean", IsInCart: false },
    // { Id:7, Name: "coca-cola", Price: 15, PhotoUrl: "https://eg.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/48/385112/1.jpg?0684", Count: 0, Description: "coca-cola soda category", IsInCart: false },
    // { Id:8, Name: "Tang", Price: 16, PhotoUrl: "https://eg.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/37/910081/1.jpg?9216", Count: 0, Description: "tang 1 cup of juice", IsInCart: false },
    // { Id:9, Name: "Persil", Price: 17, PhotoUrl: "https://eg.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/91/824991/1.jpg?8988", Count: 0, Description: "persil for clothes", IsInCart: false },
],
productsIncart:[],
Customers:[]

}
async componentDidMount() {
  //  const promise=fetch('https://jsonplaceholder.typicode.com/posts');
  //  const res = promise.then(res => res.json());
  //  res.then(data => console.log(data));

  const { data } = await axios.get(
    'https://localhost:44340/api/ProductsAPi'
  );
  this.setState({products:data});
  console.log(data);

  
};
async componentDidMount() {
 const {data}  = await axios.get(
    'https://localhost:44340/api/CartsItemAPi/productsIncart/1'
  );
  this.setState({productsIncart:data});
  console.log(data);
}
deleteFromCart= async(productId)=> {
  const oldproductsIncart = [...this.state.productsIncart];
  // axios.delete(
  //    'https://localhost:44340/api/CartsItemAPi/deleteProductsFromCart/1',{productId}
  //  );
  const productsIncart = this.state.productsIncart.filter((p) => p.productId !== productsIncart.productId);
   this.setState({productsIncart});
   try {
    await axios.delete(
      'https://localhost:44340/api/CartsItemAPi/deleteProductsFromCart/1',{productId}
    );
  } catch (ex) {
    alert("Cant Delete");
    this.setState({ productsIncart: oldproductsIncart });
  }
   console.log(productsIncart);
 };
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
handelInCartChange = (product) => {
  const products = [...this.state.products];
  const index = products.indexOf(product);
  products[index] = { ...products[index] };
  products[index].isInCart = !products[index].isInCart;
  this.setState({ products });
  try {
    //Call B
    axios.delete(
      "https://localhost:44340/api/deleteProductsFromCart/" + product.productId
    );
  } catch (ex) {
    alert("Cant Delete");
    this.setState({ products: products });
  }
};
 

//  componentDidMount=()=>{
//   const config={
//     header:{Authorization:"Bearer "+localStorage.getItem('token')}
//   };
//   axios.get("http://localhost:21231/api/account/user",config)
//   .then(res=>{this.setState({user:res.data})})
//   // .then(res=>{console.log(res)})
//   .catch(err=>{console.log(err)});
// }

  render() { 

    return ( 
      <React.Fragment>
        <Helmet>
          <title>J6 Ecommerece</title>
        </Helmet>
        
        
               <Router>
               <NavBar user={this.state.user} productsCart={this.state.productsIncart}/>
             <Switch>
               <Route component={Home} path="/" exact /> 
               <Route component={Home} path="/Home" exact /> 

                 <Route component={(props) => <Register {...props}/>} path="/Register"  /> 
                 <Route component={(props) => <Login  {...props} />} path="/Login"  /> 
                 <Route component={(props)=><AllBestSelling {...props} />} path="/allbestselling" />
                 {/* <Route render={()=>AuthService.logout()}  path="/logout"/> */}
                 <Images path="/Images/" exact />
                <Route render={(props)=><Product {...props}/>} path="/product/:id" />
                <Route render={(props)=><SubcatProd {...props}/>} path="/subcatprod" />
                <Route render={(props)=><Category {...props}/>} path="/category/:id" />
                <Route component={Card} path="/card" />
                <Route render={(props)=><Subcategory  {...props}/>}  path="/subcategory/:id"/>
                <Route render={(props)=><Brand  {...props}/>}  path="/brand/:id"/>
                 <JumiaAccount path="/Account" />
                 <Route path="/AboutUs" component={AboutUs} />
              <Route path="/ContactUs" component={ContactUs} />
              <Route path="/HelpCenter" component={HelpCenter} />
              <Route
                path="/Cart"
                render={(props) => (
                  <Cart
                   key={this.state.productsIncart.productId}
                    productsCart={this.state.productsIncart}
                    // onCartChange={this.handelInCartChange}
                    onDelete={this.deleteFromCart}
                    {...props}
                  />
                )}
              />
              <Route path="/Product" component={Product} />
              <Router>
                <NavSeller/>
                <div className="">
                  <Route component={Knowledge} path="/Knowledge"/>
                  {/* <Route component={VendorHub} path="/VendorHub"/> */}
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
      
       
           
      </React.Fragment>
    );
  }
}

export default App;