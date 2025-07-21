import gamesEngine, { getRandomNumber } from '../index.js'

const getProgression = () => {
  const start = getRandomNumber()
  const numCount = getRandomNumber(
    5,
    10,
  )
  const step = getRandomNumber(
    4,
    12,
  )
  let result = []
  for (let i = 0; i < numCount; i++) {
    result.push(start + i * step)
  }
  return result.join(', ')
}

const rules = 'What number is missing in the progression?'

const engine = () => {
  let nums = getProgression().split(', ')
  const index = getRandomNumber(
    0,
    nums.length - 1,
  )
  const trueAnswer = Number(nums[index])
  nums[index] = '..'
  const question = nums.join(' ')
  return [question, trueAnswer]
}

const startProgressionGame = () => gamesEngine(rules, engine)

export default startProgressionGame
