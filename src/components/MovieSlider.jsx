import React from "react";
import { Spinner } from "react-bootstrap";
class MovieSlider extends React.Component {
  constructor(props) {
    super(props);
  }
  state = {
    isLoading: true,
    isError: false,
    movies: [],
    numberResults: 7,
  };
  componentDidMount = async () => {
    try {
      let response = await fetch(
        `http://www.omdbapi.com/?apikey=faa5255f&s=` + this.props.name
      );
      console.log(response);
      let data = await response.json();
      if (data.Response === "True") {
        console.log(data);
        this.setState({
          movies: data.Search,
          isLoading: false,
          isError: false,
        });
      } else {
        this.setState({
          isLoading: false,
          isError: true,
        });
      }
    } catch (error) {
      this.setState({
        isLoading: false,
        isError: true,
      });
      console.log(error);
    }
  };
  render() {
    return this.state.isError ? (
      <h1>ERROR</h1>
    ) : this.state.isLoading ? (
      <Spinner animation="border" role="status">
        <span className="sr-only">Loading...</span>
      </Spinner>
    ) : (
      <>
        <h5 className="ml-5 mt-2">{this.props.name}</h5>
        <div id="slider" className="container row ml-3 pt-0">
          {this.state.movies.slice(0, this.state.numberResults).map((mov) => (
            <div className="item-container">
              <img 
              className="item" 
              src={mov.Poster}
              onClick={() => this.setState({
                selectedMovie: mov
            })}
              />
            </div>
          ))}
        </div>
      </>
    );
  }
}

export default MovieSlider;
