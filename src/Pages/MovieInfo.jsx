import React from 'react'
import { useParams } from 'react-router-dom'

const MovieInfo = () => {
    let params = useParams()
    console.log(params)
  return (
    <div>
        <h1>Movie info</h1>
      
    </div>
  )
}

export default MovieInfo
