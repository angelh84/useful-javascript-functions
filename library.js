/**************************************************************
 ******* USEFUL FUNCTIONS && ALGORITHMS IN JAVASCRIPT *********
 **************************************************************/


/* ---------- TABLE OF CONTENTS ---------- */

// 1. ITERATE OVER AN OBJECTS VALUE AND MODIFY - (MUTATES ORIGINAL OBJECT)
// 2. ITERATE OVER AN OBJECTS VALUE AND RETURN NEW OBJECT WITH MODIFIED VALUES - Object.entries()
// 3. FUNCTION TO CHECK IF A NUMBER IS A PRIME NUMBER
// 4. REMOVE DUPLICATES FROM AN ARRAY AND RETURN A NEW ARRAY
// 5. MERGE TWO OBJECTS - Object.assign()
// 6. MERGE ARRAY / OBJECT - (spread operator)
// 7. SORT A NUMERICAL ARRAY
// 8. SORT AN ARRAY OF STRINGS
// 9. FIND A VALUE IN AN ARRAY - (linear search - O(n) complexity - SLOWEST METHOD)
// 10. BINARY SEARCH FOR A SORTED ARRAY (logarithmic search - O(log n) complexity - FASTER THAN LINEAR)
// 11. DESTRUCTURING ASSIGNMENT
// 12. ADD UP ALL NUMERIC VALUES IN AN ARRAY USING .REDUCE()
// 13. CREATE AN OBJECT FROM AN ARRAY USING .REDUCE() WITH THIS FORMAT {INDEX: VAL}
// 14. NATIVE CLIENT HTTP METHOD - FETCH

/* --------------------------------------- */



/*
* 1. ITERATE OVER AN OBJECTS VALUE AND MODIFY VALUES (MUTATES ORIGINAL OBJECT)
*/

let = myObject = {'a': 1, 'b': 2, 'c': 3};
Object.keys(myObject).map((key, index) => myObject[key] *= 2);
console.log(myObject); // {'a': 2, 'b': 4, 'c': 6}



/*
* 2. ITERATE OVER AN OBJECTS VALUE AND RETURN NEW OBJECT WITH NEW VALUES - Object.entries()
*/

let fruits = {apple: 28, orange: 17, pear: 54}
let fruitEntries = Object.entries(fruits)
let foo = fruitEntries.reduce((acc, val) => {
    acc[val[0]] = (val[1] || 0) + 1;
        return acc;
}, {});
console.log(foo); // {apple: 29, orange: 18, pear: 55}



/*
* 3. FUNCTION TO CHECK IF A NUMBER IS A PRIME NUMBER
*/

function isPrime(num) {
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
        return num > 1;
    }
};
isPrime(4) // false
isPrime(5) // true



/*
* 4. REMOVE DUPLICATES FROM AN ARRAY AND RETURN A NEW ARRAY
*/

var names = ["Mike","Matt","Nancy","Adam","Jenny","Nancy","Carl"];
let nonDuplicates = names.filter((item, pos) => names.indexOf(item) == pos);
console.log(nonDuplicates) // ["Mike", "Matt", "Nancy", "Adam", "Jenny", "Carl"]



/*
* 5. MERGE TWO OBJECTS - Object.assign()
*/

let greetings = {hello: 'world'};
let farewell = Object.assign({}, foo, {good: 'bye'}); // {hello: "world", good: "bye"}



/*
* 6. MERGE ARRAYS / OBJECTS -(spread operator)
*/

// merge array
let firstArr = ['one', 'two', 'three'];
let secondArr = [4, 5, 6];
let thirdArr = [true, false, null];
let arrMerge = [...firstArr, ...secondArr, ...thirdArr];
console.log(arrMerge); // ["one", "two", "three", 4, 5, 6, true, false, null]

// merge object
const object1 = {name: 'Flavio'}  
const object2 = {age: 35}
const object3 = {...object1, ...object2} // // {name: "Flavio", age: 35}



/*
* 7. SORT A NUMERICAL ARRAY
*/

var numArray = [140000, 104, 99];
numArray.sort((a, b) => a - b); // For ascending sort [99, 104, 140000]
numArray.sort((a, b) => b - a); // For descending sort [140000, 104, 99]



/*
* 8. SORT AN ARRAY OF STRINGS
*/

var months = ['March', 'Jan', 'Feb', 'Dec'];
months.sort(); // ["Dec", "Feb", "Jan", "March"]



/*
* 9. FIND A VALUE IN AN ARRAY - (LINEAR SEARCH: O(n) complexity) SLOWEST METHOD
*/

var names = ["Mike","Matt","Nancy","Adam","Jenny","Nancy","Carl"];
let findName = val => names.indexOf(val);
findName('Theodore') // -1 (-1 is always returned if value not found in array)
findName('Adam') // 3 (returns index of location in array if found)

// Other way to do a linear search to find a value in an array
function linearSearch(arr, toFind){
    for(let i = 0; i < arr.length; i++){
      if(arr[i] === toFind) return i;
    }
    return -1;
}
linearSearch(names, 'Nancy'); // 2



/*
* 10. BINARY SEARCH FOR A SORTED ARRAY - (LOGARITHMIC: O(log n) complexity) FASTER THAN LINEAR
*/
 
function binarySearch(sortedArray, elToFind) {
    let lowIndex = 0;
    let highIndex = sortedArray.length - 1;
        while (lowIndex <= highIndex) {
            let midIndex = Math.floor((lowIndex + highIndex) / 2);
            if (sortedArray[midIndex] == elToFind) {
                return midIndex;
            } else if (sortedArray[midIndex] < elToFind) {
                lowIndex = midIndex + 1;
            } else {
                highIndex = midIndex - 1;
            }
        } return -1;
}
    
let colors = ["blue", "green", "indigo", "orange", "red", "violet", "yellow"];
let numbers = [1, 3, 4, 5, 8, 10, 15, 18, 20, 21, 22];
binarySearch(colors, "green"); // returns 1 (index position of "green")
binarySearch(colors, "white") // returns -1
binarySearch(numbers, 10) // returns 5 (index position of 10)
binarySearch(numbers, 9) // returns -1



/*
* 11. DESTRUCTURING ASSIGNMENT
*/

let a, b, rest;
[a, b] = [10, 20];
console.log(a); // 10
console.log(b); // 20
[a, b, ...rest] = [10, 20, 30, 40, 50];
console.log(rest); // [30,40,50]



/*
* 12. ADD UP ALL NUMERIC VALUES IN AN ARRAY USING .REDUCE()
*/

let arr = [1,2,3]
let arrSum = arr.reduce((acc, val)  => {
	return acc + val
});
console.log(arrSum) // 6



/*
* 13. CREATE AN OBJECT FROM AN ARRAY USING .REDUCE() WITH THIS FORMAT {INDEX: VAL}
*/

let arr = ["blue", "green", "indigo", "orange"];
let obj = arr.reduce((acc, val, index) => { 
    acc[index] = val;
    return acc;
}, {})
console.log(obj); // {0: "blue", 1: "green", 2: "indigo", 3: "orange", 4}



/*
* 14. NATIVE CLIENT HTTP CALL - FETCH
*/

fetch('url')
    .then(handleResponse)
    .then(data => console.log(data))
    .catch(error => console.log(error))

function handleResponse (response) {
    let contentType = response.headers.get('content-type')
    if (contentType.includes('application/json')) {
        return handleJSONResponse(response)
    } else if (contentType.includes('text/html')) {
        return handleTextResponse(response)
    } else {
        // Other response types as necessary. I haven't found a need for them yet though.
        throw new Error(`Sorry, content-type ${contentType} not supported`)
    }
}

function handleJSONResponse (response) {
    return response.json()
        .then(json => {
            if (response.ok) {
                return json
            } else {
                let status = {
                    status: response.status,
                    statusText: response.statusText
                }
                return Promise.reject({...json, ...status})
            }
        })
}

function handleTextResponse (response) { // XML
    return response.text()
        .then(text => {
            if (response.ok) {
                return json
            } else {
                return Promise.reject({
                    status: response.status,
                    statusText: response.statusText,
                    err: text
                })
            }
        })
}