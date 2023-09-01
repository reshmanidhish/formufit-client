import Header from "components/Headers/Header";
import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import formufitService from "../../services/formufit.service";
import Loading from "components/Loading/Loading";

function WorkoutList() {
  const [workouts, setWorkouts] = useState([]);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    // Fetch the list of workouts from the server using an API call
    formufitService
      .getWorkouts()
      .then((allWorkouts) => {
        setWorkouts(allWorkouts.data);
        setLoader(false);
      })
      .catch((error) => {
        // Handle error here
      });
  }, []);

  function extractVideoId(url) {
    const match = url.match(/(?:\/|%3D|v=|vi=)([0-9A-Za-z_-]{11})(?:[%#?&]|$)/);
    return match ? match[1] : null;
  }

  return (
    <>
      <Header breadcrumbName="Icon" breadcrumbIcon="fas fa-user" />
      <Container fluid className="container-body">
        <h2>Workout List</h2>
        <Row>
          {loader ? (
            <Loading />
          ) : (
            workouts?.map((workout, index) => (
              <Col key={index}>
                <h3>Workout: {workout.title}</h3>
                <div className="video-container">
                  <iframe
                    className="embed-responsive-item"
                    src={`https://www.youtube.com/embed/${extractVideoId(
                      workout.videoUrl
                    )}`}
                    title={`Embedded YouTube Video for ${workout.name}`}
                    frameBorder="0"
                    allowFullScreen
                  ></iframe>
                </div>
              </Col>
            ))
          )}
        </Row>
      </Container>
    </>
  );
}

export default WorkoutList;
