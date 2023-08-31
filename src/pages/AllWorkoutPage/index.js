import Header from 'components/Headers/Header';
import React, { useState, useEffect } from 'react';
import { Container } from 'reactstrap';

function WorkoutList() {
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    // Fetch the list of workouts from the server using an API call
    fetch('http://localhost:3000/workouts')
      .then(response => response.json())
      .then(data => setWorkouts(data))
      .catch(error => console.error('Error fetching workouts:', error));
  }, []);

function extractVideoId(url) {
    const match = url.match(/(?:\/|%3D|v=|vi=)([0-9A-Za-z_-]{11})(?:[%#?&]|$)/);
    return match ? match[1] : null;
  }
  return (<>
    <Header breadcrumbName="Icon" breadcrumbIcon="fas fa-user" />
    <Container fluid className="container-body">
      <h2>Workout List</h2>
      {workouts.map((workout, index) => (
        <div key={index}>
          <h3>Workout: {workout.name}</h3>
          <iframe
            width="560"
            height="315"
            src={`https://www.youtube.com/embed/${extractVideoId(workout.videoUrl)}`}
            title={workout.name}
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
      ))}
    </Container>
    </>
  );
}


export default WorkoutList;
