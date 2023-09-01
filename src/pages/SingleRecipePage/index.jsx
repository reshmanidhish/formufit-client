import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { Container } from "reactstrap";
import Header from "components/Headers/Header";
import "./singleRecipe.css";

function SingleRecipe() {
  const [recipe, setRecipe] = useState([]);
  const [isLoading, setIsLoading]= useState(false);
  const {recipeId} =useParams();

  useEffect(()=> {

    async function fetchRecipes() {
      try {
        const storedToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGU5Y2MyMzg2ZWQ3ZjM2ZjM3NTE0ZTAiLCJlbWFpbCI6ImRpZGVtQHRlc3QuY29tIiwidXNlcm5hbWUiOiJkaWRvIiwidXQiOjEsImJvZHlUeXBlIjoxLCJpYXQiOjE2OTM1OTg3MDMsImV4cCI6MTY5MzYyMDMwM30.LIehvjmXJ5Qc9miUOMaJN3m2vxbjFHjui8UnxTyv-EU"
        const headers = {
        Authorization: `Bearer ${storedToken}`,
        };

        const response = await axios.get(`http://localhost:5005/recipes/${recipeId}`, {headers});
        setRecipe(response.data)
        setIsLoading(true);
      } catch (error) {
        console.log(error)
      }
    }

    fetchRecipes()
  }, [recipeId]);

  if(!isLoading) {
    return <p>Loading...</p>;
  }
  if (!recipe) {
    return <p>Recipe not found</p>;
  }
  return (
    <> 
    <Header breadcrumbName="Icon" breadcrumbIcon="fas fa-user" />
    <Container fluid className="container-body">
    <div className="single_recipe">
        <h2>{recipe.title}</h2>
        <img src={recipe.recipeImage} alt="recipe_image" className="img-thumbnail" style={{ width: "200px", height: "150px" }}/>
        <p>{recipe.ingredients}</p>
        <p>{recipe.instructions}</p>
    </div>
   </Container>  
</>
  );
}
  
  
export default SingleRecipe;
