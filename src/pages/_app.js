import React from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

const Home = () => {
  return (
    <div className="flex flex-row">
      <Sidebar />
      <div className="flex-1">
        <Header />
        {/* Page content */}
      </div>
    </div>
  );
};

export default Home;
