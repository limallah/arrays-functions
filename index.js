// QUESTION ONE

// Mutating methods modify the original array, while non-mutating methods do not. Here are five examples of each:

// Mutating methods:

// push() - Adds one or more elements to the end of an array.
// pop() - Removes the last element from an array.
// shift() - Removes the first element from an array.
// unshift() - Adds one or more elements to the beginning of an array.
// splice() - Changes the contents of an array by removing or replacing existing elements and/or adding new elements.

// Non-mutating methods:

// concat() - Returns a new array that combines two or more arrays.
// slice() - Returns a new array that contains a portion of the original array.
// join() - Returns a string that concatenates all elements in an array.
// filter() - Returns a new array that contains elements that pass a given test.
// map() - Returns a new array that contains the results of calling a function on each element of the original array.

// QUESTION TWO

// 2.	Here is an array of languages: [‘C#’, ‘JavaScript’, ‘Ruby’, ‘PHP’, ‘Python’]. Perform this operation on them 
// 1.	Add ‘Kotlin’ to the end of the array
// 2.	Add ‘Java’ after ‘Ruby’
// 3.	Remove the first item in the array
// 4.	Add ’Scala’ and ‘Swift’ to the beginning of the array
// 5.	Replace ‘PHP’ with ‘Go’ and ‘Rust’

// ANSWER
// const programingLanguages = ["C#", "JavaScript","Ruby","PHP","Python"];
// programingLanguages.push ('Kotlin');
// // console.log(programingLanguages);

// programingLanguages.splice(3, 0, 'Java');
// // console.log(programingLanguages);

// // programingLanguages.splice(0, 1);
// programingLanguages.shift();
// // console.log(programingLanguages);

// programingLanguages.splice(0, 0, 'Scala', 'Swift');
// // console.log(programingLanguages);

// let removedElements = programingLanguages.splice(5, 1, 'Go', 'Rust');
// // console.log('removed element is ' + removedElements);
// // console.log(programingLanguages);


// QUESTION 3
// let fruit = ['Apple','Mango','Banana'];
// function changeFruit (){
//     fruit[2] = "orange";
//     return fruit;
// }   
// let result = changeFruit();
// // console.log(result);

// // Answer is Orange.


// QUESTION 4
let arrV = [10,1,-2,30,90];

function maxValue(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}
console.log(maxValue(arrV));
// Answer = 90


// QUESTION 5
const valTimesIndex = [1, 2, 3, 4, 5];
const newValTimesIndex = valTimesIndex.map((num, index) => {
    let result =  num * index;
    return result;
})
// console.log(newValTimesIndex);

// Answer [ 0, 2, 6, 12, 20 ]

