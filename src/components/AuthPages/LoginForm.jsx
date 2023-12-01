import React, { useState } from 'react';
import { Container, FloatingLabel } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import style from '../../ModuleCss/Login.css';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';

import { useDispatch, useSelector } from 'react-redux';
import { Adddetails } from '../../Redux/Actions';

function LoginForm() {
  const [Term, setTerm] = useState(false);
  const [validated, setvalidated] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPass] = useState('');
  const { userdetails, setuserDetails } = useState(null);
  const history = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    event.preventDefault();
    if (form.checkValidity() === false) {
    } else {
      axios
        .post('http://localhost:3100/api/auth/login', {
          email,
          password,
        })
        .then((responce) => {
          sessionStorage.setItem('token', responce.data.token);
          const getSession = sessionStorage.getItem('token');
          if (getSession) {
            axios.defaults.headers.common[
              'Authorization'
            ] = `Bearer ${getSession}`;
          }
          dispatch(Adddetails(responce.data.user));
          console.log('called');
          history('');
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
    <div className='container mt-2'>
      <Card className='w-400 m-auto p-2'>
        <Card.Title>Login Form</Card.Title>
        <Form
          noValidate
          validated={validated}
          onSubmit={handleSubmit}
          className={style.container}
        >
          <Form.Group as={Col} className='mb-4' controlId='validationCustom02'>
            <Form.Label>Email Id : </Form.Label>
            <Form.Control
              required
              type='email'
              placeholder='Email ID'
              name='fname'
              onChange={(event) => setEmail(event.target.value)}
            />
          </Form.Group>

          <Form.Group as={Col} className='mb-4' controlId='validationCustom03'>
            <Form.Label>Password</Form.Label>
            <Form.Control
              required
              type='password'
              placeholder='password'
              onChange={(event) => setPass(event.target.value)}
            />
          </Form.Group>
          <Row className=' m-auto mb-2'>
            <Form.Text className='flex items-center gap-x-2  '>
              Forgot password
              <span
                className='text-red-500 font-semibold active:text-green-700'
                onClick={() => history('/auth/reset_password')}
              >
                click here
              </span>
            </Form.Text>
          </Row>
          <Row className='w-1/2 m-auto'>
            <Button type='submit' style={{ marginTop: '10px' }}>
              Login
            </Button>
          </Row>
        </Form>
        <Card.Text className='mt-4 font-medium'>
          Already Registered{' '}
          <Link
            to={'/auth/register'}
            className='text-blue active:text-orange cursor-pointer visited:text-purple-600 '
          >
            Click Here
          </Link>
        </Card.Text>
      </Card>
    </div>
  );
}

export default LoginForm;
