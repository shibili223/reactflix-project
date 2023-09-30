import React from 'react'
import { useContext } from 'react'
import { AppContext } from '../Context/appContext'
import HeartFill from "../assets/heart-filled.svg"
import HeartLine from "../assets/heart-lined.svg"


const FavoriteButton = ({ movie }) => {

 const {state, dispatch} = useContext(AppContext)     //{state, dispatch} destructuring cheythedukkanam bcoz appContext.jsx ninnum pass cheyyunnathu value={contextValue}, contextValue objectil aanu state and dispatch ullathu

//  check when we click one movie 2 tymes so that add 2 times in favorite page so avoid it
let favorited = state.favorites.some(item => item.id === movie.id)

  const handleFavorite = () => {
    favorited ? dispatch({
      type: "REMOVE_FAVORITE",
      payload: movie.id,
    }) : 
    dispatch({
      type: "ADD_FAVORITE",
      payload: movie,
    })

  }

  return (
    <div className="favButton" 
         onClick={handleFavorite}>   
                 {/* ee button click cheyyumbol aa perticular movie appReducer.jsx le favorite = [] array lekku push cheyyanam */}
  {favorited ? (<img src={HeartFill} alt="" width={24} />) : (  <img src={HeartLine} alt="" width={24} />)}
    
    </div>
  )
}

export default FavoriteButton
