import React, { useState, useEffect, useMemo } from 'react'
import styled from 'styled-components'

import data from '../../data.json'
import './styles.css'

import uniqueBy from '../exercise_1_uniqueBy'
import filterBy from '../exercise_2_filterBy'

import SearchBar from './SearchBar'
import Table from './Table'

const Container = styled.div({
  border: '1px solid black',
  borderRadius: 4,
  padding: 24,
  margin: 24,
  background: '#E8EBEC',
})

/*
  TODOs:
    1. Wire in our influencers display on line 44
    2. Wire in a click handler to the button on line 43 that will sort
       our data by priority
*/

const Influencers = () => {
  const [search, setSearch] = useState('')
  const [isSorted, setIsSorted] = useState(false)
  const [displayData, setDisplayData] = useState([])

  // const uniqueData = uniqueBy(data, 'member') // use the uniqueBy util to unique our data by the "member" values

  const filteredData = useMemo(() => {
    return filterBy(data, search, [
      'indicationCategory',
      'affiliation',
      'affiliationPosition',
    ])
  }, [search])

  useEffect(() => {
    if (isSorted) {
      setDisplayData(sortedData)
    } else {
      setDisplayData(filteredData)
    }
  }, [filteredData, isSorted])

  const columns = [
    {name: 'member', displayName: 'Member', style: {width: '100px'}},
    {name: 'influencerType', displayName: 'Type', style: {width: '100px'}},
    {name: 'indicationCategory', displayName: 'Category', style: {width: '150px'}},
    {name: 'affiliation', displayName: 'Affiliation', style: {width: '200px'}},
    {
      name: 'affiliationPosition',
      displayName: 'Title',
      class: 'affiliation-position-column',
    },
    {name: 'primaryState', displayName: 'State', style: {width: '100px'}},
    {name: 'priority', displayName: 'Priority', style: {width: '60px'}},
  ]

  const row = (rowData, columns) => {
    // key values theoretically would be unique if we were running uniqueBy on data above
    // key={rowData.member}
    return (
      <div className='row'>
        {columns.map((col) => {
          return (
          <div
            className={`cell ${col.class}`}
            style={col.style}
            title={rowData[col.name]}
          >
            {rowData[col.name]}
          </div>
        )
        })}
      </div>
    )
  }

  const sortedData = useMemo(() => {
    const priorityMap = {High: 1, Medium: 0, Low: -1}
    return filteredData.slice().sort((a, b) => {
      return priorityMap[b.priority] - priorityMap[a.priority]
    })
  }, [filteredData])

  return (
    <Container>
      <h1>Pulse Analytics Take Home Assignment ?????? </h1>
      <SearchBar setSearch={setSearch} search={search} />
      <button onClick={() => setIsSorted(true)}>Sort by Priority</button>
      <Table data={displayData} columns={columns}>{row}</Table>
    </Container>
  )
}

export default Influencers
