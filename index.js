
const numArray = [100, 10]

const historyArray = []

function addNumbers(array) {

    let answer = array[0] + array[1]
    const addHistory = {}

    addHistory["operands"] = array
    addHistory["operator"] = "+"
    addHistory["result"] = answer

    historyArray.push(addHistory)

    return answer

}


function subtractNumbers(array) {

    let answer = array[0] - array[1]
    const subtractHistory = {}

    subtractHistory["operands"] = array
    subtractHistory["operator"] = "-"
    subtractHistory["result"] = answer

    historyArray.push(subtractHistory)

    return answer
}


function multiplyNumbers(array) {

    let answer = array[0] * array[1]
    const multiplyHistory = {}
    multiplyHistory["operands"] = array
    multiplyHistory["operator"] = "*"
    multiplyHistory["result"] = answer

    historyArray.push(multiplyHistory)

    return answer
}


function divideNumbers(array) {

    let answer = array[0] / array[1]
    const divideHistory = {}
    divideHistory["operands"] = array
    divideHistory["operator"] = "/"
    divideHistory["result"] = answer

    historyArray.push(divideHistory)

    return answer
}

console.log(addNumbers(numArray))

console.log(subtractNumbers(numArray))

console.log(multiplyNumbers(numArray))

console.log(divideNumbers(numArray))

console.log(historyArray)