import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../features/users/reducerConfig";
import { deleteUserId, user } from "../../features/users/usersSlice/declareUser";
import { createUser, deleteUser, getAllUser } from "../../features/users/usersSlice/usersSlice";
import AddUserMain from "../../components/FormInput/AddUserMain";
import Error from "../../components/LoadingError/Error";
import Loading from "../../components/LoadingError/Loading";
import "./style.css";
import TableContent from "./TableContent";
import TableContentEdit from "./TableContentEdit";
import {useNavigate } from "react-router-dom";

function TableMain() {
  const navigate = useNavigate()
  const [activeAddUser, setActiveAddUser] = useState(false)
  const [LoadPageAfterCreate, setLoadPageAfterCreate] = useState(false)
  const [show, setShow] = useState<boolean>(true)
  const [idEdit, setIdEdit] = useState <number|null>(null)
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(getAllUser());
  }, [dispatch, LoadPageAfterCreate]);

  // delete user
  const { user, status, error } = useSelector((state: RootState) => state.userList);
  const { user: userLogin, status: statusLogin, error: errorLogin } = useSelector((state: RootState) => state.auth)
  const showEdit = useSelector((state: RootState) => state.showEdit);
  const handleDeleteUser = async (e: React.SyntheticEvent, id: any) => {
    console.log(id)

    e.preventDefault()
    if (id) {
      try {
        await dispatch(deleteUser({id}))
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
  const handleAddUser = async (data: user) => {
    if (data) {
      try {
     const statusCreate = await dispatch(createUser(data))
        if (statusCreate.meta.requestStatus === "fulfilled") {
          setLoadPageAfterCreate(!LoadPageAfterCreate)
      }
      } catch (err) {
        if (err instanceof Error) {
          console.log(err);
        } else {
          console.log('Unexpected error', err);
        }
      }
    }
  }
  const handleGetIdUpdate = (e: React.SyntheticEvent, id: number) => {
    e.preventDefault()
    setIdEdit(id)
  }
  const handleEdit = () =>{
    setShow(true);
  }

  // check login user
  console.log({userLogin});   
  useEffect(() => {
    if (!Object.keys(userLogin).length) {
      navigate('/login')
    }
  }, [dispatch, userLogin, navigate])
  return (

    <div className="content-table">
      {status === "loading" ? <Loading /> : status === "fail" ? <Error /> : (<>
        <form>
          <table>
            <thead className={!!user.length ? undefined : "hidden" }>
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
                  <React.Fragment key={index}>
                    {idEdit === user.id && showEdit
                     ? <TableContentEdit user={user} index={index}  /> 
                     : <TableContent handleGetIdUpdate={handleGetIdUpdate} handleDeleteUser={handleDeleteUser} user={user} index={index} /> 
                    }
                  </React.Fragment>
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
