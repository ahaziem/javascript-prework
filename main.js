// Write a function that takes a number and returns true if it is a positive number and false if it is a negative number.

const isNumberPositive = (number) => {
if (number >= 0) {
return ("true") 
}
if (number <= 0) {
return ("false")
}
};

console.log(isNumberPositive(2))

//  Write a function that takes a number of days and converts it into an age.

const numberToAge = (number) => {
    const days = number/365
    return days
}
console.log(numberToAge(4380))

// Write a function that takes three numbers and returns the largest of the three numbers.

const largestNumber = (number1, number2, number3) => {
    return Math.max(number1, number2, number3)
}

console.log(largestNumber(100,15,30))

// Write a function that takes an array of names and returns the last name from the array of names.

let names = ["Sam","Kelly","Junior","Michelle"]

const returnLastName = (names) => {
    const lastName = names[names.length - 1]
    return lastName
}
console.log(lastName)

// Write a function that takes an array of numbers and returns true if all of the numbers are positive. It should return false if there are one or more negative numbers in the array.

// let listOfNumber = [1,2,3,4,5]

// const arrayOfNumber = (numbers) => {
// if (listOfNumber >= 0)
//     return "true"
// } 
// else if (listOfNumber <= 0) {
//     return "false"
// }

// console.log(arrayOfNumber)