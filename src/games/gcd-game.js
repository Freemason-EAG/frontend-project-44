import readlineSync from 'readline-sync'
import random, { givenRangeRandom, greeting } from '../index.js'

const gcdCalculate = (a, b) => {
  if (b === 0) {
    return a
  }
  let num1 = Math.max(
    a,
    b,
  )
  let num2 = Math.min(
    a,
    b,
  )

  let remainder = num1 % num2
  while (remainder !== 0) {
    num1 = num2
    num2 = remainder
    remainder = num1 % num2
  }
  return num2
}

const startGcdGame = () => {
  const name = greeting()

  console.log('Find the greatest common divisor of given numbers.')
  for (let i = 0; i < 3; i++) {
    let num1 = givenRangeRandom(
      2,
      4,
    ) * random()
    let num2 = givenRangeRandom(
      2,
      4,
    ) * random()
    let gcdResult = gcdCalculate(
      num1,
      num2,
    )
    const answer = readlineSync.question(`Question: ${num1} ${num2} \nYour answer: `)
    if (Number(answer.trim()) === gcdResult) {
      console.log('Correct!')
    }
    else {
      return console.log(`'${answer}' is wrong answer ;(. Correct answer was '${gcdResult}'.\nLet's try again, ${name}!`)
    }
  }
  console.log(`Congratulations, ${name}!`)
}

export default startGcdGame
