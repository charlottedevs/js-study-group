// map
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map

const arr = [1, 2, 3, 4, 5];

// assign a function to the const mapExample that will
// accept one argument, an array
const mapExample = arr => arr.map(x => x * 2);

console.log(mapExample(arr)); 
// returns [ 2, 4, 6, 8, 10 ]

// filter
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter

const arr1 = [1, '', true, false, null, undefined];

// assign a function to the const filterExample that will
// accept one argument, an array
const filterExample = arr => arr.filter(x => x);

console.log(filterExample(arr1));
// returns [1, true]

// reduce
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce

const arr2 = [1, 2, 3, 4, 5];

// assign a function to the const reduceExample that will
// accept one argument, an array
const reduceExample = arr => arr.reduce((acc, currentVal) => {
    return acc + currentVal;
});

console.log(reduceExample(arr2));
// returns 15
