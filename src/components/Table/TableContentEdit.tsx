import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../stores/reducerConfig';
import { user } from '../../stores/usersSlice/declareUser';
import { createUser, updateUser } from '../../stores/usersSlice/usersSlice';

interface TableContentEdit {
    user: user;
    index: number;
    handleSubmit: (data:boolean) => void
}
function TableContentEdit({ user, index, handleSubmit }: TableContentEdit) {
    const dispatch = useDispatch<AppDispatch>();
    const [username, setUsername] = useState(user.username)
    const [updatedUser, setUpdatedUser] = useState(false)
    const [email, setEmail] = useState(user.email)
    const [role, setRole] = useState(user.role)
    const handleUpdateUser = (e:React.SyntheticEvent) => {
        e.preventDefault()
        if (username && email && role) {
            try {   
                const data:user = {
                id: user.id,
                username,
                email,
                role
            }
            dispatch(updateUser(data))
            } catch (err) {
                console.error(err)
            }   
        }

    }
    return (
        <tr key={index}>
            <td data-label="Due Date">{index}</td>
            <td data-label="Due Date">
                <input type="text" value={username} onChange={(e) => {
                        e.preventDefault();
                        setUsername(e.target.value)
                }}  />
            </td>
            <td data-label="Due Date">
                <input type="text" value={email} onChange={(e) => {
                    e.preventDefault();
                    setEmail(e.target.value)
                }}  />
            </td>
            <td data-label="Due Date">
                <select onChange={(e) => {
                    e.preventDefault();
                    setRole(e.target.value) }}
                     className="form-group__gender" >
                        <option value="Admin">Admin</option>
                        <option value="Employee">Employee</option>
                    </select>
            </td>
            <td data-label="Period">
                <button  className="btn btn-primary" onClick={(e) => {
                    handleUpdateUser(e), handleSubmit(!updatedUser)
                }} type="submit">Save</button>
            </td>
        </tr>
    );
}

export default TableContentEdit;