import React from 'react';
import { Navbar } from '../../layouts/navbar';
import { Footer } from '../../layouts/footer';
import { Shop } from './shop';

export const Shoppage = () => {
    return (
        <div>
             <Navbar />
             <Shop />
             <Footer />
        </div>
    );
};

