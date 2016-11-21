const key = 'bd1e73e731494e6ea741b439a850a45b'

const React = require('react')
const MovieReviews = require('./MovieReviews.js')

class SearchableMovieReviewsContainer extends React.Component {
  constructor() {
    super();

    this.state = {
      reviews: []
    };

    this.handleSearch = this.handleSearch.bind(this)
    this.searchMovies = this.searchMovies.bind(this)
  }

  handleSearch(event) {
    this.searchMovies(event.target.parentNode.childNodes[1].value)
  }

  searchMovies(searchTerm) {
    fetch(`https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=${searchTerm}&api-key=${key}`)
      .then(res => res.json())
      .then(res => this.setState({ reviews: res.results }))
  }

  render() {
    return (
      <div className='searchable-movie-reviews'>
        <h3>Search Results:</h3>
        <input type="text" />
        <button type="submit" onClick={this.handleSearch}>Search</button>
        <MovieReviews reviews={this.state.reviews} />
      </div>
    )
  }
}

module.exports = SearchableMovieReviewsContainer;
