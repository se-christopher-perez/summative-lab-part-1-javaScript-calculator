
const numArray = [100, 10]
const anotherNumArray = [25, 5]

const historyArray = []

function addNumbers (array) {

    let answer = array[0] + array[1]

    addToHistory(array, "+", answer)

    return answer

}


function subtractNumbers (array) {

    let answer = array[0] - array[1]

    addToHistory(array, "-", answer)

    return answer
}


function multiplyNumbers (array) {

    let answer = array[0] * array[1]

    addToHistory(array, "*", answer)

    return answer
}


function divideNumbers (array) {

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

function showHistory () {

    if (historyArray.length > 0) {
        console.log(historyArray)
    } else {
        console.error("You have no stored calculations!")
    }

}

showHistory()

console.log(addNumbers(numArray))

console.log(addNumbers(anotherNumArray))

console.log(subtractNumbers(numArray))

console.log(multiplyNumbers(numArray))

console.log(divideNumbers(numArray))

console.log(historyArray)

showHistory()

console.log(divideNumbers(anotherNumArray))

console.log(historyArray)

showHistory()