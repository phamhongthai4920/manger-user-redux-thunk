import React, { useState } from 'react';
import { user } from '../../stores/usersSlice/declareUser';
export interface AddUserProps {
  handleAddUser: (data:user) => void
}
function AddUserMain({ handleAddUser }: AddUserProps) {
const [username, setUsername] = useState<string>("")
const [email, setEmail] = useState<string>("")
const [role, setRole] = useState<string>("")
  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault()
    handleAddUser({username, email, role})
    setEmail("")
    setUsername("")
  }

  return (
    <div className="center">
      <div className="form-wrap">
        <form action="" onSubmit={handleSubmit}>
          <div className="form-group">
            <input type="text" value={username} onChange={(e) => {
              setUsername(e.target.value)
            }} />
            <span>Username</span>
          </div>
          <div className="form-group">
            <input type="text" value={email} name="email" onChange={(e) => {
              setEmail(e.target.value)
            }} />
            <span>Email</span>
          </div>
          <div className="form-group">
            <label htmlFor="">Role</label>
            <select onChange={(e) => {setRole(e.target.value)}} className="form-group__gender" >
              <option value="Admin">Admin</option>
              <option value="Employee">Employee</option>
            </select>
          </div>
          <div className="form-group form-group__btn">
            <button className="btn btn-primary" type="submit">Add</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddUserMain;