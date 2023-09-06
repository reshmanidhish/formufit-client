import { useEffect, useState } from "react";
import axios from "axios";
import formufitService from "../../services/formufit.service";

function Rating (recipeId, userId, ratingValue) {
    const ratingData = {
        recipeId: recipeId,
        userId: userId,
        rating: ratingValue,
    };
        formufitService
            .createRating(ratingData)
            .then((response) => {
              console.log ("Rating saved successfully");
            })
            .catch((error) => {
                console.log("error saving rating:", error);
            })
    };

    return (
        <div> 
        
        </div>
    
    )


export default Rating;