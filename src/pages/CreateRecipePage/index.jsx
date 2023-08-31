import React from "react";
import {
  Col,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Container,
} from "reactstrap";
import "./recipe.css";
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Header from "components/Headers/Header";

function CreateRecipePage () { 
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [instructions, setInstructions] = useState("");
  const [image, setImage] = useState("");
  const [bodyType, setBodyType] = useState("");    
  
  const navigate = useNavigate();  

  const handleSubmit = (e) => {
    e.preventDefault ();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("ingredients", ingredients);
    formData.append("instructions", instructions);
    formData.append("recipeImage", image);
    formData.append("bodyType", bodyType);
      
      axios.post("http://localhost:5005/recipes", formData)
      .then(({data}) => {
        alert("Recipe created");
        console.log("post response data", data)
        navigate("/recipes");
        //clear form data
        setTitle("");
        setIngredients("");
        setInstructions("");
        setImage("");
        setBodyType("");
      })
      .catch (error => {
        console.log("error creating recipe:", error);
        if(error.response) {
          console.log("server response data:", error.response.data);
        }
      })
    }
          
    return (
      <>
      <Header breadcrumbName="Icon" breadcrumbIcon="fas fa-user"/>
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
            <Input type="text" name="ingredients" id="recipe_ing" onChange={(e) => setIngredients(e.target.value)} value={ingredients} />
          </Col>
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

  export default CreateRecipePage;
