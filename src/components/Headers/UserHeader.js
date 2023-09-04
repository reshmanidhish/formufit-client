import { Button, Container, Row, Col } from "reactstrap";
import { AuthContext } from "../../context/auth.context";
import { useContext } from "react";
const UserHeader = () => {
  const { user } = useContext(AuthContext);
  return (
    <>
      <div
        className="header pb-8 pt-5 pt-lg-8 d-flex align-items-center"
        style={{
          minHeight: "500px",
          backgroundImage:
            "url(" + require("../../assets/img/theme/formufit-profile.jpeg") + ")",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat"
        }}
      >
        {/* Mask */}
        <span className="mask bg-gradient-default opacity-8" />
        {/* Header container */}
        <Container className="d-flex align-items-center" fluid>
          <Row>
            <Col lg="7" md="10">
              <h1 className="display-2 text-white">Hello {user.username}</h1>
              <p className="text-white mt-0 mb-5">
                This is your profile page. You can see  your personalized dietplans and workouts according to your bodytype and lifestyle
              </p>
            
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default UserHeader;
