import React from 'react';
import { Menu } from 'antd';
import "./Navbar.css"
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

function LeftMenu(props) {
  return (
    <Menu class="navcol" style={{background:"#080808", color:"white"}} mode={props.mode}>
    <Menu.Item>

      <a style={{ color:"white", textDecoration:"none"}} href="/addProvider">Register Your Service</a>

    </Menu.Item>
    <Menu.Item>

      <a style={{ color:"white", textDecoration:"none"}} href="/blogs">Blog</a>

    </Menu.Item>
  </Menu>
  )
}

export default LeftMenu