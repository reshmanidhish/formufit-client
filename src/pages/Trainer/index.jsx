import React from "react";
import {
    Card,
    CardBody,
    Container,
    CardTitle,
  } from "reactstrap"
import Calender from "components/calendar";
import trainerVideo from "../../assets/videos/trainer.mp4"
function Trainer() {
  return (
    <>
      <Container className="challenges_section">
        <div className="page-title-header_wrapper page-title-header_hasProfileLink">
          <div className="page-title-header_titleWrapper">
            <h1 className="page-title-header_title">Your Personal Dietician</h1>
          </div>
        </div>
        <h4 className="workouts_subtitle">
          Book an appointment to meet your Personal Dietician
        </h4>

        <video autoPlay loop muted  className="general-wellness-card_image border-radius-tlr">
        <source src={trainerVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
       
          <div className="">
            <div>
              <Card className="card_container">
                <CardBody className="card_content">
                  <CardTitle className="card_title"></CardTitle>
                  <div className="card_info">
                    <Container fluid className="container-body pb-0">
                      <Calender/>
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
export default Trainer