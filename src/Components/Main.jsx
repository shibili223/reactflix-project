import React from 'react'


const Main = ({ children }) => {


    // // create state to use the fetch data to our app    
//     const [popMovies, setPopMovies] =useState([])                                         // data is array of object so []
//     const [totalPages, setTotalPages] = useState(null)
//     const [loading, setLoading] = useState(true)
//     const [error, setError] = useState(null)

// //useEffect used to controle refetch / rerendering
//     useEffect(() =>{
//         const fetchData = async () => { 
//             try {
//                         //fetch remote data by using axios
//            let {data} = await axios({                                         //{data} destructure the data 
//             method: "get",
//             url:"https://api.themoviedb.org/3/movie/popular",
//             params: {
//                 api_key: "e3ef60114f3455d412ea55db83f798b2",
//                 page: page
//             }
//         })
//         setPopMovies(data.results)
//         setTotalPages(data.total_pages)
//         //setTimeout = (() =>{  //to set a delay
//             setLoading(false)
//         //}, 2000)

//             } catch (error) {
//                 console.log(error.message)
//                 setError(error.message)
//                 setLoading(false)

//             }                                   //function declaration
             
//         }
//         fetchData()                                                  //function call

//     },[page])


  return (
    
  <main>
    {children}
  </main>
  )
}

export default Main
