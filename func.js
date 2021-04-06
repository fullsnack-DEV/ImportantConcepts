//Differnce Between Regular and Arrow function

//The Arrow function does ot get its OWn this Keyword
//Its simply use this keyword from its surrounding

//i.e The Arrow function inherits the this Keyword from the
//parent Scope

const specs = {
  firstname: "Prateek",
  year: 2028,

  calcaage: function (birthyr) {
    return this.year - birthyr;
  }
};

const age1 = specs.calcaage(1996);

console.log(age1);
