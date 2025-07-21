import readlineSync from 'readline-sync'
import askName from './cli.js'

const random = () => {
  return Math.floor(Math.random() * 100) + 1
}

const givenRangeRandom = (min, max) => {
  const range = Math.floor(Math.random() * (max - min + 1)) + min
  return range
}

const greeting = () => {
  console.log('Welcome to the Brain Games!')
  return askName()
}

const gamesEngine = (rules, engine) => {
  const name = greeting()
  console.log(rules)
  for (let i = 0; i < 3; i++) {
    const [question, trueAnswer] = engine()
    const answer = readlineSync.question(`Question: ${question} \nYour answer: `)
    if (answer.trim().toLowerCase() === String(trueAnswer).toLowerCase()) {
      console.log('Correct!')
    }
    else {
      return console.log(`'${answer}' is wrong answer ;(. Correct answer was '${trueAnswer}'.\nLet's try again, ${name}!`)
    }
  }
  console.log(`Congratulations, ${name}!`)
}

export default gamesEngine
export { givenRangeRandom, random, greeting }
