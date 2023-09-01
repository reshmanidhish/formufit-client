import Header from "components/Headers/Header";
import React, { useState } from "react";
import {
  Col,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Container,
  FormFeedback,
} from "reactstrap";
import "./WorkoutVideoUploadPage.css";
import formufitService from "../../services/formufit.service";





function WorkoutVideoUploadPage() {
  const [workoutName, setWorkoutName] = useState("");
  const [videoUrl, setVideoUrl] = useState("");
  const [bodyType, setBodyType] = useState("");
  const [formErrors, setFormErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

   
    if (validateForm()) {
      console.log("Workout Name:", workoutName);
      console.log("Video URL:", videoUrl);
      formufitService
      .createWorkouts({name:workoutName, videoUrl,bodyType })
      .then((allWorkouts) => {
        setWorkoutName("")
        setVideoUrl("")
        setBodyType("")
      })
      .catch((error) => {
        // If the server sends an error response (invalid token) ❌
      });
      // You can use these values to make an API call to upload the workout
    }
  };

  const validateForm = () => {
    let isValid = true;
    const errors = {};

    if (!workoutName.trim()) {
      isValid = false;
      errors.workoutName = "Workout name is required";
    }

    // You can implement more comprehensive URL validation here
    if (!videoUrl.trim()) {
      isValid = false;
      errors.videoUrl = "Video URL is required";
    }

    setFormErrors(errors);
    return isValid;
  };
  return (
    <>
      <Header breadcrumbName="Icon" breadcrumbIcon="fas fa-user" />
      <Container fluid className="container-body">
        <div className="form-container">
          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <Label for="workoutName">Workout Name</Label>
              <Input
                type="text"
                id="workoutName"
                value={workoutName}
                onChange={(e) => setWorkoutName(e.target.value)}
                invalid={formErrors.workoutName !== undefined}
              />
              <FormFeedback>{formErrors.workoutName}</FormFeedback>
            </FormGroup>

            <FormGroup>
              <Label for="bodyType">Bodytype</Label>
              <Input
                type="text"
                id="bodyType"
                value={bodyType}
                onChange={(e) => setBodyType(e.target.value)}
                invalid={formErrors.bodyType !== undefined}
              />
              <FormFeedback>{formErrors.bodyType}</FormFeedback>
            </FormGroup>



            <FormGroup>
              <Label for="videoUrl">YouTube Video URL</Label>
              <Input
                type="text"
                id="videoUrl"
                value={videoUrl}
                onChange={(e) => setVideoUrl(e.target.value)}
                invalid={formErrors.videoUrl !== undefined}
              />
              <FormFeedback>{formErrors.videoUrl}</FormFeedback>
            </FormGroup>
            <Button color="primary" type="submit">
              Upload
            </Button>
          </Form>
        </div>
      </Container>
    </>
  );
}

export default WorkoutVideoUploadPage;
