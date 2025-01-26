import { useThemeProps } from '@mui/material'
import React from 'react'
import { useParams } from 'react-router-dom'
//import { useParams } from 'react-router-dom'
//import { useParams } from 'react-router-dom'

const Home = () => {
  const {names}=useParams();
  return (
    <div>
      <h1>Welcome to {names} home  page</h1>
    </div>
  )
}

export default Home;