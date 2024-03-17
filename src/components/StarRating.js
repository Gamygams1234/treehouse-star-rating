import React, { useState } from "react";
import Star from "./Star";

const StarRating = () => {
  // Initialize a 'courseRating' state
  const [courseRating, setCourseRating] = useState(0);

  // Write a function that returns 5 Star components

  const selectRating = (event, rating) => {
    if (rating === courseRating){
        setCourseRating(0);
    }else{
        setCourseRating(rating);
    }
   
  };

  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(<Star key={i} selected={i <= courseRating} setRating={(event) => selectRating(event, i)} />);
    }
    return stars;
  };

  // Write an event handler that updates the courseRating state.
  // Pass the function to a Star component via props

  return (
    <ul className="course--stars" id="course--stars">
      {/* Render the Star components */}
      {renderStars()}
    </ul>
  );
};

export default StarRating;
