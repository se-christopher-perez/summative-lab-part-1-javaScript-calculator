
const numArray = [100, 10]

const historyArray = []

function addNumbers(array) {

    let answer = array[0] + array[1]

    addToHistory(array, "+", answer)

    return answer

}


function subtractNumbers(array) {

    let answer = array[0] - array[1]

    addToHistory(array, "-", answer)

    return answer
}


function multiplyNumbers(array) {

    let answer = array[0] * array[1]

    addToHistory(array, "*", answer)

    return answer
}


function divideNumbers(array) {

    let answer = array[0] / array[1]

    addToHistory(array, "/", answer)

    return answer
}

function addToHistory (array, operator, results) {

    let dummyObject = {}

    dummyObject["operands"] = array
    dummyObject["operator"] = operator
    dummyObject["result"] = results

    historyArray.push(dummyObject)

}

console.log(addNumbers(numArray))

console.log(subtractNumbers(numArray))

console.log(multiplyNumbers(numArray))

console.log(divideNumbers(numArray))

console.log(historyArray)