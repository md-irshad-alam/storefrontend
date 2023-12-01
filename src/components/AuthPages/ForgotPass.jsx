import React, { useState } from 'react';
import { Row, Col, Card, Form, Button } from 'react-bootstrap';
import style from '../../ModuleCss/Login.css';
import { toast } from 'react-toastify';
function ForgotPass() {
  const [validated, setvalidated] = useState(false);
  const [newPass, setnewPassword] = useState('');
  const [confrim_pass, setConfPassword] = useState('');
  const CheckValidConfirmPass = () => {
    var flag = true;
    if (newPass.length > 2 && confrim_pass.length > 2) {
      if (newPass === confrim_pass) {
        flag = true;
      } else {
        flag = false;
      }
    }
    return flag;
  };
  const matchpass = CheckValidConfirmPass();
  console.log(matchpass);
  const handleSubmit = (event) => {
    const form = event.currentTarget;
    event.preventDefault();
    if (form.checkValidity() === false) {
      toast.warn('please provide the correct credentials ');
    } else {
    }
  };
  return (
    <div className='container mt-2'>
      <Card className='w-400 m-auto p-2'>
        <Card.Title>Reset Password</Card.Title>
        <Form
          noValidate
          validated={validated}
          className={style.container}
          onSubmit={handleSubmit}
        >
          <Row className='col' col='12'>
            <Form.Group
              as={Col}
              className='mb-4'
              controlId='validationCustom02'
            >
              <Form.Label>New Password : </Form.Label>
              <Form.Control
                required
                type='password'
                placeholder='new Password'
                name='new_password'
                onChange={(event) => setnewPassword(event.target.value)}
              />
            </Form.Group>
          </Row>
          <Row>
            <Form.Group
              as={Col}
              className='mb-4'
              controlId='validationCustom03'
            >
              <Form.Label> Confirm password</Form.Label>
              <Form.Control
                required
                type='password'
                placeholder='Confirm password'
                onChange={(event) => setConfPassword(event.target.value)}
                CheckValidConfirmPass
              />
            </Form.Group>
          </Row>

          <Row className='w-1/2 m-auto'>
            <Button variant='secondary' type='submit'>
              Reset Password
            </Button>
          </Row>
        </Form>
      </Card>
    </div>
  );
}

export default ForgotPass;
