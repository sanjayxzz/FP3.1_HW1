

//1//

const words = ["banana", "apple", "kiwi", "orange", "grape"]

const largestWord = words.reduce((accumulator,currentValue) => (currentValue.length > accumulator.length ? currentValue : accumulator),'')
console.log(largestWord)

//2//

const numbers = [10, 5, 8, 20, 15];

const minNumber = numbers.reduce((accumulator,currentValue) => (currentValue < accumulator ? currentValue : accumulator),numbers[0])
console.log(minNumber)

//3//

const wordsLength = ["apple", "banana", "kiwi", "orange", "grape"];

const totalWordsLength = wordsLength.reduce((accumulator,currentValue) => accumulator + currentValue.length , 0)
console.log(totalWordsLength)

//4//

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const countEvenNums = nums.reduce((accumulator,currentValue)=> currentValue %2 === 0 ? accumulator + 1 : accumulator,0 )
console.log(countEvenNums)

//5// (ask)

const wordsCaps = ["hello", "world", "how", "are", "you"];

const capitalized = wordsCaps.reduce((accumulator,currentValue) => accumulator + (accumulator ? " " : " ") + currentValue[0].toUpperCase() + currentValue.slice(1), " ")
console.log(capitalized)

//6//

const numsAvg = [10, 15, 20, 25, 30];

const average = numsAvg.reduce((accumulator,currentValue) => accumulator + currentValue , 0 ) / numsAvg.length 
console.log(average)


//7//

const numbers1 = [1, 2, 3, 4, 5];

const sumOfSquares = numbers1.reduce((accumulator, currentValue) => accumulator + currentValue ** 2, 0)
console.log(sumOfSquares)

//8//

const stationeryWords = ["pen", "notebook", "eraser", "notebook", "pencil", "notebook", "pencil"];

const occurrences = stationeryWords.reduce((accumulator,currentValue) => {accumulator[currentValue] = (accumulator[currentValue] || 0 ) + 1
return accumulator
},{})
console.log(occurrences)

//9//

const wordsLetter = ["apple", "banana", "kiwi", "orange", "grape"];

const letterOccurences= wordsLetter.reduce((accumulator,currentValue) => {
  const firstLetter = currentValue[0];
  accumulator[firstLetter] = (accumulator[firstLetter] || 0 ) + 1;
  return accumulator;
},{} )

console.log(letterOccurences)

//10//

const numPositive = [-2, 3, 4, -5, 6];
const productOfPositives = numPositive.reduce((accumulator, currentValue) => currentValue > 0 ? accumulator * currentValue : accumulator, 1);
console.log(productOfPositives); 
