// string manipulation functions:


// reverse a string
function reverseString(str) {
    return str.split('').reverse().join('');
}
console.log(reverseString("ur mom"));

// count characters
function countCharacters(str) {
    return str.length;
}
console.log(countCharacters("ur mom gay"));

// cpitalize words
function capitalizeWords(sentence) {
    const words = sentence.split(' ');
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].slice(1);
    }
    return words.join(' ');
}
console.log(capitalizeWords("ur mom is fat"));


//array functions:


// find maximum
function findMaximum(arr) {
    if (arr.length === 0) return; 
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}
console.log(findMaximum([3, 7, 2, 8, 1, 9]));

// find minimum
function findMinimum(arr) {
    if (arr.length === 0) return; 
    let min = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    return min;
}
console.log(findMinimum([3, 7, 2, 8, 1, 9]));

// sum of array
function sumArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}
console.log(sumArray([3, 7, 2, 8, 1, 9]));

// filter array
function filterArray(arr, condition) {
    let filteredArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (condition(arr[i])) {
            filteredArr.push(arr[i]);
        }
    }
    return filteredArr;
}
console.log(filterArray([3, 7, 2, 8, 1, 9], num => num > 5));



//mathematical functions:

function factorial(num) {
    if (num === 0 || num === 1) {
        return 1;
    } else {
        let result = 1;
        for (let i = 2; i <= num; i++) {
            result *= i;
        }
        return result;
    }
}
console.log(factorial(5));

//factorial

function isPrime(num) {
    if (num <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}
console.log(isPrime(7)); 
console.log(isPrime(12)); 

//prime number check

function isPrime(num) {
    if (num < 2) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}
console.log(isPrime(7)); 
console.log(isPrime(12)); 

//fibonacci sequence

function fibonacciSequence(numTerms) {
    const sequence = [0, 1];
    for (let i = 2; i < numTerms; i++) {
        const nextNum = sequence[i - 1] + sequence[i - 2];
        sequence.push(nextNum);
    }
    return sequence;
}
console.log(fibonacciSequence(7));
