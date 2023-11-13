//Reducer is used for state managenent
export const initialState = {
    page: 1,      // home page il next adichu poyi 3rd page le oru movie click cheythu veendum home page lekku poya avide nammel next adichu poya 3rd pagenu pakaram 'page 1' il thanne nikkum aa problem avoid cheyyan page ne global aakki set cheythu context vazhi pass cheyyanam.
    favorites : []
}
console.log(initialState)

export const reducer = (state, {type, payload}) => {                      //reducer is a callback function, state and action is parameter of the reducer function  
 
    switch(type){
        case "ADD_FAVORITE":
             return {...state, favorites:[...state.favorites, payload]};   //this reducer function return a enterly new object state, //1st state ne spread cheythu kodukka enkile state le favorites ne update cheyyan pattu. look above initialState, favorites is an []array. so object nakathe array ingane destructure cheyyanam. 
        case "REMOVE_FAVORITE":                                            //disfavorite or remove from the favorite list
            return {...state, favorites:state.favorites.filter(item => item.id !== payload)} 

        case "GOTO_NEXT_PAGE":
            return {...state, page:state.page + 1}  //initialState nakathulla page propertikku nammal existing aayittulla page property(state.page) enthaano athinte kude onnu add cheyyunnu. here page not an array so destrcture and upadate like this.
        case "GOTO_PREV_PAGE":
            return {...state, page: state.page - 1}
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