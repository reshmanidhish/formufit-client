import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { Container } from "reactstrap";
import Header from "components/Headers/Header";
import "./singleRecipe.css";
import formufitService from "../../services/formufit.service";
import CommentForm from "pages/CreateCommentPage/Comments";

function SingleRecipe() {
  const [recipe, setRecipe] = useState([]);
  const [isLoading, setIsLoading]= useState(false);
  const {recipeId} = useParams();

  useEffect(() => {
    formufitService
      .getRecipe(recipeId)
      .then((response) => {
        setRecipe(response.data)
        setIsLoading(true);
      })
      .catch((error) => {
        // If the server sends an error response (invalid token) ❌
      });
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
        <CommentForm recipeId={recipe._id}/>
    </div>
   </Container>  
</>
  );
}
  
  
export default SingleRecipe;
