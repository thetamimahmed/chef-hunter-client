import React from 'react';
import { NavLink } from 'react-router-dom';

const ActiveLink = ({ to, children }) => {
    return (
        <NavLink
            to={to}
            className={({ isActive }) =>
                isActive
                    ? "active text-decoration-none fs-5 secondary-color ms-4 secondary-color-hover"
                    : "text-decoration-none fs-5 secondary-color ms-4 secondary-color-hover"
            }
        >
            {children}
        </NavLink>
    );
};

export default ActiveLink;