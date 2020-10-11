import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
    const activeStyle= { color:"#2d5ff5",borderBottom: '2px solid #2d5ff5',paddingBottom: '10px', position: 'relative', top: '-1px' };
    return(
        <nav className='navContainer'>
            <NavLink to="/" className='navStyle nav-align' activeStyle={activeStyle} exact>
            Todos
            </NavLink>
            <NavLink to="/users"  className='navStyle' activeStyle={activeStyle}>
            Users
            </NavLink>
        </nav>
    );
};

export default Header;
