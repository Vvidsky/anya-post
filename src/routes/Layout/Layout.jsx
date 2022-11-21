import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../../components/nav-bar/nav-bar.component';
import './Layout.css';

export default function Layout() {
    return (
        <div className="d-flex flex-column align-content-between" style={{minHeight: "100vh"}}>
            <NavBar />
            <div className="container-fluid">
                <Outlet />
            </div>
            <footer className="text-center text-white mt-auto">
                {/* Grid container */}
                {/* Copyright */}
                <div className="text-center text-white p-3" style={{ backgroundColor: '#8DA99B' }}>
                    © 2022 Anya Post <a className="github-link" href="https://github.com/Vvidsky/anya-post" target="_blank" rel="noreferrer"> https://github.com/Vvidsky/anya-post</a>
                </div>
                {/* Copyright */}
            </footer>


        </div>


    )
}
