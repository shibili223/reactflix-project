import React from 'react'

const MovieCard = ({movie}) => {
const {original_title, vote_average,  poster_path} = movie

  return (
    <div className='movieCard'>
        <img className='moviePoster' src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt="" />
        <div className="movieCardFooter">
            <div className="movieCardDetails">
                <h2 className="movieCardTitle">{original_title}</h2>
                <p className="movieCardRating">{vote_average}</p>

            </div>
            <div className="favButton">
                #
            </div>
        </div>
      
    </div>
  )
}

export default MovieCard
