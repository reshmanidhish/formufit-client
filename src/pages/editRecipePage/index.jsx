import React, { useEffect } from "react";
import {
  Col,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Container,
  Card,
  CardBody,
  CardTitle,
  Row,
} from "reactstrap";
import "./editRecipe.css";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import formuFitService from "services/formufit.service";
import Loading from "components/Loading/Loading";
import toastr from "toastr";

function EditRecipePage() {
  const { recipeId } = useParams();
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const [instructions, setInstructions] = useState("");
  const [image, setImage] = useState("");
  const [bodyType, setBodyType] = useState("");
  const [cookingTime, setCookingTime] = useState(0); //added cooking time
  const [mealType, setMealType] = useState(""); //added mealtype
  const [loader, setLoader] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    
    formuFitService
      .getRecipe(recipeId)
      .then(({ data }) => {
        const { singleRecipe } = data
        setLoader(false);
        setTitle(singleRecipe.title);
        setIngredients(singleRecipe.ingredients || []);
        setInstructions(singleRecipe.instructions);
        setImage(singleRecipe.image);
        setBodyType(singleRecipe.bodyType);
        setMealType(singleRecipe.mealType);
        setCookingTime(singleRecipe.cookingTime);
      })
      .catch((error) => {
        console.log("error getting recipe details:", error);
      });
  }, [recipeId]);

  const handleSubmit = (e) => {
    e.preventDefault();
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

    formuFitService
      .updateRecipe(recipeId, formData)
      .then(({ data }) => {
        toastr.success('Recipe updated succesfully', 'Updated!')
        navigate("/recipes");
        setTitle("");
        setIngredients([]);
        setInstructions("");
        setImage("");
        setBodyType("");
        setMealType(""); //added
        setCookingTime(0); //added
      })
      .catch((error) => {
        console.log("Error updating recipe:", error);
        if (error.response) {
          console.log("server response data:", error.response.data);
        }
      });
  };

  const addIngredient = () => {
    setIngredients([...ingredients, ""]); //added
  };

  const handleIngredientChange = (event, idx) => {
    //added
    const { value } = event.target;
    const updatedIngredients = [...ingredients];
    updatedIngredients[idx] = value;
    setIngredients(updatedIngredients);
  };

  return (
    <>
      <Container className="challenges_section">
        <div className="page-title-header_wrapper page-title-header_hasProfileLink">
          <div className="page-title-header_titleWrapper">
            <h1 className="page-title-header_title">Edit Recipe</h1>
          </div>
        </div>
        <h4 className="workouts_subtitle">
          Provide informations for editing diet recipe
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
                    <Container fluid className="container-body">
                      <div>
                        <Form onSubmit={handleSubmit}>
                          <FormGroup>
                            <Label for="title">Title</Label>
                            <Input
                              type="text"
                              name="title"
                              id="recipe_title"
                              onChange={(e) => setTitle(e.target.value)}
                              value={title}
                            />
                          </FormGroup>
                          <FormGroup>
                            <Label for="ingredients">Ingredients</Label>
                            {ingredients &&
                              ingredients.map((ingredient, idx) => (
                                <Input
                                  type="text"
                                  name="ingredients"
                                  id={`recipe_ing_${idx}`}
                                  onChange={(e) =>
                                    handleIngredientChange(e, idx)
                                  }
                                  value={ingredient}
                                />
                              ))}
                            <Button onClick={addIngredient} type="button">
                              Add Ingredient
                            </Button>
                          </FormGroup>
                          <FormGroup>
                            <Label for="instructions">Instructions</Label>
                            <Input
                              rows={7} 
                              type="textarea"
                              name="instructions"
                              id="instructions"
                              onChange={(e) => setInstructions(e.target.value)}
                              value={instructions}
                            />
                          </FormGroup>
                          <FormGroup>
                            <Label for="recipe_img">Image</Label>
                            <Input
                              type="file"
                              name="image"
                              id="recipe_img"
                              onChange={(e) => setImage(e.target.files[0])}
                            />
                          </FormGroup>
                          <FormGroup>
                            <Label for="bodytype">Body Type</Label>
                            <Input
                              type="text"
                              name="bodytype"
                              id="bodytype"
                              onChange={(e) => setBodyType(e.target.value)}
                              value={bodyType}
                            />
                          </FormGroup>
                          <FormGroup>
                            <Label for="mealtype">Meal Type</Label>
                            <Input
                              type="text"
                              name="mealtype"
                              id="mealtype"
                              onChange={(e) => setMealType(e.target.value)}
                              value={mealType}
                            />
                          </FormGroup>
                          <FormGroup>
                            <Label for="cooking Time">Cooking Time</Label>
                            <Input
                              type="number"
                              name="cookingtime"
                              id="cookingtime"
                              onChange={(e) => setCookingTime(e.target.value)}
                              value={cookingTime}
                            />
                          </FormGroup>
                          <Row>
                            <Col sm="6">
                              <Button
                                className="button_button"
                                data-test="btn-challenge-start"
                              >
                                UPDATE
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
                      </div>
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

export default EditRecipePage;
