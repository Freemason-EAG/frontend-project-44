import gamesEngine, { random } from '../index.js'

const isEven = num => num % 2 === 0

const rules = 'Answer "yes" if the number is even, otherwise answer "no".'

const engine = () => {
  const question = random()
  const parityCheck = isEven(question)
  const trueAnswer = (parityCheck === true) ? 'yes' : 'no'
  return [question, trueAnswer]
}

const startEvenGame = () => gamesEngine(rules, engine)

export default startEvenGame
