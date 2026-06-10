function transformArray(arr, callback) {
    let result = []

    for (let i = 0; i < arr.length; i++) {
        let newVal = callback(arr[i])
        result.push(newVal)
    }
    return result
}


const doubleNum = (num) => num * 2;
const output = transformArray([1, 2, 3, 4], doubleNum);

console.log(output); // Output: [2, 4, 6, 8]




function filterArray(arr, callback) {
    let result = [];
    
    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i]) === true) {
            result.push(arr[i]);
        }
    }
    
    return result;
}

const isEven = (num) => num % 2 === 0;
const evenNumbers = filterArray([1, 2, 3, 4], isEven);

console.log(evenNumbers); // Output: [2, 4]




function reduceArray(arr, callback, initialValue) {
    // Accumulator hamara "hisab ka jhola" hai, jisme shuruaat mein initialValue daal di
    let accumulator = initialValue; 
    
    for (let i = 0; i < arr.length; i++) {
        // Purana hisab (accumulator) aur naya element (arr[i]) milakar hisab update kiya
        accumulator = callback(accumulator, arr[i]);
    }
    
    return accumulator; // Aakhri bacha hua single result
}

// Usage: Array ka total sum nikalna hai
const sumLogic = (acc, curr) => acc + curr;
const totalSum = reduceArray([1, 2, 3, 4], sumLogic, 0); // Shuruat 0 se ki

console.log(totalSum); // Output: 10

