import React from 'react'
import Wrapper from './Wrapper'
import MovieCard from './MovieCard'
import { popularMovies } from '../Utils/data'

const Main = () => {
  return (
  <main>
    <div className="movieSlider">
        <p>Movie slider goes here</p>
    </div>
    <Wrapper>
        <h2 className='sectionTitle'>Popular Movies</h2>
        <div className="gallery">
            {
                popularMovies.map( movie =>{
                    return <MovieCard key={movie.id} movie={movie} />
                })

                //advanced
                // popularMovies.map( movie => <MovieCard{...movie} />)
            }

        </div>
    </Wrapper>

  </main>
  )
}

export default Main
