import readlineSync from 'readline-sync'
import random, { greeting } from '../index.js'

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
  let result = 0

  if (operator === '+') {
    result = a + b
  }
  else if (operator === '-') {
    result = a - b
  }
  else if (operator === '*') {
    result = a * b
  }
  return result
}

const calcGame = () => {
  const name = greeting()

  console.log('What is the result of the expression?')

  for (let i = 0; i < 3; i++) {
    const num1 = random()
    const num2 = random()
    const operator = randomOperator()
    const calcResult = calculation(
      num1,
      operator,
      num2,
    )
    const answer = readlineSync.question(`Question: ${num1} ${operator} ${num2} \nYour answer: `)

    if (Number(answer.trim()) === calcResult) {
      console.log('Correct!')
    }
    else {
      return console.log(`'${answer}' is wrong answer ;(. Correct answer was '${calcResult}'.\nLet's try again, ${name}!`)
    }
  }
  console.log(`Congratulations, ${name}!`)
}

export default calcGame
