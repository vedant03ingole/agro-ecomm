import React from 'react'


type CategoryProps = {
  categories: object
}

const Categories = ({categories}: CategoryProps) => { 
    
  return (
    <div>
        <pre>{JSON.stringify(categories, null, 2)}</pre>
    </div>
  )
}

export default Categories