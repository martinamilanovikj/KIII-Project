import React from "react";
import { Outlet, NavLink } from "react-router-dom";

const Layout = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container">
                    <NavLink className="navbar-brand" to="/">
                        Book Rental
                    </NavLink>

                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#nav"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="nav">
                        <ul className="navbar-nav ms-auto gap-1">
                            <li className="nav-item">
                                <NavLink className="btn btn-success nav-link" to="/books">
                                    Books
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="btn btn-success nav-link" to="/authors">
                                    Authors
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="btn btn-success nav-link" to="/countries">
                                    Countries
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="btn btn-success nav-link" to="/login">
                                    Login
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <main className="container py-4">
                <Outlet />
            </main>
        </>
    );
};

export default Layout;
