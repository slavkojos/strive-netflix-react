import React from 'react'


class SingleMovie extends React.Component {
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
            let response = await fetch("http://www.omdbapi.com/?apikey=faa5255f&s=harry%20potter");
            console.log(response)
            if (response.ok) {
                let movies = await response.json
                console.log(movies)
            }   else {

            }
        }   catch (error) {
            console.log(error)
        }

    }
    render() {
        return (
            <>
                <h4 className="text-white mb-3">New Releases</h4>
                <div className="row no-gutters text-center mb-4"></div>
                    {this.state.movies.map(mov => (
                        <div key={mov.Search.imdbID} className="col col-12 col-md-6 col-lg-2 px-1 mb-1">
                            <img
                            className="img-fluid"
                            src={mov.Search.Poster}
                            alt={mov.Search.Title}
                            />
                        </div>
                    ))}
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

export default SingleMovie