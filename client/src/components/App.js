import React, { Suspense } from 'react';
import { Route, Switch } from "react-router-dom";
import Auth from "../hoc/auth";
// pages for this product
import LandingPage from "./views/LandingPage/LandingPage.js";
import LoginPage from "./views/LoginPage/LoginPage.js";
import RegisterPage from "./views/RegisterPage/RegisterPage.js";
import ContactPage from "./views/Contact/contact.js";
import AdminPage from "./views/Admin/Admin.js";
import NavBar from "./views/NavBar/NavBar";
import Footer from "./views/Footer/Footer"
import ServicePage from "./views/ServicePage/ServicePage"
//null   Anyone Can go inside
//true   only logged in user can go inside
//false  logged in user can't go inside

function App() {
  return (
    <Suspense fallback={(<div>Loading...</div>)}>
      <NavBar />
      <div style={{ paddingTop: '65px', minHeight: 'calc(100vh - 80px)' }}>
        <Switch>
          <Route exact path="/" component={Auth(LandingPage, null, false)} />
          <Route exact path="/login" component={Auth(LoginPage, false, false)} />
          <Route exact path="/register" component={Auth(RegisterPage, false, false)} />
          <Route exact path="/contacts" component={Auth(ContactPage, null, false)} />
          <Route exact path="/service/:type" component={Auth(ServicePage, null, false)} />
          <Route exact path="/admin" component={Auth(AdminPage, true, true)} />
        </Switch>
      </div>
      <Footer />
    </Suspense>
  );
}

export default App;
