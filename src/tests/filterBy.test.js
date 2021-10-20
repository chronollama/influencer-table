import data from './testInput'
import filterBy from '../exercises/exercise_2_filterBy'
import { filterBySolution, uniqueBySolution } from './testOutputs'

const filterByResult = filterBy(
  uniqueBySolution,
  'myeloma',
  ['member', 'indicationCategory', 'affiliationPosition']
)

describe('filterBy', () => {
  test('output array is correct length', () => {
    expect(filterByResult.length).toBe(4)
  })

  test("correctly filters mock data by search term 'myeloma'", () => {
    for (let idx = 0; idx < filterByResult.length; idx++) {
      expect(filterBySolution[idx]).toEqual(filterByResult[idx]);
    }
  })
})
