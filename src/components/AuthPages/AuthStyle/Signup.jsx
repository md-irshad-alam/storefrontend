// SignUpPage.js

import React from 'react';
import SignUpForm from './SignupForm';
import style from './Signup.module.css';

const SignUpPage = () => {
  return (
    <div className={style.signup_page}>
      <div className={style.container}>
        <div className='row'>
          <div className='col-md-6'>
            <img src='/signuplogo.jpg' alt='svg image' />
          </div>
          <div className='col-md-6'>
            <SignUpForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
