import React, { Suspense } from 'react';
import { Route, Switch } from "react-router-dom";
import Auth from "../hoc/auth";
// pages for this product
import LandingPage from "./views/LandingPage/LandingPage.js";
import LoginPage from "./views/LoginPage/LoginPage.js";
import RegisterPage from "./views/RegisterPage/RegisterPage.js";
import ContactPage from "./views/Contact/contact.js";
import AboutUsPage from "./views/Footer/Subsections/about-us.js";
import PrivacyPage from "./views/Footer/Subsections/privacy.js";
import TermsPage from "./views/Footer/Subsections/terms.js";
import AdminPage from "./views/Admin/Admin.js";
import BlogPage from './views/Admin/blog.js';
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
          <Route exact path="/" component={Auth(LandingPage, null)} />
          <Route exact path="/login" component={Auth(LoginPage, false)} />
          <Route exact path="/register" component={Auth(RegisterPage, false)} />
          <Route exact path="/contacts" component={Auth(ContactPage, null)} />
          <Route exact path="/about-us" component={Auth(AboutUsPage, null)} />
          <Route exact path="/privacy" component={Auth(PrivacyPage, null)} />
          <Route exact path="/terms" component={Auth(TermsPage, null)} />
          <Route exact path="/service/:type" component={Auth(ServicePage, null)} />
          <Route exact path="/addProvider" component={Auth(AdminPage, null)} />
          <Route exact path="/blogs" component={Auth(BlogPage, null)} />
        </Switch>
      </div>
      <Footer />
    </Suspense>
  );
}

export default App;
