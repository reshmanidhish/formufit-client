import React from "react";
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
  } from "reactstrap"
import trainerVideo from "../../assets/videos/trainer.mp4"
function Trainer() {
  return (
    <div>
      <video controls width="1000" className="general-wellness-card_image">
        <source src={trainerVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
     
    </div>
  );
}
export default Trainer