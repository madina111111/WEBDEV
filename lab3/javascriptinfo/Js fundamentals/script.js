// 2.8
let a = 1, b = 1;

        alert( ++a ); // 2, prefix form returns the new value
        alert( b++ ); // 1, postfix form returns the old value
        alert( a ); // 2, incremented once
        alert( b ); // 2, incremented once

// 2.9

alert(5 > 4); // true 
        alert("apple" > "pineapple"); // false
        alert("2" > "12"); // true
        alert(undefined == null); // true
        alert(undefined === null); // false
        alert(null == "\n0\n"); // false
        alert(null === +"\n0\n"); // false

// 2.10
if ("0") {
    alert( 'Hello' ); //Yes, it will
}

// 2.11
alert( null || 2 || undefined ); // 2

// 2.13
let n = prompt("Enter number:", "");
        nextPrime: for (let i = 2; i <= n; i++) {
        for (let j = 2; j < i; j++) {
          if (i % j == 0) continue nextPrime;
        }
        alert(`${i} prime`);
      }


// 2.14
if(browser == 'Edge') {
    alert("You've got the Edge!");
} else if (browser == 'Chrome'
|| browser == 'Firefox'
|| browser == 'Safari'
|| browser == 'Opera') {
    alert( 'Okay we support these browsers too' );
} else {
    alert( 'We hope that this page looks ok!' );
}


// 2.15
function checkAge(age) {
    if (age > 18) {
        return true;
    }
    // ...
    return confirm('Did parents allow you?');
    }
    //No difference

// 2.17
function ask(question, yes, no) {
    if (confirm(question)) yes();
    else no();
}

ask(
    "Do you agree?",
    () => alert("You agreed."),
    () => alert("You canceled the execution.")
);