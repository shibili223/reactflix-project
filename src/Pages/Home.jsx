import React,{useState} from 'react'
import Slider from '../Components/Slider'
import Wrapper from '../Components/Wrapper'
import Loader from '../Components/Loader'
import ErrorMessages from '../Components/ErrorMessages'
import MovieCard from '../Components/MovieCard'
import Pagination from '../Components/Pagination'
import { useFetch } from '../Hooks/useFetch'


const Home = () => {

    
   const [page, setPage] = useState(1)                                                   //to handle page number
     
   const [data, loading, error] = useFetch("movie/popular", {page: page} )        //its a function call useFetch is a function. movie/popular,{page: page}  is arguments of the function,we pass these argument to useFech.js it looks like a hook, so useFetch is a custom hook
   console.log(loading , data, error)
   const {results, total_pages} = data


  return (
    <>

    <Slider />
      <Wrapper>
        {loading &&<Loader />}
        {/* pass children as {error} */}
        {error &&<ErrorMessages>{error} </ErrorMessages>}               

        {!error && !loading && (
            <>
             <h2 className='sectionTitle'>Popular Movies</h2>
                <div className="gallery">
                  {
                                                                                    
                                                                                                         // popMovies && popMovies?.map( (movie) =>{   // or   
                        results?.map( (movie) =>{                                                      //optional chaning ?.map
                        
                            return (
                                     <MovieCard key={movie.id} movie={movie} />
                                   )
                        })
        
                                                                                                            //advanced
                                                                                                            // popularMovies.map( movie => <MovieCard{...movie} />)
                    }  
        
                </div>
              <Pagination page={page} setPage={setPage} totalPages={total_pages}/> 
            </>
               
        )}
    
    </Wrapper>

      
    </>
  )
}

export default Home
