'use client';

import React, { useEffect, useState } from 'react';
import classes from './page-reviews.module.css';
import Image from 'next/image';

const Reviews = () => {
  const [reviews, setReviews] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [visibleReviews, setVisibleReviews] = useState(6);
  const [averageRating, setAverageRating] = useState<number | null>(null);
  const [totalReviewCount, setTotalReviewCount] = useState<number | null>(null);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch('/api/reviews');
        if (!response.ok) {
          throw new Error('Ошибка при загрузке отзывов');
        }
        const data = await response.json();
        setReviews(data.reviews || []);
        setAverageRating(data.averageRating || null);
        setTotalReviewCount(data.totalReviewCount || null);
      } catch (error) {
        setError('Не удалось получить отзывы');
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, []);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('uk-UA', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const renderStars = (rating: string) => {
    const starCount = {
      ONE: 1,
      TWO: 2,
      THREE: 3,
      FOUR: 4,
      FIVE: 5,
    };

    const count = starCount[rating.toUpperCase()] || 0;

    return (
      <>
        {[...Array(count)].map((_, index) => (
          <span key={index} className={classes.starFilled}>
            ★
          </span>
        ))}
        {[...Array(5 - count)].map((_, index) => (
          <span key={index + count} className={classes.starEmpty}>
            ☆
          </span>
        ))}
      </>
    );
  };

  const showMoreReviews = () => {
    setVisibleReviews((prevVisible) => prevVisible + 6);
  };

  return (
    <div
      className={classes.container}
      id="reviews"
      itemScope
      itemType="http://schema.org/ItemList"
    >
      <a
        href="https://g.page/r/CaVODvw2utWNEBM/review"
        target="_blank"
        className={`${classes.addReviews}`}
        itemProp="url"
      >
        Залишити Відгук
      </a>
      {averageRating !== null && totalReviewCount !== null && (
        <div className={classes.stats}>
          <div
            itemScope
            itemType="http://schema.org/AggregateRating"
            itemProp="aggregateRating"
          >
            <p className={`${classes.verageRating}`}>
              Середній рейтинг:{' '}
              <span itemProp="ratingValue">{averageRating.toFixed(1)}</span>
            </p>
            <p>
              Кількість відгуків:{' '}
              <span itemProp="reviewCount">{totalReviewCount}</span>
            </p>
          </div>
        </div>
      )}
      {loading ? (
        <p className={classes.loading}>Загрузка відгуків...</p>
      ) : error ? (
        <p className={classes.error}>{error}</p>
      ) : reviews.length > 0 ? (
        <ul className={classes.list}>
          {reviews.slice(0, visibleReviews).map((review, index) => (
            <li
              key={index}
              className={classes.item}
              itemScope
              itemType="http://schema.org/Review"
              itemProp="review"
            >
              <div className={classes.avatarWrapper}>
                <Image
                  width={70}
                  height={70}
                  className={classes.avatar}
                  src={
                    review.reviewer.profilePhotoUrl ||
                    '/image/default-avatar.png'
                  }
                  alt={review.reviewer.displayName || 'Avatar'}
                  itemProp="author"
                />
              </div>
              <div className={classes.reviewContent}>
                <strong className={classes.name} itemProp="author">
                  {review.reviewer.displayName}
                </strong>
                <p className={classes.comment} itemProp="reviewBody">
                  {review.comment?.split('(Original)')[1]?.trim() ||
                    'Немає оригіналу'}
                </p>
                <p className={classes.rating}>
                  <span
                    itemProp="reviewRating"
                    itemScope
                    itemType="http://schema.org/Rating"
                  >
                    {renderStars(review.starRating)}
                    <meta itemProp="ratingValue" content={review.starRating} />
                  </span>
                </p>
                <p className={classes.date} itemProp="datePublished">
                  {formatDate(review.createTime)}
                </p>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p className={classes.error}>Немає відгуків</p>
      )}

      {reviews.length > visibleReviews && (
        <button className={classes.showMoreButton} onClick={showMoreReviews}>
          Показати більше
        </button>
      )}
    </div>
  );
};

export default Reviews;
