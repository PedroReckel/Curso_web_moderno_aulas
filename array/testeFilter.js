const arr = [
    { id: 15 },
  { id: -1 },
  { id: 0 },
  { id: 3 },
  { id: 12.2 },
  { },
  { id: null },
  { id: NaN },
  { id: 'undefined' }
]

let invalidEntries = 0

function filterById(obj) {
    if('id' in obj && typeof(obj.id) === 'number' && !isNaN(obj.id)) {
        return true
    } else {
        invalidEntries++
        return false
    }
}

const arrayById = arr.filter(filterById)

console.log('Filtered Array', arrayById)
console.log('Number of invalid entires: ',invalidEntries)