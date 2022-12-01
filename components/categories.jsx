import React from 'react'

const Categories = ({categories}) => {
    
  return (
    <div>
        <pre>{JSON.stringify(categories, null, 2)}</pre>
    </div>
  )
}

export default Categories