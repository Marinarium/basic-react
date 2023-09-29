import React from 'react';
import { Outlet } from 'react-router-dom';
import Navigation from './UI/Navigation/Navigation';

const Layout = () => {
  return (
    <div>
      <Navigation />
      <main className="main">
        <Outlet/>
      </main>
    </div>
  );
};

export default Layout;