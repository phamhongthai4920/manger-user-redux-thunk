import React from "react";
import FormAdd from "../components/FormInput/FormAdd";
import Header from "../components/Header/Header";
import Sidebar from "../components/Sidebar/Sidebar";
import Table from "../components/Table/TableMain";

function AddEmployee() {
  return (
    <>
      <Sidebar />
      <div className="main">
        <Header />
        <FormAdd />;
      </div>
    </>
  );
}

export default AddEmployee;
