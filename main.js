// Write a function that takes a number and returns true if it is a positive number and false if it is a negative number.

const isNumberPositive = (number) => {
if (number >= 0) {
return console.log("true")
}
if (number <= 0) {
return console.log("false")
}
}

isNumberPositive(2);

//  Write a function that takes a number of days and converts it into an age.

const numberToAge = (numberOfDays) => {
    const age = parseInt(numberOfDays/365)
    console.log(`${age} years old!`)
    return age
}
numberToAge(2500);

// Write a function that takes three numbers and returns the largest of the three numbers.

const largestNumber = (number1, number2, number3) => {
    const numberOfLargest = Math.max(number1, number2, number3)
    console.log(numberOfLargest)
    return numberOfLargest;
    
}

largestNumber(100,15,30)

// Write a function that takes an array of names and returns the last name from the array of names.

let names = ["Sam","Kelly","Junior","Michelle"]

const returnLastName = (namesArr) => {
    const lastName = namesArr[namesArr.length - 1]
    console.log(lastName)
    return lastName;
}

returnLastName(names);


// Write a function that takes an array of numbers and returns true if all of the numbers are positive. It should return false if there are one or more negative numbers in the array.

let listOfNumbers = [1,2,-3,4,5]

// const arrayOfNumber = (numbers) => {
//     numbers.forEach(number => {
//         if (number >= 0) {
//             return console.log(true)
//         } else {
//             return console.log(false)
//         }
//     })
// }
// arrayOfNumber(listOfNumbers)

const arrayOfNumber = (numbers) => {
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] >= 0) {
            return console.log(true)
        } else {
            return console.log(false)
        }
    }
}
arrayOfNumber(listOfNumbers)


