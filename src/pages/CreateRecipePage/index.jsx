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
  const [ingredients, setIngredients] = useState([]); //change to empty array form string
  const [instructions, setInstructions] = useState("");
  const [image, setImage] = useState("");
  const [bodyType, setBodyType] = useState("");
  const [cookingTime, setCookingTime] = useState(0); //added cooking time
  const [mealType, setMealType] = useState(""); //added mealtype
  const [formErrors, setFormErrors] = useState({});
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      const formData = new FormData();
      formData.append("title", title);
      
      ingredients.forEach((ingredient, index) => {
      formData.append(`ingredients[${index}]`, ingredient);
    });
      formData.append("instructions", instructions);
      formData.append("recipeImage", image);
      formData.append("bodyType", bodyType);
      formData.append("cookingTime", cookingTime); //added
      formData.append("mealType", mealType); //added

      axios
        .post("http://localhost:5005/recipes/create", formData)
        .then(({ data }) => {
          alert("Recipe created");
          console.log("post response data", data);
          navigate("/recipes");
          //clear form data
          setTitle("");
          setIngredients([]);
          setInstructions("");
          setImage("");
          setBodyType("");
          setMealType(""); //added  
          setCookingTime(0); //added
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

    if (ingredients.length === 0) {
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

    if (!mealType.trim()) {
      isValid = false;
      errors.mealType = "Meal Type is required";
    }

    if (!cookingTime.trim()) {
      isValid = false;
      errors.cookingTime = "Cooking Time is required";
    }

    setFormErrors(errors);
    return isValid;
  };

  const addIngredient = () => {
    setIngredients([...ingredients, ""]); //added

  }

  const handleIngredientChange = (event, idx) => { //added
    const {value} = event.target;
    const updatedIngredients = [...ingredients];
    updatedIngredients[idx] = value;
    setIngredients(updatedIngredients);
  }

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
                          {ingredients.map((ingredient, idx) => (
                            <Input
                            type="text"
                            name="ingredients"
                            id={`recipe_ing_${idx}`}
                            value={ingredient}
                            invalid={formErrors.ingredients !== undefined}
                            onChange={(e) => handleIngredientChange(e, idx)}
                          />
                          ))} 
                          <Button onClick={addIngredient} type="button">Add Ingredient</Button>

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
                          <FormGroup>
                          <Label for="mealtype">Meal Type</Label>
                          <Input
                            type="text"
                            name="mealtype"
                            id="mealtype"
                            value={mealType}
                            invalid={formErrors.mealType !== undefined}
                            onChange={(e) => setMealType(e.target.value)}
                          />
                          <FormFeedback>{formErrors.mealType}</FormFeedback>
                          </FormGroup>
                          <FormGroup>
                          <Label for="cookingtime">Cooking Time</Label>
                          <Input
                            type="number"
                            name="cookingtime"
                            id="cookingtime"
                            value={cookingTime}
                            invalid={formErrors.cookingTime !== undefined}
                            onChange={(e) => setCookingTime(e.target.value)}
                          />
                          <FormFeedback>{formErrors.cookingTime}</FormFeedback>
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
