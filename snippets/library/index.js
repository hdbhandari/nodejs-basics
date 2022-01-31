/* To find common elements between 2 string arrays */
const commonStringBetweenTwoArrays = (firstArray, secondArray) => firstArray
  .filter(element => secondArray !== undefined && secondArray.includes(element))

module.exports = { commonStringBetweenTwoArrays }