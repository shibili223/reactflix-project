import React from 'react'

const Pagination = ({page,setPage,totalPages}) => {


    const handleNextPage = () =>{
        setPage((prev) => prev + 1)

    }

    const handlePrevPage = () => {
        setPage((prev) => prev - 1)
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
