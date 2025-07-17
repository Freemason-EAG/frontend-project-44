import gamesEngine, { givenRangeRandom, random } from '../index.js'

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

const startGcdGame = () => {
  const engine = () => {
    let num1 = givenRangeRandom(
      2,
      4,
    ) * random()
    let num2 = givenRangeRandom(
      2,
      4,
    ) * random()
    let question = `${num1} ${num2}`
    let trueAnswer = gcdCalculate(
      num1,
      num2,
    )
    return [question, trueAnswer]
  }
  gamesEngine(rules, engine)
}

export default startGcdGame
