import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Card, CardBody, CardHeader, Col, Container, Row } from "reactstrap";
import "./styles.css";
import formufitService from "../../services/formufit.service";
import CommentForm from "pages/CreateCommentPage/Comments";
import Rating from "react-rating";
import emptyStar from "../../assets/img/star-empty.png";
import filledStar from "../../assets/img/star-full.png";

function SingleRecipe() {
  const [recipe, setRecipe] = useState([]);
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { recipeId } = useParams();
  const [averageRating, setAverageRating] = useState(0);
  const [isUserRatedAndCommented, setIsUserRatedAndCommented] = useState(false);

  useEffect(() => {
    formufitService
      .getRecipe(recipeId)
      .then((response) => {
        setRecipe(response.data.singleRecipe);
        setComments(response.data.commentsAndRatings);
        setAverageRating(response.data.averageRating);
        setIsUserRatedAndCommented(response.data.isUserRatedAndCommented);
        setIsLoading(false);
      })
      .catch((error) => {
        // If the server sends an error response (invalid token) ❌
      });
  }, [recipeId]);

  return (!isLoading &&
    <Container className="challenges_section">
      <div className="page-title-header_wrapper page-title-header_hasProfileLink">
        <div className="page-title-header_titleWrapper">
          <h1 className="page-title-header_title">
            {recipe.title} ({recipe.mealType})
          </h1>
        </div>
        
         {/* <div class="course-stats_courseStats__ynW6t"><span>9 lessons</span><span class="course-stats_separator__aSPod">|</span><span>1h 15m</span></div> */}
        <Rating
                className="mb-3"
                initialRating={averageRating}
                readonly
                emptySymbol={
                  <img src={emptyStar} width="18" className="star" />
                }
                fullSymbol={
                  <img src={filledStar} width="18" className="star" />
                }
              />
       
      </div>
      <Card>
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
            <Col md="6">
              <div className="how-to-make-title">Ingredients:</div>
              <ul>
                {recipe.ingredients.map((ingredient, index) => (
                  <li className="recipe-items-li" key={index}>
                    {ingredient}
                  </li>
                ))}
              </ul>
            </Col>
          </Row>
        </CardHeader>
        <CardBody className="card_content">
          <div className="how-to-make-title-cookingtime">
            Cooking Time: {recipe.cookingTime} min
          </div>
          <div className="how-to-make-title">Instructions:</div>
          <p className="text-justify">{recipe.instructions}</p>
          <CommentForm showRatingCommentForm={!isUserRatedAndCommented} allComments={comments} recipeId={recipe._id} />
        </CardBody>
      </Card>
    </Container>
  );
}

export default SingleRecipe;
