import gamesEngine from '../index.js'
import getRandomNumber from '../random.js'

const getRandomOperator = () => {
  const operators = [
    '+',
    '-',
    '*',
  ]
  const index = getRandomNumber(0, operators.length - 1)
  return operators[index]
}

const calculation = (a, operator, b) => {
  switch (operator) {
    case '+':
      return a + b
    case '-':
      return a - b
    case '*':
      return a * b
    default:
      throw new Error(`Unknown operator: '${operator}'`)
  }
}

const rules = 'What is the result of the expression?'

const getRoundData = () => {
  const num1 = getRandomNumber()
  const num2 = getRandomNumber()
  const operator = getRandomOperator()
  const question = `${num1} ${operator} ${num2}`
  const trueAnswer = String(calculation(num1, operator, num2))
  return [question, trueAnswer]
}

const startCalcGame = () => gamesEngine(rules, getRoundData)

export default startCalcGame
