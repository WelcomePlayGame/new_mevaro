import classes from './page-reviews.module.css';
import Image from 'next/image';
import { fetchReviewsData } from '@/lib/fetchReviews';

const formatDate = (dateString: string) => {
  return new Date(dateString).toLocaleDateString('uk-UA', {
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

  const count = starCount[rating.toUpperCase() as keyof typeof starCount] || 0;
  return (
    <>
      {[...Array(count)].map((_, index) => (
        <span key={`filled-${index}`} className={classes.starFilled}>
          ★
        </span>
      ))}
      {[...Array(5 - count)].map((_, index) => (
        <span key={`empty-${index}`} className={classes.starEmpty}>
          ☆
        </span>
      ))}
    </>
  );
};

export default async function Reviews() {
  const { reviews, averageRating, totalReviewCount, error } =
    await fetchReviewsData();
  const visibleReviews = 6;

  const jsonLdData = {
    '@context': 'https://schema.org',
    '@type': 'Review',
    itemReviewed: {
      '@type': 'Organization',
      name: 'Mevaro',
    },
    reviewRating: {
      '@type': 'Rating',
      ratingValue: averageRating?.toFixed(1) || 0,
      bestRating: 5,
      worstRating: 1,
    },
    author: {
      '@type': 'Organization',
      name: 'Mevaro',
    },
    reviewCount: totalReviewCount || 0,
  };

  return (
    <div className={classes.container} id="reviews">
      <a
        href="https://g.page/r/CaVODvw2utWNEBM/review"
        target="_blank"
        rel="noopener noreferrer"
        className={classes.addReviews}
      >
        Залишити Відгук
      </a>

      {averageRating !== null && totalReviewCount !== null && (
        <div className={classes.stats}>
          <p className={classes.verageRating}>
            Середній рейтинг: <span>{averageRating.toFixed(1)}/5</span>
          </p>
        </div>
      )}

      {error ? (
        <p className={classes.error}>{error}</p>
      ) : reviews.length > 0 ? (
        <ul className={classes.list}>
          {reviews.slice(0, visibleReviews).map((review, index) => (
            <li key={index} className={classes.item}>
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
                />
              </div>
              <div className={classes.reviewContent}>
                <strong className={classes.name}>
                  {review.reviewer.displayName}
                </strong>
                <p className={classes.comment}>
                  {review.comment?.split('(Original)')[1]?.trim() ||
                    'Немає оригіналу'}
                </p>
                <p className={classes.rating}>
                  {renderStars(review.starRating)}
                </p>
                <p className={classes.date}>{formatDate(review.createTime)}</p>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p className={classes.error}>Немає відгуків</p>
      )}

      <script suppressHydrationWarning type="application/ld+json">
        {JSON.stringify(jsonLdData)}
      </script>
    </div>
  );
}
