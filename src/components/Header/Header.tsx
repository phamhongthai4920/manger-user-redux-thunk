import React from "react";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

function Header() {
  return (
    <div className="topbar">
      <div className="search">
        <label htmlFor="">
          <input type="text" placeholder="search..." />
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </label>
      </div>
      <div className="user-avatar">
        <span>ADMIN</span>

        <img
          src="https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png"
          alt=""
        />
      </div>
    </div>
  );
}

export default Header;
