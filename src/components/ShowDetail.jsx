import React from 'react'
import { Col, Container, Card, Row } from 'react-bootstrap'
import MovieSlider from './MovieSlider'

class ShowDetail extends React.Component {
    state = {
        selectedMovie: null
    }
    // componentDidMount = () => {
    //     let items = fetch
    //     let movieId = this.props.match.params.movieId
    //     let selectedMovie = items.find(movie => movie.id.toString() === movieId)
    //     if (selectedMovie) {
    //         this.setState({
    //             selectedMovie
    //         })
    //     }
    //     console.log(selectedMovie)
    // }

    render() {
        return (
            <Container>
                <Row className="justify-content-center mt-5">
                    <Col xs={8}>
                        {this.state.selectedMovie ? <Card>
                            <Card.Img variant="top" src={this.state.selectedMovie.search.imdbID} />
                            <Card.Body>
                                <Card.Title>{this.state.selectedMovie.data.imdbID}</Card.Title>
                                <Card.Text>
                                    {this.state.selectedMovie.imdbID}
                                </Card.Text>
                            </Card.Body>
                        </Card> : <h1>LOADING...</h1>}
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default ShowDetail