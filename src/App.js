import 'bootstrap/dist/css/bootstrap.css'
import "./App.css";
import SingleMovie from "./components/SingleMovie"
import NavBar from "./components/NavBar"

function App() {
  return ( 
  <div className="App">
    <NavBar/>
    <SingleMovie/>
  </div>
  )
}

export default App;
