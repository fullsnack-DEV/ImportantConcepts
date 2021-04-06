//Functions

//Difference Between Function Decalaration and Function Expression

//Function Decalration

function calage(birthyear) {
  return 2021 - birthyear;
}

const age = calage(1996);

console.log(age);

//Function Expression

const myage = function (birthyear) {
  return 2021 - birthyear;
};

const age2 = myage(1996);

console.log(age2);

//Main diffrence between Function decalration and Expression is
//* > In case of function decalaration we can call it before definning it due to hoisting
// * > In the function expression we use a Anonymous Function
