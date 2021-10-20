import React, { useState } from 'react'
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

  // const uniqueData = uniqueBy(data, 'member') // use the uniqueBy util to unique our data by the "member" values

  const filteredData = filterBy(data, search, [
    'indicationCategory',
    'affiliation',
    'affiliationPosition',
  ]) // use the filterBy util to filter our data by the given search term

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
    return (
      <div className='row'>
        {columns.map((col) => {
          return (
          <div className={`cell ${col.class}`} style={col.style} title={rowData[col.name]}>
            {rowData[col.name]}
          </div>
        )
        })}
      </div>
    )
  }

  return (
    <Container>
      <h1>Pulse Analytics Take Home Assignment ✏️ </h1>
      <SearchBar setSearch={setSearch} search={search} />
      <button>Sort by Priority</button>
      <Table data={filteredData} columns={columns}>{row}</Table>
      {/* <YourComponentHere data={filteredData} /> */}
    </Container>
  )
}

export default Influencers
