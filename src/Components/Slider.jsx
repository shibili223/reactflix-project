
// Here we use 3rd party slider

import React, { useEffect, useState } from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import axios from 'axios';

const Slider = () => {

    const [latestMovie, setLatestMovie] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            let {data} = await axios({
                methos: "get",
                url: "https://api.themoviedb.org/3/movie/now_playing",
                params: {
                    api_key:  "e3ef60114f3455d412ea55db83f798b2",
                }
            })
            setLatestMovie(data.results)
            console.log("slider", data)
        }
        fetchData()
    }, []) //here useeffect work only once bcoz empty dependency array ([]) so this is mounting phase 
   

    let splideOptions = {
        heightRatio: 0.5,
        pagination: false,
        speed: 500,
        cover: true,
        padding: "15vw",
        breakpoints: {
          640: {
            heightRatio: 0.54,
            arrows: false,
            pagination: true,
            padding: "0",
          },
        },
      };

  return (
    <div className='movieSlider'>
      <Splide options={splideOptions}>
        {
            latestMovie?.map(({backdrop_path, title}) => {  //we can destructure here in map
                return(
                    <>
                        <SplideSlide>
                        <img src={`https://image.tmdb.org/t/p/w1280${backdrop_path}`} alt={title}/>
                        <div className='slideCaption'>
                           <h2>{title}</h2>
                        </div>

                    </SplideSlide>
                   
                    </>   
                )
                
            })
        }
      </Splide>
    </div>
  )
}

export default Slider
