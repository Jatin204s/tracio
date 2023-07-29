import React from 'react';
import SideBar from '../SideBar/SideBar';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <div className='main-content-box'>
            <SideBar />
            <div className='main-pannel-sec'>
                <Header />
                <div className='content-wrapper'>
                    <Outlet />
                </div>    
            </div>            
        </div>
    )
}

export default Layout;