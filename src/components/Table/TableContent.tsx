import React, { useState } from "react";
import { deleteUserId } from "../../stores/usersSlice/declareUser";
interface tableContent {
  user: any;
  index: number;
  handleDeleteUser: (e:any, id:deleteUserId) => void
  handleGetIdUpdate: (e: any, id: number) => void
}

function TableContent({ user, index, handleDeleteUser, handleGetIdUpdate }: tableContent) {
  return (
    <tr key={index}>
      <>
      </>
      <td data-label="Due Date">{index}</td>
      <td data-label="Due Date">{user.username}</td>
      <td data-label="Due Date">{user.email}</td>
      <td data-label="Due Date">{user.role}</td>
      <td data-label="Period">
      <button className="btn btn-primary" onClick={(e) => {
          handleDeleteUser(e,user.id,)
      }} type="submit">Delete</button>
        <button className="btn btn-success" onClick={(e) => {
          handleGetIdUpdate(e, user.id,)
        }}>Edit</button>
      </td>
    </tr>
  );
}

export default TableContent;
