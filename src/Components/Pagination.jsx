import React from 'react'
import { useContext } from 'react'                     //to use dispatch to work page(prev next button in home)
import { AppContext } from '../Context/appContext'    //to use dispatch to work page(prev next button in home)

const Pagination = ({page,setPage,totalPages}) => {
  const {dispatch} = useContext(AppContext)


    const handleNextPage = () =>{

        dispatch({      // dispatch calling / invoke
          type : "GOTO_NEXT_PAGE",     //this is a action, nammal dispatch ne call cheyyumbol argument ne object aayittanu pass cheyyunnathu ithine"action object" ennu parayunnu

        })

    // setPage((prev) => prev + 1)
    }

    const handlePrevPage = () => {
      dispatch({
        type: "GOTO_PREV_PAGE",
      })
        // setPage((prev) => prev - 1)
    }

  return (
    <div className='pagination'>
        <button disabled={page <= 1} onClick={handlePrevPage}>Prev</button>
        <p>Page {page} of {totalPages}</p>
        <button disabled={page >= {totalPages}} onClick={handleNextPage}>Next</button>
      
    </div>
  )
}

export default Pagination
