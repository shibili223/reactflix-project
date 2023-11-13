import React from 'react'
import Wrapper from './Wrapper'
import { Link } from 'react-router-dom'  //to set navigation
import logo from "../assets/logo.svg"
import SearchBox from './SearchBox'
import { useContext } from 'react'  //to take favorites count
import { AppContext } from '../Context/appContext' //to take favorites count , now the all data in AppContext


const Header = () => {

  const {state} = useContext(AppContext)    //ee state aanu favorites store cheythirikkunna array ullathu

  return (
 
      <header>
        <Wrapper>
           <div className="appHeader">
            <div className="headerLeft">
              <Link to="/">
              {/* <h1>ReactFlix</h1> */}
              <img src={logo} alt='logo' width={100}/>
              </Link>
              <Link to="/favorites">                            {/* Link act as a href tag in DOM */}
                <div className='favCount'>
                  <span className='count'>{state?.favorites?.length}</span>
                Favorites  
                </div>
              </Link>
            </div>

            <SearchBox />
          
           </div> 
        </Wrapper>
      </header>

  )
}

export default Header
