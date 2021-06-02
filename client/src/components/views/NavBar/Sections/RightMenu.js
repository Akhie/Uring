/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Menu } from 'antd';
import axios from 'axios';
import { USER_SERVER } from '../../../Config';
import { withRouter } from 'react-router-dom';
import { useSelector } from "react-redux";
import "./Navbar.css"
function RightMenu(props) {
  const user = useSelector(state => state.user)

  const logoutHandler = () => {
    axios.get(`${USER_SERVER}/logout`).then(response => {
      if (response.status === 200) {
        props.history.push("/login");
      } else {
        alert('Log Out Failed')
      }
    });
  };

  if (user.userData && !user.userData.isAuth) {
    return (
      <Menu class="navcol" style={{background:"#080808"}} mode={props.mode}>
        <Menu.Item>
          <a style={{ color:"white", textDecoration:"none"}} href="/contacts">Contact Us</a>
        </Menu.Item>
        <Menu.Item key="mail">
          <a style={{ color:"white", textDecoration:"none"}} href="/login">Signin</a>
        </Menu.Item>
        <Menu.Item key="app">
          <a style={{ color:"white", textDecoration:"none"}} href="/register">Signup</a>
        </Menu.Item>
      </Menu>
    )
  } else {
    return (
      <Menu class="navcol" style={{background:"#080808"}} mode={props.mode}>
        <Menu.Item key="logout">
          <a style={{ color:"white", textDecoration:"none"}} onClick={logoutHandler}>Logout</a>
        </Menu.Item>
      </Menu>
    )
  }
}

export default withRouter(RightMenu);

