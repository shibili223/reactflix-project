import React from 'react'
import Wrapper from './Wrapper'
import { Link } from 'react-router-dom'  //to set navigation
import logo from "../assets/logo.svg"


const Header = () => {
  return (
 
      <header>
        <Wrapper>
           <div className="appHeader">
            <div className="headerLeft">
              <Link to="/">
              {/* <h1>ReactFlix</h1> */}
              <img src={logo} alt='logo' width={100}/>
              </Link>
              <Link to="/favorites">
                Favorites
              </Link>
            </div>
            <div className="searchBox">
                <input type="search" className='searchField' />
            </div>
           </div> 
        </Wrapper>
      </header>

  )
}

export default Header
