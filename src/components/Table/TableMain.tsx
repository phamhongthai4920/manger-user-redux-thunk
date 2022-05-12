import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import userApi from "../../services/api/userApi";
import { RootState, AppDispatch } from "../../stores/reducerConfig";
import { deleteUser, getAllUser } from "../../stores/usersSlice/usersSlice";
import { deleteUserId, user } from "../../stores/usersSlice/declareUser"
// import {
//   user_list_fail,
//   user_list_request,
//   user_list_success,
// } from "../../stores/usersSlice/usersSlice";
import Error from "../LoadingError/Error";
import Loading from "../LoadingError/Loading";
import "./style.css";
import TableContent from "./TableContent";
import { unwrapResult } from "@reduxjs/toolkit";
// import { selectAllUser, getUserStatus, getUserError } from "../../stores/usersSlice/usersSlice"

function TableMain() {
  const [isReload, setIsReload] = useState(false)
  const dispatch = useDispatch<AppDispatch>();
  const users = useSelector((state: RootState) => state.userList);
  const { user, status, error } = users
  console.log(users)

  useEffect(() => {
    dispatch(getAllUser());
  }, [isReload]);
  const handleDeleteUser = async (e: any, id: deleteUserId) => {
    e.preventDefault()
    try {
      await dispatch(deleteUser(id)).unwrap()
    } catch (err:any) {
      alert(err.message)
    }

  }


  return (

    <div className="content-table">
      {status === "loading" ? <Loading /> : status === "fail" ? <Error /> : (
        <form>
          <table>
            <caption>Employee Manager</caption>
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Username</th>
                <th scope="col">Email</th>
                <th scope="col">Role</th>
                <th scope="col">Active</th>
              </tr>
            </thead>
            <tbody>
              {user &&
                user.map((user: user, index: number) => (
                  <>
                    <TableContent handleDeleteUser={handleDeleteUser} user={user} index={index} />
                  </>
                ))}
            </tbody>
          </table>
        </form>
      )}
    </div>
  );
}

export default TableMain;
