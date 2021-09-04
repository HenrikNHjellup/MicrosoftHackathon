import React, {useEffect, useState} from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Navbar, Nav, Image, Badge, Form, FormControl, Button} from 'react-bootstrap';

import "./App.css";
import "./components/headerComponents/Navbar.css";
import Installation from "./components/installationComponents/Installation.jsx";
import Overview from "./components/overviewComponents/Overview.jsx";
import Trade from "./components/tradeComponents/Trade.jsx";
//import Login from "./components/homeComponents/Login.jsx";
import NotFoundPage from "./components/notFoundComponents/NotFound.jsx";

//export var tokenCount = 0;

function addToken() {
  console.log("help")
}

function App() {

  return (
    <Router>
      <Navbar expand="lg" className="Navbar">
        <Navbar.Brand href="/">Shoes for Moose</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/">Overview</Nav.Link>
            <Nav.Link href="/trade">Trade</Nav.Link>
            <Nav.Link href="/login">Login</Nav.Link>
          </Nav>

        </Navbar.Collapse>
      </Navbar>
      <Switch>

          {/*<Route exact path="//:prod_id" component={Product}/>*/}

          <Route exact path="/trade">
            <Trade />
          </Route>

          <Route exact path="/installation">
            <Installation />
          </Route>

          {/*<Route exact path="/login">
            <Login />
            </Route>*/}

          <Route exact path="/">
            <Overview />
          </Route>

          <Route path="*">
            <NotFoundPage />
          </Route>

        </Switch>
    </Router>
  );
}

export default App;
