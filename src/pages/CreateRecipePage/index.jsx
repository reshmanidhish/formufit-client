import React, { useState, useEffect } from "react";
import {
  Row,
  Col,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Card,
  CardBody,
  CardTitle,
  Container,
  FormFeedback,
} from "reactstrap";

import axios from "axios";
import { useNavigate } from "react-router-dom";
import Loading from "components/Loading/Loading";
import "./styles.scss";

function CreateRecipePage() {
  const [loader, setLoader] = useState(false);
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [instructions, setInstructions] = useState("");
  const [image, setImage] = useState("");
  const [bodyType, setBodyType] = useState("");
  const [formErrors, setFormErrors] = useState({});
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      const formData = new FormData();
      formData.append("title", title);
      formData.append("ingredients", ingredients);
      formData.append("instructions", instructions);
      formData.append("recipeImage", image);
      formData.append("bodyType", bodyType);

      axios
        .post("http://localhost:5005/recipes/create", formData)
        .then(({ data }) => {
          alert("Recipe created");
          console.log("post response data", data);
          navigate("/recipes");
          //clear form data
          setTitle("");
          setIngredients("");
          setInstructions("");
          setImage("");
          setBodyType("");
        })
        .catch((error) => {
          console.log("error creating recipe:", error);
          if (error.response) {
            console.log("server response data:", error.response.data);
          }
        });
    }
  };

  const validateForm = () => {
    let isValid = true;
    const errors = {};

    if (!title.trim()) {
      isValid = false;
      errors.title = "Recipe name is required";
    }

    if (!ingredients.trim()) {
      isValid = false;
      errors.ingredients = "Ingredients is required";
    }

    if (!instructions.trim()) {
      isValid = false;
      errors.instructions = "Instructions is required";
    }

    if (!image) {
      isValid = false;
      errors.image = "Image is required";
    }

    if (!bodyType.trim()) {
      isValid = false;
      errors.bodyType = "Body Type is required";
    }

    setFormErrors(errors);
    return isValid;
  };

  return (
    <>
      <Container className="challenges_section">
        <div className="page-title-header_wrapper page-title-header_hasProfileLink">
          <div className="page-title-header_titleWrapper">
            <h1 className="page-title-header_title">Create Recipe</h1>
          </div>
        </div>
        <h4 className="workouts_subtitle">
          Provide informations for creating diet recipe
        </h4>
        {loader ? (
          <Loading />
        ) : (
          <div className="">
            <div>
              <Card className="card_container">
                <CardBody className="card_content">
                  <CardTitle className="card_title"></CardTitle>
                  <div className="card_info">
                    <Container fluid className="container-body pb-0">
                      <Form onSubmit={handleSubmit}>
                        <FormGroup>
                          <Label for="title">Title</Label>
                          <Input
                            type="text"
                            name="title"
                            id="recipe_title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            invalid={formErrors.title !== undefined}
                          />
                          <FormFeedback>{formErrors.title}</FormFeedback>
                        </FormGroup>
                        <FormGroup>
                          <Label for="ingredients">Ingredients</Label>
                          <Input
                            type="text"
                            name="ingredients"
                            id="recipe_ing"
                            value={ingredients}
                            invalid={formErrors.ingredients !== undefined}
                            onChange={(e) => setIngredients(e.target.value)}
                          />
                          <FormFeedback>{formErrors.ingredients}</FormFeedback>
                        </FormGroup>
                        <FormGroup>
                          <Label for="instructions">Instructions</Label>
                          <Input
                            type="text"
                            name="instructions"
                            id="instructions"
                            value={instructions}
                            invalid={formErrors.instructions !== undefined}
                            onChange={(e) => setInstructions(e.target.value)}
                          />
                          <FormFeedback>{formErrors.instructions}</FormFeedback>
                        </FormGroup>
                        <FormGroup>
                          <Label for="recipe_img">Image</Label>
                          <Input
                            type="file"
                            name="image"
                            id="recipe_img"
                            invalid={formErrors.recipe_img !== undefined}
                            onChange={(e) => setImage(e.target.files[0])}
                          />
                          <FormFeedback>{formErrors.recipe_img}</FormFeedback>
                        </FormGroup>
                        <FormGroup>
                          <Label for="bodytype">Body Type</Label>
                          <Input
                            type="text"
                            name="bodytype"
                            id="bodytype"
                            value={bodyType}
                            invalid={formErrors.bodyType !== undefined}
                            onChange={(e) => setBodyType(e.target.value)}
                          />
                          <FormFeedback>{formErrors.bodyType}</FormFeedback>
                        </FormGroup>
                        <Row>
                          <Col sm="6">
                            <Button
                              className="button_button"
                              data-test="btn-challenge-start"
                            >
                              Submit
                            </Button>
                          </Col>
                          <Col sm="6">
                            <Button
                              type="reset"
                              className="button_button"
                              data-test="btn-challenge-start"
                            >
                              CLEAR
                            </Button>
                          </Col>
                        </Row>
                      </Form>
                    </Container>
                  </div>
                </CardBody>
              </Card>
            </div>
          </div>
        )}
      </Container>
    </>
  );
}

export default CreateRecipePage;
