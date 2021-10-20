import data from './testInput'
import uniqueBy from '../exercises/exercise_1_uniqueBy'
import { uniqueBySolution } from './testOutputs'

const uniqueByResult = uniqueBy(data, 'member')

describe('uniqueBy', () => {
  test('output array is correct length', () => {
    expect(uniqueByResult.length).toBe(17)
  })

  test("correctly uniques mock data by 'member' values", () => {
    for (let idx = 0; idx < uniqueByResult.length; idx++) {
      expect(uniqueBySolution[idx]).toEqual(uniqueByResult[idx])
    }
  })
})
