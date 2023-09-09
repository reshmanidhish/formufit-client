import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Card, CardBody, CardHeader, Col, Container, Row } from "reactstrap";
import Header from "components/Headers/Header";
import "./singleRecipe.css";
import formufitService from "../../services/formufit.service";
import CommentForm from "pages/CreateCommentPage/Comments";
import StarRating from "pages/RatingPage/createRating";


function SingleRecipe() {
  const [recipe, setRecipe] = useState([]);
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading]= useState(false);
  const {recipeId} = useParams();
  const [averageRating, setAverageRating] = useState (0);

  const onUpdateRating = async (newRating) => {
    console.log("New rating:", newRating);
    try {
      const response = await formufitService.createRating({
        recipeId,
        rating: newRating,
      })

      const updatedResponse = await formufitService.getRecipe(recipeId);
      const updatedAverageRating = updatedResponse.data.averageRating;

      setAverageRating(updatedAverageRating);

      console.log("New rating:", newRating);
      console.log("Updated average rating:", updatedAverageRating);
    } catch (error) {
      console.log("error submitting rating:", error);
    }
  };

  useEffect(() => {
    formufitService
      .getRecipe(recipeId)
      .then((response) => {
        setRecipe(response.data.singleRecipe)
        setComments(response.data.comments)
        setAverageRating(response.data.averageRating);
        setIsLoading(true);
      })
      .catch((error) => {
        // If the server sends an error response (invalid token) ❌
      });
  }, [recipeId]);

  if (!isLoading) {
    return <p></p>;
  }
  if (!recipe) {
    return <p>Recipe not found</p>;
  }
  return (
    <Container className="challenges_section">
      <div className="page-title-header_wrapper page-title-header_hasProfileLink">
        <div className="page-title-header_titleWrapper">
            <h1 className="page-title-header_title">{recipe.title} ({recipe.mealType})</h1>
        </div>
      </div>
      <Card className="card_container ">
        <CardHeader className="br-16">
          <Row>
            <Col md="6">
              <div className="card_imageContainerOuter">
                <div className="card_imageContainer__kgi1d">
                  <img
                    width={450}
                    height={350}
                    src={recipe.recipeImage}
                    className="br-16"
                  />
                </div>
              </div>
            </Col>
            <Col md="6"></Col>
          </Row>
        </CardHeader>
        <CardBody className="card_content">
        <div className="how-to-make-title-cookingtime">Cooking Time: {recipe.cookingTime} min</div>
          
          <div className="how-to-make-title">Ingredients:</div>
          <ul>
            {recipe.ingredients.map((ingredient, index) => (
            <li key = {index}>{ingredient}</li> 
          ))}  
          </ul>
          <div className="how-to-make-title">Instructions:</div>
          <p>{recipe.instructions}</p>
          <StarRating
          recipeId={recipe._id}
          currentRating={averageRating}
          onUpdateRating={onUpdateRating}
          />
          
        <CommentForm recipeId={recipe._id}/>
        </CardBody>
      </Card>
    </Container>
  );
}

export default SingleRecipe;


