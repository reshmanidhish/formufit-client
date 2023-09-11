
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Row,
  Col,
  Alert,
} from "reactstrap";

import { GoogleLogin } from 'react-google-login';
import { useState, useContext, useEffect } from "react";
import authService from "../../services/auth.service";
import { AuthContext } from "../../context/auth.context";
import { useNavigate } from "react-router-dom";

function Login(props) {
  import('./styles.scss') 
  import('./../Welcome/styles.scss') 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(false);
  const { storeToken, authenticateUser } = useContext(AuthContext);

  const navigate = useNavigate();
  // const history = useHistory();
  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);
  let params = new URLSearchParams(window.location.hash);
  let token = params.get('id_token');

  useEffect(() => {
    if(token) {
      // storeToken(token)
      // authenticateUser()
    }
  }, [token])


  const onLoginSuccess = (response) => {
    const { tokenId } = response; // You can also get user information from the response.
    // Send the tokenId to your server for verification.
    // Redirect to another route after successful login.
    // history.push('/dashboard');
  };

  const onLoginFailure = (error) => {
    console.error('Login failed:', error);
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();

    const requestBody = { email, password };

    authService.login(requestBody)
        .then(response => {
            storeToken(response.data.authToken)
            authenticateUser()// update my state variables
            navigate("/questionare")
        })
        .catch(error => {
            setErrorMessage(true)
        })
  };


  return (
    <>
      <Col lg="5" md="7" className="container-body">
        <Card className="bg-secondary shadow border-0">
          <CardHeader className="bg-transparent pb-5">
            <div className="text-muted text-center mt-2 mb-3">
              <small>Sign in with</small>
            </div>
            <div className="btn-wrapper text-center">
              <Button
                className="btn-neutral btn-icon"
                color="default"
                href="#pablo"
                onClick={(e) => e.preventDefault()}
              >
                <span className="btn-inner--icon">
                  <img
                    alt="..."
                    src={
                      require("../../assets/img/icons/common/github.svg")
                        .default
                    }
                  />
                </span>
                <span className="btn-inner--text">Github</span>
              </Button>
              {/* <Button
                className="btn-neutral btn-icon"
                color="default"
                href="#pablo"
                onClick={(e) => e.preventDefault()}
              >
                <span className="btn-inner--icon">
                  <img
                    alt="..."
                    src={
                      require("../../assets/img/icons/common/google.svg")
                        .default
                    }
                  />
                </span>
                <span className="btn-inner--text">Google</span>
              </Button> */}
              <GoogleLogin 
                clientId="76749120259-gndi3iit0n8fsm9qfoelk2bl3du0a8jo.apps.googleusercontent.com"
                buttonText="Google"
                onSuccess={onLoginSuccess}
                onFailure={onLoginFailure}
                cookiePolicy={'single_host_origin'}
                uxMode="redirect" // Set the ux_mode to 'redirect'
                redirectUri="http://localhost:3000/auth/login" // Replace with your redirect URI
              />
            </div>
          </CardHeader>
          <CardBody className="px-lg-5 py-lg-5">
            <div className="text-center text-muted mb-4">
              <small>Or sign in with credentials</small>
            </div>
            <Alert color="danger" isOpen={errorMessage}>
              Incorrect email or password!
            </Alert>

            <Form onSubmit={handleLoginSubmit} role="form">
              <FormGroup className="mb-3">
                <InputGroup className="input-group-alternative">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-email-83" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="Email"
                    type="email"
                    autoComplete="new-email"
                    value={email}
                    onChange={handleEmail}
                  />
                </InputGroup>
              </FormGroup>
              <FormGroup>
                <InputGroup className="input-group-alternative">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-lock-circle-open" />
                    </InputGroupText>
                  </InputGroupAddon>

                  <Input
                    placeholder="Password"
                    type="password"
                    autoComplete="new-password"
                    value={password}
          onChange={handlePassword}
                  />
                </InputGroup>
              </FormGroup>
              <div className="custom-control custom-control-alternative custom-checkbox">
                <input
                  className="custom-control-input"
                  id=" customCheckLogin"
                  type="checkbox"
                />
                <label
                  className="custom-control-label"
                  htmlFor=" customCheckLogin"
                >
                  <span className="text-muted">Remember me</span>
                </label>
              </div>
              <div className="text-center">
                <Button className="my-4" color="primary" type="submit" >
                  Login
                </Button>
              </div>
            </Form>
          </CardBody>
        </Card>
        <Row className="mt-3">
          <Col xs="6">
            <a
              className="text-light"
              href="#pablo"
              onClick={(e) => e.preventDefault()}
            >
              <small>Forgot password?</small>
            </a>
          </Col>
          <Col className="text-right" xs="6">
            <a
              className="text-light"
              href="#pablo"
              onClick={(e) => e.preventDefault()}
            >
              <small>Create new account</small>
            </a>
          </Col>
        </Row>
      </Col>
    </>
  );
};

export default Login;
