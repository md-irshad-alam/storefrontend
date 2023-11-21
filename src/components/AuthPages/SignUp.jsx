import React, { useState } from "react";
import { Container, FloatingLabel, Spinner } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import style from "../../ModuleCss/Login.css";
import { Link } from "react-router-dom";

import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

function RegisterForm() {
  const [Term, setTerm] = useState(false);
  const [validated, setvalidated] = useState(false);
  const [data, setdata] = useState([]);
  const [Isvalidpass, setValidPass] = useState(false);
  const [Loading, setloading] = useState(false);

  const [fname, setname1] = useState();
  const [lname, setname2] = useState();
  const [email, setEmail] = useState("");
  const [confirmpassword, setPass2] = useState("");
  const [password, setPass1] = useState("");
  const [countrycode, setphone1] = useState("");
  const [mobile, setphone2] = useState();

  const History = useNavigate(null);

  const ValidPassword = (password) => {
    if (password.length > 0) {
      const Regexpass =
        /^(?=.*[a-z]{2,})(?=.*[A-Z]{3,})(?=.*[0-9]{2,})(?=.*[!@#\$%\^&\*]).{8,}$/;
      const validpass = Regexpass.test(password);
      return validpass;
    } else {
      return "";
    }
  };
  // aaBBB12@
  function debounce() {
    let timeoutId;
    return function (...args) {
      if (timeoutId) {
        clearTimeout(timeoutId);
        setloading(true);
      }

      timeoutId = setTimeout(() => {
        setloading(Loading);
      }, 200);
    };
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    const isPasswordValid = ValidPassword(password);
    if (form.checkValidity() === false) {
    } else {
      axios
        .post("https://erp-backend-ditn.onrender.com/api/auth/register", {
          fname,
          lname,
          email,
          mobile,
          countrycode,
          password,
          confirmpassword,
        })
        .then((responce) => {
          console.log(responce);
          toast.success(responce.data.message);
        })
        .catch((error) => {
          console.log(error);
          toast.error(error.response.data.message);
        });
    }

    setvalidated(true);
  };

  return (
    <Container className="container mt-2">
      <Card className="w-400 m-auto p-2">
        <Card.Title className="mb-4">Sign Up Form </Card.Title>
        <Form
          noValidate
          validated={validated}
          onSubmit={handleSubmit}
          className={style.container}
        >
          <Row>
            <Col>
              <Form.Group
                as={Col}
                className="mb-4"
                controlId="validationCustom01"
              >
                <Form.Label>First Name : </Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="First Name"
                  name="fname"
                  onChange={(event) => setname1(event.target.value)}
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group
                as={Col}
                className="mb-4"
                controlId="validationCustom01"
              >
                <Form.Label>Last Name : </Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Last Name"
                  name="lname"
                  onChange={(event) => setname2(event.target.value)}
                />
              </Form.Group>
            </Col>
          </Row>
          <Form.Group as={Col} className="mb-4" controlId="validationCustom02">
            <Form.Label>Email Id : </Form.Label>
            <Form.Control
              required
              type="email"
              placeholder="example@gmail.com"
              onChange={(event) => setEmail(event.target.value)}
            />
          </Form.Group>
          <Form.Group as={Col} className="mb-4" controlId="validationCustom02">
            <Form.Label>Phone Number : </Form.Label>
            <Row>
              <Col className="col-4">
                <Form.Control
                  required
                  type="text"
                  placeholder="code"
                  name="countrycode"
                  onChange={(event) => setphone1(event.target.value)}
                />
              </Col>
              <Col className="col-8">
                <Form.Control
                  required
                  type="text"
                  placeholder="Phone Number"
                  name="mobile"
                  onChange={(event) => setphone2(event.target.value)}
                />
              </Col>
            </Row>
          </Form.Group>

          <Form.Group as={Col} className="mb-4" controlId="validationCustom03">
            <Form.Label>Password</Form.Label>
            <Row>
              <Col>
                <Form.Control
                  required
                  type="password"
                  placeholder="*****"
                  name="password"
                  onChange={(event) => setPass1(event.target.value)}
                  isInvalid={
                    password.length > 0 ? !ValidPassword(password) : ""
                  }
                  // isValid={ValidPassword(Password)===true}
                />
                <Form.Control.Feedback type="invalid">
                  {ValidPassword(password) === false
                    ? "Password strength is Weak"
                    : ""}
                </Form.Control.Feedback>
              </Col>
              <Col>
                <Form.Control
                  type="password"
                  placeholder="Confirm Password"
                  name="confirmpassword"
                  onChange={(event) => setPass2(event.target.value)}
                />
              </Col>
            </Row>
          </Form.Group>

          <Form.Group className="mb-4">
            <Button variant="primary" type="submit">
              {Loading === true ? (
                <>
                  <Button variant="primary" disabled className="p-0 ">
                    <Spinner
                      as="span"
                      animation="grow"
                      size="sm"
                      role="status"
                      aria-hidden="true"
                    />
                    Loading...
                  </Button>
                </>
              ) : (
                "Submit"
              )}
            </Button>
            ,
          </Form.Group>
        </Form>
        <Card.Text>
          <Card.Text className="mt-4 font-medium">
            Create an account{" "}
            <Link
              to={"/login"}
              className="text-blue active:text-orange cursor-pointer visited:text-purple-600 "
            >
              Click Here
            </Link>
          </Card.Text>
        </Card.Text>
      </Card>
    </Container>
  );
}

export default RegisterForm;
