import 'bootstrap/dist/css/bootstrap.css'
import "./App.css";
import MovieSlider from "./components/MovieSlider"
import NavBar from "./components/NavBar"

function App() {
  return ( 
  <div className="App">
    <NavBar/>
    <MovieSlider search="harry%20potter" name="Harry Potter"/>
    <MovieSlider search="lord%20of%20the%20rings" name="Lord of the Rings"/>
    <MovieSlider search="james%20bond" name="James Bond"/>
  </div>
  )
}

export default App;
