import React from 'react';
import Navbar from './components/NavBar';
import Post from './components/Post';
import { Route, Routes } from 'react-router-dom'
import './App.css';
import LoginPage from './components/LoginPage';
import Layout from './components/Layout';
import RegisterPage from './components/RegisterPage';

export default function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Post />} />
        <Route path={'/login'} element={<LoginPage />} />
        <Route path={'/register'} element={<RegisterPage />} />
      </Route>
    </Routes>

  );
};

