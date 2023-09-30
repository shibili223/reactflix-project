// The main idea of using the context is to allow your components to access global data and re-render when that global data is changed. Context solves the props drilling problem

import { createContext, useReducer } from "react";
import { initialState, reducer } from "../Reducer/appReducer";


export const AppContext = createContext()  // calling createContext

const AppContextWrapper = ({children}) => {  //its a component

    const [state, dispatch] = useReducer(reducer, initialState)
    const contextValue = {state, dispatch}     //here we need only one context for passing state and dispatch bt big project il state nu vendi oru contextum dispatch nu vendi vere contextum kodukkum thats better

   console.log(state, "state")
    return(
        <AppContext.Provider value={contextValue}>    {/* //here we need only one context for passing state and dispatch */}
            {children}
        </AppContext.Provider>
    )

      


}
export default AppContextWrapper
