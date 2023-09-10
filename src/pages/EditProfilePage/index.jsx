import React, { useState, useEffect } from "react";
import { Button, Form, Input /* other imports */ } from "reactstrap";
import { useParams, useNavigate } from "react-router-dom";
import formufitService from "../../services/formufit.service";
import Loading from "components/Loading/Loading";

const EditProfile = () => {
  const { userId } = useParams();
  const navigate = useNavigate(); // Get the navigate function from React Router

  const [userProfile, setUserProfile] = useState({
    username: "",
    password: "",
    city: "",
    country: "",
    weight: 0,
    height: 0,
    profileImage: null,
  });
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    formufitService.getUserProfileById(userId).then((userData) => {
      setUserProfile(userData);
      setLoader(false);
    });
  }, [userId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await formufitService.updateUserProfile(userId, userProfile);
      navigate("/profile"); // Use navigate to redirect the user
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserProfile({
      ...userProfile,
      [name]: value,
    });
  };

  return (
    <>
      {loader ? (
        <Loading />
      ) : (
        <>
          <h2>Edit Profile</h2>
          <Form onSubmit={handleSubmit}>
            <Input
              type="text"
              name="username"
              value={userProfile.username}
              onChange={handleChange}
              placeholder="Username"
            />
            {/* Add other input fields for password, city, country, weight, height, profile image */}
            <Button type="submit" color="primary">
              Save Changes
            </Button>
          </Form>
        </>
      )}
    </>
  );
};

export default EditProfile;