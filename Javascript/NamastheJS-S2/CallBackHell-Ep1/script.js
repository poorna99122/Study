//Call Back Hell 
// Good Part 
// Bad Part


/*

*/

/*
1.Call Back Hell 
2.Inversion of control 
*/




/*
--> Javascript is a synchronous single thread language 
--> It has only one call stack and can execute one thing at a time
--> It doesn't wait for anything
*/

console.log("Namasthe");

console.log("Javascript");

console.log("Season 2");

/*
Here Javascript runs these line by line 
**-> And Time Tide Javascript Waits for none
But what if we really need to wait for something ?
So, These can be done by callbacks 
*/


/*
Suppose if we need line 26 to be executed after few seconds !!
*/

setTimeout(function () {
    console.log("Javascript");
    }, 5000);

    /*
    We gave this callback function to the setTimeout function 
    The Job of setTimeout is to execute this call back function after 5 secs
    Using a callback is the powerful way to do asynchronous thing in JS

    -> We can take a piece of code and pass it as callback which can be executed later point of time 
    */


    // Example 
    /*
     Suppose we are building an e-commerce website 
    E-commerce website cant exists without Cart 
    */

   
    // Add array of items to the cart 
    const cart = ["shoe","pants","kurthas"];


      /*
      Once we have the items into cart 
    ->Create an Order 
    ->Payment

      suppose if we have access to two backend APIs 
    *One is createOrder API
    *Another is proceed to payment
    */

        /*
      api.createOrder();
      api.proceedToPayment();
     */



         /*
    So with these two backend APIs how it works is to create an order 
    Once the order is created then only we can proceed to payment, there is a dependency between them 
    How do we manage that dependency in the code 
    Because this is an async opertaion isn't it ?
    So, Here callback can come into picture 
    And callback can help us to write code for this kind of behaviour 
    So let us see a very common pattern which we follow in programming 
        */

    // So what we will do is we will again wrap our proceed to payment API inside a  callback function 
       /*
      function () {
        api.proceedToPayment();
      }
    */

    //   This callback function will be passed along with cart in createOrder API 

         /*
        api.createOrder(function () {
        api.proceedToPayment();
           });
    */

      //Now How this code will be excuted ?
          /*
      When JS engine executes this code it will call createOrderAPI
      Now as we passed call back function to createOrder API, So it is the responsibility of createOrderAPI 
      to create an Order and call this function back 
      That way we can handle Async operations in JS
    */

    

    //   Created Order -> Payment -> Order Summary 
         /*
     For summary we are having another API called showOrderSummary 
    We have to call this API only after we are done with the payment
    Again here callBack function comes into picture 

    function(){
        api.showOrderSummary();
    }

    Now we will pass this call back in proceedToPayment
    */
        /*
     api.createOrder(function () {
        api.proceedToPayment( function(){
            api.showOrderSummary();
        });
      });
    */

    //   Created Order -> Payment -> Order Summary -> Update the wallet
        /*
      To update the wallet,
      api.updateWallet()
          function () {
        api.updateWallet();
        }
    */

    // wallet should be updated only after showing the summary 

    /*
     api.createOrder(function () {
        api.proceedToPayment( function(){
            api.showOrderSummary( function () {
                api.updateWallet();
                });
        });
      });
    */


    //   The above structure is called callback hell 
    /*
      callBackHell -> one call back inside another callback and our code starts to grow horizontally instead of vertically, this is a call back hell 
      This is unmaintainable and unreadable 
      And this structure is known as pyramid of doom 
    */




    //   INVERSION OF CONTROL 

    /*
    It is like you loose the control of the code when we are using callbacks 
    Will see and example to see ->
    */


    api.createOrder(function () {
        api.proceedToPayment();
      });   

    
    /*
    Now what is happening in the code is we are creating an order 
      We take this callback function and we give it to create order API 
      Now we as a developer sitting back and relaxed and we are blindly trusting createOrderAPI
      How we are blindly trusting is we gave this callback function to createOrderAPI
      And Now we are expecting the createOrder function at some point of time will create and Order and will call our function back 
      Isn't it risky ?
      This is very risky 
      because we gave the control of our program to createOrderAPI 
      Now it is the responsibilty of createOrderAPI to call our function back 

      Now we dont know the createOrderAPI must have been in other service 
      So what if our callback function is never called !! 

      And what if our callBack function called twice 
      Then proceedToPayment will be called twice 

      So, Whenever we have the callBack function and pass it to someother function we are giving the control of our piece of code to someother code And we dont know what is happening behind the scenes 


      So, this is a very important problem we face as a developer when we use callBacks and we dont realize 
    */






    

    