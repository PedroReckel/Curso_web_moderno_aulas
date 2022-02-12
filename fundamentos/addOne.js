function addOne(value) {
    if (typeof value === 'number') {
        return value + 1
    } else if (typeof value === 'string') {
        return value + '1'
    }
}

console.log(addOne('4'))