import { createContext, useReducer } from 'react';
import React, { useContext, useEffect, useState } from 'react';

import { redirect, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { LoginAPI, getusers, loggedout } from './User';
import { useDispatch, useSelector } from 'react-redux';
import { saveuserinfo } from '../Redux/AuthAction';

export function AuthContextProvider({ children }) {
  const [islogin, setShowLoginForm] = useState(false);
  const [loading, setloading] = useState(true);
  const [loggedUser, setuser] = useState({});
  const [data, seetdata] = useState([]);
  const [orderId, setOrderId] = useState('');
  const [message, setmessage] = useState(undefined);
  const navigate = useNavigate();

  const dispatch = useDispatch();
  function login(email, password) {
    LoginAPI(email, password)
      .then((response) => {
        const token = response.data.token;
        localStorage.setItem('auth-token', token);
        toast(`${response.data.message} with code ${response.status}`);
        navigate('/');
        window.location.reload();
      })

      //  localStorage.setItem('userdetails', userdata);
      //   console.log(email, mobile);
      .catch((error) => {
        toast('login faild, Please try again ');
        setloading(true);
        reject();
      });
  }
  useEffect(() => {
    const token = localStorage.getItem('auth-token');
    if (token) {
      getusers().then((responce) => {
        let userdata = responce.data.data;
        setuser(userdata);
      });
    } else {
      setuser();
    }
  }, []);

  function logout() {
    const token = localStorage.getItem('auth-token');
    loggedout(token)
      .then((res) => {
        toast.success('User successfully Logged out');
        localStorage.removeItem('auth-token');
        location.reload();
        redirect('/auth/login');
      })
      .catch((error) => {
        console.log(error);
        toast.error('Faild to logged out');
      });
  }

  return (
    <AuthContext.Provider
      value={{
        logout,
        loggedUser,
        orderId,
        setOrderId,
        login,
        islogin,
        message,
        setmessage,
        loading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const AuthContext = createContext();
export default AuthContextProvider;
