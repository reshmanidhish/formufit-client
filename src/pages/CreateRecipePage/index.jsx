import React from 'react';
import { Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import "./recipe.css";
import { useState } from 'react';
import axios from 'axios';


const CreateRecipes =() => { 
  const [recipe, setRecipe] = useState({
    title: "",
    ingredients:"",
    instructions:"",
    Image:"",
    bodyType: "",
  });
  //console.log (recipe);
  const handleChange = (event) => {
    const {name, value} =event.target;
    setRecipe ({...recipe, [name]: value});
  };

  const onSubmit = async (event) => {
    event.preventDefault ();
    try {
      await axios.post("http://localhost:3000/recipes/create", recipe);
      alert("Recipe created");

    } catch (err) {
      console.log(err);
    }
  };
    return (
        <div className = "form-container"> 
      <Form onSubmit={onSubmit}>
        <FormGroup row>
          <Label for="title" >Recipe Title</Label>
          <Col >
            <Input type="text" name="title" id="recipe_title" onChange={handleChange}/>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="ingredients" >Ingredients</Label>
          <Col >
            <Input type="ingredients" name="ingredients" id="recipe_ing" onChange={handleChange} />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="instructions" >Instructions</Label>
          <Col >
            <Input type="instructions" name="instructions" id="instructions" onChange={handleChange}/>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="recipe_img" >Image</Label>
          <Col >
            <Input type="file" name="image" id="recipe_img" onChange={handleChange} />
            </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="bodytype" >Body Type</Label>
          <Col >
            <Input type="text" name="bodytype" id="bodytype" onChange={handleChange}/>
          </Col>
        </FormGroup>
        <FormGroup check row>
          <Col sm={{ size: 10, offset: 2 }}>
            <Button>Submit</Button>
          </Col>
        </FormGroup>
      </Form>
      </div>
    );
  }

  export default CreateRecipes;