import Layout from "./Components/Layout"
import { Routes, Route } from "react-router-dom"
import Home from "./Pages/Home"
import Favorites from "./Pages/Favorites"
import MovieInfo from "./Pages/MovieInfo"


function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path="/" element={ <Home/> } />
          <Route path="/favorites" element= { <Favorites /> } />
          <Route path="/movie/:id" element= { <MovieInfo />} />      {/* dynamic route */}
        </Routes>

      </Layout>
    </div>
  )
}

export default App
