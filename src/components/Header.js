import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <div>
        <NavLink to="/" activeClassName="is-active" exact>
          home
        </NavLink>
        <br />

        <NavLink to="/book" activeClassName="is-active">
          book
        </NavLink>
        <br />

        <NavLink to="/about" activeClassName="is-active">
          about
        </NavLink>
        <br />
        <NavLink to="/test" activeClassName="is-active">
          okey
        </NavLink>
      </div>
    );
  }
}

export default Header;
