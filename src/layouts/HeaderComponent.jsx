import React from "react";
import { Menu } from "antd";
import logo from "../images/logo_app.png";
import { Link } from "react-router-dom";

const logoStyle = {
  float: "left",
  width: "30px",
  height: "30px",
  margin: "16px 24px 16px 0",
  backgroundImage: `url(${logo})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "30px",
};
const HeaderComponent = () => {
  return (
    <>
      <Link to="/">
        <div style={logoStyle} />
      </Link>
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
        <Menu.Item key="1">
          <Link to="/">Home</Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Link to="/about">About</Link>
        </Menu.Item>
        <Menu.Item key="3">
          <Link to="/contact">Contact</Link>
        </Menu.Item>
      </Menu>
    </>
  );
};

export default HeaderComponent;
