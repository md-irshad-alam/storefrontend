import React, { useState } from 'react';
import { registerApi } from '../../../contexts/User';
import { toast } from 'react-toastify';
import { IoEyeOutline } from 'react-icons/io5';
import { IoEyeOffOutline } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';
import style from './Signup.module.css';
const SignUpForm = () => {
  const [input, setinput] = useState({});
  const [userdata, setdata] = useState();
  const [hide, sethide] = useState(false);
  const history = useNavigate();
  const handlechange = (event) => {
    const { name, value } = event.target;
    setinput({ ...input, [name]: value });
  };
  console.log(input);
  const handlesubmit = (ev) => {
    ev.preventDefault();
    if (input) {
      const { fname, lname, email, password, mobile, confirmpassword } = input;
      registerApi(fname, lname, email, mobile, password, confirmpassword)
        .then((responce) => console.log(responce))
        .catch((error) => console.log(error));
    } else {
      toast('invalid input');
    }
  };
  const handlechangepassicon = (event) => {
    sethide(!hide);
  };
  console.log(userdata);
  return (
    <form onSubmit={handlesubmit}>
      <div className='form-group'>
        <label htmlFor='firstName'>First Name</label>
        <input
          type='text'
          className='form-control'
          id='firstName'
          name='fname'
          onChange={handlechange}
        />
      </div>

      <div className='form-group'>
        <label htmlFor='lastName'>Last Name</label>
        <input
          type='text'
          className='form-control'
          id='lastName'
          name='lname'
          onChange={handlechange}
        />
      </div>
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
      <div className='form-group'>
        <label htmlFor='mobile'>Phone</label>
        <input
          type='tel'
          name='mobile'
          className='form-control'
          id='phone'
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
      <div className='form-group relative'>
        <label htmlFor='confirmpassword'>Confirm password</label>
        <div className='flex '>
          <input
            type={hide ? 'text' : 'password'}
            name='confirmpassword'
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
          Sign Up
        </button>
        <p className='w-full m-auto content-center  from-neutral-500'>
          Already registered{' '}
          <span
            className='text-blue-300 font-light active:text-red-500'
            onClick={() => history('/login')}
          >
            click here
          </span>
        </p>
      </div>
    </form>
  );
};

export default SignUpForm;
