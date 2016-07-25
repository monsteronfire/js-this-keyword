// What is the purpose of the 'this' keyword?
// It allows us to reuse functions with different contexts
// i.e. It allows us to decide which object should be focal when invoking a function or a method

// So that if we have one function and a bunch of objects that had similar properties,
// we want the function to work throughout all our objects

//The first thing you need to ask yourself when you're trying to figure out what the 'this' keyword is referring to is:
//"WHERE IS THIS FUNCTION INVOKED". Not when it was DEFINED, but specifically where it was INVOKED

// We won't know what the this keyword is until the function is invoked.

var sayName = function(name) {
  console.log('Hello, ' + name);
};

//Only knowing the above function, you wouldn't be able to know what the 'name' value is
//You would only be able to know once it has been invoked. See below

sayName('Shaii');

//Similar idea with the 'this' keyword. We won't know it's what it is until the function is invoked.


//There are 4 rules to remember when using the 'this' keyword
//1. Implicit Binding
//2. Explicit Binding
//3. new Binding
//4. Window Binding


//Implicit Binding - Example 1
//Left of the dot at Call Time

var me = {
  name: 'Shaii',
  age: 28,
  sayName: function() {
    console.log(this.name)
  }
};

//Left of the dot is 'me', so this would be me.name which would be 'Shaii'
me.sayName();


// Implicit Binding - Example 2

