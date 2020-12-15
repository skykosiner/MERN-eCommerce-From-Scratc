import React from "react";

export const Rating = ({ value, text }) => {
  return (
    <div className="rating">
      <span>
        <i
          className={
            value >= 1
              ? "fas fa-star"
              : value >= 0.5
              ? "fas fa-star-half-alt"
              : "far fa-star"
          }
        />
      </span>
    </div>
  );
};
