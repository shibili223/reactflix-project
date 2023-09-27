import React from 'react'

const Wrapper = (props) => { // without destructuring so prps
  return (
    <div className='wrapper'>
      {props.children}
    </div>
  )
}

export default Wrapper

// or 
// const Wrapper = ({children}) => {  //destucturing {children}
//     return (
//       <div>
//         {children}
//       </div>
//     )
//   }
  
//   export default Wrapper