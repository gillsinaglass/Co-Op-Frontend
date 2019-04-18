import React from "react";
import { Link, NavLink, withRouter } from "react-router-dom";


const Navbar = () => {
  return(
    <div className="ui inverted purple menu" id="navBar">
      <Link to="/" className="item">
        <h2 className="ui header">
          <i className="home icon"></i>
          <div className="content">CompanyName</div>
        </h2>
      </Link>
      <NavLink to="/profile" activeClassName="active item" className="item">
        <h3 className="ui header">Profile</h3>
      </NavLink>
      <NavLink exact to="/discover" activeClassName="active item" className="item">
        <h3 className="ui header">Discover</h3>
      </NavLink>
    </div>
  );
};

const NavBarWithRouter = withRouter(Navbar);

export default NavBarWithRouter;
