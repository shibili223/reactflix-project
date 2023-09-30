import React from 'react'
import { useParams } from 'react-router-dom'   //to use or get id pass from app.jsx
import { useFetch } from '../Hooks/useFetch'   //its a custom hook
import Wrapper from '../Components/Wrapper'

const MovieInfo = () => {
    // let params = useParams()    
    // console.log(params) //params is an object

    let {id} = useParams()

    const [data] = useFetch(`movie/${id}`)    //do error handling and loading //movie/${id} its a url
    console.log('data', data)

    const backdrop = {     //inline css oru object nte formatil ezhuthanam
      backgroundImage :`url(https://image.tmdb.org/t/p/w1280/${data?.backdrop_path})`
    }


  return (
    <div className='moviePage' style={backdrop}>
        <Wrapper>
          <div className="movieContent">

            <div className="moviePoster"> 
            {/* ?. called optional chaining */}
              <img src={`https://image.tmdb.org/t/p/w500/${data?.poster_path}`} alt="" />    
            
            </div>

            <div className="movieInfo">
              <div className="movieTitle">
                <h1>{data?.title}</h1>
                <h3>{data?.tagline}</h3>
              </div>

              <div className="moviePlot">
                {data?.overview}
              </div>

              <div className="movieDetails">
                {/* try these details in a component */}
              <div className="movieDetailsItem">
                <h3>Language</h3>
                <div>{data?.spoken_languages?.map((lang) => {    //here language is again an object(spoken_languages) so a object inside an object ex:data{spoken_languages:{}} so use map to get each item in spoken_languages object
                  return <span key={lang.iso_639_1}>{lang.english_name}</span>
                })}</div>
              </div>

              <div className="movieDetailsItem">
                <h3>Genre</h3>
                <div>{data?.genres?.map((x) => {    
                  return <span key={x.id}>{x.name}</span>
                })}</div>
              </div>

              <div className="movieDetailsItem">
                <h3>Runtime</h3>
                <div>{data?.runtime} Minutes</div>
              </div>

              <div className="movieDetailsItem">
                <h3>Rating</h3>
                <div>{data?.vote_average}</div>
              </div>
            
            
              </div>
            </div>
          </div>
        </Wrapper>
      
    </div>
  )
}

export default MovieInfo
