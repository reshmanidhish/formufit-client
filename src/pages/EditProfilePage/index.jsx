import React, { useState, useEffect } from "react";
import { Button, Form, Input /* other imports */ } from "reactstrap";
import { useParams, useNavigate } from "react-router-dom";
import formufitService from "../../services/formufit.service";
import Loading from "components/Loading/Loading";

const EditProfile = () => {
  const { userId } = useParams();
  const navigate = useNavigate();

  const [userProfile, setUserProfile] = useState({
    username: "",
    password: "",
    city: "",
    country: "",
    weight: 0,
    height: 0,
    profileImage: null, // Store the selected profile image file
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
      navigate("/profile");
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

  const handleProfilePictureChange = (e) => {
    const file = e.target.files[0];
    setUserProfile({ ...userProfile, profileImage: file });
  };

  const handleUploadProfilePicture = async () => {
    try {
      if (userProfile.profileImage) {
        await formufitService.uploadProfilePicture(userId, userProfile.profileImage);
        // Optionally, you can update the user's profile with the new profile picture
        // await formufitService.updateUserProfile(userId, userProfile);
        // ...
      }
    } catch (error) {
      console.error(error);
    }
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
            {/* Add other input fields for password, city, country, weight, height */}
            <Input
              type="file"
              accept="image/*"
              name="profileImage"
              onChange={handleProfilePictureChange}
            />
            <Button type="button" onClick={handleUploadProfilePicture} color="primary">
              Upload Profile Picture
            </Button>
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