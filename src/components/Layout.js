import React from 'react';
import Header from './Header';
import Navbar from './Navbar';

function Layout({ children }) {
  return (
    <div className="bg-[#FCFBFA] w-full min-h-screen  md:py-10 px-5 md:px-20">
      <div className="sticky top-0 bg-[#FCFBFA]  pt-4 md:py-6">
        <Header />
        <Navbar />
      </div>
      {children}
    </div>
  );
}

export default Layout;
