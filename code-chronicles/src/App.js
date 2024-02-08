import React from 'react';
import { Route, Routes } from 'react-router-dom'
import './App.css';
import LoginPage from './pages/LoginPage';
import Layout from './Layout';
import RegisterPage from './pages/RegisterPage';
import HomePage from './pages/HomePage';
import { UserContextProvider } from './UserContext';
import CreatePost from './pages/CreatePost';
import PostPage from './pages/PostPage';
import EditPost from './pages/EditPost';
import Post from './Post';


function App() {
  return (
    <UserContextProvider>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path={'/login'} element={<LoginPage />} />
          <Route path={'/register'} element={<RegisterPage />} />
          <Route path={'/create'} element={<CreatePost />} />
          <Route path={'/post/:id'} element={<PostPage />} />
          <Route path="/edit/:id" element={<EditPost />} />
        </Route>
      </Routes>
    </UserContextProvider>
  );
};

export default App;