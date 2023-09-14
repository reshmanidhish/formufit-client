import Header from "components/Headers/Header";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Col,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Container,
  FormFeedback,
  Card,
  CardBody,
  CardTitle,
  Row,
} from "reactstrap";
import "./WorkoutVideoUploadPage.css";
import formufitService from "../../services/formufit.service";

function WorkoutVideoUploadPage() {
  const [title, setTitle] = useState("");
  const [videoUrl, setVideoUrl] = useState("");
  const [bodyType, setBodyType] = useState("");
  const [formErrors, setFormErrors] = useState({});
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      formufitService
        .createWorkouts({ title: title, videoUrl, bodyType })
        .then((allWorkouts) => {
          setTitle("");
          setVideoUrl("");
          setBodyType("");
          navigate("/workouts");
        })
        .catch((error) => {
          // If the server sends an error response (invalid token) ❌
        });
    }
  };

  const validateForm = () => {
    let isValid = true;
    const errors = {};

    if (!title.trim()) {
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
      <Container className="challenges_section">
        <div className="page-title-header_wrapper page-title-header_hasProfileLink">
          <div className="page-title-header_titleWrapper">
            <h1 className="page-title-header_title">Create Workout</h1>
          </div>
        </div>
        <h4 className="workouts_subtitle">
          Provide informations for creating workout
        </h4>

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
                          <Label for="title">Workout Name</Label>
                          <Input
                            type="text"
                            id="workoutName"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            invalid={formErrors.title !== undefined}
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
                          <Label for="videoUrl">Video URL</Label>
                          <Input
                            type="text"
                            id="videoUrl"
                            value={videoUrl}
                            onChange={(e) => setVideoUrl(e.target.value)}
                            invalid={formErrors.videoUrl !== undefined}
                          />
                          <FormFeedback>{formErrors.videoUrl}</FormFeedback>
                        </FormGroup>
                        <Row className="pt-4">
                            <Col sm="6">
                              <Button
                                className="button_button"
                                data-test="btn-challenge-start"
                              >
                                Upload
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
      </Container>
    </>
  );
}

export default WorkoutVideoUploadPage;
