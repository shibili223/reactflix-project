import React from 'react'

const ErrorMessages = ({children}) => {
  return (
    <div className='errorMessage'>
      {children}
    </div>
  )
}

export default ErrorMessages
