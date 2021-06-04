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

import NavBar from './navBar-component/Nav';
import Card from './Card'
import Login from './Sign In/Login';
import Register from './Sign In/Register';
import Home from './Home';
import AllBestSelling from './allbestselling';
import Product from './Product';
import SubcatProd from './Category data/subcatprod';
import Images from './Images';
import Subcategory from './subcategory data/subcategory'


class App extends Component {
  state = {
     products:[
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
    
    axios.post("http://localhost:3000/Customers",newObj).then(res=>{
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
                 <Route component={() => <Register SendRegisterRef={this.addnewcustomer} />} path="/Register"  /> 
                 <Route component={() => <Login SendLoginRef={()=>this.login()} />} path="/Login"  /> 
                 <Route component={(props)=><AllBestSelling {...props} />} path="/allbestselling" />

                 <Images path="/Images/" exact />
                <Route render={(props)=><Product {...props}/>} path="/product/:id" />
                <Route render={(props)=><SubcatProd {...props}/>} path="/subcatprod" />
                <Route render={(props)=><Category {...props}/>} path="/category/:id" />
                <Route component={Card} path="/card" />
                <Route render={(props)=><Subcategory  {...props}/>}  path="/subcategory/:id"/>
                 <JumiaAccount path="/Account" />
                 </Switch>
                
               
               <Footer/>
                 
            </Router>
      
       
           
      </React.Fragment>
    );
  }
}

export default App;