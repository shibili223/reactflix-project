import Layout from "./Components/Layout"
import { Routes, Route } from "react-router-dom"
import Home from "./Pages/Home"
import Favorites from "./Pages/Favorites"
import MovieInfo from "./Pages/MovieInfo"


function App() {
  return (
    <div className="App">
      <Layout>
        {/* routing start here */}
        <Routes> 
          <Route path="/" element={ <Home/> } />                    {/* static route */}
          <Route path="/favorites" element= { <Favorites /> } />     {/* static route */}
          <Route path="/movie/:id" element= { <MovieInfo />} />      {/* FOR MOVIECARD LINK CLICK GOTO MOVIEINFO PAGE ; dynamic route: working: we pass id here, so ithu address baril kaanikkum, evideyaano ee id use cheyyunnathu avide useParam hook vachedukkum check movieInfo.jsx */}
          <Route path="/latestMovie/:id" element= { <MovieInfo />} />      {/* FOR SLIDER LINK CLICK GOTO MOVIEINFO PAGE;  dynamic route: working: we pass id here, so ithu address baril kaanikkum, evideyaano ee id use cheyyunnathu avide useParam hook vachedukkum check movieInfo.jsx */}
        </Routes>

      </Layout>
    </div>
  )
}

export default App
