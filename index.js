var _ = require('underscore');

var results = _.contains([1, 2, 3], 3)

console.log(results)

var people = [{
    name: 'Josh',
    age: 32
}, {
    name: 'Nat',
    age: 27
}, {
    name: 'Zara',
    age: 3
}, {
    name: 'Roy',
    age: 79
}]

var pluck = _.pluck(people, 'age');
console.log(pluck)