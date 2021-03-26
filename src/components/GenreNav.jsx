const GenreNav = () => {
    return(
    <div className="container row ml-4 mb-3">
        <h1>TV Shows</h1>
        <div className="dropdown ml-4 mt-2">
          <button
            className="btn btn-dark dropdown-toggle"
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Genres
          </button>
          <div className="container">
            <div className="dropdown-menu row" aria-labelledby="dropdownMenuButton">
              <div id="genres">
                <ul className="no-bullets">
                  <li>Action & Adventure</li>
                  <li>Anime</li>
                  <li>British</li>
                  <li>Comedies</li>
                  <li>Crime</li>
                  <li>Docuseries</li>
                  <li>Dramas</li>
                </ul>
                <ul className="no-bullets">
                  <li>Horror</li>
                  <li>International</li>
                  <li>Italian</li>
                  <li>Kids</li>
                  <li>Mysteries</li>
                  <li>Reality & Talk</li>
                  <li>Romance</li>
                </ul>
                <ul className="no-bullets">
                  <li>Sci-Fi & Fantasy</li>
                  <li>Science & Nature</li>
                  <li>Teen</li>
                  <li>Thriller</li>
                  <li>US</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    )};

export default GenreNav