import React, { useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer'; // Assuming you have a Footer component

const Layout = ({componentName , children }) => {
  console.log('new component name is ' , componentName);
 
  return (
    <div>
      <Navbar componentName={componentName} />
      <div className="content">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
