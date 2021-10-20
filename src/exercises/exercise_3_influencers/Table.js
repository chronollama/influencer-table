import React from 'react'

const Table = ({data, columns, children}) => {
  return (
    <>
      <div className='table-header'>
        {columns.map((col) => {
          return (
            <div className={`table-header-cell ${col.class}`} style={col.style}>
              {col.displayName}
            </div>
          )
        })}
      </div>
      {data.map((rowData) => {
        return children(rowData, columns)
      })}
    </>
  )
}

export default Table;