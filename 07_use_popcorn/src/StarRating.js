import { useState } from "react";
import PropTypes from "prop-types";

const containerStyle = {
  display: "flex",
  //   flexDirection: "column",
  alignItems: "center",
  gap: "16px",
};

const starContainerStyle = {
  display: "flex",
  //   gap: "4px",
};

StarRating.propTypes = {
  maxRating: PropTypes.number,
  // maxRating: PropTypes.number.isRequired,

  color: PropTypes.string,
  strokeColor: PropTypes.string,
  size: PropTypes.number,
  className: PropTypes.string,
  msg: PropTypes.arrayOf(PropTypes.string),
  defaultRating: PropTypes.number,
  onSetRating: PropTypes.func,
};

export default function StarRating({
  maxRating = 5,
  color = "#FCC419",
  strokeColor = "#D30000",
  size = 48,
  className = "",
  msg = [],
  defaultRating = 0,
  onSetRating,
}) {
  const [rating, setRating] = useState(defaultRating);
  const [tempRating, setTempRating] = useState(0);

  function handleRating(rating) {
    setRating(rating);
    onSetRating(rating);
  }

  const textStyle = {
    lineHeight: "1",
    margin: "0",
    color,
    fontSize: `${size / 1.5}px`,
  };

  return (
    <div style={containerStyle} className={className}>
      <div style={starContainerStyle}>
        {Array.from({ length: maxRating }, (_, i) => (
          <Star
            key={i}
            fullStar={tempRating ? tempRating >= i + 1 : rating >= i + 1}
            onRate={() => handleRating(i + 1)}
            onHoverIn={() => setTempRating(i + 1)}
            onHoverOut={() => setTempRating(0)}
            color={color}
            strokeColor={strokeColor}
            size={size}
          />
        ))}
      </div>
      <p style={textStyle}>
        {msg.length === maxRating
          ? msg[tempRating ? tempRating - 1 : rating - 1]
          : tempRating || rating || ""}
      </p>
      {/* <p style={textStyle}>{tempRating || rating || ""}</p> */}
      {/* <p style={textStyle}>{tempRating ? tempRating : rating || ""}</p> */}
    </div>
  );
}

function Star({
  onRate,
  fullStar,
  onHoverIn,
  onHoverOut,
  color,
  strokeColor,
  size,
}) {
  const startStyle = {
    width: `${size}px`,
    height: `${size}px`,
    dispaly: "block",
    cursor: "pointer",
  };

  return (
    <span
      role="button"
      style={startStyle}
      onClick={onRate}
      onMouseEnter={onHoverIn}
      onMouseLeave={onHoverOut}
    >
      {fullStar ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill={color}
          stroke={strokeColor}
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke={strokeColor}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="{2}"
            d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
          />
        </svg>
      )}
    </span>
  );
}
