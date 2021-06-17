import React, { Component } from 'react';
import { Link, Route ,BrowserRouter as Router,Switch} from 'react-router-dom';

import  Index from './AccountIndex';
import ChangePssword from './ChangePassword'
import RecentlyViewed from './Recentlyviews'; 
import SavedItems from './SavedItems';
import PendingReviews from './PendingReviews';
import Orders from './Orders';
import AccountDetails from './AccountDetails';
import AdressBook from './AdressBook';
import JumiaCredit from './JumiaCredit';
import Inbox from './Inbox';
import axios from 'axios';
import AuthService from '../Services/auth.service';
class JumiaAccount extends Component {
    state = {
      customer:{}
      }
    getcustomerdeatails=async()=>{
      if(AuthService.getCurrentUser().id){
      axios.get("https://localhost:44340/api/CustomersApi/"+AuthService.getCurrentUser().id).then(res=>
      this.setState({customer:res.data})
      )
    }}
    editcustomerdata=async(obj)=>{
      if(AuthService.getCurrentUser().id){
      axios.put("https://localhost:44340/api/CustomersApi/"+AuthService.getCurrentUser().id,obj).then(
      //this.setState({customer:res.data})
      )
    }}
  async  componentDidMount(){
    this.getcustomerdeatails();

    }
    render() { 
        return ( 
            <React.Fragment>
              
                <div className="header" style={{marginTop: 20, marginLeft: 20}}>
  <div className="container-fluid">
    <div className="row">
      <div className="col-md-3">
      <nav className="navbar  bg-white">
        <Router>
          <ul className="navbar-nav  w-100 ">
            <li className="nav-item " style={{backgroundColor: 'rgba(228, 224, 224, 0.452)'}}>
              <a className="nav-link" href="/Account/Index" id="myaccount"><i className="bi bi-person-fill" aria-hidden="true" />&nbsp;  My Jumia Accounnt</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/Account/Orders"><i className="fa fa-shopping-bag" />&nbsp;   Orders</a>
              <a className="nav-link" href="/Account/Inbox"><i class="far fa-envelope"/>&nbsp;   Inbox </a>
              <a className="nav-link" href="/Account/reviwsrating"><i class="far fa-comment-alt"/>&nbsp; Pending Reviews</a>
              <a className="nav-link" href="/Account/JumiaCredit"><i class="fas fa-credit-card"/> &nbsp; Jumia Credit</a>
              <a className="nav-link" href="/Account/wishlist"><i className="fa fa-heart" aria-hidden="true" />&nbsp; Saved
                Items</a>
    
            </li>
            <div className="dropdown-divider" />
            <li className="nav-item">
              <a className="nav-link" href="/Account/AccountDetails">Details</a>
              <a className="nav-link" href="/Account/AdressBook">Adress Book</a>
              <a className="nav-link" href="/Account/ChangePass">Change Password</a>
            
            </li>
            <div className="dropdown-divider" />
            <li className="nav-item  text text-center ">
              <button className="btn btn-warning"  onClick={AuthService.logout}>Log out</button>
            </li>
          </ul>
          </Router>
        </nav>
      </div>
      <div className="row col-md-8" style={{backgroundColor: 'white', marginLeft: 20}}>
        {/* routes for index */}
       <Router>
       <Switch>
       <Index cust={this.state.customer} path="/Account/Index"/>
       <ChangePssword path="/Account/ChangePass"/>
       <SavedItems path="/Account/wishlist"/>
       <PendingReviews path="/Account/reviwsrating"/>
       <Orders path="/Account/Orders"/>
       <JumiaCredit path='/Account/JumiaCredit'/>
      
       <AccountDetails cust={this.state.customer} onEdit={this.editcustomerdata} path="/Account/AccountDetails"/>
       <RecentlyViewed path="Account/RecentlyViewed"/>
       <AdressBook path="/Account/AdressBook"/>
       <Inbox path="/Account/Inbox"/>
       </Switch>
       </Router>
        {/* <Route path="/Account/Index" Component={Index} exact/>
        <Route path="/Account/ChangePass" Component={ChangePssword} exact/> */}
      
       
      </div>
      {/*       carousel               */}
      <div className="container-fluid  " style={{backgroundColor: 'white', margin: 30}}>
       <RecentlyViewed path="/Account/" />
      </div>
    </div>
  </div>
</div>

</React.Fragment>)}}
export default JumiaAccount;