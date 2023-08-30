import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function AllRecipes() {
  const [recipes, setRecipes] = useState([]);
  const [isLoading, setIsLoading]= useState(false);

  useEffect(()=> {
    async function fetchRecipes() {
      try {
        const response = await axios.get("http://localhost:5005/recipes");
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
