import readlineSync from 'readline-sync'

const gamesEngine = (rules, engine) => {
  console.log('Welcome to the Brain Games!')
  const name = readlineSync.question('May I have your name? ')
  console.log(`Hello, ${name}!`)
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
