'use client';
import React, { useState } from 'react';
import classes from './page-comment.module.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Rating from '../rating/page-rating';

const AddComment = () => {
  const [rating, setRating] = useState(0);

  const handleRatingSelect = (value) => {
    setRating(value);
  };

  const add = (event) => {
    event.preventDefault();
    toast.info(`Ви надали свій коментар з рейтингом: ${rating} з 5`);
  };

  return (
    <div className={`${classes.container_comment}`}>
      <h4 className={`${classes.container_h4_comment}`}>
        бажаєте залишити відгук про Mevaro?
      </h4>
      <form className={`${classes.form_container}`} onSubmit={add}>
        <Rating onRatingSelect={handleRatingSelect} />{' '}
        <textarea
          maxLength={200}
          placeholder="Ваш комментар ..."
          aria-label="Написати комментар для Mevaro"
        ></textarea>
        <button
          type="submit"
          aria-label="залишити відгук"
          className={`${classes.container_btn}`}
          id="reviews"
        >
          <strong>залишити відгук</strong>
        </button>
      </form>
    </div>
  );
};

export default AddComment;
