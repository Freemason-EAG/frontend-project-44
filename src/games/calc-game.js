import gamesEngine, { random } from '../index.js'

const randomOperator = () => {
  const operators = [
    '+',
    '-',
    '*',
  ]
  const index = Math.floor(Math.random() * operators.length)
  return operators[index]
}

const calculation = (a, operator, b) => {
  if (operator === '+') {
    return a + b
  }
  else if (operator === '-') {
    return a - b
  }
  else if (operator === '*') {
    return a * b
  }
}

const rules = 'What is the result of the expression?'

const startCalcGame = () => {
  const engine = () => {
    const num1 = random()
    const num2 = random()
    const operator = randomOperator()
    const question = `${num1} ${operator} ${num2}`
    const trueAnswer = String(calculation(num1, operator, num2))
    return [question, trueAnswer]
  }
  gamesEngine(rules, engine)
}

export default startCalcGame
