// map
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map

const arr = [1, 2, 3, 4, 5];

// assign a function to the const mapExample that will
// accept one argument, an array
const mapExample = (arr) => arr.map(x => x * 2 + 3);

console.log(mapExample(arr)); 
// returns [ 5, 7, 9, 11, 13 ]

const arrOfObjs = [
    { 
        first: 'Matt',
        last: 'White'
    },
    {
        first: 'Caleb',
        last: 'Martinez'
    }
]

// assign a function to the const mapExample2 that will
// accept an array of objects
// note that I wrap a multi line return in ()
const mapExample2 = (arrOfObjs) => arrOfObjs.map(obj => ({
    foo: obj.first,
    bar: obj.last
}));

console.log(mapExample2(arrOfObjs));
// returns 
// [ { foo: 'Matt', bar: 'White' },
// { foo: 'Caleb', bar: 'Martinez' } ]