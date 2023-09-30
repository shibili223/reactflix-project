import React from 'react'
import { useState } from 'react'
import { useFetch } from '../Hooks/useFetch'
import { Link } from 'react-router-dom'  //for normal navigation
import { useNavigate } from 'react-router-dom' //for programatic navigation or automatic navigation, its a hook

const SearchBox = () => {

    const [searchQuery, setSearchQuery] = useState("")
   const [data] = useFetch(`search/movie`, { query:searchQuery })
   console.log(searchQuery, "searchQuery")
   console.log("data", data)
   
   const navigate = useNavigate()  //these useNavigate Hook oru function ne thirichu tharum that is "navigate"
  

  return (

    <div className="searchBox">
       <input type="search"
              className='searchField'
               value={searchQuery} 
               onChange={(e) => setSearchQuery(e.target.value)} />
               {/*  */}

               <div className="resultBox">
                <ul>
                    {data?.results?.map((x) => {
                        return(
                            <>
                             {/* 1. navigate by using <Link> */}
                                {/* <Link to={`movie/${x.id}`}>   //Link use cheyyumbol DOM il additional aayittu oru ahref tag um undaavuv
                                <li key={x.id}>
                                    {<img src={`https://image.tmdb.org/t/p/w200/${x.backdrop_path}`} alt="" />}
                                    <h4>{x.title}</h4>
                                    <p>{x.vote_average}</p>
                                </li>
                                </Link> */}
                            
                            {/* 1. navigate by using "useNavigate" hook,  this is a programatic navigation so no href tag in DOM*/}
                            <li key={x.id} onClick={() => navigate(`movie/${x.id}`)}>    {/* onClick is a anonimus function */}
                                    {<img src={`https://image.tmdb.org/t/p/w200/${x.backdrop_path}`} alt="" />}
                                    <h4>{x.title}</h4>
                                    <p>{x.vote_average}</p>
                                </li>
                                
                               
                            </>

                        )
                        
                    })}
                </ul>
               </div>
       </div>

  )
}

export default SearchBox
