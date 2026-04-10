
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

    return answer
}


function multiplyNumbers(array) {

    let answer = array[0] * array[1]

    return answer
}


function divideNumbers(array) {

    let answer = array[0] / array[1]

    return answer
}

console.log(addNumbers(numArray))

console.log(subtractNumbers(numArray))

console.log(multiplyNumbers(numArray))

console.log(divideNumbers(numArray))

console.log(historyArray)