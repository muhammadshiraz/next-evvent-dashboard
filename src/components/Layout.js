import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';

const Layout = ({ children }) => {
  return (
    <div className="flex flex-row">
      <Sidebar />
      <div className="flex-1">
        <Header />
        <main className="p-8">{children}</main>
      </div>
    </div>
  );
};

export default Layout;
