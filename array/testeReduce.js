const array1 = [1, 2, 3, 4]

const initialValue = 0
const sumWithInitial = array1.reduce(function(previousValue, currentValue) {
    console.log(previousValue, currentValue)
    return previousValue + currentValue
})

console.log(sumWithInitial)