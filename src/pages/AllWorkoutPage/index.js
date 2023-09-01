import Header from "components/Headers/Header";
import React, { useState, useEffect } from "react";
import { Container } from "reactstrap";
import formufitService from "../../services/formufit.service";
function WorkoutList() {
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    // Fetch the list of workouts from the server using an API call
    formufitService
      .getWorkouts()
      .then((allWorkouts) => {})
      .catch((error) => {
        // If the server sends an error response (invalid token) ❌
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
        {workouts.map((workout, index) => (
          <div key={index}>
            <h3>Workout: {workout.name}</h3>
          </div>
        ))}
      </Container>
    </>
  );
}

export default WorkoutList;
