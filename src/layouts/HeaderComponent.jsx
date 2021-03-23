import React, { useState } from "react";
import { Menu, Drawer } from "antd";
import logo from "../images/logo_app.png";
import { Link } from "react-router-dom";
import { BarsOutlined } from "@ant-design/icons";

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
  const [mobileHeader, setMobileHeader] = useState(window.innerWidth < 800);
  const [drawerVisible, setDrawerVisible] = useState(false);
  const toggleDrawer = () => {
    setDrawerVisible(!drawerVisible);
  };
  window.addEventListener("resize", () => {
    if (window.innerWidth < 800 && !mobileHeader) {
      setMobileHeader(true);
    }
    if (window.innerWidth >= 800 && mobileHeader) {
      setMobileHeader(false);
    }
  });

  const menu = (
    <Menu
      theme="dark"
      mode={mobileHeader ? "vertical" : "horizontal"}
      defaultSelectedKeys={["1"]}
    >
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
  );
  return (
    <>
      <Link to="/">
        <div style={logoStyle} />
      </Link>

      {!mobileHeader ? (
        menu
      ) : (
        <BarsOutlined
          style={{
            fontSize: 40,
            right: 0,
            position: "absolute",
            marginRight: 10,
            marginTop: 10,
            color: "white",
          }}
          onClick={toggleDrawer}
        />
      )}

      <Drawer
        placement={"left"}
        closable={false}
        onClose={toggleDrawer}
        visible={drawerVisible}
        key={"left"}
        drawerStyle={{ backgroundColor: "#001529" }}
        headerStyle={{ backgroundColor: "#001529" }}
      >
        {menu}
      </Drawer>
    </>
  );
};

export default HeaderComponent;
