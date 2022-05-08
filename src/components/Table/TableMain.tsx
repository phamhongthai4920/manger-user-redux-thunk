import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import userApi from "../../services/api/userApi";
import {
  user_list_fail,
  user_list_request,
  user_list_success,
} from "../../stores/usersSlice/usersSlice";
import Error from "../LoadingError/Error";
import Loading from "../LoadingError/Loading";
import "./style.css";
import TableContent from "./TableContent";

function TableMain() {
  const dispatch = useDispatch();
  const listUser = useSelector((state: any) => state.userList);
  const { loading, users, success, error } = listUser;
  useEffect(() => {
    const fetchApiListUser = async () => {
      try {
        dispatch(user_list_request());

        const data = await userApi.getAll();
        dispatch(user_list_success(data));
      } catch (error) {
        const message = "loi khong xac dinh";

        dispatch(user_list_fail(message));
      }
    };
    fetchApiListUser();
  }, [success, dispatch]);

  return (
    <div className="content-table">
      {loading ? (
        <Loading />
      ) : error ? (
        <Error />
      ) : (
        <form>
          <table>
            <caption>Employee Manager</caption>
            <thead>
              <tr>
                <th scope="col">Username</th>
                <th scope="col">Email</th>
                <th scope="col">Gender</th>
                <th scope="col">PhoneNumber</th>
                <th scope="col">Address</th>
                <th scope="col">Department</th>
                <th scope="col">Role</th>
                <th scope="col">Active</th>
              </tr>
            </thead>
            <tbody>
              {users &&
                users.map((user: any, index: number) => (
                  <>
                    <TableContent user={user} index={index} />
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
