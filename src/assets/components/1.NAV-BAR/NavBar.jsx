import "./navbar.css";
import React, { useState, useEffect, useRef } from "react";
import { connect, useDispatch } from "react-redux";
import { changeTabActive } from "../../redux/action";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NavBar = ({ activeTab }) => {
  const [listNav] = useState(["home", "skills", "projects", "contacts"]);
  const dispatch = useDispatch();
  const [menuActive, setMenuActive] = useState(false);
  const navRef = useRef(null);

  const changeTab = (value) => {
    dispatch(changeTabActive(value));
    setMenuActive(false); // Close the menu after selecting a tab
  };

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  const handleClickOutside = (event) => {
    if (navRef.current && !navRef.current.contains(event.target)) {
      setMenuActive(false);
    }
  };

  useEffect(() => {
    if (menuActive) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuActive]);

  return (
    <header ref={navRef}>
      <div className="logo">
        <img src="/logo.jpg" alt="Logo" />
      </div>
      <nav className={menuActive ? "active" : ""}>
        {listNav.map((value, key) => (
          <span
            key={key}
            className={activeTab === value ? "active" : ""}
            onClick={() => changeTab(value)}
          >
            {value}
          </span>
        ))}
      </nav>
      <div className="icon-bar" onClick={toggleMenu}>
        <FontAwesomeIcon icon={faBars} />
      </div>
    </header>
  );
};

const mapStateToProps = (state) => ({
  activeTab: state.activeTab,
});

export default connect(mapStateToProps, { changeTabActive })(NavBar);
