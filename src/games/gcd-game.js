import gamesEngine from '../index.js'
import getRandomNumber from '../random.js'

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

const rules = 'Find the greatest common divisor of given numbers.'

const getRoundData = () => {
  const num1 = getRandomNumber()
  const num2 = getRandomNumber()
  const question = `${num1} ${num2}`
  const trueAnswer = gcdCalculate(
    num1,
    num2,
  )
  return [question, trueAnswer]
}

const startGcdGame = () => gamesEngine(rules, getRoundData)

export default startGcdGame
