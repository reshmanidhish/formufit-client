import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  Container,
  Row,
  Col,
} from "reactstrap";

import UserHeader from "components/Headers/UserHeader.js";
import { AuthContext } from "../../context/auth.context";
import { useContext, useEffect, useState } from "react";
import Loading from "components/Loading/Loading";
import "./styles.scss";
import formufitService from "../../services/formufit.service";
import { useNavigate } from "react-router-dom";
import dietician from "../../assets/img/dietician.jpg"
const Profile = () => {
  const [wellness, setWellness] = useState([]);
  const [loader, setLoader] = useState(true);
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  useEffect(() => {
    // Fetch the list of workouts from the server using an API call
    formufitService
      .getWellness()
      .then((allWellness) => {
        setWellness(allWellness.data);
        setLoader(false);
      })
      .catch((error) => {
        // Handle error here
      });
  }, []);
  return (
    <>
      <UserHeader />
      {/* Page content */}

      <Container className="mt--9" fluid>
        <Row>
          <Col className="order-xl-1" xl="12">
            <Card className="">
              <Row className="justify-content-center">
                <Col className="order-lg-2" lg="3">
                  <div className="card-profile-image">
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <img
                        alt="..."
                        className="rounded-circle"
                        src={require("../../assets/img/theme/team-4-800x800.jpg")}
                      />
                    </a>
                  </div>
                </Col>
              </Row>
              <CardHeader className="bg-white border-0">
                <Row className="align-items-center">
                  <Col xs="8">
                    <Button
                      className="float-left"
                      color="info"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                      size="sm"
                    >
                      Message
                    </Button>
                  </Col>
                  <Col className="text-right" xs="4">
                    <Button
                      color="primary"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                      size="sm"
                    >
                      Settings
                    </Button>
                  </Col>
                </Row>
              </CardHeader>
              <CardBody className="pt-0 pt-md-4">
                <Row>
                  <div className="col">
                    <div className="card-profile-stats d-flex justify-content-center mt-md-5">
                      <div>
                        <span className="heading">{user.weight}</span>
                        <span className="description">Weight (KG)</span>
                      </div>
                      <div>
                        <span className="heading">{user.height}</span>
                        <span className="description">Height (CM)</span>
                      </div>
                      <div>
                        <span className="heading">{user.bodyType}</span>
                        <span className="description">Body Type</span>
                      </div>
                      {/* <div>
                        <span className="heading">{user.lifestyle}</span>
                        <span className="description">Lifestyle</span>
                      </div> */}
                    </div>
                  </div>
                </Row>
                {loader ? (
                  <Loading />
                ) : (
                  <>
                    <Container className="wellness_container container_sm">
                      <h4 className="workouts_subtitle">Your Workout</h4>
                      <div className="wellness-plan_header">
                        <time
                          className="wellness-plan_selectedDate"
                          dateTime="2023-09-03"
                        >
                          Today, September 3
                        </time>
                      </div>

                      <div
                        className="general-workout-card_mainWrapper"
                        onClick={() => navigate("/workouts")}
                      >
                        <div
                          role="button"
                          tabIndex="-1"
                          className="general-wellness-card_wrapper"
                        >
                          <div className="general-wellness-card_imageContainer">
                            <video
                              controls
                              width="400"
                              className="general-wellness-card_image"
                            >
                              <source
                                src={wellness?.workout?.videoUrl}
                                type="video/mp4"
                              />
                              Your browser does not support the video tag.
                            </video>
                          </div>
                          <div className="general-wellness-card_content">
                            <p className="general-wellness-card_title">
                              {wellness?.workout?.title}
                            </p>
                            <div className="general-wellness-card_labels">
                              <span className="general-wellness-card_duration">
                                25 MIN
                              </span>
                              <span className="general-wellness-card_labelsCapitalized general-wellness-card_labelDivider">
                                Advanced
                              </span>
                              <span className="general-wellness-card_labelsCapitalized general-wellness-card_labelDivider">
                                <svg
                                  width="16"
                                  height="16"
                                  viewBox="0 0 16 16"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M9.76776 1.98959L10.4749 1.28249C10.8654 0.891962 11.4986 0.891962 11.8891 1.28249L14.7175 4.11091C15.108 4.50144 15.108 5.1346 14.7175 5.52513L14.0104 6.23223L9.76776 1.98959ZM6.23224 2.69672L6.93935 1.98961C7.32987 1.59909 7.96304 1.59909 8.35356 1.98961L14.0104 7.64646C14.4009 8.03699 14.4009 8.67015 14.0104 9.06068L13.3033 9.76778L6.23224 2.69672ZM1.98961 6.93935C1.59909 7.32987 1.59909 7.96304 1.98961 8.35356L7.64646 14.0104C8.03699 14.4009 8.67015 14.4009 9.06068 14.0104L9.76778 13.3033L2.69672 6.23224L1.98961 6.93935ZM1.28249 11.8891C0.891962 11.4986 0.891962 10.8654 1.28249 10.4749L1.98959 9.76776L6.23223 14.0104L5.52513 14.7175C5.1346 15.108 4.50144 15.108 4.11091 14.7175L1.28249 11.8891ZM8.35356 6.23226L6.23224 8.35358L7.64645 9.76779L9.76777 7.64647L8.35356 6.23226Z"
                                    fill="currentColor"
                                  />
                                </svg>
                              </span>
                              <span className="general-wellness-card_labelsCapitalized general-wellness-card_commaDivider">
                                Yoga mat
                              </span>
                              <span className="general-wellness-card_labelsCapitalized general-wellness-card_commaDivider">
                                Dumbbells
                              </span>
                            </div>
                            <div className="general-wellness-card_startWorkoutWrapper">
                              <button
                                data-test="button-workout-start"
                                className="formufit-button button_sm button_accent"
                              >
                                <span className="button_leftIcon">
                                  <svg
                                    width="16"
                                    height="16"
                                    viewBox="0 0 16 16"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      fillRule="evenodd"
                                      clipRule="evenodd"
                                      d="M13.9 6.44115C15.1 7.13397 15.1 8.86602 13.9 9.55884L4.9 14.755C3.7 15.4478 2.2 14.5818 2.2 13.1961L2.2 2.80384C2.2 1.4182 3.7 0.552179 4.9 1.245L13.9 6.44115ZM13.1 8.1732C13.2333 8.09622 13.2333 7.90377 13.1 7.82679L4.1 2.63064C3.96667 2.55366 3.8 2.64988 3.8 2.80384L3.8 13.1961C3.8 13.3501 3.96667 13.4463 4.1 13.3694L13.1 8.1732Z"
                                      fill="currentColor"
                                    />
                                  </svg>
                                </span>
                                <span className="button_children">
                                  Explore More Workout
                                </span>
                              </button>
                            </div>
                          </div>
                          {/* Will TIL */}
                          <div className="general-wellness-card_iconWrapper">
                            <svg
                              width="16"
                              height="16"
                              viewBox="0 0 16 16"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M5.29289 1.29289C5.68342 0.902369 6.31658 0.902369 6.70711 1.29289L12.7071 7.29289C12.8946 7.48043 13 7.73478 13 8C13 8.26522 12.8946 8.51957 12.7071 8.70711L6.70711 14.7071C6.31658 15.0976 5.68342 15.0976 5.29289 14.7071C4.90237 14.3166 4.90237 13.6834 5.29289 13.2929L10.5858 8L5.29289 2.70711C4.90237 2.31658 4.90237 1.68342 5.29289 1.29289Z"
                                fill="currentColor"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>
                      {/* <div className="general-meal-plan_waterTipWrapper__jMdYV">
                    <div className="water-tracker_wrapper__IeaPm">
                      Water tracker
                    </div>
                  </div>
                  <section> Additional content cards </section> */}
                    </Container>
                    <Container className="wellness_container container_sm">
                      <h4 className="workouts_subtitle">Your Recipe</h4>
                    </Container>
                    {wellness?.recipe &&
                      wellness.recipe
                        .filter((receipe) => Object.keys(receipe).length > 0)
                        .map((receipe, index) => (
                          <Container
                            className="wellness_container container_sm"
                            key={index}
                          >
                            <div className="wellness-plan_header">
                              <time
                                className="wellness-plan_selectedDate"
                                dateTime="2023-09-03"
                              >
                                {receipe?.mealType}
                              </time>
                            </div>

                            <div className="general-workout-card_mainWrapper" onClick={() => navigate(`/recipes/${receipe._id}`)}>
                              <div
                                role="button"
                                tabIndex="-1"
                                className="general-wellness-card_wrapper"
                              >
                                <div className="general-wellness-card_imageContainer">
                                  <img
                                    className="general-wellness-card_image"
                                    src={receipe?.recipeImage}
                                  />
                                </div>
                                <div className="general-wellness-card_content">
                                  <p className="general-wellness-card_title">
                                    {receipe?.title}
                                  </p>
                                  <div className="general-wellness-card_labels">
                                    <span className="general-wellness-card_duration">
                                      25 MIN
                                    </span>
                                    <span className="general-wellness-card_labelsCapitalized general-wellness-card_labelDivider">
                                      Advanced
                                    </span>
                                    <span className="general-wellness-card_labelsCapitalized general-wellness-card_labelDivider">
                                      <svg
                                        width="16"
                                        height="16"
                                        viewBox="0 0 16 16"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path
                                          fillRule="evenodd"
                                          clipRule="evenodd"
                                          d="M9.76776 1.98959L10.4749 1.28249C10.8654 0.891962 11.4986 0.891962 11.8891 1.28249L14.7175 4.11091C15.108 4.50144 15.108 5.1346 14.7175 5.52513L14.0104 6.23223L9.76776 1.98959ZM6.23224 2.69672L6.93935 1.98961C7.32987 1.59909 7.96304 1.59909 8.35356 1.98961L14.0104 7.64646C14.4009 8.03699 14.4009 8.67015 14.0104 9.06068L13.3033 9.76778L6.23224 2.69672ZM1.98961 6.93935C1.59909 7.32987 1.59909 7.96304 1.98961 8.35356L7.64646 14.0104C8.03699 14.4009 8.67015 14.4009 9.06068 14.0104L9.76778 13.3033L2.69672 6.23224L1.98961 6.93935ZM1.28249 11.8891C0.891962 11.4986 0.891962 10.8654 1.28249 10.4749L1.98959 9.76776L6.23223 14.0104L5.52513 14.7175C5.1346 15.108 4.50144 15.108 4.11091 14.7175L1.28249 11.8891ZM8.35356 6.23226L6.23224 8.35358L7.64645 9.76779L9.76777 7.64647L8.35356 6.23226Z"
                                          fill="currentColor"
                                        />
                                      </svg>
                                    </span>
                                    <span className="general-wellness-card_labelsCapitalized general-wellness-card_commaDivider">
                                      Yoga mat
                                    </span>
                                    <span className="general-wellness-card_labelsCapitalized general-wellness-card_commaDivider">
                                      Dumbbells
                                    </span>
                                  </div>
                                  <div className="general-wellness-card_startWorkoutWrapper">
                                    <button
                                      data-test="button-workout-start"
                                      className="formufit-button button_sm button_accent"
                                    >
                                      <span className="button_leftIcon">
                                        <svg
                                          width="16"
                                          height="16"
                                          viewBox="0 0 16 16"
                                          fill="none"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M13.9 6.44115C15.1 7.13397 15.1 8.86602 13.9 9.55884L4.9 14.755C3.7 15.4478 2.2 14.5818 2.2 13.1961L2.2 2.80384C2.2 1.4182 3.7 0.552179 4.9 1.245L13.9 6.44115ZM13.1 8.1732C13.2333 8.09622 13.2333 7.90377 13.1 7.82679L4.1 2.63064C3.96667 2.55366 3.8 2.64988 3.8 2.80384L3.8 13.1961C3.8 13.3501 3.96667 13.4463 4.1 13.3694L13.1 8.1732Z"
                                            fill="currentColor"
                                          />
                                        </svg>
                                      </span>
                                      <span className="button_children">
                                        View Recipe
                                      </span>
                                    </button>
                                  </div>
                                </div>
                                <div className="general-wellness-card_iconWrapper">
                                  <svg
                                    width="16"
                                    height="16"
                                    viewBox="0 0 16 16"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      fillRule="evenodd"
                                      clipRule="evenodd"
                                      d="M5.29289 1.29289C5.68342 0.902369 6.31658 0.902369 6.70711 1.29289L12.7071 7.29289C12.8946 7.48043 13 7.73478 13 8C13 8.26522 12.8946 8.51957 12.7071 8.70711L6.70711 14.7071C6.31658 15.0976 5.68342 15.0976 5.29289 14.7071C4.90237 14.3166 4.90237 13.6834 5.29289 13.2929L10.5858 8L5.29289 2.70711C4.90237 2.31658 4.90237 1.68342 5.29289 1.29289Z"
                                      fill="currentColor"
                                    />
                                  </svg>
                                </div>
                              </div>
                            </div>
                          </Container>
                    ))}
                  </>
                )}

<Container className="wellness_container container_sm">
                      <h4 className="workouts_subtitle">Your Personal Dietician</h4>
                      <div className="wellness-plan_header">
                        <time
                          className="wellness-plan_selectedDate"
                          dateTime="2023-09-03"
                        >
                          Today, September 3
                        </time>
                      </div>

                      <div
                        className="general-workout-card_mainWrapper"
                        onClick={() => navigate("/pricingplan")}
                      >
                        <div
                          role="button"
                          tabIndex="-1"
                          className="general-wellness-card_wrapper"
                        >
                          <div className="general-wellness-card_imageContainer">
                              <img src ={dietician}/>
                            {/* <video
                              controls
                              width="400"
                              className="general-wellness-card_image"
                            >
                                  
                              <source
                                // src={wellness?.workout?.videoUrl}
                                 
                                type="video/mp4"
                              />
                              Your browser does not support the video tag.
                            </video> */}
                          </div>
                          <div className="general-wellness-card_content">
                            <p className="general-wellness-card_title">
                              {/* {wellness?.workout?.title} */} Talk with your Personal Trainer
                            </p>
                            <div className="general-wellness-card_labels">
                              {/* <span className="general-wellness-card_duration">
                                25 MIN
                              </span> */}
                              <span className="general-wellness-card_labelsCapitalized general-wellness-card_labelDivider">
                              Get personalized diet and fitness advice from our renowned dietician turned fitness trainer for just 19 euros! Achieve your health goals with expert guidance tailored specifically to you. Don't miss this exclusive opportunity to transform your lifestyle and well-being.
                              </span>
                              {/* <span className="general-wellness-card_labelsCapitalized general-wellness-card_labelDivider">
                                <svg
                                  width="16"
                                  height="16"
                                  viewBox="0 0 16 16"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M9.76776 1.98959L10.4749 1.28249C10.8654 0.891962 11.4986 0.891962 11.8891 1.28249L14.7175 4.11091C15.108 4.50144 15.108 5.1346 14.7175 5.52513L14.0104 6.23223L9.76776 1.98959ZM6.23224 2.69672L6.93935 1.98961C7.32987 1.59909 7.96304 1.59909 8.35356 1.98961L14.0104 7.64646C14.4009 8.03699 14.4009 8.67015 14.0104 9.06068L13.3033 9.76778L6.23224 2.69672ZM1.98961 6.93935C1.59909 7.32987 1.59909 7.96304 1.98961 8.35356L7.64646 14.0104C8.03699 14.4009 8.67015 14.4009 9.06068 14.0104L9.76778 13.3033L2.69672 6.23224L1.98961 6.93935ZM1.28249 11.8891C0.891962 11.4986 0.891962 10.8654 1.28249 10.4749L1.98959 9.76776L6.23223 14.0104L5.52513 14.7175C5.1346 15.108 4.50144 15.108 4.11091 14.7175L1.28249 11.8891ZM8.35356 6.23226L6.23224 8.35358L7.64645 9.76779L9.76777 7.64647L8.35356 6.23226Z"
                                    fill="currentColor"
                                  />
                                </svg>
                              </span>
                              <span className="general-wellness-card_labelsCapitalized general-wellness-card_commaDivider">
                                Yoga mat
                              </span>
                              <span className="general-wellness-card_labelsCapitalized general-wellness-card_commaDivider">
                                Dumbbells
                              </span> */}
                            </div>
                            <div className="general-wellness-card_startWorkoutWrapper">
                              <button
                                data-test="button-workout-start"
                                className="formufit-button button_sm button_accent"
                              >
                                <span className="button_leftIcon">
                                  <svg
                                    width="16"
                                    height="16"
                                    viewBox="0 0 16 16"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      fillRule="evenodd"
                                      clipRule="evenodd"
                                      d="M13.9 6.44115C15.1 7.13397 15.1 8.86602 13.9 9.55884L4.9 14.755C3.7 15.4478 2.2 14.5818 2.2 13.1961L2.2 2.80384C2.2 1.4182 3.7 0.552179 4.9 1.245L13.9 6.44115ZM13.1 8.1732C13.2333 8.09622 13.2333 7.90377 13.1 7.82679L4.1 2.63064C3.96667 2.55366 3.8 2.64988 3.8 2.80384L3.8 13.1961C3.8 13.3501 3.96667 13.4463 4.1 13.3694L13.1 8.1732Z"
                                      fill="currentColor"
                                    />
                                  </svg>
                                </span>
                                <span className="button_children">
                                  Subscription Plans
                                </span>
                              </button>
                            </div>
                          </div>
                          {/* Will TIL */}
                          <div className="general-wellness-card_iconWrapper">
                            <svg
                              width="16"
                              height="16"
                              viewBox="0 0 16 16"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M5.29289 1.29289C5.68342 0.902369 6.31658 0.902369 6.70711 1.29289L12.7071 7.29289C12.8946 7.48043 13 7.73478 13 8C13 8.26522 12.8946 8.51957 12.7071 8.70711L6.70711 14.7071C6.31658 15.0976 5.68342 15.0976 5.29289 14.7071C4.90237 14.3166 4.90237 13.6834 5.29289 13.2929L10.5858 8L5.29289 2.70711C4.90237 2.31658 4.90237 1.68342 5.29289 1.29289Z"
                                fill="currentColor"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>
                      {/* <div className="general-meal-plan_waterTipWrapper__jMdYV">
                    <div className="water-tracker_wrapper__IeaPm">
                      Water tracker
                    </div>
                  </div>
                  <section> Additional content cards </section> */}
                    </Container>

              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Profile;
