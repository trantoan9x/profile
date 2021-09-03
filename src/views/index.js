import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavBar from "../components/NavBar";
import About from "./About";
import Resume from "./Resume";

export default function Home() {
  return (
    <BrowserRouter>
      <div>
        <NavBar />
        <div id="main-content">
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/resume">
              <Resume />
            </Route>
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}
