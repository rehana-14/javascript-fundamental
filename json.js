const person = {
    name: 'rehu',
    fruit: 'lichi',
    dish: 'fuchka',
    friends: ['rehana', 'israt', 'souov'],
    isRich: true,
    money: 10000000,
}
// console.log(person);
// 
// JSON ---> JS Object with Notation
// JSON.stringify --> convert to string JSON
// JSON.parse --> convert JSON to Object
const personJSON = JSON.stringify(person);
console.log(personJSON);

const parseJSON = JSON.parse(personJSON);
console.log(parseJSON);