import React,{useState} from 'react'
import Slider from '../Components/Slider'
import Wrapper from '../Components/Wrapper'
import Loader from '../Components/Loader'
import ErrorMessages from '../Components/ErrorMessages'
import MovieCard from '../Components/MovieCard'
import Pagination from '../Components/Pagination'
import { useFetch } from '../Hooks/useFetch'
import { useContext } from 'react'                        //  to access/handle page number(next prev)
import { AppContext } from '../Context/appContext'       //  to access/handle page number(next prev)
import Main from "../Components/Main"


const Home = () => {

  const {state:{page}} = useContext(AppContext)                    //const contextValue = {state, dispatch} in appContext.jsx so ithine ingananu destructure cheyya
   
  // or inganeyum destructure cheyyam
  // const {state} = useContext(AppContext)
  // const {page} = state     
 
  //  const [page, setPage] = useState(1)             //to handle page number  // page ne global state il aakki koduthathukond(appReducer.jsx il initialState={page:1, favorites:[]}) ee state nte aavashyam illa.
     
   const [data, loading, error] = useFetch("movie/popular", {page: page} )     //page:page ithinu pakaram verum page ennum kodukkam bcoz page:page 2 sidesum same aanu   //its a function call useFetch is a function. movie/popular,{page: page}  is arguments of the function,we pass these argument to useFech.js it looks like a hook, so useFetch is a custom hook
   console.log(loading , data, error)
   const {results, total_pages} = data


  return (
    <>
    <Main>
      <Slider />
        <Wrapper>
          {loading && <Loader />}

          {error &&<ErrorMessages> {error} </ErrorMessages>}               {/* pass children as {error} */}

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
              {/* <Pagination page={page} setPage={setPage} totalPages={total_pages}/>  */}
              <Pagination page={page} totalPages={total_pages}/> 
            </>
               
        )}
    
     </Wrapper>


    </Main>  
    </>
  )
}

export default Home
