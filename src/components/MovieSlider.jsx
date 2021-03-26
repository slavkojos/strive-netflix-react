import React from 'react'


class MovieSlider extends React.Component {
    constructor(props) {
        super(props)
    }
    state = {
        isLoading : false,
        isError : false,
        movies : []
    }
    componentDidMount = async () => {
        try {
            let response = await fetch(`http://www.omdbapi.com/?apikey=faa5255f&s=harry%20potter`)
            console.log(response)
            if (response.ok) {
                let data = await response.json()
                console.log(data)
                this.setState({
                    movies: data.Search,
                    isLoading: false
                })
            }   else {
                    this.setState({
                        isLoading: false,
                        isError: true
                    })
            }
        }   catch (error) {
            this.setState({
                isLoading: false,
                isError: true
            })
            console.log(error)
        }

    }
    render() {
        return (
            <>
                <h5 className="ml-5 mt-2">{this.props.name}</h5>      
                <div id="slider" className="container row ml-3 pt-0">
                    {this.state.movies.map(mov => (
                        <div className="item-container">
                        <img
                          className="item"
                          src={mov.Poster}
                        />
                      </div>
                    ))}
                </div>
            </>
        )
    }
//     const [movieData, updateMovieData] => {useState([]);
//   useEffect=(async () => {
//     const response = await fetch(url);
//     const data = await response.json();
//     updateMovieData(data);
//   }, []);
// }}
// console.log(movieData)




}

export default MovieSlider