//Functions

// //Difference Between Function Decalaration and Function Expression

// ***************** Function Decalration //   **************//
// function calage(birthyear) {
//   return 2021 - birthyear;
// }

// const age = calage(1996);

// console.log(age);

// ******  Function Expression  ********//

// const myage = function (birthyear) {
//   return 2021 - birthyear;
// };

// const age2 = myage(1996);

// console.log(age2);

//why?
//during the Hoisting phase (Memory creation Phase)
//For the Function decalration the memory is allocated for the
// fucntion. So we can call it before the defination

////BUT///

//In the case of the Function Expression we are saving
//function in the Variable.So in the Hoisting phase when the
//memory got allocated for the variables it would saved as
//undefined.

///************  Anonymous Function  *************//////////

//Anonymus Function does not have their own identity//

// function() {

// }

/*****************    New Topic            ************ */
//Differnce Between Regular and Arrow function

//The Arrow function does ot get its OWn this Keyword
//Its simply use this keyword from its surrounding

//i.e The Arrow function inherits the this Keyword from the
//parent Scope

// const specs = {
//   firstname: "Prateek",
//   year: 2021,

//***************  Normal function   ***********/
// calcaage: function (birthyr) {
//   return this.year - birthyr;
// }
//Above function will work fine

//*********  Arrow Function Only ***********/
// calage: () => {
//   // return this.year - birthyear;
//   console.log(this);
// }

//In this Senario we will get a Error bcz Arrow
//function don't get its own the Keyword

//*********How to make Use of Arrow Function then ??  *******/

//   calage: function (birthyear) {
//     console.log(this.year);

//     const age = () => {
//       const res = this.year - 1996;
//       console.log(`My age from arrow function is ${res}`);
//     };
//     age();
//   }
// };

// specs.calage(1996);

//******************  First Class Function  ******************/

//In JavaScript functions are Treated as a Value //
//Passing the Function to the other Function as a Argument
//We can also Return the Function from the Fuction

//Passing the Function
// const res = function (param1) {
//   console.log(param1);
// };

// res(function () {});

//Returnin the function

// const res = function () {
//   return function () {
//     console.log("Hi");
//   };
// };

// console.log(res());
