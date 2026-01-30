
import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
    return (
        <div className="p-5 mb-4 bg-light rounded-3 border">
            <div className="container-fluid py-3">
                <span className="btn btn-success mb-3">KIII Project</span>

                <h1 className="display-5 fw-bold">Book Rental</h1>
                <p className="col-md-8 fs-5">
                    Your digital library manager.
                    Browse books, explore authors, and organize data effortlessly.
                </p>

                <div className="d-flex gap-2">
                    <Link to="/books" className="btn btn-success btn-lg me-2">
                        Browse Books
                    </Link>
                    <Link to="/authors" className="btn btn-outline-secondary btn-lg">
                        View Authors
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
