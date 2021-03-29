import 'bootstrap/dist/css/bootstrap.css'
import "./App.css";
import MovieSlider from "./components/MovieSlider"
import NavBar from "./components/NavBar"
import GenreNav from "./components/GenreNav"

function App() {
  return ( 
  <div className="App">
    <NavBar/>
    <GenreNav/>
    <MovieSlider name="John Wick"/>
    <MovieSlider name="Harry Potter"/>
    <MovieSlider name="Lord of the Rings"/>
    <MovieSlider name="James Bond"/>
    <MovieSlider name="Fast and Furious"/>
  </div>
  )
}

export default App;
