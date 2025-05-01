

// function buyNow(){
//     let qty = prompt("Enter your quantity : ");
//     if(qty!=null)
//     alert(`your order has been placed for quantity of ${qty} `);
// }

function buyNow(button){
      const itemName = button.parentNode.querySelector('h3').textContent;
    let qty = prompt(`Enter the quantity for ${itemName}:`);
    if(qty != null ) {
    alert(`Your order for ${qty} of ${itemName} has been placed.`);
    } else if (qty === null) {
    alert(`Order for ${itemName} cancelled.`);
    } else {
     alert(`No quantity entered for ${itemName}. Order cancelled.`);
    }
   }
   

