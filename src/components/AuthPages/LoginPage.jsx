import React from 'react';
import LoginForm from './LoginForm';
import style from './AuthStyle/login.module.css';
function LoginPage() {
  return (
    <div>
      {/* <div className={style.container2}>
        <div className='row'>
          <div className='col-md-6'>
            <img src='/signuplogo.jpg' alt='svg image' />
          </div>
          <div className='col-md-6'> */}
      {/* </div>
        </div> */}
      {/* </div> */}
      <LoginForm />
    </div>
  );
}

export default LoginPage;
