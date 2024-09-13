import { Navbar } from '../../layouts/navbar';
import React from 'react';
import { About } from './about';
import { Footer } from '../../layouts/footer';

export const Aboutpage = () => {
    return (
        <div>
            <Navbar />
            <About />
            <Footer />
        </div>
    );
};

