import gamesEngine from '../index.js'
import getRandomNumber from '../random.js'

const isEven = num => num % 2 === 0

const rules = 'Answer "yes" if the number is even, otherwise answer "no".'

const engine = () => {
  const question = getRandomNumber()

  const trueAnswer = isEven(question) ? 'yes' : 'no'
  return [question, trueAnswer]
}

const startEvenGame = () => gamesEngine(rules, engine)

export default startEvenGame
