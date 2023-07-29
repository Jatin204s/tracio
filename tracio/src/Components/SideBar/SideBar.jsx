import React from 'react';
import Logo from '../../Assets/Images/logo.png';
import { NavLink } from "react-router-dom";

const SideBar = () => {
    let activeStyle = {
        textDecoration: "underline",
    };

    let activeClassName = "active";
    return (
        <div className='left-sidebar'>
            <div className="text-center p-4">
                <img src={Logo} alt="" />
            </div>
            <nav className='sidebar-menu'>
                <NavLink to="Dashboard">
                    {({ isActive }) => (
                        <span
                            className={
                                isActive ? activeClassName : ""
                            }
                        >
                            DASHBOARD
                        </span>
                    )}
                </NavLink>
            </nav>
        </div>
    )
}

export default SideBar;