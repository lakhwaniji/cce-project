import React from "react";
import Nav from "../components/Navigation/Navigation";
import Dashboard from "../components/Dashboard/Dashboard";

const DashboardPage = () => {
  return (
    <>
      <div style={{ height: "100vh" }}>
        <Nav />
        <Dashboard />
        {/* <Footer /> */}
      </div>
    </>
  );
};

export default DashboardPage;
