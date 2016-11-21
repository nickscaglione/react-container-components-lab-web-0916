const React = require('react');


const MovieReviews = function(props) {
  let reviews = props.reviews.map((review)=>{
    return <li className="review">{review.display_title}</li>
  })
  return(
    <ul className="review-list">
      {reviews}
    </ul>
  )
}

MovieReviews.defaultProps = {
  reviews: []
}

module.exports = MovieReviews;
