import React, { useContext, useState } from 'react';
import axios from 'axios';
import { Container, FloatingLabel } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import style from './AuthStyle/login.module.css';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { IoEyeOutline } from 'react-icons/io5';
import { IoEyeOffOutline } from 'react-icons/io5';

import { ToastContainer } from 'react-toastify';
import { AuthContext } from '../../contexts/MyContxt';

function LoginForm() {
  const [Term, setTerm] = useState(false);
  const [validated, setvalidated] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPass] = useState('');
  const { userdetails, setuserDetails } = useState(null);
  const [input, setinput] = useState({});
  const [hide, sethide] = useState(false);
  const [userdata, setdata] = useState();
  const history = useNavigate();

  const { login } = useContext(AuthContext);

  const handlechange = (event) => {
    const { name, value } = event.target;
    setinput({ ...input, [name]: value });
  };

  const handlesubmit = (ev) => {
    ev.preventDefault();
    const { email, password } = input;
    if ((email, password)) {
      login(email, password);
    } else {
      toast('invalid input');
    }
  };
  const handlechangepassicon = (event) => {
    sethide(!hide);
  };
  return (
    <div className={style.login_box}>
      <ToastContainer />
      <form onSubmit={handlesubmit} className={style.login_cont}>
        <div className='form-group'>
          <label htmlFor='email'>Email</label>
          <input
            type='email'
            name='email'
            className='form-control'
            id='email'
            onChange={handlechange}
          />
        </div>

        <div className='form-group relative'>
          <label htmlFor='password'>Password</label>
          <div className='flex '>
            <input
              type={hide ? 'text' : 'password'}
              name='password'
              className='form-control'
              id='password'
              onChange={handlechange}
            />

            <p className={style.eyebtn} onClick={handlechangepassicon}>
              {hide ? <IoEyeOutline color='teal' /> : <IoEyeOffOutline />}
            </p>
          </div>
        </div>

        <div className='row gap-y-5 text-center mb-7 mt-3'>
          <button type='submit' className='btn btn-primary'>
            Sign in
          </button>
          <p className='w-full m-auto content-center text-black font-bold'>
            New user, want to register{' '}
            <span
              className='text-blue-500 font-light active:text-red-500 font-body'
              onClick={() => history('/auth/register')}
            >
              click here
            </span>
          </p>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
