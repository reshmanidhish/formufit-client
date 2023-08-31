import React, { useState } from 'react';

function WorkoutVideoUploadPage() {
  const [workoutName, setWorkoutName] = useState('');
  const [videoUrl, setVideoUrl] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send the workoutName and videoUrl to the server using an API call
  };

  return (
    <div>
      <h2>Upload Workout Video</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Workout Name"
          value={workoutName}
          onChange={(e) => setWorkoutName(e.target.value)}
        />
        <input
          type="text"
          placeholder="YouTube Video URL"
          value={videoUrl}
          onChange={(e) => setVideoUrl(e.target.value)}
        />
        <button type="submit">Upload</button>
      </form>
    </div>
  );
}

export default WorkoutVideoUploadPage;
