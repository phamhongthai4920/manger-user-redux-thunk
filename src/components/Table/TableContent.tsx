import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import userApi from "../../services/api/userApi";
import { deleteUserId } from "../../stores/usersSlice/declareUser";
import { deleteUser } from "../../stores/usersSlice/usersSlice";


interface tableContent {
  user: any;
  index: number;
  handleDeleteUser: (e:any, id:deleteUserId) => void
}

function TableContent({ user, index, handleDeleteUser }: tableContent) {
  const dispatch = useDispatch();
  // const handleDelete = (id: any, e: any) => {
  //   e.preventDefault();
  //   const fetchApiDelete = async () => {
  //     try {
  //       dispatch(user_list_request());

  //       await userApi.remove(id);

  //       dispatch(user_delete_success());
  //     } catch (error) {
  //       const message = "network error";
  //       dispatch(user_list_fail(message));
  //     }
  //   };
  //   fetchApiDelete();
  // };
  // const handleDeleteUser = (e: any, id: deleteUserId) => {
  //   e.preventDefault();
  //  try {
  //    dispatch(deleteUser(id) as any)
  //  } catch(err) {
  //    console.error('Failed to delete the post', err)
  //  }
  // }
  return (
    <tr key={index}>
      <td data-label="Due Date">{index}</td>
      <td data-label="Due Date">{user.username}</td>
      <td data-label="Due Date">{user.email}</td>
      <td data-label="Due Date">{user.role}</td>
      <td data-label="Period">
      <button onClick={(e) => {
          handleDeleteUser(e,user.id,)
      }} type="submit">Delete</button>
        <Link to={`/user/${user.id}/edit`}>Edit</Link>
      </td>
    </tr>
  );
}

export default TableContent;
