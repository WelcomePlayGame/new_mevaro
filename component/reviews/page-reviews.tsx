import classes from './page-reviews.module.css';
const Reviews = () => {
  return (
    <main id="reviews" className={`${classes.reviews_container}`}>
      <h3>Відгуки</h3>
      <div>
        <ul>
          <li>
            <img src="/image/comment/1.png" alt="comment of Mevaro" />
          </li>
          <li>
            <img src="/image/comment/2.png" alt="comment of Mevaro" />
          </li>
          <li>
            <img src="/image/comment/3.png" alt="comment of Mevaro" />
          </li>
          <li>
            <img src="/image/comment/4.png" alt="comment of Mevaro" />
          </li>
          <li>
            <img src="/image/comment/5.png" alt="comment of Mevaro" />
          </li>
          <li>
            <img src="/image/comment/6.png" alt="comment of Mevaro" />
          </li>
        </ul>
      </div>
    </main>
  );
};
export default Reviews;
