//There are 4 rules to remember when using the 'this' keyword
//1. Implicit Binding
//2. Explicit Binding
//3. new Binding
//4. Window Binding

//Explicit Binding
//when explicitly binding, you use: call, apply or bind

//Explicit Binding - Example 1: Call
// Call will output WITHOUT returning a function. It will output a string as is

var sayName = function() {
  console.log('My name is ' + this.name);
};

var sayNameLang = function(lang1, lang2, lang3) {
  console.log('My name is ' + this.name + ' and I know ' + lang1 + ', ' + lang2 + ', ' + lang3);
};

var stacey = {
  name: 'Stacey',
  age: 27
};

var languages = ['JavaScript', 'Ruby', 'Python']

//Invoking the function as follows will throw an error
//stacey.sayName();
//This is because the stacey object itself doesn't have a sayName method
//and has no access to the external sayName method

//So instead, we can use call to use sayName with the context of stacey
sayName.call(stacey);
//When using call, the very first argument you pass it is the context
//Every argument after that is going to be passed to the function as a normal argument

//Using call with other params besides the context:
sayNameLang.call(stacey, languages[0], languages[1], languages[2]);




//Explicit Binding - Example 2: Apply
//Notice when using call, you would need to pass in arguments one by one
//With apply, you can pass in an array and JS will parse it for you
sayNameLang.apply(stacey, languages);
//The above will output the same as the call invokation, but by parsing the array that is languages




//Explicit Binding - Example 3: Bind
//bind is the same thing as call except for one difference,
//bind will return a new FUNCTION, whereas call would invoke the function straight away
//bind will return a new function that you can then invoke later
var newFn = sayNameLang.bind(stacey, languages[0], languages[1], languages[2]);
console.log('log something else here to show that we can invoke newFn');

//Invoking the new function should output the same stuff as above
newFn();
