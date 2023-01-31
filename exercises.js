//exercise 3-1
let arrays = [[1, 2, 3], [4, 5], [6]];

let flattenedArray = arrays.reduce((acc, curVal) => {
    return acc.concat(curVal)
}, []);

console.log(flattenedArray);

//exercise 3-2
 function loop(start, test, update, body) {
    for (let value = start; test(value); value = update(value)) {
      body(value);
    }
  }
loop(3, n => n > 0, n => n - 1, console.log);

//exercise 3-3 & 3-4

 function every(array, predicate) {
    for (let element of array) {
      if (!predicate(element)) return false;
    }
    return true;
  };
  
  function every2(array, predicate) {
    return !array.some(element => !predicate(element));
  };

console.log(every([1, 3, 5], n => n < 10));
console.log(every([2, 4, 16], n => n < 10));
console.log(every([], n => n < 10));
