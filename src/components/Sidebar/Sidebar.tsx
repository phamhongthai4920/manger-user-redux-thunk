import {
  faAngleLeft, faAngleRight, faArrowRightFromBracket, faUser
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AppDispatch, RootState } from "../../features/users/reducerConfig";
import {useDispatch} from "react-redux"
import "./style.css";
import { useSelector } from "react-redux";
import { logoutUser } from "../../features/users/usersSlice/authSlice";

function Sidebar() {
  const navigate = useNavigate()
  const dispatch = useDispatch<AppDispatch>()
  const {user} = useSelector((state: RootState) => state.auth)
  const [isActive, setIsActive] = useState(false);
  const handelToggleMenu = () => setIsActive(!isActive);
  const handleLogout = () => {
    dispatch(logoutUser())
    navigate("/login");
  }
  return (
    <div className={isActive ? "navigation active" : "navigation"}>
      <ul>
        <li>
          <Link to="/" className="navigation-link">
            <span className="navigation-icon">
              <FontAwesomeIcon icon={faUser} />
            </span>
            <span className="navigation-title">Logo</span>
          </Link>
        </li>
        <li>
          <Link to="/" className="navigation-link">
            <span className="navigation-icon">
              <FontAwesomeIcon icon={faUser} />
            </span>
            <span className="navigation-title">Employee List</span>
          </Link>
        </li>
        {/* <li>
          <Link to="/addEmployee" className="navigation-link">
            <span className="navigation-icon">
              <FontAwesomeIcon icon={faCircleInfo} />
            </span>
            <span className="navigation-title">Employee Info </span>
          </Link>
        </li> */}
        <li>
          <Link onClick={handleLogout} to ="#" className="navigation-link">
            <span className="navigation-icon">
              <FontAwesomeIcon icon={faArrowRightFromBracket} />
            </span>
            <span className="navigation-title">Logout</span>
          </Link>
        </li>
        <div onClick={handelToggleMenu} className="toggle">
          <FontAwesomeIcon icon={!isActive ? faAngleLeft : faAngleRight} />
        </div>
      </ul>
    </div>
  );
}

export default Sidebar;
