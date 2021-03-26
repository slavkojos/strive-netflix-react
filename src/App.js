import "./App.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <NavBar
        title="Netflix"
        links={["Home", "TV Shows", "Movies", "My List"]}
      />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
