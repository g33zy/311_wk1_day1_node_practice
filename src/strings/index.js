const split = (str, delim) => {
  // write code for strings.split
  return str.split(delim)
}

const pairs = (str) => {
  // write code for strings.pairs
  let results = []
  for(let i = 0; i < str.length; i+=2) {
    let pairs = str[i] + str[i + 1]
   results.push(pairs)
  }
  return results

}

const reverse = (str) => {
  // write code for strings.reverse
  return str.split('').reverse().join('')
}

module.exports = {
  split,
  pairs,
  reverse
}