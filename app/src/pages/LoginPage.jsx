import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { useAuth } from '../hooks/AuthContext';

export const LoginPage = () => {
  const { login } = useAuth();
  const [userLogin, setUserLogin] = useState('');

  const handleInput = (ev) => {
    const { name, value } = ev.target;
    setUserLogin({ ...userLogin, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    login(userLogin);
  };

  return (
    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
      <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl lg:max-w-xl">
        <h1 className="text-3xl font-semibold text-center text-purple-700 uppercase">
          Sign in
        </h1>
        <form onSubmit={handleSubmit} noValidate className="mt-6">
          <div className="mb-2">
            <label htmlFor="email" className="block text-sm font-semibold text-gray-800">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              required
              value={userLogin.name}
              onChange={handleInput}
              className="block w-full px-4 py-2 mt-2 text-purple-900 bg-white border rounded-md focus:border-purple-800 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="mb-2">
            <label
              htmlFor="password"
              className="block text-sm font-semibold text-gray-800"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              required
              value={userLogin.name}
              onChange={handleInput}
              className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <Link
            className="text-xs text-purple-600 hover:underline"
            to="/ForgetPasswordPage"
          >
            {'Forget Password?'}
          </Link>

          <div className="mt-6">
            <button
              type="submit"
              className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600"
            >
              Login In!
            </button>
          </div>
        </form>
        <Link to="/register">{"Don't have an account? Sign Up"}</Link>
      </div>
    </div>
  );
};
