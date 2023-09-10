import React, { useEffect } from "react";
import {
  Col,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Container,
} from "reactstrap";
import "./editRecipe.css";
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Header from "components/Headers/Header";
import formuFitService from "services/formufit.service";

function EditRecipePage () { 
  const { recipeId } = useParams();  
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const [instructions, setInstructions] = useState("");
  const [image, setImage] = useState("");
  const [bodyType, setBodyType] = useState("");    
  const [cookingTime, setCookingTime] = useState(0); //added cooking time
  const [mealType, setMealType] = useState(""); //added mealtype
  
  const navigate = useNavigate();  
     
    useEffect (() => {
      formuFitService.getRecipe(recipeId)
      .then(({data}) => {
        console.log ("fetched data:", data);
        setTitle(data.title);
        setIngredients(data.ingredients || []);
        setInstructions(data.instructions);
        setImage(data.image);
        setBodyType(data.bodyType);
        setMealType(data.mealType);
        setCookingTime(data.cookingTime);
      })
      .catch (error => {
        console.log("error getting recipe details:", error);
        });
    }, [recipeId])

    const handleSubmit = (e) => {
        e.preventDefault ();
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

        formuFitService.updateRecipe(recipeId, formData)
            .then(({data}) => {
                alert("Recipe updated");
                console.log("post response data", data);
                navigate("/recipes");
                setTitle("");
                setIngredients([]);
                setInstructions("");
                setImage("");
                setBodyType("");
                setMealType(""); //added  
                setCookingTime(0); //added
            })
            .catch (error => {
                console.log("Error updating recipe:", error);
                if (error.response) {
                    console.log("server response data:", error.response.data);
                }
            });
        }

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
      <Header breadcrumbName="Create Recipe" breadcrumbIcon="fas fa-utensils"/>
      <Container fluid className="container-body"> 
        <div className = "form-container"> 
      <Form onSubmit={handleSubmit}>
        <FormGroup row>
          <Label for="title" >Title</Label>
          <Col >
            <Input type="text" name="title" id="recipe_title" onChange={(e) => setTitle(e.target.value)} value={title}/>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="ingredients" >Ingredients</Label>
          <Col >
          {ingredients && ingredients.map((ingredient, idx) => (
            <Input type="text" name="ingredients" id={`recipe_ing_${idx}`} onChange={(e) => handleIngredientChange(e, idx)} value={ingredient} />
            ))} 
          </Col>
          <Button onClick={addIngredient} type="button">Add Ingredient</Button>
        </FormGroup>
        <FormGroup row>
          <Label for="instructions" >Instructions</Label>
          <Col >
            <Input type="text" name="instructions" id="instructions" onChange={(e) => setInstructions(e.target.value)} value={instructions}/>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="recipe_img" >Image</Label>
          <Col >
            <Input type="file" name="image" id="recipe_img" onChange={(e) => setImage(e.target.files[0])} />
            </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="bodytype" >Body Type</Label>
          <Col >
            <Input type="text" name="bodytype" id="bodytype" onChange={(e) => setBodyType(e.target.value)} value={bodyType}/>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="mealtype" >Meal Type</Label>
          <Col >
            <Input type="text" name="mealtype" id="mealtype" onChange={(e) => setMealType(e.target.value)} value={mealType}/>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="cooking Time" >Cooking Time</Label>
          <Col >
            <Input type="number" name="cookingtime" id="cookingtime" onChange={(e) => setCookingTime(e.target.value)} value={cookingTime}/>
          </Col>
        </FormGroup>
        <FormGroup check row>
          <Col sm={{ size: 10, offset: 2 }}>
            <Button>Submit</Button>
          </Col>
        </FormGroup>
      </Form>
      </div>
      </Container>
      </>
    );
  }

  export default EditRecipePage;
