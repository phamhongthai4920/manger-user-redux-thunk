import React, { useState } from "react";
import { deleteUserId } from "../../features/users/usersSlice/declareUser";
import { useDispatch } from 'react-redux';
import { showEdit } from '../../features/users/usersSlice/showEditSlice';


interface tableContent {
  user: any;
  index: number;
  handleDeleteUser: (e:any, id:deleteUserId) => void
  handleGetIdUpdate: (e: any, id: number) => void
}

function TableContent({ user, index, handleDeleteUser, handleGetIdUpdate }: tableContent) {
  const dispatch = useDispatch()
  return (
    <tr key={index}>
      <td data-label="Due Date">{index}</td>
      <td data-label="Due Date">{user.username}</td>
      <td data-label="Due Date">{user.email}</td>
      <td data-label="Due Date">{user.role}</td>
      <td data-label="Period">
      <button className="btn btn-primary" onClick={(e) => {
          handleDeleteUser(e, user.id,)
      }} type="submit">Delete</button>
        <button className="btn btn-success" onClick={(e) => {
          handleGetIdUpdate(e, user.id)
          dispatch(showEdit())
        }}>Edit</button>
      </td>
    </tr>
  );
}

export default TableContent;
