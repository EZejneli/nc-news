import React from 'react';
import { Outlet } from 'react-router-dom';
import { Container } from '@mui/material';
import Header from './Header';
import Footer from './Footer';

const Layout = () => {
    return (
        <div className="layout">
            <Header />
            <Container maxWidth={false} disableGutters className="layout-main">
                <Outlet />
            </Container>
            <Footer />
        </div>
    );
};

export default Layout;
