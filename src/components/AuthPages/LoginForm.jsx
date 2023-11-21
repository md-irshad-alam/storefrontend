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
import { toast } from "react-toastify";
import axios from "axios";
function LoginForm() {
  const [Term, setTerm] = useState(false);
  const [validated, setvalidated] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPass] = useState("");

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    event.preventDefault();
    if (form.checkValidity() === false) {
    } else {
      axios
        .post("https://erp-backend-ditn.onrender.com/api/auth/login", {
          email,
          password,
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
              type="email"
              placeholder="Email ID"
              name="fname"
              onChange={(event) => setEmail(event.target.value)}
            />
          </Form.Group>

          <Form.Group as={Col} className="mb-4" controlId="validationCustom03">
            <Form.Label>Password</Form.Label>
            <Form.Control
              required
              type="password"
              placeholder="password"
              onChange={(event) => setPass(event.target.value)}
            />
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
