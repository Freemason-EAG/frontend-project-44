import gamesEngine from '../index.js'
import getRandomNumber from '../random.js'

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

const getRoundData = () => {
  const nums = getProgression().split(', ')
  const index = getRandomNumber(
    0,
    nums.length - 1,
  )
  const trueAnswer = Number(nums[index])
  nums[index] = '..'
  const question = nums.join(' ')
  return [question, trueAnswer]
}

const startProgressionGame = () => gamesEngine(rules, getRoundData)

export default startProgressionGame
