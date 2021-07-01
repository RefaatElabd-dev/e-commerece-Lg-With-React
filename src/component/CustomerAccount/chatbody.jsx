import React, { Component } from 'react';
import axios from 'axios';
import AuthService from '../Services/auth.service';
import { HubConnection, HubConnectionBuilder } from "@microsoft/signalr";

class Chatbody extends Component {
  state={
    connection:null,
    seller:{},
    messages:[],
    test:""

  }
  getsellerdetails=async(_sid)=>{
    axios.get("https://localhost:44340/api/SellersAPI/"+_sid).then(
      res=>{
        console.log(res.data)
        this.setState({seller:res.data})
 
      }
    ).catch(err=>
     console.log(err))
 
  }
  getchatmessage=async(_sid)=>{
    axios.get("https://localhost:44340/api/ChatHubs/"+AuthService.getCurrentUser().id+"/"+_sid).then(
      res=>{
        console.log(res.data)
        this.setState({messages:res.data})
 
      }
    ).catch(err=>
     console.log(err))

  }
  sendmessage=async()=>{
    if(AuthService.getCurrentUser().id){
   await axios.post("https://localhost:44340/api/ChatHubs/",{
        "UserName":AuthService.getCurrentUser().userName,
       "Text":this.state.text,
      "UserID":AuthService.getCurrentUser().id,
      "sellerId":this.props.match.params.id,
     
    }).then(
      window.location.reload()
      //this.setState({messages:res.data})
      )

  }}
  deletemessage=async(_mid)=>{
    if(AuthService.getCurrentUser().id){
   await axios.delete("https://localhost:44340/api/ChatHubs/removemessage/"+_mid).then(
      window.location.reload()
      
      )

  }}
async componentDidMount(){
 await this.getsellerdetails(this.props.match.params.id);
//await this.getchatmessage(this.props.match.params.id);
const connect = new HubConnectionBuilder()
      .withUrl("https://localhost:44340/ChatHubs")
      .withAutomaticReconnect()
      .build();
this.setState({connection:connect});
if (this.state.connection) {
  this.state.connection
    .start()
    .then(() => {
      this.state.connection.on("ReceiveMessage",
      //this.getchatmessage(this.props.match.params.id)
      console.log("done")
      );
    })
    .catch((error) => console.log(error));
}

}
  render() {
    console.log(this.state.connection)
 const {seller}=this.state;
    return (
      <React.Fragment>
    <div className="col-md-6 col-xl-8 chat">
      <div className="card">
        <div className="card-header msg_head">
          <div className="d-flex bd-highlight">
           
            <div className="user_info">
              <span>Chat with {seller.firstName +"  "+ seller.lastName} </span>
              <p>{this.state.messages.length} Messages</p>
            </div>
            
          </div>
          <span id="action_menu_btn">
            <i className="fas fa-ellipsis-v" />
          </span>
          <div className="action_menu">
            <ul>
              <li>
                <i className="fas fa-user-circle" /> View profile
              </li>
              <li>
                <i className="fas fa-users" /> Add to close friends
              </li>
              <li>
                <i className="fas fa-plus" /> Add to group
              </li>
              <li>
                <i className="fas fa-ban" /> Block
              </li>
            </ul>
          </div>
        </div>
        <div className="card-body msg_card_body">

        {this.state.messages.map((m,i)=>
        <div>
          {
            m.userName==AuthService.getCurrentUser().userName ? 
            
            <div className="d-flex justify-content-end mb-4">
            <div className="msg_cotainer_send">
              <button 
              onClick={() => { if (window.confirm('Are you sure you wish to delete this item?')) this.deletemessage(m.id) } } 
              >
            {m.text} 
              <span className="msg_time_send ">{m.when}</span>
              </button>
            </div>
            </div>:
             <div className="d-flex justify-content-start mb-4">
          
             <div className="msg_cotainer">
                {seller.firstName}: {m.text}
               <span className="msg_time mt-3">{m.when}</span>
             </div>
           </div>
         
          }
           </div>
          )
         
          }
         
         
         </div>
        <div className="card-footer">
          <div className="input-group">
            <div className="input-group-append">
            
            </div>
            <textarea
              name
              className="form-control type_msg"
              placeholder="Type your message..."
              defaultValue={""}
              onChange={(e)=>this.setState({text:e.currentTarget.value})}
            />
            <div className="input-group-append">
            <button onClick={this.sendmessage}> 
              <span className="input-group-text send_btn">
              <i className="fas fa-location-arrow" />
              </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>


      </React.Fragment>)}}
      export default Chatbody;