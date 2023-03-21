const isEven = (num) => {
  // write code for numbers.isEven
  return num % 2 === 0 
  
}

const sum = (arr) => {
  // write code for numbers.sum
  return arr.reduce((a, c) => a + c)
}

const comboSum = (arr, sum) => {
  // write code for numbers.comboSum
  for(let i = 0; i < arr.length; i++) {
    for(let j = 0; j < arr.length; j++) {
      return arr[i] + arr[j] === sum
    }
  }
}

module.exports = {
  isEven,
  sum,
  comboSum
}