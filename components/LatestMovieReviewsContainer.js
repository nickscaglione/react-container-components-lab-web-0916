const key = 'bd1e73e731494e6ea741b439a850a45b';

const React = require('react');
const MovieReviews = require('./MovieReviews.js');
const { fetch } = require('whatwg-fetch')

class LatestMovieReviewsContainer extends React.Component {
  constructor() {
    super();

    this.state = {
      reviews: []
    };
  }

  componentWillMount() {
    fetch(`https://api.nytimes.com/svc/movies/v2/reviews/all.json?api-key=${key}`)
      .then(res => res.json())
      .then(res => this.setState({ reviews: res.results }))
  }

  render() {
    return (
      <div className="latest-movie-reviews">
        <h3>Latest Movie Reviews:</h3>
        <MovieReviews reviews={this.state.reviews} />
      </div>
    )
  }
}

module.exports = LatestMovieReviewsContainer;
