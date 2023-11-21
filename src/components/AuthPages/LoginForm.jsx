import React, { useState } from "react";
import { Container, FloatingLabel } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import style from "../../ModuleCss/Login.css";
import { Link } from "react-router-dom";
import axios from "axios";
function LoginForm() {
  const [Term, setTerm] = useState(false);
  const [validated, setvalidated] = useState(false);
  
  


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
  
  const handleregister = () => {
    axios.post("http://localhost:3100/api/auth/register",
    )
      .then((responce) = {
      
    })
  }

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    event.preventDefault();
    const isPasswordValid = ValidPassword(Password);
    if (form.checkValidity() === false || !isPasswordValid) {
    } else {
      const Data = {
        Email: Email,
        Password: Password,
      };
      console.log(Data);
    }
    setvalidated(true);
  };

  return (
    <div className="container mt-2">
      <Card className="w-400 m-auto p-2">
        <Card.Title>Login Form</Card.Title>

        <Form
          noValidate
          validated={validated}
          onSubmit={handleSubmit}
          className={style.container}
        >
          <Form.Group as={Col} className="mb-4" controlId="validationCustom02">
            <Form.Label>Email Id : </Form.Label>
            <Form.Control
              required
              type="email Id"
              placeholder="First Name"
              name="fname"
              onChange={(event) => setname({ [event.target.name]: event.target.value})}
            />
          </Form.Group>

          <Form.Group as={Col} className="mb-4" controlId="validationCustom03">
            <Form.Label>Password</Form.Label>
            <Form.Control
              required
              type="password"
              placeholder="*****"
              onChange={(event) => setPass(event.target.value)}
            />
            <Form.Control.Feedback type="invalid">
              {ValidPassword(Password) === false
                ? "Password strength is Weak"
                : ""}
            </Form.Control.Feedback>
          </Form.Group>

          <Button type="submit" style={{ marginTop: "10px" }}>
            Login
          </Button>
        </Form>
        <Card.Text className="mt-4 font-medium">
          Already Registered{" "}
          <Link
            to={"/register"}
            className="text-blue active:text-orange cursor-pointer visited:text-purple-600 "
          >
            Click Here
          </Link>
        </Card.Text>
      </Card>
    </div>
  );
}

export default LoginForm;
