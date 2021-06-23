paypal.Buttons({
    style : {
        color: 'blue', 
        shape: 'pill'
    },
    createOrder: function (data, actions) {
        return actions.order.create({
            purchase_units : [{
                amount: {
                    value: '0.1'
                }
            }]
        });
    },
    onApprove: function (data, actions) {
        return actions.order.capture().then(function (details) {
            //console.log(details)
            console.log("done")
           // window.location.replace("http://localhost:3000/paypal/success.html")
        })
    },
    onCancel: function (data) {
        //window.location.replace("http://localhost:3000/paypal/Oncancel.html")
        console.log("failed")
    }
}).render('#pay1');