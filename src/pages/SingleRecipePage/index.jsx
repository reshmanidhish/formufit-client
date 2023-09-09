import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { Card, CardBody, CardHeader, Col, Container, Row } from "reactstrap";
import Header from "components/Headers/Header";
import "./singleRecipe.css";
import formufitService from "../../services/formufit.service";

function SingleRecipe() {
  const [recipe, setRecipe] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { recipeId } = useParams();

  useEffect(() => {
    formufitService
      .getRecipe(recipeId)
      .then((response) => {
        setRecipe(response.data);
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
            <h1 className="page-title-header_title">{recipe.title}</h1>
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
          <div className="how-to-make-title">Ingredients:</div>
          <p>{recipe.ingredients}</p>
          <div className="how-to-make-title">Instructions:</div>
          <p>{recipe.instructions}</p>
        </CardBody>
      </Card>
    </Container>
  );
}

export default SingleRecipe;
