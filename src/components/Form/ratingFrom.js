import React from 'react';
import PropTypes from 'prop-types';
import StarRating from 'react-star-ratings';


const StarRatingComponent = ({
  name, changeRating, rating,
}) => (
  <StarRating
    rating={rating}
    starRatedColor="#D4AF37"
    changeRating={changeRating}
    numberOfStars={5}
    name={name}
    starDimension="20px"
    starSpacing="2px"
  />
);


StarRatingComponent.propTypes = {
  changeRating: PropTypes.func,
  name: PropTypes.string,
  rating: PropTypes.number,
};

export default StarRatingComponent;
