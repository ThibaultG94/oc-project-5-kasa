const MAX_RATING = 5;
const STARS = [1, 2, 3, 4, 5];

function StarIcon({ active }) {
  return (
    <svg
      className={`rating__star ${active ? "rating__star--active" : ""}`}
      viewBox="0 0 24 24"
      focusable="false"
      aria-hidden="true"
    >
      <path
        d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
        fill="currentColor"
      />
    </svg>
  );
}

function Rating({ rating }) {
  const score = Number(rating);

  return (
    <div
      className="rating"
      role="img"
      aria-label={`${score} étoiles sur ${MAX_RATING}`}
    >
      {STARS.map((star) => (
        <StarIcon key={star} active={star <= score} />
      ))}
    </div>
  );
}

export default Rating;
