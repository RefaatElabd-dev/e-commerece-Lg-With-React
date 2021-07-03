import React, { useRef, useEffect ,useState } from "react";
import axios from "axios";
import AuthService from "./Services/auth.service";
import { toast } from "react-toastify";


export default function Paypal(props) {
  const paypal = useRef();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
  let _id = user.id
  useEffect(() => {
    //if(props.street && props.country && props.city){
   
    window.paypal
      .Buttons({
        
        createOrder: (data, actions, err) => {
          
          return actions.order.create({
            intent: "CAPTURE",
            purchase_units: [
              {
                description: "Cool looking table",
                amount: {
                  value: 20.0,
                },
              },
            ],
          });
          
        },
        onApprove: async (data, actions) => {
          console.log("Done");
          await axios.post("https://localhost:44340/api/OrderApi/approveOrder/"+_id)
          await axios.delete("https://localhost:44340/api/CartsItemAPi/DeleteCartProductsForCustomer/"+_id)
          Window.location.reload();
        },
        onError: (err) => {
          console.log(err);
        },
      })
      .render(paypal.current);
  }, []);
console.log(props)
  return (
    <div>
      <div ref={paypal}></div>
    </div>
  );
}