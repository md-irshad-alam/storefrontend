// import React from 'react';
// // import { Route, Redirect } from 'react-router-dom';
// import { Route, useNavigate } from 'react-router-dom';

// const PrivateRoute = ({ component: Component, ...rest }) => {
//   const history = useNavigate();
//   const isAuthenticated = sessionStorage.getItem('token');

//   return (
//     <Route
//       {...rest}
//       render={(props) =>
//         isAuthenticated ? <Component {...props} /> : history('auth/login')
//       }
//     />
//   );
// };

// export default PrivateRoute;
