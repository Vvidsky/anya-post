import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import logo from '../../assets/Logo.png';

export default function Layout() {
    return (
        <div className="d-flex flex-column align-content-between" style={{minHeight: "100vh"}}>
            <nav className="navbar navbar-expand-lg" style={{backgroundColor: "#8DA99B"}}>
                <div className="container-fluid">
                    <Link className="navbar-brand" href="#"><img src={logo} alt="Logo" style={{height: "80px"}}/></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" href="#">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" href="#">Link</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Dropdown
                                </Link>
                                <ul className="dropdown-menu">
                                    <li><Link className="dropdown-item" href="#">Action</Link></li>
                                    <li><Link className="dropdown-item" href="#">Another action</Link></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><Link className="dropdown-item" href="#">Something else here</Link></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link disabled">Disabled</Link>
                            </li>
                        </ul>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
            <div className="container-fluid">
                <Outlet></Outlet>
            </div>
            <footer className="text-center text-white mt-auto" style={{ backgroundColor: '#f1f1f1' }}>
                {/* Grid container */}
                <div className="container pt-4">
                    {/* Section: Social media */}
                    <section className="mb-4">
                        {/* Facebook */}
                        <a className="btn btn-link btn-floating btn-lg text-dark m-1" href="#!" role="button" data-mdb-ripple-color="dark"><i className="fab fa-facebook-f" /></a>
                        {/* Twitter */}
                        <a className="btn btn-link btn-floating btn-lg text-dark m-1" href="#!" role="button" data-mdb-ripple-color="dark"><i className="fab fa-twitter" /></a>
                        {/* Google */}
                        <a className="btn btn-link btn-floating btn-lg text-dark m-1" href="#!" role="button" data-mdb-ripple-color="dark"><i className="fab fa-google" /></a>
                        {/* Instagram */}
                        <a className="btn btn-link btn-floating btn-lg text-dark m-1" href="#!" role="button" data-mdb-ripple-color="dark"><i className="fab fa-instagram" /></a>
                        {/* Linkedin */}
                        <a className="btn btn-link btn-floating btn-lg text-dark m-1" href="#!" role="button" data-mdb-ripple-color="dark"><i className="fab fa-linkedin" /></a>
                        {/* Github */}
                        <a className="btn btn-link btn-floating btn-lg text-dark m-1" href="#!" role="button" data-mdb-ripple-color="dark"><i className="fab fa-github" /></a>
                    </section>
                    {/* Section: Social media */}
                </div>
                {/* Grid container */}
                {/* Copyright */}
                <div className="text-center text-dark p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                    © 2020 Copyright:
                    <a className="text-dark" href="https://mdbootstrap.com/">MDBootstrap.com</a>
                </div>
                {/* Copyright */}
            </footer>


        </div>


    )
}
