// function greeting(name) {
//     alert(`Hello, ${name}`);
//   }
  
//   function processUserInput(callback) {
//     const name = prompt("Please enter your name.");
//     callback(name);
//   }

  
  
//   processUserInput(greeting);


//   function processUserInput(callback) {
//     const name = prompt("Please enter your name.");
//     callback(name);
//   }

  
  
//   processUserInput(function greeting(name) {
//     alert(`Hello, ${name}`);
//   });



  



//   function payment(item){ !
//     console.log(item+" is added and proceeding to payment !!");
//   }

//   function cart(){
//     let cartItems = prompt("Please give items input: ")
//     payment(cartItems);
//   }

//   cart();


  function payment(item){ !
    console.log(item+" is added and proceeding to payment !!");
  }

  function cart(callback){
    let cartItems = prompt("Please add the items to the cart: ")
    callback(cartItems);
  }

  cart(payment);