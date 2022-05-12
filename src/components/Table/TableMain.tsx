import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../stores/reducerConfig";
import { deleteUserId, user } from "../../stores/usersSlice/declareUser";
import { createUser, deleteUser, getAllUser } from "../../stores/usersSlice/usersSlice";
import AddUserMain from "../FormInput/AddUserMain";
import Error from "../LoadingError/Error";
import Loading from "../LoadingError/Loading";
import "./style.css";
import TableContent from "./TableContent";
import TableContentEdit from "./TableContentEdit";

function TableMain() {
  const [activeAddUser, setActiveAddUser] = useState(false)
  const [idEdit, setIdEdit] = useState <number|null>(null)
  const dispatch = useDispatch<AppDispatch>();
  const users = useSelector((state: RootState) => state.userList);
  const { user, status, error } = users
  useEffect(() => {
    dispatch(getAllUser());
  }, [dispatch]);

  // delete user
  const handleDeleteUser = async (e: React.SyntheticEvent, id: deleteUserId) => {
    e.preventDefault()
    if (id) {
      try {
        await dispatch(deleteUser(id))
      } catch (err) {
        if (err instanceof Error) {
          console.log(err);
        } else {
          console.log('Unexpected error', err);
        }
      }
    }
    
  }
  // add user
  const handleAddUser = (data: user) => {
    if (data) {
      try {
        dispatch(createUser(data)).unwrap()
      } catch (err) {
        console.error(err)
      }
    }
  }
 
  // get id update
  const handleGetIdUpdate = (e: any, id: number) => {
    e.preventDefault()
    setIdEdit(id)
  }


  // update user
  // const handleUpdateFormChange = (e) => {
  //   e.preventDefault()
  //   const fieldName = e.target.getAttribute("name")
  //   const fieldValue = e.target.value()
  //   const newFormData = {...}
  // }
  const handleSubmit = (data) => {
    console.log("wwwwwwwwwwwww");
    
  }
  return (

    <div className="content-table">
      {status === "loading" ? <Loading /> : status === "fail" ? <Error /> : (<>
        <form onSubmit={handleSubmit}>
          <table>
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
                    {idEdit === user.id ? <TableContentEdit user={user} index={index} handleSubmit={handleSubmit}  /> 
                    : <TableContent handleGetIdUpdate={handleGetIdUpdate} handleDeleteUser={handleDeleteUser} user={user} index={index} /> }
                  </>
                ))}
            </tbody>
          </table>
        </form>
        <div className="btn-add-user">
          <button onClick={() => {
            setActiveAddUser(!activeAddUser)
          }} className="btn btn-primary">Add new user</button>
        </div>
        {activeAddUser && (
        <AddUserMain handleAddUser={handleAddUser} />
        )}
      </>
      )}
    </div>
  );
}

export default TableMain;
