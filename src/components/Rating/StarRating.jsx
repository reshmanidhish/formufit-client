import React from "react";
import { useState } from "react";

const StarRating = () => {
    const [rating, setRating] = useState(null);
    const [hover, setHover] = useState(null)
    const handleMouseEnter = (ratingValue) => {
        setHover(ratingValue);
      };
    
      const handleMouseLeave = () => {
        setHover(null);
      };
    
      const handleClick = (ratingValue) => {
        setRating(ratingValue);
      };
    
      return (
        <div>
          {[...Array(5)].map((star, i) => {
            const ratingValue = i + 1;
    
            return (
              <label key={i}>
                <input
                  type="radio"
                  name="rating"
                  value={ratingValue}
                  style={{display: "none"}}
                  onClick={() => handleClick(ratingValue)}
                  onMouseEnter={() => handleMouseEnter(ratingValue)}
                  onMouseLeave={handleMouseLeave}
                />
                <i
                  className="fa fa-star"
                  style={{
                    color:
                      ratingValue <= (hover || rating) ? "#ffc107" : "#e4e5e9",
                    fontSize: "2em",
                  }}
                ></i>
              </label>
            );
          })}
        </div>
      );
    };
    
    export default StarRating;