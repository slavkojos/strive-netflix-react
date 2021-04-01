import 'bootstrap/dist/css/bootstrap.css'
import "./App.css";
import MovieSlider from "./components/MovieSlider"
import NavBar from "./components/NavBar"
import GenreNav from "./components/GenreNav"
import { BrowserRouter as Router, Route } from 'react-router-dom'
import ShowDetail from "./components/ShowDetail"
import RegistrationForm from './components/RegistrationForm';

function App() {
  return ( 
  <div className="App">
    <Router>
    <NavBar/>
    <Route path="/details" exact component={ShowDetail} />
    <Route path="/" exact component={GenreNav}/>
    <Route path="/" exact children={<MovieSlider name="John Wick"/>}/>
    <Route path="/" exact children={<MovieSlider name="Harry Potter"/>}/>
    <Route path="/" exact children={<MovieSlider name="Lord of the Rings"/>}/>
    <Route path="/" exact children={<MovieSlider name="James Bond"/>}/>
    <Route path="/" exact children={<MovieSlider name="Fast and Furious"/>}/>
    <Route path="/register/" exact component={RegistrationForm}/>
    </Router>
  </div>
  )
}

export default App;
