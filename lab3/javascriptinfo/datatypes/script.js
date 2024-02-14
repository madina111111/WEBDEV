// 5.1
let str = "Hello";

        str.test = 5;

        alert(str.test); // undefined

// 5.2

function random(min, max) {
    return min + Math.random() * (max - min);
}

alert( random(1, 5) );
alert( random(1, 5) );
alert( random(1, 5) );

// 5.3

function extractCurrencyValue(str) {
    return +str.slice(1);
}
alert(extractCurrencyValue('$120'));


// 5.4

function getMaxSubSum(myaArr) {
    let maxSumi = 0;
    for (let i = 0; i < myaArr.length; i++) {
      let sumFixedStart = 0;
      for (let j = i; j < myaArr.length; j++) {
        sumFixedStart += myaArr[j];
        maxSumi = Math.max(maxSumi, sumFixedStart);
      }
    }
    return maxSumi;
  }
    alert( getMaxSubSum([-1, 2, 3, -9]) ); // 5
    alert( getMaxSubSum([-1, 2, 3, -9, 11]) ); // 11
    alert( getMaxSubSum([-2, -1, 1, 2]) ); // 3
    alert( getMaxSubSum([100, -9, 2, -3, 5]) ); // 100
    alert( getMaxSubSum([1, 2, 3]) ); // 6
    alert( getMaxSubSum([-1, -2, -3]) ); // 0


// 5.5
function getAverageAge(users) {
    return users.reduce((prev, user) => prev + user.age, 0) / users.length;
}

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 29 };

let arr = [ john, pete, mary ];

alert( getAverageAge(arr) ); // 28


// 5.7

let map = new Map();

        map.set("name", "John");

        let keys = Array.from(map.keys());

        keys.push("more");

        alert(keys); // name, more


// 5.8

let messages = [
    {text: "Hello", from: "John"},
    {text: "How goes?", from: "John"},
    {text: "See you soon", from: "Alice"}
    ];

    let readMap = new WeakMap();

    readMap.set(messages[0], new Date(2017, 1, 1));


// 5.9

function sumSalaries(salaries) {

    let sum = 0;
    for (let sal of Object.values(salaries)) {
        sum += sal;
    }

    return sum; // 650
}

let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};

alert( sumSalaries(salaries) ); // 650


// 5.10
function topSalary(salaries) {

    let maxSalary = 0;
    let maxName = null;

    for(const [name, salary] of Object.entries(salaries)) {
        if (maxSalary < salary) {
            maxSalary = salary;
            maxName = name;
        }
    }

    return maxName;
}

// 5.11

function getSecondsToday() {
    let d = new Date();
    return d.getHours() * 3600 + d.getMinutes() * 60 + d.getSeconds();
}

alert( getSecondsToday() );

// 5.12

let room = {
    number: 23
};

let meetup = {
    title: "Conference",
    occupiedBy: [{name: "John"}, {name: "Alice"}],
    place: room
};

room.occupiedBy = meetup;
meetup.self = meetup;

alert( JSON.stringify(meetup, function replacer(key, value) {
    return (key != "" && value == meetup) ? undefined : value;
}));