import { useEffect, useState } from "react";
import formufitService from "../../services/formufit.service";


const StarRating = ({recipeId, userId, currentRating, onUpdateRating}) => {
    const [rating, setRating] = useState(currentRating || null);
    const [hover, setHover] = useState(null);

    useEffect(()=>{
        console.log("currentRating:", currentRating);
        setRating(currentRating);
    }, [currentRating]);

    const handleMouseEnter = (ratingValue) => {
        setHover(ratingValue);
    }

    const handleMouseLeave = () => {
        setHover(null);
    }

    const handleClick = async (ratingValue) => {
        try {
            const response = await formufitService.createRating({
                recipeId,
                rating: ratingValue,
            });
            console.log("rating submitted:", response);
            onUpdateRating(ratingValue);
        } catch (error){
            console.log("error submitting rating:", error);
        }
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
                    cursor: "pointer",
                  }}
                ></i>
              </label>
            );
          })}
        </div>
      );
    };

export default StarRating;