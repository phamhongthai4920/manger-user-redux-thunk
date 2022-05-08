import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faCircleInfo,
  faArrowRightFromBracket,
  faAngleRight,
  faAngleLeft,
} from "@fortawesome/free-solid-svg-icons";
import "./style.css";
import { Link } from "react-router-dom";

function Sidebar() {
  const [isActive, setIsActive] = useState(false);
  const handelToggleMenu = () => setIsActive(!isActive);
  return (
    // <div className="container">
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
            <span className="navigation-title">Employee Information</span>
          </Link>
        </li>
        <li>
          <Link to="/addEmployee" className="navigation-link">
            <span className="navigation-icon">
              <FontAwesomeIcon icon={faCircleInfo} />
            </span>
            <span className="navigation-title">Add Employee</span>
          </Link>
        </li>
        <li>
          <a href="" className="navigation-link">
            <span className="navigation-icon">
              <FontAwesomeIcon icon={faArrowRightFromBracket} />
            </span>
            <span className="navigation-title">Logout</span>
          </a>
        </li>
        <div onClick={handelToggleMenu} className="toggle">
          <FontAwesomeIcon icon={!isActive ? faAngleLeft : faAngleRight} />
        </div>
      </ul>
    </div>
    // </div>
  );
}

export default Sidebar;
