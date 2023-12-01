import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import LoginForm from "../components/AuthPages/LoginForm";
import RegisterForm from "../components/AuthPages/SignUp";
import AddProduct from "../components/AddProduct/AddProduct";
import ViewProduct from "../components/AddProduct/ViewProduct";
import Catogery_List from "../components/Mixing/Catogery_List.jsx";

import SizeWeight from "../components/AddProduct/Size&weight";
import SizeTypeForm from "../components/SizeTypeForm";
import AddEmployee from "../components/Employee/AddEmployee";
import EmployeeList from "../components/Employee/EmployeeList";
import { ToastContainer } from "react-toastify";
import { ContextProvider } from "../contexts/ContextProvider";
import Add_Category from "../components/Mixing/Add_Category";
import Ecommerce from "../pages/Ecommerce";
import Customers from "../pages/Customers";
import EditCustomer from "../components/CustomerTabs/EditCustomer";
import ViewCustomer from "../components/CustomerTabs/ViewCustomer";
import Product_List from "../components/AddProduct/ProductList";
import ProductModule from "../components/Module/ProductModule";
import Add_Stdwt from "../components/Add_Stdwt";
import Store from "../components/Store";
import Color from "../components/Master/Color";
import Country from "../components/Master/Country";
import State from "../components/Master/State";
import Heels from "../components/Master/Heel";
import Uom from "../components/Master/UOM";
import Designation from "../components/Master/Designation";
import GroupMaster from "../components/Master/Group.jsx";
import Catogery_Type from "../components/Mixing/Catogery_Type.jsx";
import Ingredients from "../components/Mixing/ingredients.jsx";
import ForePart_category from "../components/Master/ForePart_Category.jsx";
import StockList from "../components/Stock/StockList.jsx";
import AdjustStock from "../components/Stock/AdjustStock.jsx";

function AllRoutes() {
  return (
    <div>
      <ContextProvider>
        <ToastContainer />
        <Routes>
          <Route path="/auth/login" element={<LoginForm />} />
          <Route path="/auth/register" element={<RegisterForm />} />
          <Route path="/product" element={<AddProduct />} />
          <Route path="/productlist" element={<Product_List />} />
          <Route path="/add_module" element={<ProductModule />} />
          <Route path="/add_category" element={<Add_Category />} />
          <Route path="/category_list" element={<Catogery_List />} />
          <Route path="/category_type" element={<Catogery_Type />} />
          <Route path="/view_product" element={<ViewProduct />} />
          <Route path="/table" element={<SizeWeight />} />
          <Route path="/sz" element={<SizeTypeForm />} />
          <Route path="/employee" element={<AddEmployee />} />
          <Route path="/employeelist" element={<EmployeeList />} />
          <Route path="/add_weight" element={<Add_Stdwt />} />
          <Route path="/store" element={<Store />} />
          <Route path="/color" element={<Color />} />
          <Route path="/country" element={<Country />} />
          <Route path="/state" element={<State />} />
          <Route path="/heel" element={<Heels />} />
          <Route path="/uom" element={<Uom />} />
          <Route path="/designation" element={<Designation />} />
          <Route path="/group" element={<GroupMaster />} />
          <Route path="/gredient" element={<Ingredients />} />
          <Route path="/forpart" element={<ForePart_category />} />
          {/* aturab code  */}
          <Route path="/" element={<Ecommerce />} />
          <Route path="/ecommerce" element={<Ecommerce />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/edit-customer/:id" element={<EditCustomer />} />
          <Route path="/view-customer/:id" element={<ViewCustomer />} />
          <Route path="/stock-list" element={<StockList/>}/>
          <Route path="/adjust-stock" element={<AdjustStock/>}/>
        </Routes>
      </ContextProvider>
    </div>
  );
}

export default AllRoutes;
