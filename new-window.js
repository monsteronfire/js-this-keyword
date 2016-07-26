//new Binding
//Using a constructor function with a capitalised variable name
var Animal = function(colour, name, type) {
  this.colour = colour;
  this.name = name;
  this.type = type;
};

//what happens when this function is invoked.with the new keyword,
//Js is going to create a brand new object and save it as 'this = {}'
var zebra = new Animal('black and white', 'Zorro', 'Zebra');




//Window Binding Examples
var sayAge =  function() {
  console.log(this.age);
};

//Invoking the sayAge() function like below will return 'undefined'
//because if you invoke a function that uses the 'this' keyword but doesn't have anything left of the dot
//the 'this' keyword is going to default to the window object
sayAge();

//So if we add a property of 'age' to the window object
//and invoke sayAge() again, it should log the window.age you set on window
window.age = 35;
sayAge();
