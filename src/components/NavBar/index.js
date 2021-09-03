import React from "react";
import { AppBar, Button, Toolbar } from "@material-ui/core";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Button component={Link} to="/about">
            About
          </Button>
          <Button component={Link} to="/resume">
            Resume
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
