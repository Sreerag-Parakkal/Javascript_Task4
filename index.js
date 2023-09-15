 checkout(cart)
 .then((orderId)=>{
     proceedToPayment(orderId);
 })
 .then((paymetId)=>{
     confirmOrder(paymetId);
 })
