var character = 'mario';
var age = 30;
var isBlackBelt = false;
// character = 20;
character = 'luigi';
// age = 'yoshi';
age = 40;
// isBlackBelt = 'yes';
isBlackBelt = true;
var circ = function (diameter) {
    return diameter * Math.PI;
};
// console.log(area('hello'));
console.log(circ(7.5));
console.log(character);
// arrays
var names = ['luigi', 'mario', 'yoshi'];
names.push('toad');
// names.push(3);
// names[1] = 3;
var numbers = [10, 20, 12, 15];
numbers.push(25);
// numbers.push('shaun');
// numbers[0] = 'shaun';
var mixed = ['ken', 4, 'chun-li', 8, 9];
mixed.push('ryu');
mixed.push(10);
mixed[0] = 3;
// objects
var ninja = {
    name: 'mario',
    belt: 'black',
    age: 30
};
ninja.age = 40;
ninja.name = 'ryu';
// ninja.age = '30';
// ninja.skills = ['fighting', 'sneaking']
ninja = {
    name: 'yoshi',
    belt: 'orange',
    age: 40,
    // skills: ['running'],
};
console.log(ninja);
