import { useState, useEffect } from "react"
import axios from "axios"

// usefetch is a custom Hook, hook must start with use

export const useFetch = (url, customParams= {}) => {

    const [data, setData] = useState({})
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    const options = {
        method: "get",
        baseURL: "https://api.themoviedb.org/3/",
        url: url  ,                                      //key and value are same url so also write only; url,
        params: {
            // api_key: "e3ef60114f3455d412ea55db83f798b2",
            //for more security we can use api_key in this method create a .env.local file outside the src folder so this file not goto github, its a git ignor file. google how to use env in vite
            api_key: import.meta.env.VITE_API_KEY,
            ...customParams    //spread custom params

        }
    }

    const{page} = customParams

    useEffect(() => {

        const fetchData = async () => {     //create a async function or define async function and store it a variable namely fetchData
            try {

                let {data} = await axios(options)   //create axios to fetch data, and {data} destructure the data 
                setData(data)
                setLoading(false) 

            } catch(error){
                setError(error.message)
                loading(false)

            }
 

        }

        fetchData()   //function call /async function call
    }, [page])

    return [data, loading, error]
}