// Just a few examples to talk over
function addX (x) {
    let num = 0;
    return function () {
        num += x;
        return num;
    }
}

const addOne = addX(1);
console.log(addOne()); // will log 1
console.log(addOne()); // will log 2

// Something a little more complicated
const iffy = (function () {
    let num = 0;

    function add(x) {
        num += x;
    }
    function sub(x) {
        num -= x;
    }
    function multi(x) {
        num *= x;
    }
    function divide(x) {
        num /= x;
    }

    return {
        add: function () {
            add(1);
        },
        sub: function () {
            sub(1);
        },
        multi: function () {
            multi(2);
        },
        divide: function () {
            divide(2);
        },
        result: function () {
            return num;
        }
    }
})();

iffy.add();
console.log(iffy.result()); // logs 1
iffy.add();
iffy.sub();
console.log(iffy.result()); // logs 1
iffy.multi();
iffy.multi();
console.log(iffy.result()); // logs 4
iffy.divide();
console.log(iffy.result()); // logs 2