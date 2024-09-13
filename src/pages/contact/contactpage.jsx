import { Navbar } from '../../layouts/navbar';
import React from 'react';
import { Contact } from './contact';
import { Footer } from '../../layouts/footer';

export const Contactpage = () => {
    return (
        <div>
            <Navbar />
            <Contact />
            <Footer />
        </div>
    );
};

