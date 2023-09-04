import React, { useState, useEffect } from "react";
import {
  Container,
  Card,
  CardBody,
  CardTitle,
  Button,
} from "reactstrap";
import formufitService from "../../services/formufit.service";
import Loading from "components/Loading/Loading";
import "./styles.scss";

function WorkoutList() {
  const [workouts, setWorkouts] = useState([]);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    formufitService
      .getWorkouts()
      .then((allWorkouts) => {
        setWorkouts(allWorkouts.data);
        setLoader(false);
      })
      .catch((error) => {
      });
  }, []);

  return (
    <>
      <Container className="challenges_section">
        <div className="page-title-header_wrapper page-title-header_hasProfileLink">
          <div className="page-title-header_titleWrapper">
            <h1 className="page-title-header_title">Challenges</h1>
          </div>
        </div>
        <h4 className="workouts_subtitle">Your workouts</h4>
        {loader ? <Loading/> : 
        <div className="challenges_cardsContainer">
          {workouts?.map((workout, index) => (
            <div>
              <Card className="card_container">
                <div className="card_imageContainerOuter">
                  <div className="card_imageContainer__kgi1d">
                    <video controls width="350">
                      <source src={workout.videoUrl} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </div>
                <CardBody className="card_content">
                  <div className="card_info">
                    <CardTitle className="card_title">
                      {workout.title}
                    </CardTitle>
                    <div className="calendar-icon_container">
                      <div className="calendar-icon_inner">
                        <span>28</span> days
                      </div>
                    </div>
                  </div>
                  <Button
                    className="button_button"
                    data-test="btn-challenge-start"
                  >
                    START CHALLENGE
                  </Button>
                </CardBody>
              </Card>
            </div>
          ))}
        </div>
}
      </Container>
    </>
  );
}

export default WorkoutList;
