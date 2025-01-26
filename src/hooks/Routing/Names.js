import React from 'react'
import { useParams } from 'react-router-dom'

const Names = () => {
    const {age}=useParams();
  return (
    <div>
        <h1>my age is {age}</h1>
    </div>
  )
}

export default Names;