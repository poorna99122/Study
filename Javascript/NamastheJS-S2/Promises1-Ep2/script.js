// Promises 

const cart = ["shoes","pants","kurthas"];

/*

*/


/*
createOrder(cart);  //orderId
proceedToPayment(orderId);
*/

/*
    *Let us assume that above are the two APIs.
    *These two are Asynchronus and dependent on Each other , So we dont know how much time they will take. 
    *We can only do proceedToPayment once we have created the order.
    *Now let us see that how we used to write this code using callbacks.
 */

// **** Now let us see that how we used to write this code using callbacks 

// Call Backs used to be very crucial when writing the asynchronus code in our programming


/*
So How we handle this type of situation in our code using call backs is that we wrap this function inside a call back function
*/


/*
function() {
proceedToPayment(orderId);
}

We design our APIs in such a way that we pass this callback function to create order API
*/


/* 
createOrder(cart,function() {
    proceedToPayment(orderId);
    });  //orderId
*/


/*
  Now the responsibility of createOder API is to create the order and calls our callback function back once the order is created with orderID
  This is how we use Aysnc Operations using callbacks
*/

/*
But there is very important issue with this code 
What is that issue 
That is issue is inversion of control 


Passing callback functions like this isn't relaiable,
 we are just giving control of our program to other part of code
 Which we are not aware of 

*/



//  Now lets see how we can handle these type of situations using promises 


/*
If we are desiging these APIs 
So we would have designed createOrderAPI in such a way that 
this createOrderAPI will no longer take a callback function but it will just take cart details 
And it will return as a promise 
*/



// What is a promise ? 
// We will capture that promise to a variable let us call it as promise ..
const promise = createOrder(cart);

//Whenever the above line is executed it will return a promise 

/*
We can assume it to be an empty object with some data value in it 
and this data value will hold whatever this createOrderAPI return to us  
This createOrderAPI is an async operation 
It will take some time to execute but we dont know how much time it will take 
But as soon as that above line excuted it will return us an Object with some data 
with some empty undeifined property  or empty value 
 */

// {data : undefined }

/* 
Whenever the line of code execute it will return as a promise with empty object in it 
After sometime this empty promise object will be filled with Data automatically 
And we will have orderDetails in it 
*/

// {data : orderDetails }

// Now we will attach a callBack function to this promise 
promise.then(function() { 
  proceedToPayment(orderId);
  });

  /*
  once we have data inside the promise object, then the callback function inside the promise 
  will be automatically called 
  */


  // We got to have one  doubt that how come this piece of code is better than the callback code ?
  


  









