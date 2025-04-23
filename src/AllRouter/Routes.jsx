import React, { useContext, useEffect } from "react";

import LoginPage from "../components/AuthPages/LoginPage.jsx";
// import RegisterForm from '../components/AuthPages/SignUp';
import SignUpPage from "../components/AuthPages/AuthStyle/Signup.jsx";
import AddProduct from "../components/AddProduct/AddProduct";
import ViewProduct from "../components/AddProduct/ViewProduct";
import Catogery_List from "../components/Mixing/Catogery_List.jsx";
import { Routes, Route, useRoutes, useNavigate } from "react-router";
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
import ForgotPass from "../components/AuthPages/ForgotPass.jsx";
import CountryStateSelector from "../components/CustomerTabs/text.jsx";
import Curency from "../components/Master/Currency.jsx";
import Add_employee_cato from "../components/Employee/Add_Employee_Category.jsx";
import UpdateProducts from "../components/AddProduct/UpdatePro.jsx";
import AuthContextProvider, { AuthContext } from "../contexts/MyContxt.js";
import About from "../components/About.jsx";
import HorizontalSidebar from "../components/Mixing/Category.jsx";

function AllRoutes() {
  const { loggedUser, logout } = useContext(AuthContext);
  console.log("loggedUser", loggedUser);
  useEffect(() => {
    if (!loggedUser) {
      useNavigate("/auth/login");
    }
  }, []);

  return (
    <div>
      <ToastContainer />
      <Routes>
        {!loggedUser ? (
          <>
            <Route path="/auth/login" element={<LoginPage />} />
            <Route path="/auth/register" element={<SignUpPage />} />
          </>
        ) : (
          <>
            <Route path="/" element={<About />} />
            <Route path="/auth/login" element={<LoginPage />} />
            <Route path="/auth/reset_password" element={<ForgotPass />} />
            <Route path="/product" element={<AddProduct />} />
            <Route path="/update_product" element={<UpdateProducts />} />
            <Route path="/productlist" element={<Product_List />} />
            <Route path="/add_module" element={<ProductModule />} />
            <Route path="/add_category" element={<HorizontalSidebar />} />
            {/* <Route path="/add_category" element={<Add_Category />} /> */}
            <Route path="/category_list" element={<Catogery_List />} />
            <Route path="/category_type" element={<Catogery_Type />} />
            <Route path="/view_product" element={<ViewProduct />} />
            <Route path="/table" element={<SizeWeight />} />
            <Route path="/sz" element={<SizeTypeForm />} />
            <Route path="/employee" element={<AddEmployee />} />
            <Route path="/employeelist" element={<EmployeeList />} />
            <Route path="/add_employee_cato" element={<Add_employee_cato />} />
            <Route path="/add_weight" element={<Add_Stdwt />} />
            <Route path="/store" element={<Store />} />
            <Route path="/color" element={<Color />} />
            <Route path="/country" element={<Country />} />
            <Route path="/state" element={<State />} />
            <Route path="/heel" element={<Heels />} />
            <Route path="/uom" element={<Uom />} />
            <Route path="/designation" element={<Designation />} />
            <Route path="/grpmaster" element={<GroupMaster />} />
            <Route path="/gredient" element={<Ingredients />} />
            <Route path="/forpart" element={<ForePart_category />} />
            <Route path="/curency" element={<Curency />} />
            <Route path="/" element={<Ecommerce />} />

            <Route path="/ecommerce" element={<Ecommerce />} />
            <Route path="/customers" element={<Customers />} />
            <Route path="/edit-customer/:id" element={<EditCustomer />} />
            <Route path="/view-customer/:id" element={<ViewCustomer />} />
            <Route path="/text" element={<CountryStateSelector />} />
            <Route path="/stock_list" element={<StockList />} />
            <Route path="/adjust-stock" element={<AdjustStock />} />
          </>
        )}
      </Routes>

      {/* </ContextProvider> */}
    </div>
  );
}

export default AllRoutes;
