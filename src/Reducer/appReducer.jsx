//Reducer is used for state managenent
export const initialState = {
    page: 1,      // home page il next adichu poyi oru movie click cheythu veendum home page lekku poya avide nammel next adichu poya pagenu pakaram page number 1 il thanne nikkum aa problem avoid cheyyan page ne global aakki set cheythu context vazhi pass cheyyanam.
    favorites : []
}
console.log(initialState)

export const reducer = (state, {type, payload}) => {                      //reducer is a callback function, state and action is parameter of the reducer function  
 
    switch(type){
        case "ADD_FAVORITE":
             return {...state, favorites:[...state.favorites, payload]};   //this reducer function return a enterly new object state
        case "REMOVE_FAVORITE":                                            //disfavorite or remove from the favorite list
            return {...state,favorites:state.favorites.filter(item => item.id !== payload)} 
        default:
            return state  
          }     
    }
    

    

    //example of spread
    //  let obj = {
    //     num:0,
    //     user:"john",
    //     users:["Malt", "Done"]
    //  }
    //  let updatedObj = {...obj, num:10, user:"Mini", users:[...obj.users, "Ben"]}
    //  console.log(updatedObj)