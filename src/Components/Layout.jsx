import React from 'react'
import Header from './Header'
import Main from './Main'
import Footer from './Footer'

const Layout = ({children}) => {  //layout nte childrene main component nte children aayi pass cheythu kodukkanam
  return (
    <>
     <Header />
     <Main>
        {children}         {/* //Slider, MovieCard, Pagination  */}
     </Main>
     <Footer />
    
    </>
 
  )
}

export default Layout
