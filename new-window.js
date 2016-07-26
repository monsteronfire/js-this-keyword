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





