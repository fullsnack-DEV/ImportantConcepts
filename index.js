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
////////////////////** OOPS *///////////////////////////

//Object Oriented Programming
//It is a Style of a Programming or WE can say its a Programming
//paradigm that is styled around the Objects
//In the OOP We combined the group of the Related functions and the variables
//into an object

//4 pillars of a OOPS

//1 > Encapsulation

//

//2 > Abstraction
//

// 3 > Inheritance
//
// 4 > Polymorphism

//**********************  Encapsulation    ************ */
//In OOPS we group the variables and the functions which are operate on them together.
//We kind of bundle them together.
//This is known as Encapsulation.

//**********************  Inheritance    ************ */
//Inheritance is a process in which we Aqquire all the
//properties and the behaviour of the one class into the Other Class
// The Class from which we aqquire the properties we called it Parent Class
// The Class wehere we put all the Properties and the behaviour of the Parent Class
// we call it as a Child  class
//Inheritance It is Mechanism that Allows as to elimanate the Reduantant
//For Example

// class A  => variables and Methods   ===> Parent , Super , Base

//              |
//            |
//Class B  => Child , Sub , Derived class

//We are extending tthe class  A to the Class B

/**************** Types of Inheritance ************** */

//Single Inheritance
//Example: Extending Class B from Class A
/*************    ****************/
//multiple Inheritance
//Example: Extending Class C from Class B and Class B from Class A
/*************    ****************/
//Hierarchical inheritance
//Example: Extending Class B and Class c from Class A

//This are only the three types of Inherotance are supported in Javascript

//***************************** Method Overriding ****************** */
//In the Method Overriding concept. We can override i.e Modify the
//The MEthod from the parent Class.
//Examples

// class A {
//   a = 100;

//   display = function () {
//     console.log(this.a);
//   };
// }

// class B extends A {
//   b = 200;

//   show = function () {
//     console.log(this.b);
//   };
// }

// class C extends B {
//   c = 300;
//   showmore = function () {
//     console.log(this.c);
//   };
// }
//Types inheritance
// Single level inheritance
// Muttilevel inheritance
//Hirachy inheritance

// const bobj = new C();

// bobj.display();
// bobj.show();
// bobj.showmore();

/*********************** Method Overriding **************/

//Method Overriding present in a inheritance
//In the Method ovverrding we can  Modify the implementaion
//of a Parent Class
//For example:
//I have class A it have some method and I created a Child class B
// form the class  A. Then If suppose I have to Modufy the Mehtod of class A
// Then I can do It. This know as a Method Overriding
//Example******** //

//Example of Method Overriding

// class Bank {
//   roi = function () {
//     return 5;
//   };
// }

// class Axis extends Bank {
//   roi = function () {
//     return 20.5;
//   };
// }

// class sbi extends Axis {
//   roi = function () {
//     return 55.5;
//   };
// }

// const Ax = new Axis();

// console.log(Ax.roi());

//**************************** Super Keyword  *********************** */

//Super Keyword used to invoke the Costructor if the Parent Class
//So if we want to invoke or us the constructor of the paret class into the Child class
//So we can do that with the help of the Super Keyword

//super keyword always points towards the costructor of the paraent class

//******************************************  Prototype in Javscript  *********************/

//Example of a function constructor

//*****************          *************/
// function userconstructor(name, score) {
//   const newUser = Object.create(funcStore);

//   newUser.name = name;
//   newUser.score = score;

//   console.log(newUser);

//   return newUser;
// }

// const funcStore = {
//   increment: function () {
//     this.score++;
//   },
//   login: function () {
//     console.log("You are Looged in");
//   }
// };

// //creating a objects
// const user1 = userconstructor("Prateek", 56);

// console.log(user1);

/////////////***********  Genratig objects using function  */****** */

// function Usercreator(name, score) {
//   const newUser = {};

//   newUser.name = name;
//   newUser.score = score;

//   newUser.incre = function () {
//     newUser.score++;
//   };

//   newUser.play = function () {
//     console.log("Play Start");
//   };

//   return newUser;
// }

// const user1 = new Usercreator("prateek", 45);

// console.log(user1);

//The problem with the above approch is we are crearting a
// multiple copies of a function for each instance
//MEmory consumtion is more

/****************Another way of creating a Object using Fucntion */

// function Usercreator(name, score) {
//   const UserStore = Object.create(FuncStore);

//   UserStore.name = name;
//   UserStore.score = score;

//   return UserStore;
// }

// const FuncStore = {
//   increment: function () {
//     this.score++;
//   }
// };

// const user1 = Usercreator("tom", 45);
// const user2 = Usercreator("jerry", 55);
// user2.increment();

// console.log(user2);

/************New Kyword to automate the Stuff**** */
