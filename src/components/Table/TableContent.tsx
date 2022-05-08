import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import userApi from "../../services/api/userApi";
import {
  user_delete_success,
  user_list_fail,
  user_list_request,
} from "../../stores/usersSlice/usersSlice";

interface tableContent {
  user: any;
  index: number;
}

function TableContent({ user, index }: tableContent) {
  const dispatch = useDispatch();
  const handleDelete = (id: any, e: any) => {
    e.preventDefault();
    const fetchApiDelete = async () => {
      try {
        dispatch(user_list_request());

        await userApi.remove(id);

        dispatch(user_delete_success());
      } catch (error) {
        const message = "network error";
        dispatch(user_list_fail(message));
      }
    };
    fetchApiDelete();
  };

  return (
    <tr key={index}>
      <td data-label="Due Date">{user.username}</td>
      <td data-label="Due Date">{user.email}</td>
      <td data-label="Amount">{user.gender}</td>
      <td data-label="Account">{user.phoneNumber}</td>
      <td data-label="Due Date">{user.address}</td>
      <td data-label="Amount">
        {user?.department.map((user: string, index: number) => (
          <span key={index}>{user}</span>
        ))}
      </td>
      <td data-label="Due Date">{user.isAdmin ? "Admin" : "Employee"}</td>
      <td data-label="Period">
        <button onClick={(e) => handleDelete(user.id, e)}>Delete</button>
        <Link to={`/user/${user.id}/edit`}>Edit</Link>
      </td>
    </tr>
  );
}

export default TableContent;
