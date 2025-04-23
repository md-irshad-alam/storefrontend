import React, { useContext, useState } from "react";
import style from "./AuthStyle/login.module.css";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { IoEyeOutline } from "react-icons/io5";
import { IoEyeOffOutline } from "react-icons/io5";

import { ToastContainer } from "react-toastify";
import { AuthContext } from "../../contexts/MyContxt";

function LoginForm() {
  const [input, setinput] = useState({});
  const [hide, sethide] = useState(false);
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
      toast("invalid input");
    }
  };
  const handlechangepassicon = (event) => {
    sethide(!hide);
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-teal-100 to-white">
      <ToastContainer />
      <div className="w-full max-w-md bg-white/30 backdrop-blur-md rounded-xl shadow-lg p-6 transition-all duration-300 ease-in-out">
        <div className="flex justify-center mb-6">
          <img
            src="/signuplogo.jpg"
            alt="Signup logo"
            className="w-full max-h-44 shadow-md animate-bounce-slow"
          />
        </div>

        <form onSubmit={handlesubmit} className="space-y-5">
          <div>
            <label
              htmlFor="email"
              className="block text-gray-700 font-semibold mb-1"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              onChange={handlechange}
              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-teal-400 focus:outline-none transition duration-300"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-gray-700 font-semibold mb-1"
            >
              Password
            </label>
            <div className="relative flex items-center">
              <input
                type={hide ? "text" : "password"}
                name="password"
                id="password"
                onChange={handlechange}
                className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-teal-400 focus:outline-none transition duration-300"
              />
              <span
                className="absolute right-3 cursor-pointer text-gray-600 hover:text-teal-500 transition"
                onClick={handlechangepassicon}
              >
                {hide ? (
                  <IoEyeOutline size={20} />
                ) : (
                  <IoEyeOffOutline size={20} />
                )}
              </span>
            </div>
          </div>

          <div className="text-center mt-6">
            <button
              type="submit"
              className="w-full bg-teal-500 text-white font-semibold py-2 rounded-md hover:bg-teal-600 transition duration-300"
            >
              Sign in
            </button>

            <p className="mt-4 text-gray-700 text-sm font-medium">
              New user, want to register?{" "}
              <span
                className="text-teal-500 hover:text-teal-600 cursor-pointer"
                onClick={() => history("/auth/register")}
              >
                Click here
              </span>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
