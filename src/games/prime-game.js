import gamesEngine, { random } from '../index.js'

const isPrime = (num) => {
  if (num < 2) {
    return false
  }
  if (num === 2) {
    return true
  }
  if (num % 2 === 0) {
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

const startPrimeGame = () => {
  const engine = () => {
    let question = random()
    let trueAnswer
    isPrime(question) ? trueAnswer = 'yes' : trueAnswer = 'no'
    return [question, trueAnswer]
  }
  gamesEngine(rules, engine)
}
export default startPrimeGame
