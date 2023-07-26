import * as React from "react";

import Logo from "../img/logo.png";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/authContext";

function Navbar() {
  const links = [
    {
      name: "ART",
      link: "/?cat=art",
    },
    {
      name: "SCIENCE",
      link: "/?cat=science",
    },
    {
      name: "TECHNOLOGY",
      link: "/?cat=technology",
    },
    {
      name: "CINEMA",
      link: "/?cat=cinema",
    },
    {
      name: "DESIGN",
      link: "/?cat=design",
    },
    {
      name: "FOOD",
      link: "/?cat=food",
    },
  ];

  const { currentUser, logout } = useContext(AuthContext);

  return (
    <div className="navbar">
      <div className="container">
        <div className="logo">
          <Link to="/">
            <img src={Logo} alt="logo" />
          </Link>
        </div>

        <div className="links">
          {links.map((link) => (
            <Link className="link" key={link.name} to={link.link}>
              {link.name}
            </Link>
          ))}

          <span>{currentUser?.username}</span>
          {currentUser ? (
            <span onClick={logout}>Logout</span>
          ) : (
            <Link className="link" to="/login">
              Login
            </Link>
          )}
          <span className="write">
            <Link className="link" to="/write">
              Write
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
