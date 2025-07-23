import gamesEngine from '../index.js'
import getRandomNumber from '../random.js'

const isPrime = (num) => {
  if (num === 2) {
    return true
  }
  if (num < 2 || num % 2 === 0) {
    return false
  }
  for (let i = 3; i <= Math.sqrt(num); i += 2) {
    if (num % i === 0) {
      return false
    }
  }
  return true
}

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".'

const getRoundData = () => {
  const question = getRandomNumber()
  const trueAnswer = isPrime(question) ? 'yes' : 'no'
  return [question, trueAnswer]
}

const startPrimeGame = () => gamesEngine(rules, getRoundData)

export default startPrimeGame
