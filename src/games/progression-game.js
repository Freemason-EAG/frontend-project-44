import gamesEngine, { givenRangeRandom, random } from '../index.js'

const progression = () => {
  const start = random()
  const numCount = givenRangeRandom(
    5,
    10,
  )
  const step = givenRangeRandom(
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

const startProgressionGame = () => {
  const engine = () => {
    let nums = progression().split(', ')
    const index = givenRangeRandom(
      0,
      nums.length - 1,
    )
    const trueAnswer = Number(nums[index])
    nums[index] = '..'
    const question = nums.join(' ')
    return [question, trueAnswer]
  }
  gamesEngine(rules, engine)
}

export default startProgressionGame
