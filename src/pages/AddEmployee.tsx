import React from "react";
import Header from "../components/Header/Header";
import Sidebar from "../components/Sidebar/Sidebar";
import Table from "../components/Table/TableMain";

function AddEmployee() {
  return (
    <>
      <Sidebar />
      <div className="main">
        <Header />
      </div>
    </>
  );
}

export default AddEmployee;
