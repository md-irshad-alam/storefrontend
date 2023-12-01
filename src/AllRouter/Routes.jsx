import React, { useContext, useEffect, useState } from 'react';
import LoginForm from '../components/AuthPages/LoginForm';
import RegisterForm from '../components/AuthPages/SignUp';
import AddProduct from '../components/AddProduct/AddProduct';
import ViewProduct from '../components/AddProduct/ViewProduct';
import Catogery_List from '../components/Mixing/Catogery_List.jsx';

import SizeWeight from '../components/AddProduct/Size&weight';
import SizeTypeForm from '../components/SizeTypeForm';
import AddEmployee from '../components/Employee/AddEmployee';
import EmployeeList from '../components/Employee/EmployeeList';
import { ToastContainer } from 'react-toastify';
import { ContextProvider, useStateContext } from '../contexts/ContextProvider';
import Add_Category from '../components/Mixing/Add_Category';
import Ecommerce from '../pages/Ecommerce';
import Customers from '../pages/Customers';
import EditCustomer from '../components/CustomerTabs/EditCustomer';
import ViewCustomer from '../components/CustomerTabs/ViewCustomer';
import Product_List from '../components/AddProduct/ProductList';
import ProductModule from '../components/Module/ProductModule';
import Add_Stdwt from '../components/Add_Stdwt';
import Store from '../components/Store';
import Color from '../components/Master/Color';
import Country from '../components/Master/Country';
import State from '../components/Master/State';
import Heels from '../components/Master/Heel';
import Uom from '../components/Master/UOM';
import Designation from '../components/Master/Designation';
import GroupMaster from '../components/Master/Group.jsx';
import Catogery_Type from '../components/Mixing/Catogery_Type.jsx';
import Ingredients from '../components/Mixing/ingredients.jsx';
import ForePart_category from '../components/Master/ForePart_Category.jsx';
import ForgotPass from '../components/AuthPages/ForgotPass.jsx';
import PrivateRoute from './privateRoute.js';
import { Routes, Route, useNavigate } from 'react-router-dom';
function AllRoutes() {
  const [login, setlogin] = useState(false);
  const history = useNavigate();
  const token = sessionStorage.getItem('token');

  return (
    <div>
      <ContextProvider>
        <ToastContainer />
        <Routes>
          {token === null || token === undefined ? (
            <Route path='/auth/login' element={<LoginForm />} />
          ) : (
            <>
              <Route path='/auth/reset_password' element={<ForgotPass />} />
              <Route path='/product' element={<AddProduct />} />
              <Route path='/productlist' element={<Product_List />} />
              <Route path='/add_module' element={<ProductModule />} />
              <Route path='/add_category' element={<Add_Category />} />
              <Route path='/category_list' element={<Catogery_List />} />
              <Route path='/category_type' element={<Catogery_Type />} />
              <Route path='/view_product' element={<ViewProduct />} />
              <Route path='/table' element={<SizeWeight />} />
              <Route path='/sz' element={<SizeTypeForm />} />
              <Route path='/employee' element={<AddEmployee />} />
              <Route path='/employeelist' element={<EmployeeList />} />
              <Route path='/add_weight' element={<Add_Stdwt />} />
              <Route path='/store' element={<Store />} />
              <Route path='/color' element={<Color />} />
              <Route path='/country' element={<Country />} />
              <Route path='/state' element={<State />} />
              <Route path='/heel' element={<Heels />} />
              <Route path='/uom' element={<Uom />} />
              <Route path='/designation' element={<Designation />} />
              <Route path='/group' element={<GroupMaster />} />
              <Route path='/gredient' element={<Ingredients />} />
              <Route path='/forpart' element={<ForePart_category />} />
              <Route path='/' element={<Ecommerce />} />
              {/* aturab code  */}
              <Route path='/ecommerce' element={<Ecommerce />} />
              <Route path='/customers' element={<Customers />} />
              <Route path='/edit-customer/:id' element={<EditCustomer />} />
              <Route path='/view-customer/:id' element={<ViewCustomer />} />
            </>
          )}

          <Route path='/auth/register' element={<RegisterForm />} />
        </Routes>
      </ContextProvider>
    </div>
  );
}

export default AllRoutes;
{
  /* <Switch>
        <Route path='/auth/login' Component={<LoginForm />} />

        <PrivateRoute path='/' Component={<Ecommerce />} />
        <PrivateRoute path='/auth/register' Component={<RegisterForm />} />
        <PrivateRoute path='/auth/reset_password' Component={<ForgotPass />} />
        <PrivateRoute path='/product' Component={<AddProduct />} />
        <PrivateRoute path='/productlist' Component={<Product_List />} />
        <PrivateRoute path='/add_module' Component={<ProductModule />} />
        <PrivateRoute path='/add_category' Component={<Add_Category />} />
        <PrivateRoute path='/category_list' Component={<Catogery_List />} />
        <PrivateRoute path='/category_type' Component={<Catogery_Type />} />
        <PrivateRoute path='/view_product' Component={<ViewProduct />} />
        <PrivateRoute path='/table' Component={<SizeWeight />} />
        <PrivateRoute path='/sz' Component={<SizeTypeForm />} />
        <PrivateRoute path='/employee' Component={<AddEmployee />} />
        <PrivateRoute path='/employeelist' Component={<EmployeeList />} />
        <PrivateRoute path='/add_weight' Component={<Add_Stdwt />} />
        <PrivateRoute path='/store' Component={<Store />} />
        <PrivateRoute path='/color' Component={<Color />} />
        <PrivateRoute path='/country' Component={<Country />} />
        <PrivateRoute path='/state' Component={<State />} />
        <PrivateRoute path='/heel' Component={<Heels />} />
        <PrivateRoute path='/uom' Component={<Uom />} />
        <PrivateRoute path='/designation' Component={<Designation />} />
        <PrivateRoute path='/group' Component={<GroupMaster />} />
        <PrivateRoute path='/gredient' Component={<Ingredients />} />
        <PrivateRoute path='/forpart' Component={<ForePart_category />} />
        {/* aturab code  */
}

//     <PrivateRoute path='/ecommerce' Component={<Ecommerce />} />
//     <PrivateRoute path='/customers' Component={<Customers />} />
//     <PrivateRoute path='/edit-customer/:id' Component={<EditCustomer />} />
//     <PrivateRoute path='/view-customer/:id' Component={<ViewCustomer />} />
// </Switch>
