import React from 'react';
import { Route, Routes } from 'react-router-dom'
import './App.css';
import LoginPage from './components/pages/LoginPage';
import Layout from './components/Layout';
import RegisterPage from './components/pages/RegisterPage';
import HomePage from './components/pages/HomePage';
import { UserContextProvider } from './components/UserContext';

function App() {
  return (
    <UserContextProvider>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path={'/login'} element={<LoginPage />} />
          <Route path={'/register'} element={<RegisterPage />} />
        </Route>
      </Routes>
    </UserContextProvider>);
};

export default App;