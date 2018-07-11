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
let test1 = add(0, 1);
console.log(test1);

// #2  
let test2 = add.call(voltron, 2, 3);
console.log(test2);

// #3
let arr = [20, 30]
let test3 = add.apply(optimus, arr);
console.log(test3);

// #4
let calculate = add.bind(bender);
let test4 = calculate("drinking ", "beer");
console.log(test4);