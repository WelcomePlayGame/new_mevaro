'use client';
import React, { useState } from 'react';
import classes from './rating.module.css';

const Rating = ({ onRatingSelect }) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const handleClick = (value) => {
    setRating(value);
    if (onRatingSelect) {
      onRatingSelect(value);
    }
  };

  return (
    <div className={classes.rating}>
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          className={`${classes.star} ${
            star <= (hover || rating) ? classes.filled : ''
          }`}
          onClick={() => handleClick(star)}
          onMouseEnter={() => setHover(star)}
          onMouseLeave={() => setHover(0)}
          role="button"
          aria-label={`Rating ${star} out of 5`}
        >
          ★
        </span>
      ))}
    </div>
  );
};

export default Rating;
