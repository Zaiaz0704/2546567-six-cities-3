import { ReviewType } from '../store/slices/cities-slice';
import { getRating } from '../utils/helpers';

function ReviewItem({ review }: { review: ReviewType }): JSX.Element {
  const reviewDate = new Date(review.date);
  const dateTimeString = reviewDate.toISOString().split('T')[0];
  const displayDate = reviewDate.toLocaleString('en-US', {
    month: 'long',
    year: 'numeric',
  });

  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img
            className="reviews__avatar user__avatar"
            src={review.user.avatarUrl}
            width="54"
            height="54"
            alt="Reviews avatar"
          />
        </div>
        <span className="reviews__user-name">{review.user.name}</span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span
              style={{ width: getRating(review.rating) }}
              data-testid="rating-stars"
            >
              {''}
            </span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">{review.comment}</p>
        <time className="reviews__time" dateTime={dateTimeString}>
          {displayDate}
        </time>
      </div>
    </li>
  );
}

export default ReviewItem;
