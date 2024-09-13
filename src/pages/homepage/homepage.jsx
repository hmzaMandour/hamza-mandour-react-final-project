import { Navbar } from '../../layouts/navbar';
import React from 'react';
import { Carousel1 } from './carousel1';
import { Section2 } from './section2';
import { Carousel2 } from './carousel2';
import { Blogsection } from './blogsection';
import { Lastsectionimhome } from './lastsectionimhome';
import { Footer } from '../../layouts/footer';
import { Section3 } from './section3';

export const Homepage = () => {
    return (
        <div className='flex  flex-col gap-[10vh]'>
            <div>
                 <Navbar />
                 <Carousel1 />
           </div>
            <Section2 />
            <Carousel2 />
            <Section3 />
            <Blogsection />
            <Lastsectionimhome />
            <Footer />
        </div>
    );
};

