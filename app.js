let myName = "Julie";

const usStates = 52;

//added 5+4
let x = 5;
let y = 4;
let z = x + y;

function sayHello() {
    alert( 'Hello World!' );
}

sayHello();
let name =''
let age = '';

function checkAge(name, age)  {
    if (age < 21) {
 alert( "Sorry " + name + ", you aren't old enough to view this page!" )
    } 
}
checkAge('John', 17);

let favVeggies = ['Tomatoes', 'Potatoes', 'Corn', 'Okra', 'Green Beans'];

for(let i = 0; i < favVeggies.length; i++) {
    console.log(favVeggies[i]);
};

let pet = {name:"Fido", breed:"Yorkie"};

console.log(pet);

let friends = [
    {name: 'Julia', age: 26},
    {name: 'Kelly', age: 16},
    {name: 'Adam', age: 30},
    {name: 'Shelley', age: 18},
    {name: 'Amy', age: 22}
];

for(let i = 0; i < friends.length; i++) {
    checkAge(friends[i].name, friends[i].age);
}

function getLength(word) {
    return word.length;
}
    let howLongIsThisWord = getLength('Hello World');

    if (howLongIsThisWord % 2 === 0) {
        console.log('The world is nice and even.');
    } else { 
        console.log('The world is an odd place!');
    }
getLength('Hello World');