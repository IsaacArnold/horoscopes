import React from "react";

const Layout = ({ children }) => {
  return (
    <main className="h-screen bg-primary-color font-Inter text-secondary-color">
      <div className="layout-content">{children}</div>
    </main>
  );
};

export default Layout;
