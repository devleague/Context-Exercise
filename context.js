var Robot = function (name) {
  this.name = name;

}

function add ( op1, op2 ) {
  this.name = this.name || "Humans";
  return this.name + " can count to " + (op1 + op2);
}

var voltron = new Robot("Voltron");
var bender = new Robot("Bender Rodriguez");
var optimus = new Robot("Optimus Prime");
var megaman = new Robot("Mega Man");
var bmo = new Robot("B-Mo");
var wall_e = new Robot("Wall-E");


// #1
console.log('#1', add(0, 1));

// #2  

console.log('#2', add.call(voltron, 2, 3));

// #3

console.log('#3', add.apply(optimus, [20, 30]));

// #4
let calclulate = add.bind(bender)
console.log('#4', calclulate('drinking', 'beer'));

// bind the function add to a new function named calculate with the context of the object bender (using bind())
// invoke the calculate passing in 2 arguments, "drinking " and "beer"