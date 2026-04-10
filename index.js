
const numArray = [100, 10]

const historyArray = []

function addNumbers(array) {

    let results = array[0] + array[1]

    return results

}


function subtractNumbers(array) {

    let results = array[0] - array[1]

    return results
}


function multiplyNumbers(array) {

    let results = array[0] * array[1]

    return results
}


function divideNumbers(array) {

    let results = array[0] / array[1]

    return results
}

console.log(addNumbers(numArray))

console.log(subtractNumbers(numArray))

console.log(multiplyNumbers(numArray))

console.log(divideNumbers(numArray))