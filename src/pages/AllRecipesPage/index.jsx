import React, { useState, useEffect, useContext } from "react";
import { Container, Card, CardBody, CardTitle, Button } from "reactstrap";
import formufitService from "../../services/formufit.service";
import Loading from "components/Loading/Loading";
import "./styles.scss";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "context/auth.context";

function AllRecipes() {
  const [recipes, setRecipes] = useState([]);
  const [loader, setLoader] = useState(true);
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  useEffect(() => {
    formufitService
      .getAllRecipes()
      .then((response) => {
        setRecipes(response.data);
        setLoader(false);
      })
      .catch((error) => {
        // If the server sends an error response (invalid token) ❌
      });
  }, []);

  const handleDeleteRecipe = (recipeId) => {
    formufitService
      .deleteRecipe(recipeId)
      .then((response) => {
        setRecipes((otherRecipes) =>
          otherRecipes.filter((recipe) => recipe._id !== recipeId)
        );
      })
      .catch((error) => {});
  };

  const handleEditRecipe = (recipeId) => {
    navigate(`/recipes/edit/${recipeId}`);
  };

  return (
    <>
      <Container className="challenges_section">
        <div className="page-title-header_wrapper page-title-header_hasProfileLink">
          <div className="page-title-header_titleWrapper">
            <h1 className="page-title-header_title">Diet Recipes</h1>
          </div>
        </div>
        <h4 className="workouts_subtitle">Your personalized diet plan</h4>
        {loader ? (
          <Loading />
        ) : (
          <div className="challenges_cardsContainer">
            {recipes?.map((recipe, index) => (
              <div>
                <Card className="card_container"> 
                  <div className="card_imageContainerOuter"> 
                    <div className="card_imageContainer__kgi1d">
                      <img width={350} height={280} src={recipe?.recipeImage} />
                      {user.ut === 1 && (
                        <div className="button-container">
                          <button
                            className="edit-button"
                            onClick={() => handleEditRecipe(recipe._id)}
                          >
                            <i className="fas fa-edit"></i>
                          </button>
                          <button
                            className="delete-button"
                            onClick={() => handleDeleteRecipe(recipe._id)}
                          >
                            <i className="fas fa-trash-alt"></i>
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                  <CardBody className="card_content">
                    <div className="card_info">
                      <CardTitle className="card_title">
                        {recipe.title} ({recipe.mealType})
                      </CardTitle>
                      <div className="calendar-icon_container">
                        <div className="calendar-icon_inner">
                          <span>28</span> days
                        </div>
                      </div>
                    </div>
                    <Button
                      onClick={() => navigate(`/recipes/${recipe._id}`)}
                      className="button_button"
                      data-test="btn-challenge-start"
                    >
                      VIEW RECIPE
                    </Button>
                  </CardBody>
                </Card>
              </div>
            ))}
          </div>
        )}
      </Container>
    </>
  );
}

export default AllRecipes;
