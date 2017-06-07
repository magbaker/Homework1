// console.log("plugged in");
//
// var trigger = document.getElementById('BuyNowButton');
//
// var modal = document.getElementById('modalWrapper');
//
// var close = document.getElementById('modalclose');
//
// trigger.addEventListener('click', function addItem(){
//   console.log('big button clicked');
//
//   modal.style.visibility='visible';
// });
//


// Class Exercises
//
// var givenName;
// givenName="Brett";
// givenName=givenName
//
// // Print: "Hello, how are you Brett?"
// var greeting;
// greeting= "Hello, how are you " + givenName + "?";
// console.log(greeting);
//
//


// var high=50;
// var low=10;
//
// var math= high - low;
// // Q: What is math equal to?
// console.log(math);
// // A: 40
//
// math = high - "5";
// //Q: What is math equal to now?
// console.log(math);
// //A: 45

//
// var born = 1989
// var today = 2017
//
// var myAge= (today - born);
// console.log(myAge);
//
// var yourName = "Maggie";
// var instructorName = "Jordan";
//
// var statement = yourName + " is taking a class at The Iron Yard, my instructor's name is " + instructorName;
// console.log(statement);


// var isOld;
// if (myAge > 100){
//   isOld=true;
// } else{
//   isOld=false;
// }
//
// console.log(isOld);


// var students=["Brian", "Jesse", "Jessica", "Justin", "Matt", "Christie"];
// console.log(students [2], students [5]);
//
// function double(a) {
//   return a*2;
// }
//
// console.log(double(8));
// console.log(double(12));
// console.log(double(4));


//create a function that adds 3, results =10
// function addThree(x){
//   return x+3;
// }
//
// var result = addThree(7);
//
// console.log(result);


//call the half function with the number 100 and store the result in the result variable.

// function half(number){
//   return number / 2;
// }
//
// var result;
//
// result= half(100);
// console.log(result);


// function doubleAndAddTax(price) {
//   var result = price * 2;
//   result = result * 1.07;
//   return result;
// }
//
// console.log(doubleAndAddTax(35));


// var speech = sentence("Howdy ", "folks!");
//
// function sentence(a,b){
//   return a + b;
// }
//
// console.log(speech);


// function announceParams(a,b,c){
//   console.log("Param a is " + a);
//   console.log("Param b is " + b);
//   console.log("Param c is " + c);
// }
//
// announceParams("root beer", 24, "$3.40");

//=====================================//

//Assignment 1)
//copy the following block of code to your main.js file and write 2 sentences for each function and log the results.

//get the sum of two numbers
function sum(x,y) {
  return x + y;
}

var sumTwo = sum(5,6);
console.log(sumTwo);


//find the largest of two numbers
function max(a,b){
  var largest;
  if (a>b) {
    largest = a;
  }
  else {
    largest = b;
  }
  return largest;
}

var maximum = max(99,42);
console.log(maximum);

//==========================================//
// Assignment 2)
// Log the price
// Log the title
// Log the third tag listed in tags
// Log the image URL.
// Log the first category

var productData = {
  state: "active",
  title: "Mid Century Siesta Ware White Mug with Anchor",
  price: 12.00,
  quantity: 1,
  tags: ["mug", "siesta ware", "beer mug", "white glass mug", "anchor and stars"],
  category_path: ["Vintage", "Housewares", "Cup"],
  image: {
    small: {
      url: "http://placehold.it/300x300"
    }
  }
};

console.log(productData.price);
console.log(productData.title);
console.log(productData.tags[2]);
console.log(productData.image.small.url);
console.log(productData.category_path[0]);

//=============================================//
//HW Exercise1

function addNumbers(numberA, numberB) {
  return numberA + numberB;
}

var twoPlusTwo = addNumbers(2, 2);

console.log(twoPlusTwo);

//=============================================//
//HW Exercise2
function yell(x){
  return x.toUpperCase();
}
console.log(yell("Why are you yelling"));

function yell10(x){
  return yell(x).repeat(10);
}

console.log(yell10("Why are you yelling"));

//=============================================//
//HW Exercise3

function longest(string1, string2){
  if(string1.length > string2.length)
    return string1;
  else {
    return string2;
  }
}

console.log(longest("Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", "Shorter string"));

//=============================================//
//HW Exercise4
//
// function isVowel(x){
//   if (x includes "aeiouAEIOU")
//     return true;
//   else {
//     return false;
//   }
//
// console.log(isVowel(i));

function isVowel (str){
  var checkArray = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  for (var indexChecker = 0; indexChecker < checkArray.length; indexChecker++){
  if (str === checkArray[indexChecker]){
    return true;
  }
}
  return false;
}

console.log(isVowel("U"));
console.log(isVowel("b"));

//=============================================//
