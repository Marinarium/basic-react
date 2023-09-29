import React from 'react';
import './styles/App.css';
import { Route, Routes } from 'react-router-dom';
import About from './pages/About';
import Posts from './pages/Posts';
import Layout from './components/Layout';
import Home from './pages/Home';
import Page404 from './pages/Page404';

function App () {
  return (
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/posts" element={<Posts/>}/>
        <Route path="*" element={<Page404/>}/>
      </Route>
    </Routes>
  );
}

export default App;