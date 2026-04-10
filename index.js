
// These are the variables I will use to test my code.
const numArray = [100, 10]
const numArray2 = [25, 5]
const numArray3 = [33, 3]
const numArray4 = [45, 8]
//These variables I use to test my conditionals and conditionals
const badArray = [1]
const badArray2 = [1, 2, 34, 5, 67, 8, 910]

// historyArray will record and store my objects and my calculations
const historyArray = []


// This function will calculate the elements within the arrays through addition
function addNumbers (array) {
    // Performs the math operation on the two numbers in the array.
    let answer = array[0] + array[1]

    // Checks if input array parameter is proper for the function
    if (array.length === 2) {
        // Here I call a function to record and store into historyArray
        addToHistory(array, "+", answer)

        // returns answer which is then printed with console.log()
        return answer

    } else {
        // returns text, if the conditions of the array arent meant, this is meant a small validator
        // other validations that can be added in the future are proper elements confirmation
        return "Insufficient operands!"
    }

}

// This function will calculate the elements within the arrays through subtraction
function subtractNumbers (array) {
    // Performs the math operation on the two numbers in the array.
    let answer = array[0] - array[1]

    // Checks if input array parameter is proper for the function
    if (array.length === 2) {
        // Here I call a function to record and store into historyArray
        addToHistory(array, "-", answer)

        // returns answer which is then printed with console.log()
        return answer

    } else {
        // returns text, if the conditions of the array arent meant, this is meant a small validator
        // other validations that can be added in the future are proper elements confirmation
        return "Insufficient operands!"
    }
}


// This function will calculate the elements within the arrays through multiplication
function multiplyNumbers (array) {
    // Performs the math operation on the two numbers in the array.
    let answer = array[0] * array[1]

    // Checks if input array parameter is proper for the function
    if (array.length === 2) {
        addToHistory(array, "*", answer)

        // returns answer which is then printed with console.log()
        return answer

    } else {
        // returns text, if the conditions of the array arent meant, this is meant a small validator
        // other validations that can be added in the future are proper elements confirmation
        return "Insufficient operands!"
    }
}

// This function will calculate the elements within the arrays through division
function divideNumbers (array) {
    // Performs the math operation on the two numbers in the array.
    let answer = array[0] / array[1]

    // Checks if input array parameter is proper for the function
    if (array.length === 2) {
        // Here I call a function to record and store into historyArray
        addToHistory(array, "/", answer)

        // returns answer which is then printed with console.log()
        return answer

    } else {
        // returns text, if the conditions of the array arent meant, this is meant a small validator
        // other validations that can be added in the future are proper elements confirmation
        return "Insufficient operands!"
    }
}

// This function will capture the operands, operator, and results from the math calculations, store them into an object and then store them into historyArray
function addToHistory (array, operator, results) {
    // This is an empty object variable I use to buld the history profile
    let dummyObject = {}

    // Here I create keys and values(properties) to store into the object
    dummyObject["operands"] = array
    dummyObject["operator"] = operator
    dummyObject["result"] = results

    // Finally, data is recorded and sent to historyArray
    historyArray.push(dummyObject)

}

// This function displays the history of calculations made
function showHistory () {
    // This conditional determines whether we have previous calculations or none
    if (historyArray.length > 0) {
        console.log(historyArray)
        
    } else {
        // If no record is found, the user will get an error message
        console.error("You have no stored calculations!")
    }

}

showHistory()

console.log(addNumbers(numArray))

console.log(addNumbers(numArray2))

console.log(subtractNumbers(numArray))

console.log(multiplyNumbers(numArray))

console.log(divideNumbers(numArray))

console.log(historyArray)

showHistory()

console.log(divideNumbers(numArray3))

console.log(historyArray)

showHistory()

console.log(addNumbers(badArray))

console.log(addNumbers(numArray4))

console.log(addNumbers(numArray2))

console.log(addNumbers(badArray2))

showHistory()