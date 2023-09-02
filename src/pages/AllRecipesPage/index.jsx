import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { Col, Container, Row } from "reactstrap";
import Header from "components/Headers/Header";
import { Card } from "reactstrap";
import "./allrecipe.css";
import formufitService from "../../services/formufit.service";
import Loading from "components/Loading/Loading";

function AllRecipes() {
  const [recipes, setRecipes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    formufitService
      .getAllRecipes()
      .then((response) => {
        setRecipes(response.data);
        setIsLoading(false);
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
    .catch((error) => {

    });
  };

  const handleEditRecipe = (recipeId) => {
    navigate(`/recipes/edit/${recipeId}`);
  };
  
  return (
    <>
      <Header breadcrumbName="Diet Recipe" breadcrumbIcon="fas fa-utensils" />
      <Container fluid className="container-body">
        {recipes.length === 0 ? (
          <p> No recipe found </p>
        ) : 
        
        
        
        (
          <div className="s">
            {/* <h1> Recipes</h1> */}


            <Row>
          {isLoading ? (
            <Loading />
          ) : (
            recipes?.map((recipe, index) => (
              <Col md="4" key={index}>
                
                <Link to={`/recipes/${recipe._id}`}>
                    <h2>{recipe.title}</h2>
                  <img
                    src={recipe.recipeImage}
                    alt="recipe_image"
                    className="img-thumbnail"
                    style={{ width: "430px", height: "290px" }}
                  />
                  </Link>
                  <div className="recipe-buttons">
                    <button className="edit-button" onClick={()=> handleEditRecipe(recipe._id)}>Edit</button>
                    <button className="delete-button" onClick={()=> handleDeleteRecipe(recipe._id)}>Delete</button>
                  </div>
                {/* <div className="video-container">
                  <iframe
                    className="embed-responsive-item"
                    src={`https://www.youtube.com/embed/${extractVideoId(
                      workout.videoUrl
                    )}`}
                    title={`Embedded YouTube Video for ${workout.name}`}
                    frameBorder="0"
                    allowFullScreen
                  ></iframe>
                </div> */}
              </Col>
            ))
          )}
        </Row>

{/* 
            {recipes.map((recipe) => {
              return (
                <div key={recipe._id}>
                  <Link to={`/recipes/${recipe._id}`}>
                    <h2>{recipe.title}</h2>
                  </Link>
                  <img
                    src={recipe.recipeImage}
                    alt="recipe_image"
                    className="img-thumbnail"
                    style={{ width: "200px", height: "150px" }}
                  />
                </div>
              );
            })} */}
          </div>
        )}
      </Container>
    </>
  );
}

export default AllRecipes;
