import React from "react";
import Header from "../components/Header/Header";
import Sidebar from "../components/Sidebar/Sidebar";
import TableMain from "../components/Table/TableMain";

function UserInfo() {
  return (
    <>
      <Sidebar />
      <div className="main">
        <Header />
        <TableMain />
      </div>
    </>
  );
}

export default UserInfo;
