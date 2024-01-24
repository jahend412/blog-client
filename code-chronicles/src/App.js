import React from 'react';
import Navbar from './components/NavBar';
import Post from './components/Post';
import './App.css';

export default function App() {
  return (
    <main>
      <Navbar />
      <Post />
      <Post />
      <Post />
    </main>
  );
};

