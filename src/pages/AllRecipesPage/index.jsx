import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function AllRecipes() {
  const [recipes, setRecipes] = useState([]);
  const [isLoading, setIsLoading]= useState(false);

  useEffect(()=> {

    async function fetchRecipes() {
      try {
        const storedToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGU5Y2MyMzg2ZWQ3ZjM2ZjM3NTE0ZTAiLCJlbWFpbCI6ImRpZGVtQHRlc3QuY29tIiwidXNlcm5hbWUiOiJkaWRvIiwidXQiOjEsImJvZHlUeXBlIjoxLCJpYXQiOjE2OTM1MTUyNzEsImV4cCI6MTY5MzUzNjg3MX0.XcvMZ5zYwGs8Yu2AUdHSwtVHznw6dXCJc3C_Ffbj42U"; 
        const headers = {
        Authorization: `Bearer ${storedToken}`,
        };

        const response = await axios.get("http://localhost:5005/recipes", {headers});
        setRecipes(response.data)
        setIsLoading(true);
      } catch (error) {
        console.log(error)
      }
    }

    fetchRecipes()
  }, [])
  return (
    <> 
    {recipes.length ===0 ? 
    <p> No recipe found </p>:
  (<div>
    <h1> Recipes</h1>
    {recipes.map(recipe => {
      return <div key={recipe._id}>
        <Link to={`/recipes/${recipe._id}`}><h2>{recipe.title}</h2></Link>
        <img src={recipe.image} alt="recipe_image"/>
        <p>{recipe.ingredients}</p>
        <p>{recipe.instructions}</p>
        </div>
    })}
  </div>
    
  )}
    
</>
  )}
  
export default AllRecipes;
