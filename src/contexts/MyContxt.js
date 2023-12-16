import { createContext } from 'react';
// import React, { useContext, useEffect, useState } from 'react';
// import { loginApi } from '../contexts/index';
// import { getLoggedInUser } from '../contexts/index';
// import { useNavigate } from 'react-router-dom';
// import { toast } from 'react-toastify';

// export function AuthContextProvider({ children }) {
//   const [islogin, setShowLoginForm] = useState(false);
//   const [loading, setloading] = useState(true);
//   const [loggedUser, setuser] = useState('');
//   const [data, seetdata] = useState([]);
//   const [orderId, setOrderId] = useState('');
//   const [message, setmessage] = useState(undefined);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const token = localStorage.getItem('auth-token');
//     if (token) {
//       getLoggedInUser()
//         .then((response) => {
//           const user = response.data;
//           setuser(user.data);
//         })
//         .catch((error) => toast(error.message));
//       setShowLoginForm(true);
//     } else {
//       navigate('/login');
//     }
//   }, []);

//   function login(email, password) {
//      return new Promise((resolve, reject)=>{
//       loginApi(email, password)
//       .then(response => {

//            const token = response.data.token;
//            localStorage.setItem('auth-token', token);

//            setloading(false)
//            toast(`${response.message} with code ${response.status}`)
//            navigate("/product")
//            window.location.reload()
//            resolve()
//       }).catch((error)=>{
//           toast(error.response.data.message)
//           setloading(true)
//           reject();
//       })
//      })
//   }

//   function logout() {
//     localStorage.removeItem('auth-token');
//     toast('You suessfully Logged Out ');
//     window.location.reload();
//   }

//   return (
//     <AuthContext.Provider
//       value={{
//         logout,
//         loggedUser,
//         orderId,
//         setOrderId,
//         islogin,
//         message,
//         setmessage,
//         loading,
//       }}
//     >
//       {children}
//     </AuthContext.Provider>
//   );
// }

export const mycontext = createContext();
