import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Container } from "reactstrap";
import Header from "components/Headers/Header";
import { Card } from "reactstrap";

function AllRecipes() {
  const [recipes, setRecipes] = useState([]);
  const [isLoading, setIsLoading]= useState(false);

  useEffect(()=> {

    async function fetchRecipes() {
      try {
        const storedToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGU5Y2MyMzg2ZWQ3ZjM2ZjM3NTE0ZTAiLCJlbWFpbCI6ImRpZGVtQHRlc3QuY29tIiwidXNlcm5hbWUiOiJkaWRvIiwidXQiOjEsImJvZHlUeXBlIjoxLCJpYXQiOjE2OTM1Njk0MjAsImV4cCI6MTY5MzU5MTAyMH0.8nFczZ0CZvAupNNTq4ijMvkp95XsJGdIvMHzXZJ1xgY"
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
    <Header breadcrumbName="Icon" breadcrumbIcon="fas fa-user" />
    <Container fluid className="container-body">
       
    {recipes.length ===0 ? 
    <p> No recipe found </p>:
  (<div>
    <h1> Recipes</h1>
    {recipes.map(recipe => {
      return <div key={recipe._id}>
        <Link to={`/recipes/${recipe._id}`}><h2>{recipe.title}</h2></Link>
        <img src={recipe.recipeImage} alt="recipe_image" className="img-thumbnail" style={{ width: "200px", height: "150px" }}/>
       </div>
       
    })}
  </div>
  
    
  )}
  
   </Container>  
</>
  )}
  
export default AllRecipes;
