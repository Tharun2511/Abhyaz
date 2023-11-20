import React from "react";

const navbar = () => {
  return (
    <nav className="navbar flex">
      <div className="logodiv">
        <h1 className="logo text-white">
          <strong>Abh</strong>yaz
        </h1>
      </div>

      <div className="menu">
        <li className="menuList">
          <text>Home</text>
        </li>
        <li className="menuList">
          <text>Career</text>
        </li>
        <li className="menuList">
          <text>Blog</text>
        </li>
        <li className="menuList">
          <text>About</text>
        </li>
        <li className="menuList">
          <text>Contact us</text>
        </li>
        <li className="menuList" id="login">
          <text>Login</text>
        </li>
        <li className="menuList " id="register">
          <text>Register</text>
        </li>
      </div>
    </nav>
  );
};

export default navbar;
