import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../../components/nav-bar/nav-bar.component';

export default function Layout() {
    return (
        <div className="d-flex flex-column align-content-between" style={{minHeight: "100vh"}}>
            <NavBar />
            <div className="container-fluid">
                <Outlet />
            </div>
            <footer className="text-center text-white mt-auto" style={{ backgroundColor: '#f1f1f1' }}>
                {/* Grid container */}
                {/* Copyright */}
                <div className="text-center text-dark p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                    © 2022 Anya Post <a className="text-dark" href="https://github.com/Vvidsky/anya-post" target="_blank" rel="noreferrer"> https://github.com/Vvidsky/anya-post</a>
                </div>
                {/* Copyright */}
            </footer>


        </div>


    )
}
